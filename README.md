# PLAYNOVA

220 títulos no catálogo: 180 com abertura inicial verificada, 37 cópias habilitadas para tentar jogar com falhas ou resultado inconclusivo, e três sem arquivos correspondentes.

Execute **ABRIR-SITE.bat** com Python 3 instalado. Alguns motores precisam de HTTP; abrir index.html diretamente permite ver o catálogo, mas não garante todos os jogos. O servidor atende somente em 127.0.0.1 e protege arquivos privados.

Busca, capas locais, favoritos, listas, histórico e filtros continuam disponíveis. A página inicial começa no histórico e no catálogo. Jogos abertos como arquivo recebem orientação para usar ABRIR-SITE.bat; no endereço HTTP eles iniciam diretamente. Não existe pré-download do portal, vídeo de destaque ou botão flutuante. Os acentos da interface foram corrigidos.

## Verificação e conexões

Os 217 títulos com arquivos estão habilitados. O rótulo “Com falhas” distingue cópias problemáticas das verificadas. Ninja Dash, Super Smash Flash 2 e Golf Clássico não têm cópias correspondentes completas; não substituímos por outros jogos com nomes parecidos.

Foi feita varredura com Microsoft Defender, inspeção de padrões suspeitos e testes silenciosos de abertura e entrada básica. Isso não é uma partida completa nem certificação de segurança. Os resultados de abertura estão em assets/quick-game-checks.json. Algumas cópias consistem apenas em links antigos, têm dependências ausentes ou não concluem o teste.

Publicidade e rastreamento continuam restritos pelas políticas do site. As conexões regionais do BasketBros estão explicitamente permitidas em assets/game-network-policy.json, conforme consentimento do proprietário. Os demais jogos preservam a restrição local. Sites oficiais externos são apresentados como links explícitos e têm suas próprias práticas; não afirmamos controlar anúncios em outro site.

## Fontes e créditos

credits.html e assets/game-sources.json preservam fontes e avisos. A revisão técnica não confirmou uma nova autorização de redistribuição de todo o antigo espelho. Alguns títulos ainda têm origem/licença incompletas; os avisos existentes foram preservados. FNAF agora reúne dois fangames locais, com licença MIT declarada nos projetos de origem, separados das versões comerciais oficiais. A página de lojas foi retirada. assets/cover-sources.json registra as capas substituídas, capturas reais e imagens promocionais dos próprios editores; os autores mantêm seus direitos sobre as imagens.

## Pacote e publicação

Use site.zip ou playnova-cyber-galaxy-local.zip. Nunca publique a pasta de trabalho inteira. O empacotador exclui ISOs, dados privados, caches, executáveis e originais grandes substituídos por partes locais. As partes de 20 MiB são reunidas no navegador, preservando os bytes originais; a hospedagem deve permitir esses arquivos.

python tools/package-site.py atualiza índices, versões, manifesto e os dois ZIPs. As alterações desta entrega são locais: não houve push ou deploy para o domínio público.
