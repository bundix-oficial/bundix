# Retomada dos jogos locais — 01/11/2026

O objetivo é servir os arquivos pelo próprio PlayNova, com as conexões externas dos jogos bloqueadas. Conforme a escolha do responsável, todos os cartões são mantidos e os jogos ainda não aprovados aparecem como indisponíveis.

## Resultado desta etapa

- Catálogo preservado: **218 cartões**.
- Habilitados: **13 jogos locais** — os 10 anteriores e Cubefield, Asteroids e Tower Master, revisados nesta etapa.
- Em verificação: **205 cartões**, sem iframe e sem execução do jogo.
- Retomada de arquivos: **205 dos 208 conjuntos externos** com arquivos conferidos contra o índice do repositório, totalizando 10.699 arquivos de origem no controle de retomada. Isso não significa 205 jogos aprovados ou funcionais offline.
- Reaproveitados 9.720 arquivos que já estavam no disco. Outros 979 foram obtidos e conferidos na área privada de revisão. Nenhum arquivo da ISO de GTA faz parte dessa operação.
- Três fontes não foram aceitas como correspondências seguras: Ninja Dash, Super Smash Flash 2 e Golf Clássico. A pasta `ssf` contém referências ao jogo de 2006, e não foi aceita como SSF2; as outras candidatas identificam Ninja³ e Neon Golf. Não foram substituídos títulos silenciosamente.

## O que foi corrigido

O registro anterior tinha 146 itens marcados como concluídos e 62 erros. Muitos erros eram causados por nomes de pastas diferentes ou por presumir que todos os Flash se chamavam `swf.swf`. A nova retomada usa o índice completo e um commit fixo, valida tamanho e hash de cada arquivo, possui tentativas limitadas e grava o estado a cada jogo. Um arquivo já existente só é reutilizado quando sua integridade confere.

Fonte fixada: `tw31122007/HTML-Games-V2`, commit `ea8f19ccbdb51f60f2279b10e615e648510b768e`. A consulta do GitHub retornou ausência de licença geral; uma cópia nesse repositório não comprova autorização para redistribuir cada jogo.

Na análise inicial, 56 conjuntos tinham referências externas na entrada HTML, 87 tinham referências locais ausentes ou caminhos absolutos do portal de origem, 33 continham indicadores de publicidade, 38 de analytics e 26 de compartilhamento de conexão via Arc. Esses números podem se sobrepor e são indicadores de revisão, não diagnósticos de malware. Foram encontrados ainda 12 arquivos em 10 jogos acima do limite de 25 MiB do Cloudflare Pages. Os jogos pendentes não são incluídos como runtimes no ZIP.

## Jogos revisados nesta etapa

As licenças MIT de Cubefield, HTML5 Asteroids e Tower foram comparadas com os repositórios originais de Christopher Hayes, Doug McInnes e iamkun. Os avisos foram preservados. Foram removidas integrações dos portais espelho com anúncios, Google Analytics, Baidu, chat e compartilhamento de conexão. Os eventos GameAnalytics do Cubefield foram desativados. A inicialização e interações básicas foram testadas em navegador sem áudio e com conexões externas bloqueadas, sem erros de JavaScript ou arquivos locais ausentes nos três testes finais. Não foram concluídas todas as fases.

As evidências e hashes atuais estão em `assets/local-game-approvals.json`. Jogos com dados alterados depois da aprovação precisam de nova revisão. O empacotador confere essas aprovações antes de gerar o ZIP.

## Proteções e pendências anteriores

Os 13 runners Flash que o download anterior havia alterado voltaram a usar configuração local segura, sem reprodução automática e sem acesso do SWF a scripts ou rede. Esses runners permanecem preservados no projeto local; os respectivos jogos ainda pendentes não entram no pacote público.

As três pendências conhecidas de cookies foram corrigidas: links dentro dos jogos apontam para a raiz do projeto, redefinição funciona mesmo depois de salvar uma escolha, e o servidor fornecido atende Privacidade e Termos. Foi corrigida também a leitura do valor codificado do cookie, que podia fazer o aviso reaparecer ao recarregar. Há teste específico de persistência após recarga.

Os cartões indisponíveis podem receber favoritos, listas e relatos, mas não entram na escolha aleatória nem no histórico de jogos iniciados. O catálogo informa quantos estão disponíveis e oferece o filtro “Só disponíveis”. Os 205 cartões pendentes abrem apenas uma página de status.

O servidor fornecido bloqueia o acesso direto aos runtimes pendentes e à área privada. As políticas do servidor e de `_headers` restringem a rede dos jogos à própria origem. Essas políticas precisam acompanhar a publicação no Cloudflare Pages; outros hosts exigem configuração equivalente. Downloads privados e jogos não aprovados ficam fora do ZIP. Não publique a pasta inteira de trabalho.

## Como retomar a revisão

`python tools/resume-game-downloads.py --download` confere a origem fixa, reutiliza arquivos válidos e baixa o que faltar para `private-download-review/`. Não instala pacotes nem executa scripts dos jogos. Os arquivos privados e backups são mantidos fora do Git e do pacote. `download-progress.json` e `download-errors.json` anteriores são preservados; o novo estado é `private-download-review/resume-state.json`.

Depois de verificar licença, fontes, assets, chamadas externas e funcionamento de um jogo, sua aprovação deve ser registrada com os hashes atuais, e o catálogo offline pode ser atualizado. Não basta acrescentar um ID à lista de aprovados.

O Microsoft Defender foi executado tanto nos jogos já baixados quanto nos arquivos novos da área privada, sem novas detecções na consulta realizada. Isso não garante ausência de ameaças. Os relatórios detalhados e cópias originais dos arquivos alterados ficam em `private-download-review/`.

A abertura inicial dos 13 jogos habilitados também foi verificada pelo servidor protegido, sem respostas externas, arquivos locais ausentes ou exceções JavaScript nos testes. Esses testes não completam todas as partidas.

Nenhum commit, push ou deploy externo foi executado nesta retomada. Os ZIPs são uma entrega local para publicação pelo responsável.
