(() => {
  'use strict';
  const dialog = document.getElementById('secret-credits');
  const trigger = document.getElementById('secret-credits-trigger');
  if (!dialog) return;

  let clicks = 0;
  let closeTimeout;

  // Sound synthesis with Web Audio API for retro arcade victory jingle
  function playArcadeVictorySound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') ctx.resume();

      const notes = [
        { freq: 261.63, time: 0.00, dur: 0.10 }, // C4
        { freq: 329.63, time: 0.10, dur: 0.10 }, // E4
        { freq: 392.00, time: 0.20, dur: 0.10 }, // G4
        { freq: 523.25, time: 0.30, dur: 0.12 }, // C5
        { freq: 659.25, time: 0.42, dur: 0.15 }, // E5
        { freq: 783.99, time: 0.58, dur: 0.35 }  // G5 (triumph hold)
      ];

      notes.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);
        
        gain.gain.setValueAtTime(0.18, ctx.currentTime + n.time);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.dur);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + n.time);
        osc.stop(ctx.currentTime + n.time + n.dur);
      });
    } catch (_) {}
  }

  function triggerGlitchFlash() {
    const flash = document.createElement('div');
    flash.className = 'konami-glitch-overlay';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1000);
  }

  function openCredits() {
    if (dialog.open) return;
    clicks = 0;
    clearTimeout(closeTimeout);
    triggerGlitchFlash();
    playArcadeVictorySound();
    dialog.showModal();
    // 15 seconds timer
    closeTimeout = setTimeout(() => dialog.close(), 15000);
  }

  window.triggerEasterEgg = openCredits;

  // 1. Konami Code Sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const konamiSequence = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let konamiIndex = 0;

  window.addEventListener('keydown', (e) => {
    // Avoid triggering while typing in search or input fields
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) {
      konamiIndex = 0;
      return;
    }

    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    const expected = konamiSequence[konamiIndex].length === 1
      ? konamiSequence[konamiIndex].toLowerCase()
      : konamiSequence[konamiIndex];

    if (key === expected) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        openCredits();
      }
    } else {
      // Check if this key restarts the sequence (e.g. hitting ArrowUp again)
      konamiIndex = (key === 'ArrowUp') ? 1 : 0;
    }
  });

  // 2. Also keep 5 rapid clicks on logo for mobile / touch devices
  const logoElements = [trigger, document.querySelector('.logo')].filter(Boolean);
  logoElements.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;
      e.preventDefault();
      clicks++;
      if (clicks >= 5) {
        openCredits();
      }
    });
  });

  const closeBtn = dialog.querySelector('button');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  dialog.addEventListener('close', () => {
    clearTimeout(closeTimeout);
    if (trigger) trigger.focus();
  });
})();
