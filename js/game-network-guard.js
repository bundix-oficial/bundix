/* Local game copies cannot open windows, send tracking beacons or install service workers. */
(() => {
  'use strict';
  window.open = () => null;
  try { Object.defineProperty(navigator, 'sendBeacon', { value: () => false }); } catch {}
  try {
    if (navigator.serviceWorker) navigator.serviceWorker.register = () => Promise.reject(new DOMException('Service workers disabled for local game copies', 'NotAllowedError'));
  } catch {}
  const map = window.PlaynovaFileMap;
  if (!map) return;
  const tracking = value => /(?:^|\/)(?:gen_204|recordsession\.php|patreon\/grab\.php)(?:\?|$)/i.test(String(value));
  const root = new URL('./', location.href);
  root.pathname = location.pathname.replace(/(\/games\/[^/]+\/game\/).*$/, '$1');
  const local = value => {
    if (typeof value !== 'string') return value;
    try {
      const url = new URL(value, location.href);
      if (!['http:', 'https:'].includes(url.protocol)) return value;
      const knownCdn = /^(?:cdn\.jsdelivr\.net|ajax\.googleapis\.com|code\.jquery\.com|maxcdn\.bootstrapcdn\.com)$/.test(url.hostname);
      if (url.origin !== location.origin && !knownCdn) return value;
      const relative = decodeURIComponent(url.pathname).slice(root.pathname.length).toLowerCase();
      if (url.pathname.startsWith(root.pathname) && map.files[relative]) return value;
      const name = decodeURIComponent(url.pathname).split('/').pop().toLowerCase();
      if (/analytics|adinloader|gamebridge|pk-sdk|poki-sdk|adsbygoogle/.test(name)) return value;
      const target = map.unique[name];
      if (!target) return value;
      const result = new URL(target, root); result.search = url.search;
      return result.href;
    } catch { return value; }
  };
  const fetchOriginal = window.fetch;
  if (fetchOriginal) window.fetch = (input, init) => tracking(input) ? Promise.resolve(new Response('[]', {status:200,headers:{'Content-Type':'application/json'}})) : fetchOriginal.call(window, typeof input === 'string' ? local(input) : input, init);
  const openOriginal = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) { return openOriginal.call(this, method, tracking(url) ? 'data:application/json,%7B%7D' : local(url), ...rest); };
  for (const [type, prop] of [[HTMLScriptElement,'src'],[HTMLImageElement,'src'],[HTMLLinkElement,'href'],[HTMLMediaElement,'src'],[HTMLSourceElement,'src']]) {
    const descriptor = Object.getOwnPropertyDescriptor(type.prototype, prop);
    if (descriptor?.set) Object.defineProperty(type.prototype, prop, { ...descriptor, set(value) { descriptor.set.call(this, local(value)); } });
  }
  const setOriginal = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, value) {
    return setOriginal.call(this, name, ['SCRIPT','IMG','LINK','AUDIO','SOURCE'].includes(this.tagName) && ['src','href'].includes(name.toLowerCase()) ? local(value) : value);
  };
})();
