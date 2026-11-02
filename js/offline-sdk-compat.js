/* Local replacements for advertising hooks: no ads, tracking, online rewards or remote SDKs. */
(() => {
  'use strict';
  const noop = () => {};
  const done = () => Promise.resolve();
  const noAds = {
    init: done, setDebug: noop, gameLoadingStart: noop, gameLoadingStarted: noop,
    gameLoadingFinished: noop, gameLoadingProgress: noop, gameplayStart: noop,
    gameplayStop: noop, gameInteractive: noop, happyTime: noop, muteAd: noop,
    commercialBreak: done, rewardedBreak: () => Promise.resolve(false),
    isAdBlocked: () => true, getURLParam: key => new URLSearchParams(location.search).get(key),
    getLanguage: () => navigator.language?.slice(0, 2) || 'en'
  };
  window.PokiSDK = noAds;
  window.gamebridge = { ready: done, showStart: noop, showPause: noop, showAd: done };
  const direct = callback => { if (typeof callback === 'function') queueMicrotask(callback); return Promise.resolve(); };
  window.PlaynovaNoAds = { start: noop, init: noop, resize: noop, show: noop, hide: noop,
    showAd: direct, showRewardedAd: () => Promise.resolve(false), destroy: noop };
  window.PlaynovaNoAnalytics = { setup: noop, sendScreenView: noop, sendGenericEvent: noop, sendEvent: noop };
  let callback, ready = false, triggered = false;
  const resume = () => {
    if (ready && callback && !triggered) { triggered = true; setTimeout(callback, 0); }
  };
  const splash = { create: done, destroy: noop, setLoadProgress(value) { if (value >= 100) { ready = true; resume(); } },
    setButtonCallback(fn) { callback = fn; resume(); }, setProgress(value) { this.setLoadProgress(value); } };
  window.PlaynovaLocalSplash = { getInstance: () => splash };
})();
