/* PLAYNOVA game-shell.js v2 - Fullscreen + Anti-ad + Anti-redirect */
(function () {
  'use strict';

  /* ── Fullscreen button ── */
  const fullscreenButton =
    document.getElementById('fullscreen') ||
    document.getElementById('btn-fullscreen');
  fullscreenButton?.addEventListener('click', async () => {
    const frame =
      document.getElementById('game-frame') ||
      document.getElementById('online-stage') ||
      document.querySelector('iframe');
    if (!frame) return;
    if (frame.requestFullscreen) {
      try { await frame.requestFullscreen(); }
      catch { fullscreenButton.title = 'O navegador não permitiu tela cheia.'; frame.focus(); }
    } else { frame.focus(); }
  });

  /* ── Block external navigation from iframes (postMessage) ── */
  window.addEventListener('message', (e) => {
    if (!e.data) return;
    const raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
    if (/navigate|redirect|location\.href/i.test(raw)) {
      e.stopImmediatePropagation();
    }
  }, true);

  /* ── Block external link clicks on this page ── */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    if (a.dataset.playnovaOutbound === 'true') {
      try {
        const destination = new URL(a.href, location.href);
        if ((destination.protocol === 'https:' && ['github.com','wa.me'].includes(destination.hostname)) || destination.protocol === 'mailto:') return;
      } catch (_) {}
    }
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#') || href.startsWith('javascript')) return;
    try {
      const url = new URL(href, location.href);
      if (url.hostname !== location.hostname) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    } catch (_) {}
  }, true);

  /* ── Inject anti-ad payload into same-origin iframes ── */
  const ANTI_AD_SCRIPT = `
(function() {
  // Block popups
  window.open = function() { return null; };
  // Block top navigation
  try {
    Object.defineProperty(window, 'top', { get: function() { return window; }, configurable: true });
    Object.defineProperty(window, 'parent', { get: function() { return window; }, configurable: true });
  } catch(e) {}
  // Mock Poki SDK - auto-resolve all breaks
  window.PokiSDK = {
    init: () => Promise.resolve(),
    gameLoadingStart: () => {},
    gameLoadingFinished: () => {},
    gameplayStart: () => {},
    gameplayStop: () => {},
    commercialBreak: (fn) => { if(typeof fn === 'function') fn(); return Promise.resolve(); },
    rewardedBreak: (fn) => { if(typeof fn === 'function') fn(true); return Promise.resolve(true); },
    happyTime: () => {},
    shareableURL: () => Promise.resolve(location.href),
    getURLParam: () => null,
    isAdBlocked: () => true,
  };
  // Mock CrazyGames SDK
  window.CrazyGames = window.CrazyGames || {};
  window.CrazyGames.SDK = {
    init: () => Promise.resolve(),
    game: { sdkGameLoadingStart: ()=>{}, sdkGameLoadingStop: ()=>{}, gameplayStart: ()=>{}, gameplayStop: ()=>{}, happytime: ()=>{} },
    ad: { requestAd: (t, cbs) => { if(cbs && cbs.adFinished) cbs.adFinished(); return Promise.resolve(); }, hasAdblock: true },
    user: { isUserAccountAvailable: false, showAuthPrompt: ()=>Promise.resolve(null) },
    data: {},
    game_settings: {},
  };
  // Mock GameDistribution
  window.GD_OPTIONS = window.GD_OPTIONS || { gameId: 'playnova', onEvent: ()=>{} };
  window.gdsdk = { showAd: ()=>Promise.resolve(), preloadAd: ()=>Promise.resolve() };
  // Remove external home buttons after page settles
  function removeExternalLinks() {
    var killerSelectors = [
      'a[href*="crazygames"]','a[href*="poki.com"]','a[href*="kongregate"]',
      'a[href*="newgrounds"]','a[href*="armorgames"]','a[href*="miniclip"]',
      'a[href*="gamedistribution"]','a[href*="y8.com"]','a[href*="silvergames"]',
      'a[href*="3kh0"]','a[href*="selenite"]','a[href*="unblocked"]',
      'a[href*="github.com"]',
      '.home-btn','.home-button','#home-btn','#homeBtn',
      '.btn-home','.button-home','[class*="home"]','[id*="home"]',
      '.back-to-portal','.portal-link','#portal-btn','.powered-by',
      '.watermark','#watermark','.branding','#branding',
    ];
    killerSelectors.forEach(function(sel) {
      try {
        document.querySelectorAll(sel).forEach(function(el) {
          if (el.tagName === 'A') {
            el.removeAttribute('href');
            el.style.pointerEvents = 'none';
            el.style.cursor = 'default';
          } else {
            el.style.display = 'none';
          }
        });
      } catch(e) {}
    });
  }
  // Run after 1s and 3s to catch dynamically added elements
  setTimeout(removeExternalLinks, 1000);
  setTimeout(removeExternalLinks, 3000);
  // Override window.location.assign and replace for external URLs
  var _assign = window.location.assign.bind(window.location);
  var _replace = window.location.replace.bind(window.location);
  try {
    window.location.assign = function(url) {
      try { if (new URL(url).hostname !== location.hostname) { console.warn('[PLAYNOVA] Blocked assign:', url); return; } } catch(e) {}
      _assign(url);
    };
    window.location.replace = function(url) {
      try { if (new URL(url).hostname !== location.hostname) { console.warn('[PLAYNOVA] Blocked replace:', url); return; } } catch(e) {}
      _replace(url);
    };
  } catch(e) {}
})();
`;

  /* Inject into iframe on load */
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(function(frame) {
    // Flash runners already deny script access, popups and SWF networking.
    // Their CSP deliberately rejects injected inline scripts.
    if (frame.getAttribute('src') === 'runner.html') return;
    frame.addEventListener('load', function() {
      try {
        const iDoc = frame.contentDocument || frame.contentWindow && frame.contentWindow.document;
        if (!iDoc || !iDoc.head) return;
        const s = iDoc.createElement('script');
        s.textContent = ANTI_AD_SCRIPT;
        iDoc.head.insertBefore(s, iDoc.head.firstChild);
      } catch (e) {
        /* Cross-origin - sandbox already handles navigation blocking */
      }
    });
    // Trigger for already-loaded iframes
    try {
      const iDoc = frame.contentDocument;
      if (iDoc && iDoc.readyState === 'complete') {
        const s = iDoc.createElement('script');
        s.textContent = ANTI_AD_SCRIPT;
        iDoc.head.insertBefore(s, iDoc.head.firstChild);
      }
    } catch(e) {}
  });
})();
