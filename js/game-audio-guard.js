/* Reviewed local games: play sound only after input in this page, and pause media in hidden tabs. */
(() => {
  'use strict';
  let unlocked = false;
  const requested = new Set();
  const contexts = new Set();
  const suspended = new Set();
  const play = HTMLMediaElement.prototype.play;
  const pause = HTMLMediaElement.prototype.pause;
  function attempt(media) {
    try {
      return Promise.resolve(play.call(media)).catch(error => {
        if (error.name !== 'NotAllowedError') throw error;
        requested.add(media);
      });
    } catch (error) { return Promise.reject(error); }
  }
  HTMLMediaElement.prototype.play = function () {
    requested.add(this);
    if (!unlocked || document.hidden) return Promise.resolve();
    return attempt(this);
  };
  HTMLMediaElement.prototype.pause = function () { requested.delete(this); return pause.call(this); };
  function unlock() {
    unlocked = true;
    if (document.hidden) return;
    for (const media of requested) attempt(media).catch(() => {});
    for (const context of contexts) if (context.state === 'suspended') context.resume().catch(() => {});
  }
  window.addEventListener('pointerdown', unlock, { capture: true });
  window.addEventListener('keydown', unlock, { capture: true });
  for (const key of ['AudioContext', 'webkitAudioContext']) {
    const Native = window[key];
    if (!Native || !Native.prototype) continue;
    const origDecode = Native.prototype.decodeAudioData;
    if (origDecode) {
      Native.prototype.decodeAudioData = function(buffer, success, error) {
        try {
          const res = origDecode.call(this, buffer, success, error);
          if (res && typeof res.catch === 'function') {
            return res.catch(err => {
              if (typeof error === 'function') { try { error(err); } catch(_) {} }
              return null;
            });
          }
          return res;
        } catch(err) {
          if (typeof error === 'function') { try { error(err); } catch(_) {} }
          return Promise.resolve(null);
        }
      };
    }
  }

  for (const key of ['AudioContext', 'webkitAudioContext']) {
    const Native = window[key];
    if (!Native) continue;
    window[key] = class extends Native {
      constructor(...args) { super(...args); contexts.add(this); if (!unlocked || document.hidden) super.suspend().catch(() => {}); }
      resume() { return unlocked && !document.hidden ? super.resume() : Promise.resolve(); }
    };
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      for (const media of requested) pause.call(media);
      for (const context of contexts) if (context.state === 'running') { suspended.add(context); context.suspend().catch(() => {}); }
    } else if (unlocked) {
      for (const media of requested) attempt(media).catch(() => {});
      for (const context of suspended) context.resume().catch(() => {});
      suspended.clear();
    }
  });
})();
