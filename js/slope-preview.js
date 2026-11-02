/* Muted local video only: the catalog never starts the Unity game engine. */
(() => {
  'use strict';
  const video = document.getElementById('slope-preview');
  const button = document.getElementById('slope-preview-toggle');
  const wrap = document.getElementById('slope-preview-wrap');
  if (!video || !button || !wrap) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let manualPaused = reduced.matches || Boolean(navigator.connection?.saveData);
  let inView = false;
  let failed = false;
  video.muted = true; video.defaultMuted = true; video.volume = 0;
  function label() {
    const playing = !manualPaused && !failed;
    button.setAttribute('aria-label', playing ? 'Pausar prévia do Slope' : 'Reproduzir prévia do Slope');
    button.setAttribute('aria-pressed', String(!playing));
    button.innerHTML = playing ? '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>' : window.PlaynovaIcons.markup('play');
    wrap.dataset.previewState = failed ? 'unavailable' : playing && inView && !document.hidden ? 'playing' : 'paused';
  }
  function update() {
    label();
    if (manualPaused || !inView || document.hidden || failed) { video.pause(); return; }
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    video.play().catch(error => {
      if (error.name === 'AbortError') return;
      manualPaused = true; label();
    });
  }
  button.addEventListener('click', () => {
    manualPaused = !manualPaused;
    if (!manualPaused) { failed = false; if (!video.getAttribute('src')) video.src = video.dataset.src; }
    update();
  });
  video.addEventListener('error', () => { failed = true; manualPaused = true; label(); });
  document.addEventListener('visibilitychange', update);
  reduced.addEventListener('change', () => { manualPaused = reduced.matches; update(); });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { inView = entries[0].isIntersecting; update(); }, { threshold: 0.15 }).observe(video);
  else { inView = true; update(); }
  label();
})();
