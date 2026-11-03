(() => {
  'use strict';
  if (location.protocol === 'file:') return;
  if (!window.WebAssembly) return;
  const container = document.getElementById('gameContainer');
  try {
    window.gameInstance = UnityLoader.instantiate('gameContainer', 'build/slope.json', {
      onProgress(instance, value) {
        if (value >= 0.95 || value === 1) {
          if (container) container.dataset.ready = 'true';
          try {
            window.parent.postMessage({ type: 'bundix-game-ready', game: 'slope' }, location.origin);
          } catch (e) {}
        }
      }
    });
    if (container) container.dataset.ready = 'true';
  } catch (error) {
    console.error('Slope launch error:', error);
  }
})();
