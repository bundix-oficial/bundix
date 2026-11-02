/* One contextual report button, outside the catalog cards. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const relative = decodeURIComponent(location.pathname.slice(root.pathname.length));
  const gameId = /^games\/([a-z0-9-]+)(?:\/index(?:\.html)?|\/)?$/i.exec(relative)?.[1];
  function setup() {
    if (document.getElementById('report-bug')) return;
    const button = document.createElement('button');
    button.type = 'button'; button.id = 'report-bug'; button.className = 'floating-help';
    button.setAttribute('aria-label', gameId ? 'Reportar bug neste jogo' : 'Reportar bug no site');
    button.innerHTML = window.PlaynovaIcons.markup('flag');
    const label = document.createElement('span'); label.textContent = 'Reportar bug'; button.append(label);
    button.onclick = () => window.PlaynovaCommunity.report(gameId);
    document.body.append(button);
    let observedBanner;
    const resize = new ResizeObserver(position);
    function position() {
      const banner = document.getElementById('cookie-banner');
      if (observedBanner !== banner) { resize.disconnect(); if (banner) resize.observe(banner); observedBanner = banner; }
      const bannerBox = banner?.getBoundingClientRect();
      const buttonBox = button.getBoundingClientRect();
      const overlaps = bannerBox && buttonBox.left < bannerBox.right && buttonBox.right > bannerBox.left;
      const obstruction = overlaps ? innerHeight - bannerBox.top : 0;
      button.style.bottom = `${Math.max(16, obstruction + 10)}px`;
    }
    new MutationObserver(position).observe(document.body, { childList: true });
    window.addEventListener('resize', position); position();
  }
  if (window.PlaynovaCommunity) setup();
  else document.addEventListener('playnova:community-ready', setup, { once: true });
})();
