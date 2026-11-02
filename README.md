# PLAYNOVA

218 títulos no catálogo: 167 com abertura inicial verificada, 48 cópias habilitadas para tentar jogar com falhas ou resultado inconclusivo, e três sem arquivos correspondentes.

Execute **ABRIR-SITE.bat** com Python 3 instalado. Alguns motores precisam de HTTP; abrir index.html diretamente permite ver o catálogo, mas não garante todos os jogos. O servidor atende somente em 127.0.0.1 e protege arquivos privados.

Busca, capas locais, favoritos, listas, histórico, filtros e escolha aleatória continuam disponíveis. A escolha aleatória usa somente os jogos com abertura verificada. Não existe pré-download do portal. A prévia do Slope é um vídeo local silencioso, sem executar o jogo na página inicial. O botão Reportar bug prepara um e-mail que o visitante revisa e envia no próprio aplicativo.

## Verificação e conexões

Os 215 títulos com arquivos estão habilitados. O rótulo “Com falhas” distingue cópias problemáticas das verificadas. Ninja Dash, Super Smash Flash 2 e Golf Clássico não têm cópias correspondentes completas; não substituímos por outros jogos com nomes parecidos.

Foi feita varredura com Microsoft Defender, inspeção de padrões suspeitos e testes silenciosos de abertura e entrada básica. Isso não é uma partida completa nem certificação de segurança. Os resultados de abertura estão em assets/quick-game-checks.json. Algumas cópias consistem apenas em links antigos, têm dependências ausentes ou não concluem o teste.

Publicidade e rastreamento continuam restritos pelas políticas do site. As conexões regionais do BasketBros estão explicitamente permitidas em assets/game-network-policy.json, conforme consentimento do proprietário. Os demais jogos preservam a restrição local. Sites oficiais externos são apresentados como links explícitos e têm suas próprias práticas; não afirmamos controlar anúncios em outro site.

## Fontes e créditos

credits.html e assets/game-sources.json preservam fontes e avisos. A revisão técnica não confirmou uma nova autorização de redistribuição de todo o antigo espelho. Alguns títulos ainda têm origem/licença incompletas; os avisos existentes foram preservados. FNAF continua como diretório de links oficiais externos, conforme escolha do proprietário, e não conta como jogos locais hospedados.

## Pacote e publicação

Use site.zip ou playnova-cyber-galaxy-local.zip. Nunca publique a pasta de trabalho inteira. O empacotador exclui ISOs, dados privados, caches, executáveis e originais grandes substituídos por partes locais. As partes de 20 MiB são reunidas no navegador, preservando os bytes originais; a hospedagem deve permitir esses arquivos.

python tools/package-site.py atualiza índices, versões, manifesto e os dois ZIPs. As alterações desta entrega são locais: não houve push ou deploy para o domínio público.
