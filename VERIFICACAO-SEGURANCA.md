# Verifica??o de seguran?a ? PLAYNOVA

Data: 01/11/2026. Escopo: a pasta do projeto, a c?pia extra?da antiga e os arquivos ZIP existentes. N?o ? uma varredura de todo o computador.

## Antiv?rus

O Microsoft Defender executou uma verifica??o personalizada completa da pasta. Os eventos 1000 e 1001 confirmam in?cio e conclus?o do mesmo exame, ID `{696BB7EA-0348-4190-B336-05E6638CE5F4}`. O antiv?rus e a prote??o em tempo real estavam ativos, com assinaturas atualizadas em 01/11/2026 (vers?o 1.463.73.0). A consulta ?s detec??es n?o retornou amea?as na pasta. Registro: `preview/defender-scan-events.json`.

## Revis?o dos arquivos

A primeira revis?o est?tica examinou 5.577 arquivos fora dos caches do navegador e do Git, incluindo o conte?do dos ZIPs e arquivos compactados internos. N?o encontrou execut?veis nativos por cabe?alhos PE/ELF, indicadores de minera??o ou padr?es pesquisados de execu??o de comandos ofuscados. Isso complementa o antiv?rus e n?o prova aus?ncia absoluta de malware.

Os scripts BAT/PowerShell encontrados foram revisados: o inicializador abre um servidor restrito a 127.0.0.1; os demais s?o ferramentas de build ou de gera??o/verifica??o de ?udio dos projetos de origem. Nenhum deles foi executado nesta revis?o. As fun??es de acesso ? m?dia presentes no runtime Emscripten e o s?mbolo UnityAdsSettings do motor Unity, isoladamente, n?o demonstram malware nem carregamento de an?ncio; n?o foram removidos s?mbolos que o motor precisa para inicializar.

## Limpeza realizada

- Removido o inicializador legado de Google Analytics do Hextris, inclusive da c?pia extra?da antiga e de `site.zip`.
- Substitu?das as bibliotecas de rastreamento n?o usadas do Gridland por c?digo inerte; removido o analytics do bundle alternativo e sua configura??o remota de jQuery.
- Desativadas duas capturas HTML antigas de pesquisa de provedores de an?ncios. Elas n?o fazem parte dos jogos e agora n?o executam scripts.
- Atualizados os tamanhos e as revis?es dos arquivos nos manifestos de download, inclusive nas c?pias antigas alteradas.
- Aplicado o bloqueio de recursos externos tamb?m ao runtime interno do Mario 64 e ? p?gina de cr?ditos interna do Zelda, incluindo suas c?pias antigas.
- Mantidos os cr?ditos, licen?as e a pol?tica que limita recursos dos jogos ao pr?prio site. As fontes correspondentes das adapta??es seguem inclu?das.

O registro dos arquivos alterados est? em `preview/security-cleanup.json`. O relat?rio est?tico bruto em `preview/security-static.json` registra o estado anterior ? limpeza e inclui achados de rastreamento que j? foram removidos.

## An?ncios e recria??es

N?o foi identificada necessidade de refazer um jogo do cat?logo para remover an?ncios nesta revis?o. Moto X3M e Angry Birds externos continuam fora do cat?logo; suas p?ginas locais n?o carregam os provedores. Caso um t?tulo futuro n?o permita uma vers?o local sem publicidade, uma alternativa ? criar uma implementa??o pr?pria de sua mec?nica, com c?digo e recursos pr?prios, mantendo a identidade independente.

## Testes

`python tools/validate-project.py --zip` verifica os manifestos, refer?ncias locais, a presen?a de CSP em todas as 82 p?ginas HTML ativas e o pacote. `python tools/check-security-runtime.py` verifica os 42 pontos de entrada com as conex?es HTTP externas bloqueadas pelo navegador de teste e registra as tentativas. Todos os navegadores automatizados usam `--mute-audio` e t?m seus processos filhos encerrados ao t?rmino.

Resultado final da auditoria de execu??o: os 42 pontos de entrada passaram, sem exce??es JavaScript, recursos locais ausentes, tentativas HTTP externas ou respostas HTTP externas durante os cen?rios testados.

A revis?o n?o garante aus?ncia absoluta de malware, n?o avalia todos os caminhos poss?veis de cada jogo e n?o valida atualiza??es futuras.
