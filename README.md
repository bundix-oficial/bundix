# PLAYNOVA

Revisão visual local **Cyber Galaxy Clean**. Slogan: **Jogue o futuro.** Veja `IDENTIDADE-PLAYNOVA.md` para estilos, arquivos e instruções. Esta revisão não foi publicada automaticamente.

Portal estático com 21 jogos locais, identidade Cyber Galaxy Clean em azul escuro, roxo suave e ciano, capas próprias e imagens dos jogos, busca sem distinção de acentos, categorias, favoritos locais e escolha aleatória. Sem embeds de provedores com anúncios.

## Abrir

Extraia o ZIP e, no Windows com Python 3 instalado, execute **ABRIR-SITE.bat**. O servidor abre o navegador automaticamente e atende apenas em `127.0.0.1`. Mantenha a janela do servidor aberta. Outra opção é executar `python -m http.server 8000` e abrir `http://localhost:8000`. Também é possível publicar a pasta em hospedagem estática. Não abra os jogos por `file://`: motores 3D e leitura de recursos precisam de HTTP/HTTPS. Não há instalação de pacotes para servir o site. Veja `COMO-ABRIR.txt`.

## Carregamento e créditos escondidos

Todas as capas e a escolha aleatória passam por `play.html?game=<id>`. A tela lê `assets/game-downloads.json`, gerado a partir dos tamanhos reais dos arquivos, e recebe os conteúdos com `fetch` e `ReadableStream`. Mostra bytes recebidos, bytes restantes, arquivos preparados, velocidade média de leitura e estimativa variável de tempo. Os arquivos podem vir do cache do navegador. A barra não avança por temporizador. A navegação para o jogo só acontece após o recebimento completo dos arquivos listados; inicialização do motor é uma etapa posterior. Erros mostram tentativa novamente e há um limite de 45 segundos sem resposta por leitura.

O Slope agora usa arquivos Unity/WebAssembly locais normais e inicializa depois de o container existir. O gzip do pacote antigo foi descomprimido para não exigir cabeçalhos de compressão especiais. O motor tem sua própria indicação de preparação e exibe mensagem em caso de 3D indisponível, falha ou demora excessiva.

Cinco cliques no PLAYNOVA do rodapé abrem por 10 segundos os créditos secretos com **Criador: Davi** e **Tester: Samuel bundinha gulosinha**. Esc e o botão de fechar também encerram a tela. Os créditos das bibliotecas e dos jogos continuam em `credits.html`.

## Jogos adicionados

| Jogo | Origem | Licença |
| --- | --- | --- |
| Tetris | https://github.com/jakesgordon/javascript-tetris | MIT |
| Breakout | https://github.com/jakesgordon/javascript-breakout | MIT; sons CC BY-ND 2.0 |
| Hextris | https://github.com/Hextris/hextris | GPL-3.0 |
| Clumsy Bird | https://github.com/ellisonleao/clumsy-bird | GPL-3.0 |
| Flappy Bird (recriação Floppy Bird) | https://github.com/nebez/floppybird | Apache-2.0 para o código; veja aviso dos assets no README original |

Os códigos e as licenças estão em `games/<jogo>/upstream/`. Créditos públicos em `credits.html`. Preserve esses arquivos ao distribuir. Hextris recebeu remoção de publicidade e telemetria legadas em 30/10/2026; as modificações seguem GPL-3.0. Tetris recebeu ajustes de viewport. As páginas PLAYNOVA carregam os jogos em iframes com navegação de retorno e tela cheia. Tetris usa teclado; o catálogo se adapta a celular, mas cada jogo mantém seus controles próprios.

Os seis jogos anteriores foram mantidos: Slope, Cobrinha, Pong, 2048, Memória e Salto Cibernético. Esta revisão não auditou as licenças dos jogos anteriores.

Moto X3M e Angry Birds Classic foram retirados do catálogo porque os provedores externos exibiam anúncios. Suas páginas locais explicam a indisponibilidade e não carregam nenhum recurso externo. Não são contados como jogos disponíveis. A política CSP das páginas limita scripts, frames e conexões aos arquivos locais para impedir a reintrodução desses anúncios.

## Verificação

`python tools/check-site.py --release-check` verifica o progresso real com conexão limitada no navegador de teste, falha e recuperação do download, jogo inválido, navegação de download até o jogo, uma partida visual do Slope, os cinco cliques e os 10 segundos dos créditos, além do layout de celular. `--school-check` confere o carregamento dos 21 jogos sem conexões externas. A revisão cobre carregamento e interações selecionadas; não equivale a concluir todas as fases nem a testar o hardware da escola.

Mais cinco jogos leves de habilidade e raciocínio: **Torre Maluca** (iamkun/tower_game, MIT), **Pac-Man HTML5** (daleharvey/pacman, licença própria incluída), **Caça aos Diamantes** (jakesgordon/javascript-boulderdash, MIT conforme README), **Duas Cores — 0h h1** (florisluiten/0hh1, MIT) e **Liga-Pontos — BreakLock** (maxwellito/breaklock, MIT). As páginas trazem instruções em português; BreakLock usa o build em português brasileiro. Pac-Man e Caça aos Diamantes também têm botões de toque. Não foi atribuída classificação etária oficial.

`python tools/check-site.py --family-check` testa os cinco novos jogos, inicia partidas, gera capinhas e verifica exceções JavaScript e respostas externas. O script de estatísticas de Tower Building foi removido. Os arquivos do jogo e suas dependências são locais.

Cinco recriações retrô foram incluídas na categoria **Retrô**: Infinite Mario (robertkleffner/mariohtml5), Mario 64 — Clean Room (andrewnakas/sm64-cleanroom), Zelda 30 Year Tribute (scottlininger/zelda30tribute), Bombergirl (MattSkala/html5-bombergirl) e Retro Racer (jakesgordon/javascript-racer). São projetos de fãs ou jogos inspirados em clássicos, identificados como recriações; Retro Racer é inspirado em OutRun e não é GTA. Os avisos específicos estão em `games/<jogo>/PLAYNOVA-NOTICE.md`; os créditos e licenças originais foram preservados.

GTA San Andreas não foi incluído. O projeto OpenSA consultado é experimental e depende dos dados do jogo; o Play!.js é um emulador experimental de PS2 que também exige um arquivo de jogo. Nenhuma ISO ou ROM desses títulos foi adicionada.

`python tools/check-site.py --retro-check` carrega as cinco recriações, inicia Mario 64 e uma partida individual de Bombergirl, captura as telas/capas e verifica exceções JavaScript e respostas de rede externas. No Zelda, o analytics antigo e a dependência de fonte remota foram removidos; o áudio inicial aguarda interação. Infinite Mario usa inicialização nativa no DOM, sem CDN de jQuery. As bibliotecas CreateJS do Bombergirl são locais e mantêm seus avisos.

`python tools/check-site.py` usa o Chrome instalado no caminho Windows declarado no script e o pacote Python `websocket-client`. Verifica catálogo, imagens, busca, favoritos persistidos, filtros, ausência de rolagem horizontal em 390 px, carregamento dos quatro jogos anteriores e início de Flappy Bird. Verifica também que os dois provedores com anúncios foram removidos. Gera capturas em `preview/`. Usa as portas locais 8765 e 9223 e encerra os processos ao terminar. `--capture-covers` gera capinhas por captura dos elementos dos próprios jogos.

## Publicar

Envie `index.html`, `play.html`, `credits.html`, `favicon.ico` e as pastas `assets`, `css`, `js` e `games` para uma hospedagem estática ou GitHub Pages. O pacote **playnova-cyber-galaxy-local.zip** contém o projeto final, as instruções de abertura, o relatório de testes e os fontes/licenças dos jogos importados. Extraia em uma pasta nova. Cópias antigas em `site/` e os ZIPs anteriores não fazem parte desta entrega.

O ZIP para publicação exclui apenas a pasta de artes editáveis `games/zelda-tribute/upstream/sourceFiles`, preservada no projeto local. O código executado, os recursos de `www` e os avisos MIT do Zelda continuam incluídos.

## Uso na escola

Veja `USO-NA-ESCOLA.md`. O filtro Leves deixa de fora os três jogos 3D mais exigentes. O site continua sujeito à liberação do seu endereço e às políticas da escola.


## Amplia??o de novembro de 2026

Mais 20 jogos foram adicionados aos 22 encontrados no cat?logo, totalizando 42. Veja `NOVOS-20-JOGOS.md` para a lista, origens e licen?as. As refer?ncias a 21 jogos nas verifica??es hist?ricas acima descrevem a revis?o anterior. A nova verifica??o est? em `python tools/check-twenty-games.py`.


## Seguran?a ? revis?o de 01/11/2026

A pasta e os ZIPs foram verificados pelo Microsoft Defender, sem detec??es retornadas. A revis?o de c?digo removeu res?duos de analytics do Hextris e do Gridland, incluindo c?pias antigas. Detalhes e limites em `VERIFICACAO-SEGURANCA.md`. Todos os testes de navegador s?o silenciados com `--mute-audio`.
