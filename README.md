# PLAYNOVA

Portal estático com 218 jogos no catálogo atual. Esta revisão melhora a descoberta de jogos e os recursos da biblioteca. Os arquivos foram preparados localmente; o endereço do Cloudflare Pages só muda depois de uma publicação.

Atualização da versão local: os 218 cartões foram preservados; **13 jogos estão habilitados e 205 estão em verificação**. Os pendentes abrem uma página de status e não carregam seus códigos nem conexões externas. A escolha aleatória usa apenas jogos habilitados. Veja `DOWNLOADS-STATUS.md` para o progresso dos arquivos, evidências e condições de aprovação.

## Abrir

Com Python 3 instalado, execute `ABRIR-SITE.bat`. Alternativamente, execute `python servidor.py --no-browser --port 8000` nesta pasta e abra o endereço informado. Use o servidor fornecido: ele limita o acesso aos arquivos públicos e bloqueia ISOs, Git, caches e arquivos internos. Jogos e ferramentas precisam de HTTP/HTTPS; evite abrir por `file://`.

## Biblioteca e descoberta

- Busca sem distinção de acentos, categorias e ordenação por nome ou últimos jogados.
- Filtros de dois jogadores, controle, toque e teclado, apenas quando há suporte documentado em `assets/game-features.json`. A ausência de uma marca não significa incompatibilidade. Os filtros podem ser combinados.
- Favoritos acessíveis pela estrela de cada capa. As listas da versão anterior não aparecem na interface simplificada; seus dados locais foram preservados.
- Últimos 12 jogos abertos, inclusive por links diretos. O histórico abre o jogo novamente; o salvamento de progresso depende de cada jogo.
- Favoritos, listas e histórico ficam neste navegador. Não são sincronizados por conta. Limpar os dados do navegador apaga essas preferências. Se o navegador impedir o armazenamento, a interface avisa que as mudanças só valem na sessão.
- Capas locais, fallback para imagens indisponíveis e layout adaptado ao celular.

As capas e a escolha aleatória abrem diretamente `games/<id>/index.html`. O portal não adiciona tela de carregamento nem baixa antecipadamente todos os jogos. Links antigos `play.html?game=<id>` continuam redirecionando. O jogo pode manter a própria tela de inicialização.

A abertura inclui uma prévia local de aproximadamente 20 segundos de gameplay do Slope, sem faixa de áudio, em loop e com botão de pausa. Ela usa um vídeo de cerca de 2 MB, sem iniciar o motor Unity na página do catálogo. A reprodução pausa ao ocultar a aba ou a área do vídeo e respeita a preferência de movimento reduzido e economia de dados.

## Relatar problemas e pedir jogos

Um único botão **Reportar bug**, no canto inferior direito, abre o formulário com o jogo atual selecionado quando aplicável. O pedido de jogos e os filtros adicionais ficam em **Filtros e opções**. Os cartões mostram somente capa, nome, estrela de favorito e disponibilidade.

Os ícones usam SVG embutido, sem depender de fontes ou de um sprite externo. Eles aparecem também ao abrir o HTML diretamente; os motores dos jogos que precisam de leitura de arquivos continuam exigindo o servidor fornecido ou uma hospedagem HTTP/HTTPS.

O destino configurado é `daviricardoribeiro78@gmail.com`, escolhido pelo responsável. O formulário abre o aplicativo de e-mail do visitante com destinatário, assunto e mensagem preenchidos. O visitante deve revisar e enviar por lá; o portal não afirma que algo foi enviado antes dessa etapa. É necessário ter um aplicativo ou serviço associado a links de e-mail no navegador.

O relato contém jogo, endereço da página, descrição, navegador e tamanho da tela. O pedido contém nome, plataforma e os detalhes opcionais fornecidos pelo visitante. A interface não faz POST nem usa tokens ou credenciais.

O responsável pode alterar `js/community-config.js` para outro repositório, e-mail ou WhatsApp. Para e-mail, preencha `email` e use `channel: 'email'`. Para WhatsApp, preencha `whatsapp` com país e número somente em dígitos e use `channel: 'whatsapp'`. Esses modos também exigem que o visitante conclua o envio no aplicativo correspondente. Não coloque senhas ou tokens nesse arquivo público.

## Catálogo, créditos e limites da revisão

Os 218 registros existentes foram preservados. Nesta versão sem conexões externas, apenas os 13 jogos habilitados carregam runtimes locais. As cópias pendentes continuam preservadas privadamente e não entram no ZIP. Os relatórios antigos de 37 jogos ou de 149 frames externos são históricos e não certificam todos os registros atuais.

Preserve as licenças e os avisos originais em `games/`, além de `credits.html`. Os cinco protótipos retirados anteriormente não foram reincluídos.

A emulação de PS2 foi cancelada. `console/` e os arquivos privados de ISO ficam fora dos ZIPs desta revisão. Não publique `private-iso/`, arquivos de jogos comerciais ou o arquivo compactado de GTA fornecido localmente.

## Verificação e pacote

Veja `DOWNLOADS-STATUS.md` para a situação atual e `SEGURANCA-ATUAL.md` para o histórico da revisão anterior. As páginas dos 205 jogos pendentes não carregam frames. O Ruffle local e as cópias em revisão continuam no projeto, mas nenhum jogo Flash pendente é publicado no pacote desta etapa.

`python tools/check-security-hardening.py` confere o bloqueio dos caminhos privados no servidor fornecido, as políticas das páginas e os hashes do player. O arquivo `_headers` adiciona proteções às respostas estáticas quando publicado no Cloudflare Pages. Essas configurações locais não foram confirmadas no endereço público, que respondeu HTTP 403 às consultas desta revisão.

`python tools/check-ui-integrity.py` verifica sintaxe dos scripts da interface, os 218 registros, capas e referências locais das páginas. `python tools/check-ui.py` usa Chrome e o pacote Python `websocket-client` para testar filtros, listas, favoritos, histórico, formulários e layout. O navegador de teste fica sem áudio e é encerrado ao terminar. Os formulários são interceptados: nenhum relato é publicado pelos testes. O teste ocupa temporariamente as portas locais 8765 e 9223.

Os resultados desta revisão estão em `preview/ui-validation.json` e `preview/ui-integrity.json`. Isso não substitui uma auditoria dos motores ou serviços externos.

`python tools/package-site.py` atualiza os hashes dos arquivos da interface, confere a integridade e gera `site.zip` e `playnova-cyber-galaxy-local.zip` com o mesmo conteúdo. O empacotamento usa uma lista explícita de arquivos públicos e exclui console, ISOs, compactados privados, estado do navegador e Git. Para atualizar a hospedagem existente, publique o conteúdo extraído do ZIP no projeto correspondente do Cloudflare Pages.
