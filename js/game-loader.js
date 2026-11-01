(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const gameId = new URLSearchParams(location.search).get('game');
  let game, controller, run = 0, received = 0, complete = 0, total = 0, started = 0, ticker;
  const fileBytes = new Map();
  const versionKey='bundix_prepared_files_v1';
  let prepared={};
  try {const value=JSON.parse(localStorage.getItem(versionKey)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))prepared=value;} catch {}
  function saveVersions(){try{localStorage.setItem(versionKey,JSON.stringify(prepared));}catch{}}
  const formatBytes = value => value < 1024 ? `${Math.round(value)} B` : value < 1048576 ? `${(value/1024).toLocaleString('pt-BR',{maximumFractionDigits:1})} KB` : `${(value/1048576).toLocaleString('pt-BR',{maximumFractionDigits:1})} MB`;
  function paint() {
    const percent = total ? Math.min(100,received/total*100) : 0;
    $('load-progress').value = percent;
    $('load-percent').textContent = `${Math.floor(percent)}%`;
    $('load-bytes').textContent = `${formatBytes(received)} / ${formatBytes(total)}`;
    $('load-remaining').textContent = formatBytes(Math.max(0,total-received));
    const elapsed = (performance.now()-started)/1000;
    const speed = elapsed > .1 ? received/elapsed : 0;
    $('load-speed').textContent = speed ? `${formatBytes(speed)}/s` : 'Medindo…';
    const seconds = speed ? Math.ceil(Math.max(0,total-received)/speed) : null;
    $('load-eta').textContent = seconds === null ? 'Calculando…' : seconds===0 ? 'Concluído' : seconds<60 ? `Cerca de ${seconds} s` : `Cerca de ${Math.ceil(seconds/60)} min`;
    $('load-count').textContent = `${complete} de ${game.files.length} arquivos preparados`;
  }
  function localURL(path) {
    const url = new URL(path,location.href);
    if (url.origin!==location.origin || !url.pathname.startsWith(new URL('.',location.href).pathname)) throw new Error('Arquivo fora do projeto.');
    return url.href;
  }
  async function timed(promise) {
    let timeout;
    try {return await Promise.race([promise,new Promise((resolve,reject)=>{timeout=setTimeout(()=>reject(new Error('A conexão ficou sem responder por 45 segundos.')),45000);})]);}
    finally {clearTimeout(timeout);}
  }
  async function readFile(file, token) {
    const url = localURL(file.url);
    $('load-file').textContent = file.url.split('/').pop();
    const response = await timed(fetch(url,{signal:controller.signal,cache:file.revision&&prepared[url]===file.revision?'force-cache':'reload'}));
    if (!response.ok) throw new Error(`Não foi possível receber ${file.url.split('/').pop()} (HTTP ${response.status}).`);
    let actual = 0;
    if (response.body && response.body.getReader) {
      const reader = response.body.getReader();
      while (true) {
        const chunk = await timed(reader.read());
        if (token!==run) { await reader.cancel(); return; }
        if (chunk.done) break;
        actual+=chunk.value.byteLength;
        received+=chunk.value.byteLength;
        fileBytes.set(file.url,actual);
        paint();
      }
    } else {
      const data=await timed(response.arrayBuffer());
      if (token!==run)return;
      actual=data.byteLength;received+=actual;fileBytes.set(file.url,actual);
    }
    if (token!==run)return;
    total+=actual-file.size;
    if(file.revision)prepared[url]=file.revision;
    complete++;
    paint();
  }
  async function download() {
    controller?.abort();
    const token=++run;
    controller=new AbortController();
    received=0;complete=0;total=game.files.reduce((sum,file)=>sum+file.size,0);started=performance.now();fileBytes.clear();
    $('load-retry').hidden=true;$('load-direct').hidden=true;
    $('load-phase').textContent='Recebendo arquivos';
    $('load-status').textContent='Preparando os arquivos do jogo no navegador…';
    paint();
    clearInterval(ticker);ticker=setInterval(paint,500);
    let next=0;
    async function worker() { while(next<game.files.length && token===run) await readFile(game.files[next++],token); }
    try {
      await Promise.all(Array.from({length:Math.min(4,game.files.length)},worker));
      if(token!==run)return;
      clearInterval(ticker);paint();
      saveVersions();
      $('load-phase').textContent='Download concluído';
      $('load-status').textContent='Arquivos recebidos. Iniciando o jogo…';
      $('load-file').textContent='O jogo pode levar mais alguns instantes para iniciar.';
      $('load-direct').hidden=false;
      // This handoff is conditional on every real response body being consumed.
      location.replace(localURL(game.page));
    } catch(error) {
      if(token!==run)return;
      ++run;controller.abort();clearInterval(ticker);paint();
      saveVersions();
      $('load-phase').textContent='Carregamento interrompido';
      $('load-status').textContent=error.name==='AbortError'?'Download cancelado.':`${error.message} Verifique a conexão e tente novamente.`;
      $('load-eta').textContent='Pausado';
      $('load-retry').hidden=false;$('load-direct').hidden=false;
    }
  }
  $('load-retry').addEventListener('click',download);
  window.addEventListener('pagehide',()=>{++run;controller?.abort();clearInterval(ticker);});
  (async()=>{
    try {
      if(location.protocol==='file:')throw new Error('Abra pelo endereço do site publicado ou execute ABRIR-SITE.bat na pasta extraída. O carregamento dos jogos precisa de HTTP/HTTPS.');
      const response=await timed(fetch('assets/game-downloads.json',{cache:'no-cache'}));
      if(!response.ok)throw new Error('Não foi possível ler a lista de jogos.');
      const manifest=await response.json();
      if(!Object.prototype.hasOwnProperty.call(manifest,gameId))throw new Error('Jogo não encontrado. Volte ao catálogo e escolha uma capa.');
      game=manifest[gameId];
      document.title=`Carregando ${game.title} — PLAYNOVA`;
      $('game-title').textContent=game.title;
      $('game-cover').src=localURL(game.cover);$('game-cover').alt=game.title;$('game-cover').hidden=false;
      $('load-direct').href=localURL(game.page);
      await download();
    }catch(error){$('load-status').textContent=error.message;$('load-phase').textContent='Não foi possível carregar';$('load-eta').textContent='—';}
  })();
})();
