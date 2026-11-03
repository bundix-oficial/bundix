/* Games that fetch WASM/data need HTTP. Keep file previews understandable. */
(() => {
  'use strict';
  const frame = document.querySelector('iframe[data-game-src]');
  if (location.protocol !== 'file:') {
    if (frame) frame.src = frame.dataset.gameSrc;
    return;
  }
  const gamePath = /\/games\/([^/]+)\//.exec(location.pathname);
  const path = gamePath ? 'games/' + encodeURIComponent(gamePath[1]) + '/index.html' : '';
  const box = document.createElement('section');
  box.className = 'local-open-note';
  const text = document.createElement('p');
  text.textContent = gamePath
    ? 'Para iniciar este jogo, abra ABRIR-SITE.bat na pasta do PlayNova. Depois use a janela do site que ele abrir.'
    : 'Para jogar todos os títulos, abra ABRIR-SITE.bat na pasta do PlayNova e use a janela que ele abrir.';
  const link = document.createElement('a');
  link.href = 'http://127.0.0.1:8000/' + path;
  link.textContent = 'Já abri o modo local — continuar';
  box.append(text, link);
  if (frame) frame.replaceWith(box);
  else if (!gamePath) document.querySelector('main')?.prepend(box);
})();
