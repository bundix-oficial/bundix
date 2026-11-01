(() => {
  'use strict';
  const host = document.getElementById('flash-container');
  const error = document.getElementById('flash-error');
  const showError = () => { error.textContent = 'Não foi possível abrir este jogo. Volte à página do jogo e use “Reportar problema”.'; error.hidden = false; };
  try {
    const url = new URL(host.dataset.swf);
    if (url.origin !== 'https://raw.githubusercontent.com' || !url.pathname.startsWith('/tw31122007/HTML-Games-V2/')) throw new Error('Invalid source');
    const player = window.RufflePlayer.newest().createPlayer();
    host.append(player);
    player.load({ url: url.href, ...window.RufflePlayer.config }).catch(showError);
  } catch { showError(); }
})();
