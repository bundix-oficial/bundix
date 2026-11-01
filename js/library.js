/* PLAYNOVA: local library, shared by the catalog and game pages. */
(() => {
  'use strict';
  const keys = { favorites: 'bundix_favorites', recent: 'bundix_recent_history', collections: 'playnova_collections_v1' };
  const defaults = [{ id: 'friends', name: 'Jogar com amigos', games: [] }, { id: 'classics', name: 'Meus clássicos', games: [] }];
  let catalog = new Map();
  let storageWarning = false;
  const read = (key, fallback) => { try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); } catch { return fallback; } };
  const list = value => Array.isArray(value) ? [...new Set(value.filter(x => typeof x === 'string' && /^[a-z0-9-]+$/i.test(x)))].slice(0, 400) : [];
  let favorites = list(read(keys.favorites, []));
  let recent = list(read(keys.recent, [])).slice(0, 12);
  function cleanCollections(value) {
    if (!Array.isArray(value)) return structuredClone(defaults);
    const seen = new Set();
    return value.filter(x => x && typeof x.id === 'string' && !seen.has(x.id) && /^[a-z0-9-]+$/i.test(x.id) && seen.add(x.id))
      .slice(0, 30).map(x => ({ id: x.id, name: String(x.name || 'Minha lista').trim().slice(0, 60), games: list(x.games) }));
  }
  let collections = cleanCollections(read(keys.collections, defaults));
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { if (!storageWarning) { storageWarning = true; document.dispatchEvent(new CustomEvent('playnova:storage-error')); } return false; }
  }
  function notify(type = 'library') { document.dispatchEvent(new CustomEvent('playnova:library-change', { detail: { type } })); }
  function existing(ids) { return catalog.size ? ids.filter(id => catalog.has(id)) : ids; }
  const api = {
    configure(games) {
      catalog = new Map(games.filter(g => g && typeof g.id === 'string').map(g => [g.id, g]));
      favorites = existing(favorites); recent = existing(recent);
      collections = collections.map(c => ({ ...c, games: existing(c.games) }));
    },
    games: () => [...catalog.values()],
    game: id => catalog.get(id),
    favorites: () => [...favorites],
    recents: () => [...recent],
    collections: () => collections.map(c => ({ ...c, games: [...c.games] })),
    isFavorite: id => favorites.includes(id),
    toggleFavorite(id) {
      if (!catalog.has(id)) return false;
      favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
      save(keys.favorites, favorites); notify(); return favorites.includes(id);
    },
    record(id) {
      if (!catalog.has(id)) return;
      recent = [id, ...recent.filter(x => x !== id)].slice(0, 12); save(keys.recent, recent); notify('history');
    },
    clearHistory() { recent = []; save(keys.recent, []); notify('history'); },
    createCollection(name, gameId) {
      name = String(name).trim().slice(0, 60);
      if (!name) throw new Error('Dê um nome para a lista.');
      if (collections.length >= 30) throw new Error('Você já tem 30 listas. Exclua uma antes de criar outra.');
      const item = { id: 'list-' + (crypto.randomUUID?.() || Date.now().toString(36)), name, games: catalog.has(gameId) ? [gameId] : [] };
      collections.push(item); save(keys.collections, collections); notify(); return item.id;
    },
    renameCollection(id, name) {
      name = String(name).trim().slice(0, 60);
      const item = collections.find(c => c.id === id);
      if (!item || !name) return;
      item.name = name; save(keys.collections, collections); notify();
    },
    removeCollection(id) {
      const item = collections.find(c => c.id === id);
      collections = collections.filter(c => c.id !== id); save(keys.collections, collections); notify(); return item;
    },
    restoreCollection(item) {
      if (!item || collections.some(c => c.id === item.id)) return;
      collections.push({ ...item, games: existing(list(item.games)) }); save(keys.collections, collections); notify();
    },
    toggleCollection(id, gameId) {
      const item = collections.find(c => c.id === id);
      if (!item || !catalog.has(gameId)) return;
      item.games = item.games.includes(gameId) ? item.games.filter(x => x !== gameId) : [...item.games, gameId];
      save(keys.collections, collections); notify();
    },
  };
  window.PlaynovaLibrary = api;
  window.addEventListener('storage', event => {
    if (event.key !== null && !Object.values(keys).includes(event.key)) return;
    favorites = existing(list(read(keys.favorites, []))); recent = existing(list(read(keys.recent, []))).slice(0, 12);
    collections = cleanCollections(read(keys.collections, defaults)).map(c => ({ ...c, games: existing(c.games) })); notify();
  });
})();
