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
  }
];
const labels={todos:'Todos os jogos',recentes:'Novos jogos',populares:'Em alta',favoritos:'Meus favoritos',arcade:'Arcade',puzzle:'Puzzle',classico:'Clássicos',acao:'Ação',retro:'Retrô',leves:'Jogos leves',mobile:'📱 Mobile → PC',console:'🎮 Console Port',flash:'⚡ Estilo Flash'};
const HEAVY_GAMES = new Set(['slope','mario64-cleanroom','zelda-tribute','hexgl','underrun','astray','orb-island','xx142']);
const FEATURED_GAMES = new Set(['slope','gta-san-andreas','mario64-cleanroom','hexgl','space-invaders','underrun']);

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

// === MODO ESCOLA / BOSS KEY (TECLA B) ===
const bossOverlay = document.getElementById('boss-overlay');
const bossKeyBtn = document.getElementById('boss-key-btn');
const bossCloseBtn = document.getElementById('boss-close-btn');

function toggleBossMode(force) {
  if (!bossOverlay) return;
  const isHidden = bossOverlay.hidden;
  const shouldOpen = typeof force === 'boolean' ? force : isHidden;
  bossOverlay.hidden = !shouldOpen;
  bossOverlay.setAttribute('aria-hidden', String(!shouldOpen));
  document.title = shouldOpen ? 'Wikipédia — História da Ciência e Tecnologia' : 'PLAYNOVA — Jogue o futuro';
}

if (bossKeyBtn) bossKeyBtn.addEventListener('click', () => toggleBossMode());
if (bossCloseBtn) bossCloseBtn.addEventListener('click', () => toggleBossMode(false));

window.addEventListener('keydown', e => {
  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
  if (activeTag === 'input' || activeTag === 'textarea') return;

  if (e.key === 'b' || e.key === 'B') {
    e.preventDefault();
    toggleBossMode();
  } else if (e.key === 'Escape' && bossOverlay && !bossOverlay.hidden) {
    e.preventDefault();
    toggleBossMode(false);
  }
});

const initialFilter = new URLSearchParams(location.search).get('filtro');
if(initialFilter && Object.prototype.hasOwnProperty.call(labels,initialFilter))selectCategory(initialFilter);
else renderAll();
