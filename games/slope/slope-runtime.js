(() => {
  const title=document.getElementById('slope-status-title');
  const detail=document.getElementById('slope-status-detail');
  const progress=document.getElementById('slope-engine-progress');
  let ready=false;
  function fail(message) {
    if(ready)return;
    clearTimeout(timeout);
    title.textContent='Não foi possível iniciar o Slope';
    detail.textContent=message;
    progress.hidden=true;
    document.getElementById('slope-retry').hidden=false;
    document.getElementById('slope-open-http').hidden=false;
    if(location.protocol!=='file:')window.parent.postMessage({type:'bundix-game-error',game:'slope',message},location.origin);
  }
  const timeout=setTimeout(()=>fail('O motor 3D está demorando para responder. Tente novamente ou escolha um jogo do filtro Leves.'),90000);
  document.getElementById('slope-retry').addEventListener('click',()=>location.reload());
  window.addEventListener('unhandledrejection',event=>fail('Houve uma falha ao preparar os arquivos 3D. Recarregue o jogo.'));
  window.addEventListener('error',event=>fail('Houve uma falha no motor 3D. Tente novamente ou escolha um jogo leve.'));
  if(location.protocol==='file:') {fail('Abra o projeto por um servidor HTTP ou pelo site publicado. O navegador não permite carregar este motor 3D abrindo o HTML diretamente.');return;}
  if(!window.WebAssembly) {fail('Este navegador não oferece o recurso necessário para iniciar o motor 3D. Use um navegador atualizado ou escolha um jogo leve.');return;}
  const probe=document.createElement('canvas');
  let context;
  try {context=probe.getContext('webgl2')||probe.getContext('webgl');} catch {}
  if(!context) {fail('O 3D está indisponível ou desativado neste computador. Use o filtro Leves para escolher outra opção.');return;}
  context.getExtension('WEBGL_lose_context')?.loseContext();
  try {
    window.gameInstance=UnityLoader.instantiate('gameContainer','build/slope.json',{
      onProgress(instance,value) {
        if(typeof value==='number')progress.value=value;
        detail.textContent=value<.9?'Preparando os arquivos e a memória do motor 3D…':'Finalizando a inicialização do jogo…';
        if(value===1) {
          ready=true;clearTimeout(timeout);
          document.getElementById('slope-status').hidden=true;
          document.getElementById('gameContainer').dataset.ready='true';
          window.parent.postMessage({type:'bundix-game-ready',game:'slope'},location.origin);
        }
      }
    });
  } catch(error) {fail('Não foi possível preparar o motor 3D neste navegador. Tente um navegador atualizado ou um jogo leve.');}
})();
