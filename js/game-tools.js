/* PLAYNOVA tools: direct-link history, library actions and contextual problem reports. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const path = decodeURIComponent(location.pathname.slice(root.pathname.length));
  const id = /^games\/([a-z0-9-]+)(?:\/index(?:\.html)?|\/)?$/i.exec(path)?.[1];
  if (!id) return;
  const lib = window.PlaynovaLibrary;
  const button = (text, action) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = text; b.onclick = action; return b; };
  async function setup() {
    let data = window.PlaynovaCatalogIndex;
    if (!data) {
      const response = await fetch(new URL('assets/catalog-index.json', root), { cache: 'no-cache' });
      if (!response.ok) throw new Error('Catalog index unavailable');
      data = await response.json();
    }
    if (!Array.isArray(data.games)) throw new Error('Invalid catalog index');
    const game = data.games.find(g => g.id === id); if (!game) return;
    lib.configure(data.games);
    if (!game.availability || game.availability.status === 'available') lib.record(id);
    if (!window.PlaynovaCommunity) await new Promise(resolve => document.addEventListener('playnova:community-ready', resolve, { once: true }));
    const bar = document.createElement('section'); bar.className = 'pn-game-tools'; bar.setAttribute('aria-label', 'Biblioteca e ajuda deste jogo');
    const note = document.createElement('span'); note.className = 'pn-game-note';
    const controls = [];
    if ((game.features?.players || 1) >= 2) controls.push('2 jogadores');
    if (game.features?.controls?.keyboard) controls.push('Teclado');
    if (game.features?.controls?.touch) controls.push('Toque');
    if (game.features?.controls?.gamepad) controls.push('Aceita controle');
    note.textContent = controls.join(' · ');
    const actions = document.createElement('div'); actions.className = 'pn-game-tool-actions';
    const favorite = button('Favoritar', () => lib.toggleFavorite(id)); favorite.id = 'game-favorite';
    function updateFavorite() { const active = lib.isFavorite(id); favorite.textContent = active ? 'Nos favoritos' : 'Favoritar'; favorite.setAttribute('aria-pressed', String(active)); }
    actions.append(favorite); bar.append(actions);
    if (game.features?.controls?.gamepad) {
      const padNote = document.createElement('p'); padNote.className = 'pn-game-note'; padNote.setAttribute('role', 'status'); padNote.hidden = true;
      const checkPad = button('Verificar controle', () => {
        const connected = Array.from(navigator.getGamepads?.() || []).some(p => p?.connected);
        padNote.textContent = connected ? 'Controle conectado. Clique no jogo e pressione um botão para jogar.' : 'Conecte um controle, pressione um botão nele e tente novamente. O navegador só informa controles depois da primeira interação.';
        padNote.hidden = false;
      }); checkPad.id = 'game-check-controller'; actions.append(checkPad); bar.append(padNote);
    }
    const header = document.querySelector('.game-bar');
    if (header) header.after(bar); else document.body.prepend(bar);
    document.body.dataset.playnovaTools = 'true'; updateFavorite();
    document.addEventListener('playnova:library-change', updateFavorite);
    const frame = document.querySelector('iframe');
    if (location.protocol !== 'file:' && frame?.src && new URL(frame.src).origin === location.origin) {
      try {
        const head = await fetch(frame.src, { method: 'HEAD', cache: 'no-cache' });
        if (!head.ok) {
          const warning = document.createElement('p'); warning.className = 'pn-game-note'; warning.setAttribute('role', 'status');
          warning.textContent = 'Um arquivo deste jogo não foi encontrado. Use “Reportar bug” no canto da tela para avisar.'; bar.append(warning);
        }
      } catch { /* The report button remains available if a network check fails. */ }
    }
  }
  setup().catch(error => { console.warn('[PLAYNOVA] Ferramentas da biblioteca indisponíveis:', error.message); });
})();
