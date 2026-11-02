(() => {
  'use strict';
  const host = document.getElementById('flash-container');
  const error = document.getElementById('flash-error');
  const fail = () => { host.dataset.state = 'error'; error.textContent = 'Este jogo não conseguiu iniciar no player local.'; error.hidden = false; };
  try {
    const url = new URL(host.dataset.swf, location.href);
    const folder = new URL('./', location.href);
    if (url.origin !== location.origin || !url.pathname.startsWith(folder.pathname) || !url.pathname.toLowerCase().endsWith('.swf')) throw new Error('Invalid local game');
    const player = window.RufflePlayer.newest().createPlayer();
    host.append(player);
    player.load({ url: url.href, ...window.RufflePlayer.config }).then(() => { host.dataset.state = 'loaded'; }).catch(fail);
  } catch { fail(); }
})();
