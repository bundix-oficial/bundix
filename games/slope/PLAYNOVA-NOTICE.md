# Slope: correção de carregamento — 03/11/2026

O carregador Unity original executava o framework usando um script `blob:`, bloqueado pela política de segurança do portal e da hospedagem. O framework existente agora registra sua função em `UnityLoader.playnovaSlopeFramework`; `slope-runtime.js` usa essa função no mesmo estágio de inicialização do motor. Os dados e o WebAssembly do jogo foram preservados.

A inicialização fica em um script local e o indicador `data-ready` só é marcado ao concluir o progresso do Unity. Falhas de inicialização podem exibir uma mensagem no próprio jogo. Não foi liberada a execução de scripts `blob:` nem foram adicionados destinos externos. Telemetria, login e ranking externos continuam sujeitos aos bloqueios existentes; o teste local não verifica essas funções nem certifica segurança ou direitos de distribuição. Os créditos e avisos de origem existentes permanecem válidos.

Verificação: Chrome com `--mute-audio`, usando `servidor.py` e seus cabeçalhos reais. O motor concluiu a inicialização; o menu e a partida foram inspecionados por captura. O teste encerra a árvore de processos do navegador.
