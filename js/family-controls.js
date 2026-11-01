const gameFrame = document.getElementById('game-frame');
document.querySelectorAll('[data-key]').forEach(button => {
  const keyCode = Number(button.dataset.key);
  const send = type => {
    const event = new gameFrame.contentWindow.KeyboardEvent(type, {
      keyCode, which:keyCode, bubbles:true,
      key: {37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',78:'n'}[keyCode],
      code: {37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',78:'KeyN'}[keyCode]
    });
    gameFrame.contentDocument.dispatchEvent(event);
  };
  button.addEventListener('pointerdown', event => {
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    send('keydown');
  });
  button.addEventListener('pointerup', () => send('keyup'));
  button.addEventListener('pointercancel', () => send('keyup'));
});
