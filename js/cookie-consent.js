/* PLAYNOVA cookie consent: only the consent preference is stored. No analytics or ad cookies are installed. */
(() => {
  'use strict';
  const COOKIE = 'pn_cookie_consent';
  const VERSION = 'v1';
  const readCookie = () => document.cookie.split('; ').find(row => row.startsWith(`${COOKIE}=`))?.split('=')[1] || '';
  const save = value => {
    const attributes = [`${COOKIE}=${encodeURIComponent(`${VERSION}:${value}`)}`, 'Path=/', 'Max-Age=15552000', 'SameSite=Lax'];
    if (location.protocol === 'https:') attributes.push('Secure');
    document.cookie = attributes.join('; ');
    try { localStorage.setItem(COOKIE, `${VERSION}:${value}`); } catch { /* Cookie remains the source of truth. */ }
  };
  const current = () => readCookie() || (() => { try { return localStorage.getItem(COOKIE) || ''; } catch { return ''; } })();
  const make = (tag, attrs, text) => { const node = document.createElement(tag); for (const [key, value] of Object.entries(attrs || {})) node.setAttribute(key, value); if (text) node.textContent = text; return node; };
  function openSettings() {
    const dialog = document.getElementById('cookie-settings'); if (!dialog) return;
    dialog.showModal();
  }
  function finish(value) {
    save(value); document.getElementById('cookie-banner')?.remove(); document.getElementById('cookie-settings')?.close();
  }
  function setup() {
    if (current().startsWith(`${VERSION}:`)) return;
    const banner = make('section', { id: 'cookie-banner', class: 'cookie-banner', role: 'region', 'aria-labelledby': 'cookie-title' });
    const copy = make('div', { class: 'cookie-copy' });
    const message = make('p'); message.append(document.createTextNode('Usamos somente um cookie essencial para lembrar sua escolha. Não usamos cookies de publicidade ou analytics. Veja a '), make('a', { href: 'privacy.html' }, 'Política de Privacidade'), document.createTextNode('.'));
    copy.append(make('h2', { id: 'cookie-title' }, 'Preferências de cookies'), message);
    const actions = make('div', { class: 'cookie-actions' });
    const settings = make('button', { type: 'button', class: 'cookie-button secondary' }, 'Configurar'); settings.onclick = openSettings;
    const essential = make('button', { type: 'button', class: 'cookie-button secondary' }, 'Só essenciais'); essential.onclick = () => finish('essential');
    const all = make('button', { type: 'button', class: 'cookie-button primary' }, 'Aceitar tudo'); all.onclick = () => finish('all');
    actions.append(settings, essential, all); banner.append(copy, actions); document.body.append(banner);
    const dialog = make('dialog', { id: 'cookie-settings', class: 'cookie-dialog', 'aria-labelledby': 'cookie-settings-title' });
    const close = make('button', { type: 'button', class: 'cookie-close', 'aria-label': 'Fechar configurações' }, '×'); close.onclick = () => dialog.close();
    dialog.append(close, make('h2', { id: 'cookie-settings-title' }, 'Configurar cookies'), make('p', {}, 'O PlayNova não ativa cookies opcionais. Seus favoritos, listas e histórico usam o armazenamento local do navegador e não são enviados ao servidor.'));
    const row = make('label', { class: 'cookie-option' }); const check = make('input', { type: 'checkbox', checked: 'checked', disabled: 'disabled' }); row.append(check, make('span', {}, 'Essencial — lembrar esta preferência'));
    const saveButton = make('button', { type: 'button', class: 'cookie-button primary' }, 'Salvar preferência'); saveButton.onclick = () => finish('essential'); dialog.append(row, saveButton); document.body.append(dialog);
    document.getElementById('reset-cookie-preference')?.addEventListener('click', () => window.PlaynovaCookieConsent.reset());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup, { once: true }); else setup();
  window.PlaynovaCookieConsent = { openSettings, reset: () => { document.cookie = `${COOKIE}=; Path=/; Max-Age=0`; try { localStorage.removeItem(COOKIE); } catch {} location.reload(); } };
})();
