# Revisão de segurança — 01/11/2026

A revisão foi feita nos arquivos locais do PLAYNOVA. Não é uma garantia de ausência de falhas. A versão pública consultada respondeu HTTP 403; não foi possível confirmar seus cabeçalhos, arquivos ou configuração de hospedagem.

## Resultados

- O Microsoft Defender concluiu a varredura personalizada da pasta do projeto sem registrar novas ameaças na consulta realizada. O player Ruffle baixado depois também foi verificado. Eventos registrados em `preview/defender-current-audit.json` no projeto local.
- A busca estática nos arquivos públicos não identificou os padrões procurados de chaves privadas, tokens de serviços, senhas literais, mineração ou ferramentas conhecidas de analytics. Não examina todo comportamento possível, o histórico do Git nem as contas de hospedagem. Não foram encontrados binários nativos executáveis entre os arquivos públicos analisados.
- As referências a Unity Ads no Slope correspondem a símbolos do motor compilado. As funções de microfone no Mario 64 fazem parte do runtime SDL/Emscripten. Essas ocorrências sozinhas não demonstram coleta ativa nem malware; câmera, microfone e localização agora estão negados pela política de permissões enviada pelo servidor fornecido/Cloudflare.
- O e-mail de contato escolhido pelo responsável fica no código público por ser o destino de um formulário estático. Não há senha SMTP nem token de envio. Relatos só saem pelo aplicativo de e-mail do visitante, após sua confirmação. Listas e favoritos ficam no navegador.

## Correções aplicadas

1. Retiradas permissões desnecessárias de execução dinâmica de scripts no catálogo e nas 218 páginas de jogos. Essas páginas agora aceitam apenas scripts do próprio site, restringem destinos dos frames e negam objetos incorporados e submissões HTML de formulários. Os formulários da interface continuam preparando o e-mail por JavaScript.
2. Criado `_headers` para Cloudflare Pages: proteção contra interpretação incorreta de arquivos, enquadramento por outros sites, envio de referenciador e acesso a câmera, microfone, localização, pagamento, USB e serial. O servidor Python fornecido envia as mesmas proteções básicas. As políticas do portal não controlam o código ou a rede dentro de um frame hospedado em outro domínio.
3. Os 218 frames deixam de delegar reprodução automática e envio de formulários; não enviam referenciador e não recebem permissão para pop-ups, downloads ou navegação da página principal. O sandbox de jogos locais que precisam de scripts e mesma origem não é uma fronteira de isolamento contra código local malicioso.
4. Substituído o script mutável do unpkg nas 59 páginas Flash por uma cópia local do Ruffle 0.7.1 oficial. O arquivo do npm foi conferido por SHA-512; hashes individuais e licenças MIT/Apache estão incluídos. Nos SWFs, acesso a JavaScript, abertura de URLs e operações de rede ficam negados. Reprodução automática desativada, botão do player preservado e tratamento de aba oculta configurado para pausar.
5. O servidor local deixou de servir caminhos privados, `.git`, caches, ISOs, ZIPs e arquivos internos. Também não lista diretórios. Testados GET e HEAD, inclusive caminhos codificados e nulos. Ele continua atendendo somente em 127.0.0.1. Use `servidor.py` ou o arquivo BAT; um servidor genérico aberto na pasta de trabalho não tem esses bloqueios.
6. Corrigidas ferramentas de favoritos, listas e relatos nas URLs sem `index.html`, usadas pelo Cloudflare. As páginas antigas e as rotas terminadas em `/` funcionam.
7. Reforçada a exclusão de arquivos ocultos, chaves e executáveis no empacotamento. ISOs e console continuam privados, fora dos ZIPs. As regras de exclusão só protegem o pacote gerado: não publique a pasta de trabalho inteira.

## Verificações

Os testes da interface verificam filtros, favoritos, listas, histórico, nomes maliciosos tratados como texto, armazenamento indisponível, formulários de e-mail, rotas diretas e layout entre 320 e 1440 pixels. Não enviam e-mails. O navegador de teste fica sem áudio e todos os seus processos são encerrados.

`preview/security-hardening-validation.json` registra as verificações do servidor, políticas e integridade do player. Um teste representativo de Age of War inicializou o Ruffle local com o SWF existente, confirmou ausência de execução automática, início explícito e pausa pelo tratamento de visibilidade. O SWF foi obtido uma vez pelo teste e sua resposta foi fornecida ao navegador por interceptação; outras conexões externas foram bloqueadas. Esse teste não valida todas as partidas ou todos os jogos Flash.

## Limitações e pendências reais

O catálogo contém **149 frames hospedados em raw.githack.com**, **59 runners locais que buscam SWFs em raw.githubusercontent.com** e 10 frames com conteúdo local. Os conteúdos remotos continuam dependendo de terceiros e de referências mutáveis ao ramo `main`. O servidor externo recebe necessariamente a solicitação do visitante. Não é possível afirmar que esses conteúdos não exibam anúncios ou façam rastreamento, nem que tenham licença de redistribuição verificada, apenas por proteger a página externa do portal.

Nenhum dos 218 registros foi removido nesta revisão. Antes de certificar todo o catálogo como local e sem anúncios/rastreamento, ainda é necessário revisar individualmente as fontes, permissões de distribuição e comportamento de rede dos jogos remotos, hospedando apenas cópias autorizadas ou retirando os que não puderem ser verificados. Não houve varredura ofensiva de servidores de terceiros.

Não foram auditados senhas, autenticação em dois fatores, membros, tokens, permissões ou regras das contas GitHub e Cloudflare. Nenhum segredo dessas contas foi solicitado. As proteções de `_headers` só passam a valer na hospedagem depois de publicar esta versão; hosts diferentes podem exigir configuração própria.

Referências técnicas: [Cloudflare Pages — Headers](https://developers.cloudflare.com/pages/configuration/headers/), [MDN — iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe), [Ruffle — configuração](https://ruffle.rs/js-docs/master/interfaces/Config.BaseLoadOptions.html).
