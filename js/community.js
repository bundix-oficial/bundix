/* Accessible reports, requests and collection dialogs. Submission is completed by the visitor in the configured service. */
(() => {
  'use strict';
  const script = new URL(document.currentScript.src);
  const root = new URL('../', script);
  const $ = id => document.getElementById(id);
  const element = (tag, attrs = {}, text) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
    if (text !== undefined) node.textContent = text;
    return node;
  };
  let collectionGame = null;
  let editId = null;
  let returnFocus = null;
  let toastTimer;
  function toast(message, undo) {
    const box = $('playnova-toast'); if (!box) return;
    clearTimeout(toastTimer); box.replaceChildren(element('span', {}, message));
    if (undo) { const button = element('button', { type: 'button' }, 'Desfazer'); button.onclick = () => { undo(); box.hidden = true; }; box.append(button); }
    box.hidden = false; toastTimer = setTimeout(() => { box.hidden = true; }, undo ? 12000 : 6000);
  }
  function openDialog(dialog) { returnFocus = document.activeElement; dialog.showModal(); }
  function restoreFocus() { if (returnFocus?.isConnected) returnFocus.focus(); else (document.getElementById('search-input') || document.getElementById('manage-collections'))?.focus(); }
  function renderCollections() {
    const lib = window.PlaynovaLibrary;
    const container = $('collection-items'); if (!container || !lib) return;
    const focusedLabel = container.contains(document.activeElement) ? document.activeElement.getAttribute('aria-label') : null;
    container.replaceChildren();
    const items = lib.collections();
    $('collection-dialog-title').textContent = collectionGame ? `Salvar ${lib.game(collectionGame)?.title || 'jogo'} em uma lista` : 'Minhas listas';
    for (const item of items) {
      const row = element('div', { class: 'collection-item' });
      const main = element('label', { class: 'collection-item-name' });
      if (collectionGame) {
        const checkbox = element('input', { type: 'checkbox', 'aria-label': `Salvar em ${item.name}` }); checkbox.checked = item.games.includes(collectionGame);
        checkbox.onchange = () => lib.toggleCollection(item.id, collectionGame); main.append(checkbox);
      }
      const text = element('span'); text.append(element('strong', {}, item.name), element('small', {}, `${item.games.length} ${item.games.length === 1 ? 'jogo' : 'jogos'}`)); main.append(text); row.append(main);
      if (!collectionGame) {
        const view = element('button', { type: 'button', class: 'subtle-button' }, 'Abrir');
        view.onclick = () => { $('collections-dialog').close(); document.dispatchEvent(new CustomEvent('playnova:open-collection', { detail: item.id })); }; row.append(view);
      }
      const rename = element('button', { type: 'button', class: 'icon-text-button', 'aria-label': `Renomear ${item.name}` }, 'Renomear');
      rename.onclick = () => { editId = item.id; $('collection-name').value = item.name; $('collection-save').textContent = 'Salvar nome'; $('collection-cancel').hidden = false; $('collection-name').focus(); }; row.append(rename);
      const remove = element('button', { type: 'button', class: 'icon-text-button danger', 'aria-label': `Excluir ${item.name}` }, 'Excluir');
      remove.onclick = () => { const removed = lib.removeCollection(item.id); toast('Lista excluída.', () => lib.restoreCollection(removed)); }; row.append(remove);
      container.append(row);
    }
    if (!items.length) container.append(element('p', { class: 'dialog-note' }, 'Crie uma lista para organizar seus jogos.'));
    if (focusedLabel) [...container.querySelectorAll('[aria-label]')].find(node => node.getAttribute('aria-label') === focusedLabel)?.focus();
  }
  function openCollections(id = null) {
    collectionGame = id; editId = null; $('collection-form').reset(); $('collection-save').textContent = 'Criar lista'; $('collection-cancel').hidden = true;
    renderCollections(); openDialog($('collections-dialog'));
  }
  function config() { return window.PLAYNOVA_COMMUNITY || {}; }
  function channelDetails() {
    const c = config();
    if (c.channel === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email || '')) return { button: 'Abrir e-mail', note: 'Seu aplicativo de e-mail será aberto. Revise e envie a mensagem por lá.', name: 'e-mail' };
    if (c.channel === 'whatsapp' && /^\d{10,15}$/.test(c.whatsapp || '')) return { button: 'Continuar no WhatsApp', note: 'O WhatsApp será aberto com sua mensagem. Você confirma o envio por lá.', name: 'WhatsApp' };
    if (c.channel === 'github' && /^[\w.-]+\/[\w.-]+$/.test(c.repository || '')) return { button: 'Continuar no GitHub', note: 'Você precisa de uma conta no GitHub. Revise e publique o relato ou pedido lá; ele será público.', name: 'GitHub' };
    return null;
  }
  function destination(title, body) {
    const c = config();
    if (c.channel === 'github') return `https://github.com/${c.repository}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    if (c.channel === 'whatsapp') return `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(title + '\n\n' + body)}`;
    if (c.channel === 'email') return `mailto:${c.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    return null;
  }
  function fillGameOptions(id) {
    const select = $('feedback-game'); select.replaceChildren(new Option('Problema no site', ''));
    const games = window.PlaynovaLibrary?.games() || [];
    for (const g of [...games].sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'))) select.add(new Option(g.title, g.id));
    select.value = games.some(g => g.id === id) ? id : '';
  }
  function openFeedback(kind, id) {
    $('feedback-form').reset(); $('feedback-result').hidden = true; $('feedback-validation').textContent = '';
    $('feedback-kind').value = kind; fillGameOptions(id);
    $('request-fields').disabled = kind !== 'request'; $('request-fields').hidden = kind !== 'request';
    $('report-fields').disabled = kind === 'request'; $('report-fields').hidden = kind === 'request';
    $('feedback-title').textContent = kind === 'request' ? 'Qual jogo você quer por aqui?' : 'Conte o que aconteceu';
    $('feedback-intro').textContent = kind === 'request' ? 'Sua sugestão passa por uma verificação antes de entrar no catálogo.' : 'Escolha o jogo e descreva o problema para ajudar na correção.';
    const channel = channelDetails(); $('feedback-send').textContent = channel?.button || 'Canal de contato em configuração'; $('feedback-send').disabled = !channel;
    $('feedback-channel').textContent = channel?.note || 'O responsável ainda precisa configurar um destino para os relatos.';
    openDialog($('feedback-dialog'));
  }
  function setup() {
    const host = element('div', { id: 'playnova-dialogs' });
    host.innerHTML = `<dialog id="collections-dialog" class="pn-dialog" aria-labelledby="collection-dialog-title"><div class="dialog-heading"><div><p class="eyebrow">SEU ACERVO, DO SEU JEITO</p><h2 id="collection-dialog-title">Minhas listas</h2></div><button type="button" class="dialog-close" data-close="collections-dialog" aria-label="Fechar listas">×</button></div><p class="dialog-note">As listas ficam neste navegador, sem precisar de cadastro.</p><div id="collection-items"></div><form id="collection-form" class="collection-form"><label for="collection-name">Nome da lista</label><div><input id="collection-name" maxlength="60" required placeholder="Ex.: Para jogar no fim de semana" autocomplete="off"><button id="collection-save" type="submit" class="primary-button">Criar lista</button></div><button id="collection-cancel" class="subtle-button" type="button" hidden>Cancelar edição</button><p id="collection-error" class="field-error" role="status"></p></form></dialog>
<dialog id="feedback-dialog" class="pn-dialog" aria-labelledby="feedback-title"><div class="dialog-heading"><div><p class="eyebrow">AJUDE A FAZER A PLAYNOVA</p><h2 id="feedback-title">Conte o que aconteceu</h2></div><button type="button" class="dialog-close" data-close="feedback-dialog" aria-label="Fechar formulário">×</button></div><p id="feedback-intro" class="dialog-note"></p><form id="feedback-form"><input id="feedback-kind" type="hidden"><fieldset id="report-fields"><label for="feedback-game">Onde aconteceu?</label><select id="feedback-game"></select><label for="feedback-problem">Tipo de problema</label><select id="feedback-problem"><option>O jogo não abre</option><option>Tela preta ou travamento</option><option>Anúncio ou redirecionamento</option><option>Problema nos controles</option><option>Problema no som</option><option>Outro problema</option></select><label for="feedback-details">O que aconteceu?</label><textarea id="feedback-details" rows="4" minlength="10" maxlength="1200" required placeholder="Conte o que você tentou e o que apareceu na tela."></textarea><p class="dialog-note">O relato inclui o nome do jogo e informações básicas do navegador.</p></fieldset><fieldset id="request-fields" hidden disabled><label for="request-name">Nome do jogo</label><input id="request-name" maxlength="100" required autocomplete="off" placeholder="Qual jogo está faltando?"><label for="request-platform">Onde você jogava?</label><select id="request-platform"><option>Navegador / Flash</option><option>Computador</option><option>Console</option><option>Celular</option><option>Não lembro</option></select><label for="request-link">Link do jogo ou do criador <span class="optional">(opcional)</span></label><input id="request-link" type="url" maxlength="300" placeholder="https://"><label for="request-details">O que você gosta nele? <span class="optional">(opcional)</span></label><textarea id="request-details" rows="3" maxlength="800"></textarea></fieldset><p id="feedback-validation" class="field-error" role="status"></p><p id="feedback-channel" class="channel-note"></p><button id="feedback-send" type="submit" class="primary-button"></button><div id="feedback-result" class="feedback-result" hidden><p>Finalize o envio na página ou no aplicativo que foi aberto.</p><a id="feedback-open-again" target="_blank" rel="noopener noreferrer" data-playnova-outbound="true">Abrir novamente</a></div></form></dialog><div id="playnova-toast" class="pn-toast" role="status" aria-live="polite" hidden></div>`;
    document.body.append(host);
    for (const button of host.querySelectorAll('[data-close]')) button.onclick = () => $(button.dataset.close).close();
    for (const dialog of host.querySelectorAll('dialog')) {
      dialog.addEventListener('close', restoreFocus);
      dialog.addEventListener('click', event => {
        const rect = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
      });
    }
    $('collection-form').onsubmit = event => {
      event.preventDefault(); const lib = window.PlaynovaLibrary;
      try { if (editId) lib.renameCollection(editId, $('collection-name').value); else lib.createCollection($('collection-name').value, collectionGame);
        editId = null; $('collection-form').reset(); $('collection-save').textContent = 'Criar lista'; $('collection-cancel').hidden = true; $('collection-error').textContent = ''; renderCollections();
      } catch (error) { $('collection-error').textContent = error.message; }
    };
    $('collection-cancel').onclick = () => { editId = null; $('collection-form').reset(); $('collection-save').textContent = 'Criar lista'; $('collection-cancel').hidden = true; };
    $('feedback-form').onsubmit = event => {
      event.preventDefault(); if (!$('feedback-form').reportValidity()) return;
      const channel = channelDetails(); if (!channel) return;
      let title, body;
      if ($('feedback-kind').value === 'request') {
        const name = $('request-name').value.trim(); if (!name) return;
        const link = $('request-link').value.trim();
        if (link) { try { const parsed = new URL(link); if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error(); } catch { $('feedback-validation').textContent = 'Use um link http ou https válido, sem dados de login.'; return; } }
        title = `[Pedido de jogo] ${name}`;
        body = `Jogo sugerido: ${name}\nPlataforma: ${$('request-platform').value}\nLink: ${link || 'Não informado'}\n\nPor que gostaria de jogar:\n${$('request-details').value.trim() || 'Não informado'}`;
      } else {
        const game = window.PlaynovaLibrary?.game($('feedback-game').value);
        const details = $('feedback-details').value.trim(); if (details.length < 10) { $('feedback-validation').textContent = 'Descreva o problema com pelo menos 10 caracteres.'; return; }
        title = `[Problema] ${game?.title || 'Site'} — ${$('feedback-problem').value}`;
        const page = game ? new URL(`games/${encodeURIComponent(game.id)}/index.html`, root).href : root.href;
        body = `Jogo: ${game?.title || 'Site PLAYNOVA'}\nID: ${game?.id || 'site'}\nTipo: ${$('feedback-problem').value}\nEndereço: ${page}\n\nO que aconteceu:\n${details}\n\nNavegador: ${navigator.userAgent.slice(0, 300)}\nTela: ${innerWidth} × ${innerHeight}`;
      }
      const url = destination(title, body); if (!url) return;
      $('feedback-validation').textContent = ''; $('feedback-open-again').href = url; $('feedback-result').hidden = false;
      window.open(url, '_blank', 'noopener,noreferrer');
    };
    document.addEventListener('playnova:library-change', () => { if ($('collections-dialog').open) renderCollections(); });
    document.addEventListener('playnova:storage-error', () => toast('Este navegador não permitiu salvar. As mudanças valem só nesta sessão.'));
    window.PlaynovaCommunity = { report: id => openFeedback('report', id), request: () => openFeedback('request'), collections: openCollections, toast };
    document.dispatchEvent(new CustomEvent('playnova:community-ready'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup, { once: true }); else setup();
})();
