const fullscreenButton = document.getElementById('fullscreen') || document.getElementById('btn-fullscreen');
fullscreenButton?.addEventListener('click', async () => {
  const frame = document.getElementById('game-frame') || document.getElementById('online-stage') || document.querySelector('iframe');
  if (!frame) return;
  if (frame.requestFullscreen) {
    try {
      await frame.requestFullscreen();
    } catch {
      fullscreenButton.title = 'O navegador não permitiu tela cheia.';
      frame.focus();
    }
  } else {
    frame.focus();
  }
});
