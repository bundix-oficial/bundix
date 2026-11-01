# Slope: revisão de carregamento

O build Unity já fazia parte do projeto. A revisão extraiu os arquivos de dados, WebAssembly e JavaScript das URLs data gigantes para arquivos locais em build/. Os conteúdos gzip foram descomprimidos para evitar dependência de cabeçalhos especiais da hospedagem. A inicialização agora acontece após a criação do container, com progresso do motor, indicação de erro de WebGL e tempo limite visível. Foi removido um identificador solto no fim do carregador. Não foram adicionados anúncios nem servidores externos.
