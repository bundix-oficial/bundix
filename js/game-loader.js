// Universal BUNDIX Game Loader & Router
(() => {
  'use strict';
  const id = new URLSearchParams(location.search).get('game');
  if (id && /^[a-z0-9-]+$/i.test(id) && window.PlaynovaCatalogIndex?.games.some(game => game.id === id)) {
    location.replace(`games/${encodeURIComponent(id)}/index.html`);
    return;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const err = document.getElementById('route-error');
    if (err) err.hidden = false;
  }, { once: true });
})();
