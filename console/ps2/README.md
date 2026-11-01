# PLAYNOVA — PS2 com ISO local

Integração experimental do motor oficial Play!.js. Não inclui jogos, ROMs, ISOs nem BIOS. Não é um port nativo de GTA San Andreas nem uma afirmação de compatibilidade com esse jogo.

O motor e seu WebAssembly foram obtidos de https://playjs.purei.org/ e conferidos pelo Microsoft Defender antes da execução. SHA-256 e origem em SOURCE.json. Licença BSD-2-Clause em runtime/LICENSE-Play.txt; fontes originais em runtime/Play-source.zip. O leitor de arquivos locais deriva do adaptador DiscImageDevice do projeto, preservado em runtime/DiscImageDevice.original.ts.

Suporte a isolamento para hospedagem estática: coi-serviceworker v0.1.7, MIT, https://github.com/gzuidhof/coi-serviceworker. O service worker só tem escopo em console/ps2/, não armazena ISOs e não afeta os jogos do catálogo. No GitHub Pages, a primeira visita pode recarregar uma vez para ativar os recursos necessários. O servidor Python local fornece os cabeçalhos diretamente.

Selecione uma ISO9660 válida e pressione Iniciar jogo. A leitura usa File.slice e arrayBuffer em blocos locais, sem enviar o disco ao servidor. A ISO não é salva pela integração. O som inicia desligado e é desligado quando a aba fica oculta. Parar jogo recarrega esta página e encerra a instância e seus workers.

Nenhum jogo de PS2 foi adicionado ao catálogo como disponível. O usuário forneceu uma ISO de San Andreas USA v1.03 para teste privado: ela foi extraída fora da distribuição, conferida no Defender e aberta no motor. Em quatro minutos, o teste com Intel Iris Xe/D3D11 avançou pela abertura, com contadores de aproximadamente 6 a 21 quadros/s durante o vídeo; não chegou a uma partida jogável. O link de ISOs enviado pelo usuário não pôde ser verificado e nenhum arquivo foi baixado dele. Esse resultado não confirma compatibilidade de campanha, saves ou outras versões. God of War e os demais títulos comerciais não foram testados.

Avisos de bibliotecas do upstream foram preservados em runtime/third-party-licenses/. A integração própria acrescenta validação de cabeçalho ISO9660, controles, política de recursos locais e controle de áudio. O disco usado na verificação funcional era apenas um diagnóstico MIPS/ISO9660 criado para o teste, sem dados comerciais; não acompanha o site nem substitui um jogo. A persistência de saves de jogos não foi verificada.

Resultados locais detalhados: preview/gta-real-test.json e preview/gta-real-extended-test.json no projeto de desenvolvimento. A ISO de 4.499.767.296 bytes permanece em private-iso/gta-san-andreas/ e não acompanha o site ou os pacotes de atualização. O controle de status usa as mensagens reais do motor (leitura, executável iniciado e vídeo ativo), sem progresso artificial de download.
