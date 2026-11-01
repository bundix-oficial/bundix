const GAMES_DATA = [
  {
    "id": "dark-room",
    "title": "A Dark Room",
    "category": "puzzle",
    "description": "Uma aventura de texto: acenda o fogo, reúna recursos e explore.",
    "recent": true,
    "cover": "assets/covers/dark-room.png",
    "platform": "flash"
  },
  {
    "id": "gridland",
    "title": "Gridland",
    "category": "puzzle",
    "description": "Combine peças, construa uma aldeia e enfrente a noite.",
    "recent": true,
    "cover": "assets/covers/gridland.png",
    "platform": "mobile"
  },
  {
    "id": "minesweeper",
    "title": "Campo Minado Emoji",
    "category": "puzzle",
    "description": "Descubra as casas seguras e marque todas as minas.",
    "recent": true,
    "cover": "assets/covers/minesweeper.png",
    "platform": "mobile"
  },
  {
    "id": "bubble-shooter",
    "title": "Bubble Shooter",
    "category": "arcade",
    "description": "Mire e estoure grupos de bolhas coloridas.",
    "recent": true,
    "cover": "assets/covers/bubble-shooter.png",
    "platform": "mobile"
  },
  {
    "id": "match-three",
    "title": "Match 3",
    "category": "puzzle",
    "description": "Troque peças e crie combinações em sequência.",
    "recent": true,
    "cover": "assets/covers/match-three.png",
    "platform": "mobile"
  },
  {
    "id": "skifree",
    "title": "SkiFree.js",
    "category": "arcade",
    "description": "Desça a montanha e tente escapar do monstro da neve.",
    "recent": true,
    "cover": "assets/covers/skifree.png",
    "platform": "flash"
  },
  {
    "id": "connect-four",
    "title": "Liga 4",
    "category": "classico",
    "description": "Forme uma linha de quatro peças antes do adversário.",
    "recent": true,
    "cover": "assets/covers/connect-four.png",
    "platform": "mobile"
  },
  {
    "id": "underrun",
    "title": "Underrun",
    "category": "acao",
    "description": "Explore uma instalação em 3D e combata máquinas hostis.",
    "recent": true,
    "cover": "assets/covers/underrun.png",
    "platform": "flash"
  },
  {
    "id": "hexgl",
    "title": "HexGL",
    "category": "arcade",
    "description": "Pilote uma nave em uma corrida futurista em 3D.",
    "recent": true,
    "cover": "assets/covers/hexgl.png",
    "platform": "flash"
  },
  {
    "id": "elliott",
    "title": "Hyperspace Garbage Collection",
    "category": "acao",
    "description": "Explore o espaço e recolha materiais neste jogo independente.",
    "recent": true,
    "cover": "assets/covers/elliott.png",
    "platform": "flash"
  },
  {
    "id": "radius-raid",
    "title": "Radius Raid",
    "category": "acao",
    "description": "Sobreviva a ondas de inimigos em uma arena espacial.",
    "recent": true,
    "cover": "assets/covers/radius-raid.png",
    "platform": "flash"
  },
  {
    "id": "xx142",
    "title": "xx142-b2.exe",
    "category": "puzzle",
    "description": "Resolva desafios usando os fantasmas das tentativas anteriores.",
    "recent": true,
    "cover": "assets/covers/xx142.png",
    "platform": "flash"
  },
  {
    "id": "space-huggers",
    "title": "Space Huggers",
    "category": "acao",
    "description": "Plataforma de ação com cenários destrutíveis e fases variadas.",
    "recent": true,
    "cover": "assets/covers/space-huggers.png",
    "platform": "flash"
  },
  {
    "id": "astray",
    "title": "Astray",
    "category": "puzzle",
    "description": "Guie uma esfera por labirintos tridimensionais.",
    "recent": true,
    "cover": "assets/covers/astray.png",
    "platform": "flash"
  },
  {
    "id": "bounce-back",
    "title": "Bounce Back",
    "category": "acao",
    "description": "Explore ilhas e enfrente inimigos com seu bumerangue.",
    "recent": true,
    "cover": "assets/covers/bounce-back.png",
    "platform": "flash"
  },
  {
    "id": "space-invaders",
    "title": "Space Invaders",
    "category": "classico",
    "description": "Defenda a Terra das ondas de invasores espaciais.",
    "recent": true,
    "cover": "assets/covers/space-invaders.png",
    "platform": "flash"
  },
  {
    "id": "alien-invasion",
    "title": "Alien Invasion",
    "category": "arcade",
    "description": "Desvie dos ataques e destrua as naves inimigas.",
    "recent": true,
    "cover": "assets/covers/alien-invasion.png",
    "platform": "flash"
  },
  {
    "id": "little-platformer",
    "title": "Little Platformer",
    "category": "acao",
    "description": "Explore um mundo de plataformas com terreno destrutível.",
    "recent": true,
    "cover": "assets/covers/little-platformer.png",
    "platform": "flash"
  },
  {
    "id": "little-puzzle",
    "title": "Little Puzzle",
    "category": "puzzle",
    "description": "Combine peças ilustradas e tente superar seu recorde.",
    "recent": true,
    "cover": "assets/covers/little-puzzle.png",
    "platform": "mobile"
  },
  {
    "id": "orb-island",
    "title": "Ilha das Esferas",
    "category": "arcade",
    "description": "Explore uma ilha em 3D e colete esferas brilhantes.",
    "recent": true,
    "cover": "assets/covers/orb-island.png",
    "platform": "flash"
  },
  {
    "id": "gta-san-andreas",
    "title": "GTA: San Andreas 2D",
    "category": "acao",
    "description": "Explore Los Santos, dirija veículos, fuja da polícia e domine as ruas neste demake 2D clássico.",
    "recent": true,
    "popular": true,
    "cover": "assets/covers/gta-san-andreas.svg",
    "platform": "console"
  },
  {
    "id": "tower-building",
    "title": "Torre Maluca",
    "category": "arcade",
    "description": "Empilhe os andares e construa uma torre colorida. Clique ou toque para jogar.",
    "recent": true,
    "cover": "assets/covers/tower-building.png",
    "platform": "mobile"
  },
  {
    "id": "pacman",
    "title": "Pac-Man HTML5",
    "category": "classico",
    "description": "Percorra o labirinto, coma os pontinhos e desvie dos fantasmas. Recriação em HTML5.",
    "recent": true,
    "cover": "assets/covers/pacman.png",
    "platform": "flash"
  },
  {
    "id": "boulderdash",
    "title": "Caça aos Diamantes",
    "category": "arcade",
    "description": "Explore cavernas, colete diamantes e encontre a saída. Recriação de Boulderdash.",
    "recent": true,
    "cover": "assets/covers/boulderdash.png",
    "platform": "console"
  },
  {
    "id": "two-colors",
    "title": "Duas Cores — 0h h1",
    "category": "puzzle",
    "description": "Um quebra-cabeça de lógica com duas cores e desafios progressivos.",
    "recent": true,
    "cover": "assets/covers/two-colors.png",
    "platform": "mobile"
  },
  {
    "id": "breaklock",
    "title": "Liga-Pontos — BreakLock",
    "category": "puzzle",
    "description": "Descubra a sequência secreta ligando os pontos. Jogo de raciocínio com interface em português.",
    "recent": true,
    "cover": "assets/covers/breaklock.png",
    "platform": "mobile"
  },
  {
    "id": "mario-html5",
    "title": "Infinite Mario",
    "category": "retro",
    "description": "Recriação HTML de Infinite Mario, com fases de plataforma.",
    "recent": true,
    "recreation": true,
    "platform": "console"
  },
  {
    "id": "mario64-cleanroom",
    "title": "Mario 64 — Clean Room",
    "category": "retro",
    "description": "Versão de fãs para navegador com texturas e sons recriados.",
    "recent": true,
    "recreation": true,
    "platform": "console"
  },
  {
    "id": "zelda-tribute",
    "title": "Zelda 30 Year Tribute",
    "category": "retro",
    "description": "Recriação 3D de fãs de The Legend of Zelda.",
    "recent": true,
    "recreation": true,
    "platform": "console"
  },
  {
    "id": "bombergirl",
    "title": "Bombergirl",
    "category": "retro",
    "description": "Recriação no estilo Bomberman, com oponentes controlados pelo computador.",
    "recent": true,
    "recreation": true,
    "platform": "console"
  },
  {
    "id": "retro-racer",
    "title": "Retro Racer",
    "category": "retro",
    "description": "Corrida HTML com pistas e curvas no estilo OutRun.",
    "recent": true,
    "recreation": true,
    "platform": "console"
  },
  {
    "id": "flappy-bird",
    "title": "Flappy Bird",
    "category": "arcade",
    "description": "Recriação HTML: bata as asas e passe entre os canos.",
    "recent": true,
    "popular": true,
    "platform": "mobile"
  },
  {
    "id": "slope",
    "title": "Slope 3D",
    "category": "arcade",
    "description": "Uma pista infinita em alta velocidade.",
    "popular": true,
    "cover": "assets/covers/slope-play.png",
    "platform": "mobile"
  },
  {
    "id": "clumsy-bird",
    "title": "Clumsy Bird",
    "category": "arcade",
    "description": "Bata as asas e desvie dos canos.",
    "recent": true,
    "platform": "mobile"
  },
  {
    "id": "tetris",
    "title": "Tetris",
    "category": "puzzle",
    "description": "Encaixe as peças e complete as linhas.",
    "recent": true,
    "platform": "flash"
  },
  {
    "id": "hextris",
    "title": "Hextris",
    "category": "puzzle",
    "description": "Gire o hexágono e combine as cores.",
    "recent": true,
    "platform": "flash"
  },
  {
    "id": "breakout",
    "title": "Breakout",
    "category": "arcade",
    "description": "Rebata a bola e destrua os blocos.",
    "recent": true,
    "platform": "flash"
  },
  {
    "id": "2048",
    "title": "2048",
    "category": "puzzle",
    "description": "Junte os números iguais até alcançar o lendário bloco 2048.",
    "popular": true,
    "recent": false,
    "cover": "assets/covers/2048.png",
    "platform": "mobile"
  },
  {
    "id": "snake",
    "title": "Cobrinha (Snake)",
    "category": "classico",
    "description": "O clássico do Nokia: coma as maçãs e desvie do próprio corpo.",
    "popular": true,
    "recent": false,
    "cover": "assets/covers/snake.png",
    "platform": "arcade"
  },
  {
    "id": "pong",
    "title": "Pong Clássico",
    "category": "retro",
    "description": "O primeiro videogame da história: rebata a bola contra a máquina.",
    "popular": false,
    "recent": false,
    "cover": "assets/covers/pong.png",
    "platform": "arcade"
  },
  {
    "id": "memory",
    "title": "Jogo da Memória",
    "category": "puzzle",
    "description": "Vire as cartas, encontre os pares de emojis e treine sua mente.",
    "popular": false,
    "recent": false,
    "cover": "assets/covers/memory.png",
    "platform": "mobile"
  },
  {
    "id": "platformer",
    "title": "Super Platformer",
    "category": "arcade",
    "description": "Corra e salte entre plataformas flutuantes coletando moedas.",
    "popular": false,
    "recent": false,
    "cover": "assets/covers/platformer.png",
    "platform": "arcade"
  },
  {
    "id": "fireboy-and-watergirl",
    "title": "Fogo e Água: Floresta",
    "category": "puzzle",
    "description": "Trabalhe em equipe com o Menino Fogo e a Menina Água para resolver enigmas.",
    "cover": "assets/covers/fireboy-and-watergirl.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "bad-ice-cream",
    "title": "Bad Ice Cream",
    "category": "arcade",
    "description": "Colete frutas e quebre paredes de gelo desviando dos monstros famintos.",
    "cover": "assets/covers/bad-ice-cream.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "bad-ice-cream-2",
    "title": "Bad Ice Cream 2",
    "category": "arcade",
    "description": "Segunda aventura do sorvete travesso com novos inimigos e frutas exóticas.",
    "cover": "assets/covers/bad-ice-cream-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "bad-ice-cream-3",
    "title": "Bad Ice Cream 3",
    "category": "arcade",
    "description": "Terceira edição com novos monstros de gelo e fases super desafiadoras.",
    "cover": "assets/covers/bad-ice-cream-3.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "moto-x3m",
    "title": "Moto X3M",
    "category": "acao",
    "description": "Pilote motos potentes, faça acrobacias insanas e desvie de serras mortais.",
    "cover": "assets/covers/moto-x3m.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "moto-x3m-winter",
    "title": "Moto X3M: Winter",
    "category": "acao",
    "description": "Acrobacias radicais na neve e gelo com pistas cheias de perigos congelantes.",
    "cover": "assets/covers/moto-x3m-winter.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "moto-x3m-pool-party",
    "title": "Moto X3M: Pool Party",
    "category": "acao",
    "description": "Manobras aquáticas em toboáguas gigantes e rampas ensolaradas.",
    "cover": "assets/covers/moto-x3m-pool-party.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "moto-x3m-spooky-land",
    "title": "Moto X3M: Spooky Land",
    "category": "acao",
    "description": "Edição sombria de Halloween com pistas assombradas e armadilhas macabras.",
    "cover": "assets/covers/moto-x3m-spooky-land.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "papas-pizzeria",
    "title": "Papa's Pizzeria",
    "category": "arcade",
    "description": "Asse e corte pizzas deliciosas no ponto perfeito para clientes exigentes.",
    "cover": "assets/covers/papas-pizzeria.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "papas-freezeria",
    "title": "Papa's Freezeria",
    "category": "arcade",
    "description": "Prepare sundaes e milk-shakes refrescantes na ilha tropical de Calypso.",
    "cover": "assets/covers/papas-freezeria.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "papas-burgeria",
    "title": "Papa's Burgeria",
    "category": "arcade",
    "description": "Grelhe hambúrgueres suculentos e monte lanches gigantescos sem errar.",
    "cover": "assets/covers/papas-burgeria.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "papas-hot-doggeria",
    "title": "Papa's Hot Doggeria",
    "category": "arcade",
    "description": "Sirva cachorros-quentes e pipoca para a torcida no estádio de beisebol.",
    "cover": "assets/covers/papas-hot-doggeria.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "papas-pancakeria",
    "title": "Papa's Pancakeria",
    "category": "arcade",
    "description": "Vire panquecas douradas e waffles fofinhos cobertos de xarope e frutas.",
    "cover": "assets/covers/papas-pancakeria.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "papas-sushiria",
    "title": "Papa's Sushiria",
    "category": "arcade",
    "description": "Enrole sushis artesanais e sirva chá de bolhas no restaurante japonês.",
    "cover": "assets/covers/papas-sushiria.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "papas-wingeria",
    "title": "Papa's Wingeria",
    "category": "arcade",
    "description": "Frite e empane asinhas de frango crocantes com os molhos mais picantes.",
    "cover": "assets/covers/papas-wingeria.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "papa-louie",
    "title": "Papa Louie: Attack",
    "category": "arcade",
    "description": "Resgate seus clientes em um mundo mágico onde as pizzas ganharam vida!",
    "cover": "assets/covers/papa-louie.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "age-of-war",
    "title": "Age of War",
    "category": "acao",
    "description": "Evolua da Idade da Pedra até o futuro cibernético e destrua a base rival.",
    "cover": "assets/covers/age-of-war.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "stick-war",
    "title": "Stick War: Legacy",
    "category": "acao",
    "description": "Comande seu exército de guerreiros stickman e domine o mundo de Inamorta.",
    "cover": "assets/covers/stick-war.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "bloons-td",
    "title": "Bloons Tower Defense",
    "category": "puzzle",
    "description": "Posicione macaquinhos e canhões para estourar todas as levas de balões.",
    "cover": "assets/covers/bloons-td.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "bloons-td-2",
    "title": "Bloons Tower Defense 2",
    "category": "puzzle",
    "description": "Novas torres, dardos teleguiados e balões especiais mais resistentes.",
    "cover": "assets/covers/bloons-td-2.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "bloons-td-4",
    "title": "Bloons Tower Defense 4",
    "category": "puzzle",
    "description": "A versão definitiva com gráficos aprimorados e dezenas de upgrades.",
    "cover": "assets/covers/bloons-td-4.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "vex-3",
    "title": "Vex 3",
    "category": "acao",
    "description": "Corra, escale paredes e desvie de armadilhas mortais com precisão milimétrica.",
    "cover": "assets/covers/vex-3.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "vex-4",
    "title": "Vex 4",
    "category": "acao",
    "description": "Fases ainda mais frenéticas no labirinto de espinhos e lasers neon.",
    "cover": "assets/covers/vex-4.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "vex-5",
    "title": "Vex 5",
    "category": "acao",
    "description": "Desafie seus reflexos com salas secretas e novos movimentos de parkour.",
    "cover": "assets/covers/vex-5.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "vex-6",
    "title": "Vex 6",
    "category": "acao",
    "description": "Skins desbloqueáveis, missões diárias e obstáculos acrobáticos velozes.",
    "cover": "assets/covers/vex-6.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "vex-7",
    "title": "Vex 7",
    "category": "acao",
    "description": "Aventura épica de parkour com espadas, cordas e chefões implacáveis.",
    "cover": "assets/covers/vex-7.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "duck-life",
    "title": "Duck Life",
    "category": "arcade",
    "description": "Treine seu patinho em corrida, natação e voo para salvar sua fazenda.",
    "cover": "assets/covers/duck-life.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "duck-life-2",
    "title": "Duck Life 2",
    "category": "arcade",
    "description": "Novos torneios mundiais, habilidades de escalada e patos adversários velozes.",
    "cover": "assets/covers/duck-life-2.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "duck-life-3",
    "title": "Duck Life 3: Evolutions",
    "category": "arcade",
    "description": "Evolua geneticamente seu pato escolhendo entre 4 raças com superpoderes.",
    "cover": "assets/covers/duck-life-3.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "duck-life-4",
    "title": "Duck Life 4",
    "category": "arcade",
    "description": "Explore um vulcão ativo, treine uma equipe de patos e conquiste o troféu.",
    "cover": "assets/covers/duck-life-4.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "duck-life-treasure-hunt",
    "title": "Duck Life: Treasure",
    "category": "arcade",
    "description": "Desça em cavernas misteriosas em busca de gemas raras e tesouros de ouro.",
    "cover": "assets/covers/duck-life-treasure-hunt.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "bloxorz",
    "title": "Bloxorz",
    "category": "puzzle",
    "description": "Role o bloco retangular de metal até fazê-lo cair perfeitamente no buraco.",
    "cover": "assets/covers/bloxorz.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "fancy-pants-adventures",
    "title": "Fancy Pants Adventures",
    "category": "arcade",
    "description": "O clássico stickman de calças amarelas deslizando em colinas e saltos fluidos.",
    "cover": "assets/covers/fancy-pants-adventures.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "learn-to-fly",
    "title": "Learn to Fly",
    "category": "arcade",
    "description": "Ajude o pinguim determinado a provar que pinguins podem voar alto.",
    "cover": "assets/covers/learn-to-fly.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "learn-to-fly-2",
    "title": "Learn to Fly 2",
    "category": "arcade",
    "description": "Construa foguetes e planadores turbinados para destruir o iceberg.",
    "cover": "assets/covers/learn-to-fly-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "gun-mayhem",
    "title": "Gun Mayhem",
    "category": "acao",
    "description": "Batalhas frenéticas com armas de fogo em plataformas suspensas.",
    "cover": "assets/covers/gun-mayhem.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "gun-mayhem-2",
    "title": "Gun Mayhem 2: More",
    "category": "acao",
    "description": "Mais armas, novos modos de campanha e tiroteios explosivos em grupo.",
    "cover": "assets/covers/gun-mayhem-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "run-3",
    "title": "Run 3",
    "category": "acao",
    "description": "Corra e gire a gravidade em túneis espaciais tridimensionais sem fim.",
    "cover": "assets/covers/run-3.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "worlds-hardest-game",
    "title": "World's Hardest Game",
    "category": "puzzle",
    "description": "Guie o quadrado vermelho pelas bolas azuis sem levar nenhum toque.",
    "cover": "assets/covers/worlds-hardest-game.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "worlds-hardest-game-2",
    "title": "World's Hardest Game 2",
    "category": "puzzle",
    "description": "Cinquenta novos níveis com mecânicas insanas de paciência e precisão.",
    "cover": "assets/covers/worlds-hardest-game-2.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "the-impossible-quiz",
    "title": "The Impossible Quiz",
    "category": "puzzle",
    "description": "Perguntas malucas com pegadinhas inteligentes e hilárias.",
    "cover": "assets/covers/the-impossible-quiz.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "the-impossible-quiz-2",
    "title": "The Impossible Quiz 2",
    "category": "puzzle",
    "description": "A continuação oficial do teste mais traiçoeiro e divertido da internet.",
    "cover": "assets/covers/the-impossible-quiz-2.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "happy-wheels",
    "title": "Happy Wheels",
    "category": "acao",
    "description": "Física de ragdoll extrema e pistas repletas de serras, minas e catapultas.",
    "cover": "assets/covers/happy-wheels.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "boxhead-2play",
    "title": "Boxhead 2Play",
    "category": "acao",
    "description": "Sobreviva a hordas infinitas de zumbis em salas com barris explosivos.",
    "cover": "assets/covers/boxhead-2play.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "pandemic-2",
    "title": "Pandemic 2",
    "category": "puzzle",
    "description": "Evolua sintomas e vias de transmissão para contaminar o planeta inteiro.",
    "cover": "assets/covers/pandemic-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "henry-stickmin-breaking-the-bank",
    "title": "Stickmin: Breaking Bank",
    "category": "puzzle",
    "description": "Tente invadir o cofre do banco escolhendo as ferramentas mais bizarras.",
    "cover": "assets/covers/henry-stickmin-breaking-the-bank.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "henry-stickmin-escaping-the-prison",
    "title": "Stickmin: Escaping Prison",
    "category": "puzzle",
    "description": "Planeje sua fuga espetacular da prisão escolhendo entre planos malucos.",
    "cover": "assets/covers/henry-stickmin-escaping-the-prison.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "henry-stickmin-stealing-the-diamond",
    "title": "Stickmin: Stealing Diamond",
    "category": "puzzle",
    "description": "Roube o gigantesco diamante do museu usando alta tecnologia e trapalhadas.",
    "cover": "assets/covers/henry-stickmin-stealing-the-diamond.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "subway-surfers",
    "title": "Subway Surfers",
    "category": "arcade",
    "description": "Desvie de trens velozes e guardas correndo pelos trilhos da cidade.",
    "cover": "assets/covers/subway-surfers.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "temple-run-2",
    "title": "Temple Run 2",
    "category": "arcade",
    "description": "Escape com o ídolo dourado através de penhascos e minas perigosas.",
    "cover": "assets/covers/temple-run-2.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "cut-the-rope",
    "title": "Cut the Rope",
    "category": "puzzle",
    "description": "Corte as cordas na hora certa para alimentar o monstrinho verde Om Nom.",
    "cover": "assets/covers/cut-the-rope.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "cut-the-rope-2",
    "title": "Cut the Rope 2",
    "category": "puzzle",
    "description": "Novos cenários na floresta e amigos ajudantes com poderes especiais.",
    "cover": "assets/covers/cut-the-rope-2.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "crossy-road",
    "title": "Crossy Road",
    "category": "arcade",
    "description": "Por que a galinha atravessou a rua? Desvie de carros, trens e rios.",
    "cover": "assets/covers/crossy-road.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "doodle-jump",
    "title": "Doodle Jump",
    "category": "arcade",
    "description": "Pule sem parar em plataformas nas alturas atirando nos monstros com o focinho.",
    "cover": "assets/covers/doodle-jump.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "cookie-clicker",
    "title": "Cookie Clicker",
    "category": "arcade",
    "description": "Clique no biscoito gigante e contrate vovós para produzir bilhões de cookies.",
    "cover": "assets/covers/cookie-clicker.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "rooftop-snipers",
    "title": "Rooftop Snipers",
    "category": "acao",
    "description": "Duelos cômicos de sniper no topo de prédios usando física de boneco de pano.",
    "cover": "assets/covers/rooftop-snipers.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "getaway-shootout",
    "title": "Getaway Shootout",
    "category": "acao",
    "description": "Pule e atire para alcançar o helicóptero de fuga antes dos seus oponentes.",
    "cover": "assets/covers/getaway-shootout.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "tunnel-rush",
    "title": "Tunnel Rush",
    "category": "arcade",
    "description": "Velocidade alucinante dentro de um túnel psicodélico esquivando de barreiras.",
    "cover": "assets/covers/tunnel-rush.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "drive-mad",
    "title": "Drive Mad",
    "category": "acao",
    "description": "Pilote seu caminhão 4x4 por pistas cheias de pontes quebradas e cambalhotas.",
    "cover": "assets/covers/drive-mad.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "bitlife",
    "title": "BitLife",
    "category": "puzzle",
    "description": "Simulador de vida interativo: faça suas próprias escolhas do berço ao túmulo.",
    "cover": "assets/covers/bitlife.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "retro-bowl",
    "title": "Retro Bowl",
    "category": "arcade",
    "description": "Futebol americano retrô estilo 8-bits: gerencie sua equipe e faça touchdowns.",
    "cover": "assets/covers/retro-bowl.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "tiny-fishing",
    "title": "Tiny Fishing",
    "category": "arcade",
    "description": "Lance o anzol nas profundezas do lago e pesque os peixes mais valiosos.",
    "cover": "assets/covers/tiny-fishing.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "ovo",
    "title": "OvO",
    "category": "acao",
    "description": "Parkour em ritmo frenético com saltos duplos, mergulhos e esquivas perfeitas.",
    "cover": "assets/covers/ovo.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "friday-night-funkin",
    "title": "Friday Night Funkin'",
    "category": "arcade",
    "description": "Batalhas rítmicas de hip-hop para conquistar o coração da sua namorada.",
    "cover": "assets/covers/friday-night-funkin.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "baldis-basics",
    "title": "Baldi's Basics",
    "category": "acao",
    "description": "Colete 7 cadernos na escola bizarra do professor Baldi e tente escapar.",
    "cover": "assets/covers/baldis-basics.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "superhot",
    "title": "SUPERHOT Web",
    "category": "acao",
    "description": "O tempo só se move quando você se move. Elimine inimigos com estilo.",
    "cover": "assets/covers/superhot.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "time-shooter-3",
    "title": "Time Shooter 3: SWAT",
    "category": "acao",
    "description": "Operação tática com desaceleração do tempo ao estilo Matrix.",
    "cover": "assets/covers/time-shooter-3.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "smash-karts",
    "title": "Smash Karts",
    "category": "arcade",
    "description": "Corrida de kart 3D com caixas de armas, mísseis e bombas explosivas.",
    "cover": "assets/covers/smash-karts.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "paper-io-2",
    "title": "Paper.io 2",
    "category": "arcade",
    "description": "Conquiste território pintando o mapa e corte as trilhas dos outros jogadores.",
    "cover": "assets/covers/paper-io-2.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "craftmine",
    "title": "CraftMine",
    "category": "puzzle",
    "description": "Sobrevivência e mineração 2D: corte madeira, colete minérios e sobreviva à noite.",
    "cover": "assets/covers/craftmine.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "grindcraft",
    "title": "Grindcraft",
    "category": "puzzle",
    "description": "Clique para minerar matérias-primas e crie itens épicos no estilo Minecraft.",
    "cover": "assets/covers/grindcraft.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "toss-the-turtle",
    "title": "Toss The Turtle",
    "category": "arcade",
    "description": "Dispare a tartaruga com canhões gigantes e compre bombas para ir mais longe.",
    "cover": "assets/covers/toss-the-turtle.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "there-is-no-game",
    "title": "There Is No Game",
    "category": "puzzle",
    "description": "O narrador insiste que não há nada aqui. Encontre os segredos ocultos.",
    "cover": "assets/covers/there-is-no-game.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "this-is-the-only-level",
    "title": "This Is The Only Level",
    "category": "puzzle",
    "description": "O elefante precisa passar pelo mesmo nível, mas as regras mudam a cada vez.",
    "cover": "assets/covers/this-is-the-only-level.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "zombocalypse",
    "title": "Zombocalypse",
    "category": "acao",
    "description": "Lute contra ondas de mortos-vivos empunhando facas, escopetas e rifles de assalto.",
    "cover": "assets/covers/zombocalypse.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "1v1-lol",
    "title": "1v1.LOL",
    "category": "acao",
    "description": "Simulador competitivo de construção rápida e tiroteio em terceira pessoa.",
    "cover": "assets/covers/1v1-lol.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "angry-birds",
    "title": "Angry Birds Classic",
    "category": "arcade",
    "description": "Dispare os pássaros furiosos com o estilingue e derrube os porcos verdes.",
    "cover": "assets/covers/angry-birds.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "alien-hominid",
    "title": "Alien Hominid",
    "category": "acao",
    "description": "O clássico cult da Newgrounds: ajude o alienígena amarelo contra agentes do FBI.",
    "cover": "assets/covers/alien-hominid.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "awesome-tanks-2",
    "title": "Awesome Tanks 2",
    "category": "acao",
    "description": "Batalhas táticas de tanques: destrua bases inimigas e melhore sua blindagem.",
    "cover": "assets/covers/awesome-tanks-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "backflip-dive-3d",
    "title": "Backflip Dive 3D",
    "category": "arcade",
    "description": "Execute saltos mortais perfeitos e caia em pé de plataformas altíssimas.",
    "cover": "assets/covers/backflip-dive-3d.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "basket-bros",
    "title": "Basket Bros",
    "category": "arcade",
    "description": "Basquete mano a mano com enterradas aéreas espetaculares e socos hilários.",
    "cover": "assets/covers/basket-bros.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "basketball-legends",
    "title": "Basketball Legends",
    "category": "arcade",
    "description": "Jogue basquete com lendas do esporte usando super arremessos em chamas.",
    "cover": "assets/covers/basketball-legends.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "basketball-stars",
    "title": "Basketball Stars",
    "category": "arcade",
    "description": "Drible adversários, bloqueie arremessos e pontue em partidas eletrizantes.",
    "cover": "assets/covers/basketball-stars.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "binding-of-isaac",
    "title": "The Binding of Isaac",
    "category": "acao",
    "description": "Explore masmorras geradas aleatoriamente cheias de monstros e itens místicos.",
    "cover": "assets/covers/binding-of-isaac.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "canyon-defense",
    "title": "Canyon Defense",
    "category": "puzzle",
    "description": "Construa torres de defesa avançadas no cânion para deter o comboio militar.",
    "cover": "assets/covers/canyon-defense.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "cars-simulator-3d",
    "title": "Cars Simulator 3D",
    "category": "arcade",
    "description": "Pilote superesportivos com física realista em uma cidade aberta cheia de rampas.",
    "cover": "assets/covers/cars-simulator-3d.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "chess-classic",
    "title": "Xadrez Clássico",
    "category": "classico",
    "description": "O jogo de estratégia milenar: desafie a inteligência artificial com táticas geniais.",
    "cover": "assets/covers/chess-classic.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "chrome-dino",
    "title": "T-Rex Dino Runner",
    "category": "retro",
    "description": "O dinossauro sem internet: pule cactos e desvie de pterodáctilos no deserto.",
    "cover": "assets/covers/chrome-dino.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "cluster-rush",
    "title": "Cluster Rush",
    "category": "arcade",
    "description": "Pule de caminhão em caminhão em alta velocidade sem tocar no asfalto.",
    "cover": "assets/covers/cluster-rush.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "color-switch",
    "title": "Color Switch",
    "category": "arcade",
    "description": "Toque para fazer a bola quicar atravessando obstáculos da mesma cor.",
    "cover": "assets/covers/color-switch.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "cubefield",
    "title": "Cubefield",
    "category": "retro",
    "description": "Desvie em alta velocidade de um campo infinito de cubos coloridos.",
    "cover": "assets/covers/cubefield.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "dadish",
    "title": "Dadish",
    "category": "arcade",
    "description": "Um pai rabanete em busca de seus filhotes travessos pelo mundo vegetal.",
    "cover": "assets/covers/dadish.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "dadish-2",
    "title": "Dadish 2",
    "category": "arcade",
    "description": "Segunda aventura do rabanete herói com veículos espaciais e novos perigos.",
    "cover": "assets/covers/dadish-2.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "dadish-3",
    "title": "Dadish 3",
    "category": "arcade",
    "description": "Mais fases criativas, piadas inteligentes e reencontros emocionantes de rabanetes.",
    "cover": "assets/covers/dadish-3.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "death-run-3d",
    "title": "Death Run 3D",
    "category": "arcade",
    "description": "Túnel ultrarrápido em primeira pessoa que testará seus reflexos ao limite.",
    "cover": "assets/covers/death-run-3d.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "doge-miner-2",
    "title": "Doge Miner 2",
    "category": "arcade",
    "description": "Ajude o cachorro Doge a minerar dogecoins suficientes para ir até a Lua!",
    "cover": "assets/covers/doge-miner-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "elastic-man",
    "title": "Elastic Man",
    "category": "arcade",
    "description": "Brinque e puxe a face elástica super realista em um sandbox divertido.",
    "cover": "assets/covers/elastic-man.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "evil-glitch",
    "title": "Evil Glitch",
    "category": "acao",
    "description": "Shooter retrô minimalista: enfrente anomalias digitais e corrupção no sistema.",
    "cover": "assets/covers/evil-glitch.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "factory-balls-forever",
    "title": "Factory Balls Forever",
    "category": "puzzle",
    "description": "Pinte e customize as bolinhas na ordem certa usando chapéus e máscaras.",
    "cover": "assets/covers/factory-balls-forever.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "flood-runner-2",
    "title": "Flood Runner 2",
    "category": "arcade",
    "description": "Corra de uma onda gigante de lava enquanto salta sobre dinossauros.",
    "cover": "assets/covers/flood-runner-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "fruit-ninja",
    "title": "Fruit Ninja Classic",
    "category": "arcade",
    "description": "Fatie melancias, maçãs e bananas no ar como um mestre espadachim.",
    "cover": "assets/covers/fruit-ninja.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "getting-over-it-scratch",
    "title": "Getting Over It",
    "category": "arcade",
    "description": "Escale montanhas íngremes usando apenas uma marreta e muita paciência.",
    "cover": "assets/covers/getting-over-it-scratch.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "google-snake-custom",
    "title": "Google Snake Especial",
    "category": "classico",
    "description": "A cobrinha mais famosa do mundo com maçãs suculentas e mapas coloridos.",
    "cover": "assets/covers/google-snake-custom.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "grow-in-the-hole",
    "title": "Grow In The Hole",
    "category": "arcade",
    "description": "Minigolfe excêntrico com buracos encolhendo e bolas gigantescas.",
    "cover": "assets/covers/grow-in-the-hole.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "gunspin",
    "title": "Gunspin",
    "category": "arcade",
    "description": "Dispare no momento exato para fazer o revólver voar a distâncias recordes.",
    "cover": "assets/covers/gunspin.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "house-of-hazards",
    "title": "House of Hazards",
    "category": "acao",
    "description": "Sobreviva às armadilhas da casa enquanto seus amigos tentam te derrubar.",
    "cover": "assets/covers/house-of-hazards.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "idle-breakout",
    "title": "Idle Breakout",
    "category": "puzzle",
    "description": "A fusão viciante do clássico Breakout com a mecânica de evolução ociosa.",
    "cover": "assets/covers/idle-breakout.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "interactive-buddy",
    "title": "Interactive Buddy",
    "category": "arcade",
    "description": "O clássico simulador de física: interaja com o boneco usando dezenas de itens.",
    "cover": "assets/covers/interactive-buddy.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "jelly-truck",
    "title": "Jelly Truck",
    "category": "arcade",
    "description": "Dirija um caminhão gelatinoso que amassa e estica por mundos elásticos.",
    "cover": "assets/covers/jelly-truck.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "jetpack-joyride",
    "title": "Jetpack Joyride",
    "category": "arcade",
    "description": "Voe pelo laboratório secreto com sua mochila a jato movida a metralhadoras.",
    "cover": "assets/covers/jetpack-joyride.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "just-fall-lol",
    "title": "Just Fall.LOL",
    "category": "arcade",
    "description": "Batalha de sobrevivência em plataformas hexagonais que caem no abismo.",
    "cover": "assets/covers/just-fall-lol.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "line-rider",
    "title": "Line Rider",
    "category": "arcade",
    "description": "Desenhe pistas com lápis e assista ao trenó deslizar com física fluida.",
    "cover": "assets/covers/line-rider.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "madalin-stunt-cars-2",
    "title": "Madalin Stunt Cars 2",
    "category": "arcade",
    "description": "Supercarros tunados em um parque de acrobacias 3D com loops e saltos gigantes.",
    "cover": "assets/covers/madalin-stunt-cars-2.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "madalin-stunt-cars-3",
    "title": "Madalin Stunt Cars 3",
    "category": "arcade",
    "description": "Terceira geração com novos supercarros de corrida e pistas multiplayer insanas.",
    "cover": "assets/covers/madalin-stunt-cars-3.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "meat-boy-flash",
    "title": "Meat Boy Original",
    "category": "acao",
    "description": "O protótipo que deu origem a Super Meat Boy: precisão cirúrgica e serras.",
    "cover": "assets/covers/meat-boy-flash.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "minecraft-classic",
    "title": "Minecraft Classic",
    "category": "puzzle",
    "description": "O clássico de construção 3D com 32 blocos e modo criativo infinito.",
    "cover": "assets/covers/minecraft-classic.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "my-friend-pedro-flash",
    "title": "My Friend Pedro",
    "category": "acao",
    "description": "Acrobacias em câmera lenta sob as ordens de uma banana falante.",
    "cover": "assets/covers/my-friend-pedro-flash.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "ninja-dash",
    "title": "Ninja Dash",
    "category": "acao",
    "description": "Salte entre telhados e corte inimigos silenciosamente na calada da noite.",
    "cover": "assets/covers/ninja-dash.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "ninja-vs-evilcorp",
    "title": "Ninja vs Evilcorp",
    "category": "acao",
    "description": "Infiltre-se no arranha-céu da corporação maligna usando técnicas ninja.",
    "cover": "assets/covers/ninja-vs-evilcorp.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "pacman-fps",
    "title": "Pac-Man FPS 3D",
    "category": "acao",
    "description": "Vivencie o labirinto de Pac-Man em primeira pessoa fugindo dos fantasmas.",
    "cover": "assets/covers/pacman-fps.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "portal-flash",
    "title": "Portal: The Flash Version",
    "category": "puzzle",
    "description": "A recriação 2D genial de Portal com arma de portais e física de impulso.",
    "cover": "assets/covers/portal-flash.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "plants-vs-zombies-web",
    "title": "Plants vs Zombies",
    "category": "puzzle",
    "description": "Plante girassóis e ervilhas no jardim para deter o apocalipse zumbi.",
    "cover": "assets/covers/plants-vs-zombies-web.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "rolly-vortex",
    "title": "Rolly Vortex",
    "category": "arcade",
    "description": "Role a bola por um túnel espiral evitando bloqueios que giram no ritmo.",
    "cover": "assets/covers/rolly-vortex.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "sandboxels",
    "title": "Sandboxels",
    "category": "puzzle",
    "description": "Simulador de física de partículas: combine elementos, fogo, água e reações químicas.",
    "cover": "assets/covers/sandboxels.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "short-life-2",
    "title": "Short Life 2",
    "category": "acao",
    "description": "Guie o personagem pelas armadilhas mais absurdas e dolorosas já criadas.",
    "cover": "assets/covers/short-life-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "short-ride",
    "title": "Short Ride",
    "category": "acao",
    "description": "Pedale e pilote veículos bizarros enquanto desvia de machados e bombas.",
    "cover": "assets/covers/short-ride.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "super-mario-63",
    "title": "Super Mario 63",
    "category": "arcade",
    "description": "Uma obra-prima do Flash: a fusão impecável de Super Mario 64 e Sunshine em 2D.",
    "cover": "assets/covers/super-mario-63.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "sonic-the-hedgehog",
    "title": "Sonic the Hedgehog",
    "category": "arcade",
    "description": "A lenda veloz da Sega: colete anéis e derrote Dr. Robotnik em alta velocidade.",
    "cover": "assets/covers/sonic-the-hedgehog.svg",
    "platform": "retro",
    "popular": true,
    "recent": true
  },
  {
    "id": "spelunky-html5",
    "title": "Spelunky Classic",
    "category": "acao",
    "description": "Explore cavernas perigosas cheias de armadilhas, morcegos e tesouros de ouro.",
    "cover": "assets/covers/spelunky-html5.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "stick-archers-battle",
    "title": "Stick Archers Battle",
    "category": "acao",
    "description": "Duelos de arquearia com flechas especiais, vento dinâmico e mira calculada.",
    "cover": "assets/covers/stick-archers-battle.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "stickman-boost",
    "title": "Stickman Boost",
    "category": "acao",
    "description": "Corra em pistas aéreas usando planadores e molas gigantes de aceleração.",
    "cover": "assets/covers/stickman-boost.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "stickman-dismount",
    "title": "Stickman Dismount",
    "category": "arcade",
    "description": "Arremesse o boneco de palito por escadas e despenhadeiros para quebrar ossos.",
    "cover": "assets/covers/stickman-dismount.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "stickman-epic-battle",
    "title": "Stickman Epic Battle",
    "category": "acao",
    "description": "Lute contra mestres de artes marciais usando socos e voadoras devastadoras.",
    "cover": "assets/covers/stickman-epic-battle.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "stickman-golf",
    "title": "Stickman Golf",
    "category": "arcade",
    "description": "Acerte a bolinha de golfe em tacadas perfeitas através de colinas coloridas.",
    "cover": "assets/covers/stickman-golf.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "storm-the-house-2",
    "title": "Storm the House 2",
    "category": "acao",
    "description": "Defenda sua casa com atiradores, silos de mísseis e cercas elétricas.",
    "cover": "assets/covers/storm-the-house-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "tank-trouble-2",
    "title": "Tank Trouble 2",
    "category": "acao",
    "description": "Duelo épico de tanques em labirintos com balas que ricocheteiam na parede.",
    "cover": "assets/covers/tank-trouble-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "tanuki-sunset",
    "title": "Tanuki Sunset",
    "category": "arcade",
    "description": "Desça montanhas no skate como um guaxinim elegante ao som de lofi hip-hop.",
    "cover": "assets/covers/tanuki-sunset.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "the-final-earth-2",
    "title": "The Final Earth 2",
    "category": "puzzle",
    "description": "Construa uma colônia espacial próspera em planetas flutuantes no espaço.",
    "cover": "assets/covers/the-final-earth-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "tube-jumpers",
    "title": "Tube Jumpers",
    "category": "arcade",
    "description": "Pule na boia aquática para não cair na água cheia de tubarões e pedras.",
    "cover": "assets/covers/tube-jumpers.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "wordle-classic",
    "title": "Wordle Clássico",
    "category": "puzzle",
    "description": "Adivinhe a palavra secreta de cinco letras em apenas seis tentativas.",
    "cover": "assets/covers/wordle-classic.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "zombs-royale",
    "title": "Zombs Royale 2D",
    "category": "acao",
    "description": "Battle Royale 2D frenético: aterrisse de paraquedas e seja o último sobrevivente.",
    "cover": "assets/covers/zombs-royale.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "achievement-unlocked",
    "title": "Achievement Unlocked",
    "category": "puzzle",
    "description": "Desbloqueie todas as 100 conquistas bizarras pulando com o elefante azul.",
    "cover": "assets/covers/achievement-unlocked.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "adrenaline-challenge",
    "title": "Adrenaline Challenge",
    "category": "acao",
    "description": "Manobras acrobáticas radicais com motos de motocross em tubos suspensos.",
    "cover": "assets/covers/adrenaline-challenge.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "anti-terrorist-rush",
    "title": "Anti Terrorist Rush",
    "category": "acao",
    "description": "Operação de resgate tático com esquadrões de elite contra insurgentes.",
    "cover": "assets/covers/anti-terrorist-rush.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "asteroids-arcade",
    "title": "Asteroids Arcade",
    "category": "retro",
    "description": "O clássico espacial de 1979: destrua asteroides gigantes no vácuo do espaço.",
    "cover": "assets/covers/asteroids-arcade.svg",
    "platform": "retro",
    "popular": false,
    "recent": true
  },
  {
    "id": "battle-for-gondor",
    "title": "Battle for Gondor",
    "category": "acao",
    "description": "Defenda os portões da cidade sagrada contra orcs e catapultas de guerra.",
    "cover": "assets/covers/battle-for-gondor.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "champion-archer",
    "title": "Champion Archer",
    "category": "acao",
    "description": "Ajuste o ângulo e a potência do arco para acertar os arqueiros inimigos.",
    "cover": "assets/covers/champion-archer.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "circloo",
    "title": "circlO",
    "category": "puzzle",
    "description": "Quebra-cabeça de física circular onde o círculo cresce a cada esfera coletada.",
    "cover": "assets/covers/circloo.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "city-blocks-2",
    "title": "City Blocks 2",
    "category": "puzzle",
    "description": "Combine construções idênticas para evoluir sua pequena vila em uma metrópole.",
    "cover": "assets/covers/city-blocks-2.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "core-ball",
    "title": "Core Ball",
    "category": "arcade",
    "description": "Espete os alfinetes na esfera giratória central sem que eles se toquem.",
    "cover": "assets/covers/core-ball.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "csgo-case-clicker",
    "title": "CS:GO Case Clicker",
    "category": "arcade",
    "description": "Abra caixas raras de CS:GO, ganhe facas lendárias e monte seu inventário.",
    "cover": "assets/covers/csgo-case-clicker.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "defend-the-tank",
    "title": "Defend The Tank",
    "category": "acao",
    "description": "Comande soldados especializados protegendo seu tanque de guerra em comboio.",
    "cover": "assets/covers/defend-the-tank.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "double-wires",
    "title": "Double Wires",
    "category": "arcade",
    "description": "Lance teias de aranha para balançar como o Homem-Aranha entre os obstáculos.",
    "cover": "assets/covers/double-wires.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "draw-the-hill",
    "title": "Draw The Hill",
    "category": "arcade",
    "description": "Desenhe o caminho do carro na tela para evitar buracos e colinas pontudas.",
    "cover": "assets/covers/draw-the-hill.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "duke-dashington",
    "title": "Duke Dashington",
    "category": "arcade",
    "description": "Aventureiro veloz com apenas 10 segundos para escapar de templos desabando.",
    "cover": "assets/covers/duke-dashington.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "edge-surf",
    "title": "Edge Surf",
    "category": "arcade",
    "description": "O clássico de surfe no gelo com ondas radicais, ilhas e o polvo gigante.",
    "cover": "assets/covers/edge-surf.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "finns-food-machine",
    "title": "Finn's Food Machine",
    "category": "puzzle",
    "description": "Construa engenhocas mirabolantes para alimentar o aventureiro Finn.",
    "cover": "assets/covers/finns-food-machine.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "friendly-fire",
    "title": "Friendly Fire",
    "category": "acao",
    "description": "Tiroteios cooperativos táticos onde cada tiro desviado pode acertar um aliado.",
    "cover": "assets/covers/friendly-fire.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "gravity-soccer",
    "title": "Gravity Soccer",
    "category": "puzzle",
    "description": "Destrua blocos e use a gravidade para chutar a bola direto para o gol.",
    "cover": "assets/covers/gravity-soccer.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "hacker-typer",
    "title": "Hacker Typer",
    "category": "retro",
    "description": "Digite qualquer tecla como um hacker profissional de cinema invadindo servidores.",
    "cover": "assets/covers/hacker-typer.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "hex-empire",
    "title": "Hex Empire",
    "category": "puzzle",
    "description": "Conquiste capitais rivais em um mapa de blocos hexagonais estratégicos.",
    "cover": "assets/covers/hex-empire.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "icys-purple-head",
    "title": "Icy Purple Head",
    "category": "puzzle",
    "description": "Alterne entre gelo escorregadio e borracha adesiva para alcançar a caixa.",
    "cover": "assets/covers/icys-purple-head.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "kart-fight-io",
    "title": "Kart Fight.io",
    "category": "arcade",
    "description": "Empurre os outros pilotos de kart para fora da arena para crescer de tamanho.",
    "cover": "assets/covers/kart-fight-io.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "klocki",
    "title": "Klocki",
    "category": "puzzle",
    "description": "Quebra-cabeça relaxante de conectar linhas e padrões com trilha ambiente suave.",
    "cover": "assets/covers/klocki.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "linquest",
    "title": "Linquest",
    "category": "arcade",
    "description": "Aventura de plataforma retrô com gráficos pixelados e tesouros lendários.",
    "cover": "assets/covers/linquest.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "matrix-rampage",
    "title": "Matrix Rampage",
    "category": "acao",
    "description": "Lute contra centenas de Agentes Smith no topo de prédios usando artes marciais.",
    "cover": "assets/covers/matrix-rampage.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "mini-stilts",
    "title": "Mini Stilts",
    "category": "arcade",
    "description": "Ande sobre pernas de pau esticáveis para desviar de poços de lava e espinhos.",
    "cover": "assets/covers/mini-stilts.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "mini-putt",
    "title": "Mini Putt Clássico",
    "category": "classico",
    "description": "O clássico minigolfe em campos verdes com moinhos de vento e rampas.",
    "cover": "assets/covers/mini-putt.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "n-gon",
    "title": "n-gon",
    "category": "acao",
    "description": "Atirador dimensional em arena com armas de física quântica e partículas neon.",
    "cover": "assets/covers/n-gon.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "osu-web",
    "title": "osu! Web",
    "category": "arcade",
    "description": "Clique nos círculos no ritmo da música com precisão e velocidade insanas.",
    "cover": "assets/covers/osu-web.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "packabunchas",
    "title": "Packabunchas",
    "category": "puzzle",
    "description": "Encaixe monstrinhos de formatos diferentes dentro da nave de resgate.",
    "cover": "assets/covers/packabunchas.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "particle-clicker",
    "title": "Particle Clicker",
    "category": "puzzle",
    "description": "Administre o grande colisor de hádrons e descubra novas partículas subatômicas.",
    "cover": "assets/covers/particle-clicker.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "quake-1k",
    "title": "Quake 1K",
    "category": "acao",
    "description": "Incrível demake 3D de Quake em apenas um kilobyte de código JavaScript.",
    "cover": "assets/covers/quake-1k.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "roadblocks",
    "title": "Roadblocks",
    "category": "puzzle",
    "description": "Deslize cubos de concreto para criar pontes e caminhos seguros na estrada.",
    "cover": "assets/covers/roadblocks.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "this-is-sand",
    "title": "This Is Sand",
    "category": "puzzle",
    "description": "Deixe a areia colorida escorrer para criar paisagens e montanhas artísticas.",
    "cover": "assets/covers/this-is-sand.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "senya-and-oscar-2",
    "title": "Senya & Oscar 2",
    "category": "acao",
    "description": "O gato mágico e o bravo cavaleiro enfrentando monstros em florestas encantadas.",
    "cover": "assets/covers/senya-and-oscar-2.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "shift",
    "title": "Shift",
    "category": "puzzle",
    "description": "Aperte Shift para inverter preto e branco, virando o chão de cabeça para baixo.",
    "cover": "assets/covers/shift.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "skyblock-2d",
    "title": "Skyblock 2D",
    "category": "puzzle",
    "description": "Sobreviva em uma pequena ilha flutuante com apenas uma árvore e um balde.",
    "cover": "assets/covers/skyblock-2d.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "solitaire-classic",
    "title": "Paciência Clássica",
    "category": "classico",
    "description": "O clássico jogo de cartas: organize as fileiras em ordem do Ás até o Rei.",
    "cover": "assets/covers/solitaire-classic.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "sort-the-court",
    "title": "Sort the Court",
    "category": "puzzle",
    "description": "Governe seu reino dizendo apenas Sim ou Não para plebeus, magos e dragões.",
    "cover": "assets/covers/sort-the-court.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "tactical-assassin-2",
    "title": "Tactical Assassin 2",
    "category": "acao",
    "description": "Missões de sniper calculadas com rifle de precisão e alvos silenciosos.",
    "cover": "assets/covers/tactical-assassin-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "tower-master",
    "title": "Tower Master",
    "category": "arcade",
    "description": "Solte os andares do prédio no momento exato para construir a torre mais alta.",
    "cover": "assets/covers/tower-master.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "townscaper-web",
    "title": "Townscaper Web",
    "category": "puzzle",
    "description": "Construa cidades pitorescas à beira-mar com pontes, torres e arcos de conto de fadas.",
    "cover": "assets/covers/townscaper-web.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "trimps",
    "title": "Trimps",
    "category": "puzzle",
    "description": "RPG estratégico incremental: recrute criaturas e explore mapas infinitos.",
    "cover": "assets/covers/trimps.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "up-left-out",
    "title": "Up Left Out",
    "category": "puzzle",
    "description": "Desbloqueie todos os pinos deslizando elementos de madeira em paz e tranquilidade.",
    "cover": "assets/covers/up-left-out.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "wolfenstein-3d",
    "title": "Wolfenstein 3D",
    "category": "retro",
    "description": "O pioneiro dos jogos de tiro em primeira pessoa: escape do castelo nazista.",
    "cover": "assets/covers/wolfenstein-3d.svg",
    "platform": "retro",
    "popular": true,
    "recent": true
  },
  {
    "id": "yoshi-fabrication",
    "title": "Yoshi Fabrication",
    "category": "arcade",
    "description": "Crie e jogue fases de plataforma personalizadas estrelando o simpático Yoshi.",
    "cover": "assets/covers/yoshi-fabrication.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "10-minutes-till-dawn",
    "title": "10 Minutes Till Dawn",
    "category": "acao",
    "description": "Sobreviva 10 minutos contra levas infinitas de monstros das trevas com armas mágicas.",
    "cover": "assets/covers/10-minutes-till-dawn.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "8-ball-billiards",
    "title": "Sinuca 8 Ball Clássica",
    "category": "classico",
    "description": "Mire, calcule o efeito e encaçape todas as bolas de sinuca com maestria.",
    "cover": "assets/covers/8-ball-billiards.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "doge-miner",
    "title": "Doge Miner",
    "category": "arcade",
    "description": "Minere dogecoins até comprar sua primeira nave espacial para a Lua!",
    "cover": "assets/covers/doge-miner.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "fullscreen-mario",
    "title": "Super Mario Bros Full",
    "category": "retro",
    "description": "O clássico Super Mario Bros do Nintendinho jogável em tela cheia no navegador.",
    "cover": "assets/covers/fullscreen-mario.svg",
    "platform": "retro",
    "popular": true,
    "recent": true
  },
  {
    "id": "black-knight",
    "title": "Black Knight",
    "category": "acao",
    "description": "Colete impostos e enfrente multidões rebeldes a mando do rei ganancioso.",
    "cover": "assets/covers/black-knight.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "cell-machine",
    "title": "Cell Machine",
    "category": "puzzle",
    "description": "Posicione células motoras, rotativas e destrutivas para resolver quebra-cabeças lógicos.",
    "cover": "assets/covers/cell-machine.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "deal-or-no-deal",
    "title": "Topa ou Não Topa",
    "category": "classico",
    "description": "Escolha sua maleta da sorte e negocie ofertas milionárias com o banqueiro.",
    "cover": "assets/covers/deal-or-no-deal.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "flappy-2048",
    "title": "Flappy 2048",
    "category": "arcade",
    "description": "A fusão hilária de Flappy Bird com 2048: voe e combine blocos numéricos.",
    "cover": "assets/covers/flappy-2048.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "google-solitaire",
    "title": "Google Paciência",
    "category": "classico",
    "description": "A versão limpa e colorida de paciência criada pelo Google com dois níveis.",
    "cover": "assets/covers/google-solitaire.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "super-smash-flash-2",
    "title": "Super Smash Flash",
    "category": "acao",
    "description": "Lute como Mario, Sonic, Goku e Naruto nas arenas clássicas de Smash.",
    "cover": "assets/covers/super-smash-flash-2.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "stickman-survival",
    "title": "Stickman Survival",
    "category": "acao",
    "description": "Atire contra ondas de inimigos armados e resista o máximo de tempo na trincheira.",
    "cover": "assets/covers/stickman-survival.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "indian-truck-simulator",
    "title": "Indian Truck 3D",
    "category": "arcade",
    "description": "Dirija caminhões decorados por estradas de montanha perigosas com cargas pesadas.",
    "cover": "assets/covers/indian-truck-simulator.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "geometry-dash",
    "title": "Geometry Dash",
    "category": "arcade",
    "description": "Pule e voe pelo perigo com ritmo musical em fases geométricas cheias de espinhos.",
    "cover": "assets/covers/geometry-dash.svg",
    "platform": "mobile",
    "popular": true,
    "recent": true
  },
  {
    "id": "endless-war-3",
    "title": "Endless War 3",
    "category": "acao",
    "description": "Batalhas históricas da Segunda Guerra Mundial com tanques e fuzileiros.",
    "cover": "assets/covers/endless-war-3.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "kitten-cannon",
    "title": "Kitten Cannon",
    "category": "arcade",
    "description": "Dispare o gatinho pelo canhão e atinja dinamites para voar quilômetros!",
    "cover": "assets/covers/kitten-cannon.svg",
    "platform": "flash",
    "popular": true,
    "recent": true
  },
  {
    "id": "krunker-web",
    "title": "Krunker.io",
    "category": "acao",
    "description": "FPS veloz em primeira pessoa estilo pixelado com saltos deslizantes e rifles.",
    "cover": "assets/covers/krunker-web.svg",
    "platform": "arcade",
    "popular": true,
    "recent": true
  },
  {
    "id": "idle-shark",
    "title": "Idle Shark",
    "category": "arcade",
    "description": "Controle um tubarão feroz nas profundezas do oceano e devore cardumes.",
    "cover": "assets/covers/idle-shark.svg",
    "platform": "flash",
    "popular": false,
    "recent": true
  },
  {
    "id": "dragon-vs-bricks",
    "title": "Dragon vs Bricks",
    "category": "arcade",
    "description": "Guie o dragão de esferas quebrando blocos numerados pelo caminho.",
    "cover": "assets/covers/dragon-vs-bricks.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "doctor-acorn-2",
    "title": "Doctor Acorn 2",
    "category": "puzzle",
    "description": "Ajude a bolota médica a voar de paraquedas e resgatar pássaros doentes.",
    "cover": "assets/covers/doctor-acorn-2.svg",
    "platform": "mobile",
    "popular": false,
    "recent": true
  },
  {
    "id": "froggys-battle",
    "title": "Froggy's Battle",
    "category": "arcade",
    "description": "O sapinho guerreiro enfrentando monstros com combos e espadadas giratórias.",
    "cover": "assets/covers/froggys-battle.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  },
  {
    "id": "golf-classic",
    "title": "Golf Clássico",
    "category": "classico",
    "description": "Dê tacadas precisas lendo o relevo do campo e a força do vento.",
    "cover": "assets/covers/golf-classic.svg",
    "platform": "arcade",
    "popular": false,
    "recent": true
  }
];
const labels={todos:'Todos os jogos',recentes:'Novos jogos',populares:'Em alta',favoritos:'Meus favoritos',arcade:'Arcade',puzzle:'Puzzle',classico:'Clássicos',acao:'Ação',retro:'Retrô',leves:'Jogos leves',mobile:'📱 Mobile → PC',console:'🎮 Console Port',flash:'⚡ Estilo Flash'};
const HEAVY_GAMES = new Set(['slope','mario64-cleanroom','zelda-tribute','hexgl','underrun','astray','orb-island','xx142']);
const FEATURED_GAMES = new Set(['slope','gta-san-andreas','fireboy-and-watergirl','bad-ice-cream','moto-x3m','papas-pizzeria','subway-surfers','age-of-war','vex-3','super-mario-63','bloxorz','duck-life']);

let currentCat='todos', searchQ='', favorites=[], recentPlayed=[];
try { const stored=JSON.parse(localStorage.getItem('bundix_favorites')||'[]'); if(Array.isArray(stored)) favorites=[...new Set(stored.filter(id=>GAMES_DATA.some(g=>g.id===id)))]; } catch {}
try { const recents=JSON.parse(localStorage.getItem('bundix_recent_history')||'[]'); if(Array.isArray(recents)) recentPlayed=recents.filter(id=>GAMES_DATA.some(g=>g.id===id)); } catch {}

function recordRecent(id) {
  if (!id) return;
  recentPlayed = [id, ...recentPlayed.filter(x => x !== id)].slice(0, 10);
  try { localStorage.setItem('bundix_recent_history', JSON.stringify(recentPlayed)); } catch {}
  renderRecentPlayed();
}

function renderRecentPlayed() {
  const section = document.getElementById('recent-played-section');
  const container = document.getElementById('recent-list');
  if (!section || !container) return;
  if (!recentPlayed.length || Boolean(searchQ.trim()) || currentCat !== 'todos') {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  container.replaceChildren();
  for (const id of recentPlayed) {
    const g = GAMES_DATA.find(x => x.id === id);
    if (!g) continue;
    const route = `games/${encodeURIComponent(g.id)}/index.html`;
    const item = document.createElement('a');
    item.className = 'recent-card';
    item.href = route;
    item.title = `Continuar jogando ${g.title}`;
    item.innerHTML = `
      <img src="${g.cover || `assets/covers/${g.id}.png`}" alt="${g.title}" width="40" height="40" loading="lazy">
      <div class="recent-info">
        <strong>${g.title}</strong>
        <span><svg class="icon"><use href="assets/icons.svg#play"></use></svg>Continuar</span>
      </div>
    `;
    item.addEventListener('click', () => recordRecent(g.id));
    container.appendChild(item);
  }
}

const clearBtn = document.getElementById('clear-recent');
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    recentPlayed = [];
    try { localStorage.removeItem('bundix_recent_history'); } catch {}
    renderRecentPlayed();
  });
}

const normalize=text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

function filterGames(){return GAMES_DATA.filter(g=>{
const matches=currentCat==='todos'||(currentCat==='favoritos'?favorites.includes(g.id):currentCat==='recentes'?g.recent:currentCat==='populares'?g.popular:currentCat==='leves'?!HEAVY_GAMES.has(g.id):currentCat==='mobile'||currentCat==='console'||currentCat==='flash'?g.platform===currentCat:g.category===currentCat);
return matches&&normalize(`${g.title} ${g.description} ${labels[g.category] || ''}`).includes(normalize(searchQ.trim()));
});}

function renderAll(focusFavorite) {
  const grid = document.getElementById('games-grid');
  const games = filterGames();
  grid.replaceChildren();
  document.querySelector('.welcome').hidden = Boolean(searchQ.trim()) || currentCat !== 'todos';
  document.getElementById('grid-title').textContent = searchQ.trim() ? 'Resultado da busca' : labels[currentCat];
  document.getElementById('grid-counter').textContent = `${games.length} ${games.length === 1 ? 'jogo' : 'jogos'}`;
  document.getElementById('fav-count').textContent = favorites.length;
  
  renderRecentPlayed();

  for (const g of games) {
    const card = document.createElement('article');
    const isFeatured = FEATURED_GAMES.has(g.id) && !searchQ.trim() && (currentCat === 'todos' || currentCat === 'populares');
    card.className = isFeatured ? 'game-card featured-card' : 'game-card';
    const fav = favorites.includes(g.id);
    const route = `games/${encodeURIComponent(g.id)}/index.html`;
    const badge = isFeatured
      ? '<span class="new-badge featured-badge">🔥 DESTAQUE</span>'
      : (g.recreation
        ? '<span class="new-badge recreation-badge">RECRIAÇÃO</span>'
        : (g.popular
          ? '<span class="new-badge popular-badge">EM ALTA</span>'
          : (g.recent ? '<span class="new-badge">NOVO</span>' : '')));
    card.innerHTML = `
      <a href="${route}" class="game-thumb-link" title="${g.title} — ${g.description}">
        <img class="game-cover" src="${g.cover || `assets/covers/${g.id}.png`}" alt="${g.title}" width="256" height="256" decoding="async">
        <span class="play-overlay" aria-hidden="true"><span><svg class="icon"><use href="assets/icons.svg#play"></use></svg></span></span>${badge}
      </a>
      <button class="btn-favorite ${fav ? 'active' : ''}" data-id="${g.id}" aria-label="${fav ? 'Remover' : 'Adicionar'} ${g.title} ${fav ? 'dos' : 'aos'} favoritos" aria-pressed="${fav}"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#star"></use></svg></button>
      <div class="game-details"><a class="game-name" href="${route}" title="${g.title}">${g.title}</a><div class="game-meta"><span>${labels[g.category]}</span><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#arrow-up-right"></use></svg></div></div>`;
    
    card.querySelector('.game-thumb-link').addEventListener('click', () => recordRecent(g.id));
    card.querySelector('.game-name').addEventListener('click', () => recordRecent(g.id));
    card.querySelector('button').addEventListener('click', () => {
      favorites = fav ? favorites.filter(id => id !== g.id) : [...favorites, g.id];
      try { localStorage.setItem('bundix_favorites', JSON.stringify(favorites)); } catch {}
      renderAll(g.id);
    });
    grid.append(card);
  }
  if (!games.length) {
    grid.innerHTML = '<div class="empty-state"><h2>Nenhum jogo por aqui ainda</h2><p>Tente outra busca ou explore todos os jogos.</p><button type="button">Ver todos os jogos</button></div>';
    grid.querySelector('button').addEventListener('click', () => {
      searchQ = '';
      document.getElementById('search-input').value = '';
      selectCategory('todos');
    });
  }
  if (focusFavorite) {
    (grid.querySelector(`[data-id="${focusFavorite}"]`) || grid.querySelector('button') || document.querySelector('[data-cat="favoritos"]')).focus();
  }
}

function selectCategory(cat){currentCat=cat;document.querySelectorAll('[data-cat]').forEach(b=>{const active=b.dataset.cat===cat;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});renderAll();}
document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>selectCategory(b.dataset.cat)));
document.getElementById('search-input').addEventListener('input',e=>{searchQ=e.target.value;if(searchQ.trim().toLowerCase().includes('samuel')){if(window.triggerEasterEgg)window.triggerEasterEgg();}renderAll();});
document.getElementById('search-form').addEventListener('submit',e=>{e.preventDefault();if(searchQ.trim().toLowerCase().includes('samuel')){if(window.triggerEasterEgg)window.triggerEasterEgg();}renderAll();});
document.getElementById('random-game').addEventListener('click',()=>{
  const filtered=filterGames(), games=filtered.length?filtered:GAMES_DATA;
  const picked = games[Math.floor(Math.random()*games.length)];
  recordRecent(picked.id);
  location.href=`games/${encodeURIComponent(picked.id)}/index.html`;
});

const initialFilter = new URLSearchParams(location.search).get('filtro');
if(initialFilter && Object.prototype.hasOwnProperty.call(labels,initialFilter))selectCategory(initialFilter);
else renderAll();
