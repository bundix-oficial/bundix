const GAMES_DATA = [
{"id": "gta-san-andreas", "title": "GTA: San Andreas 2D", "category": "acao", "description": "Explore Los Santos, dirija veículos, fuja da polícia e domine as ruas neste demake 2D clássico.", "recent": true, "popular": true, "cover": "assets/covers/gta-san-andreas.svg", "platform": "console"},
{"id": "tower-building", "title": "Torre Maluca", "category": "arcade", "description": "Empilhe os andares e construa uma torre colorida. Clique ou toque para jogar.", "recent": true, "cover": "assets/covers/tower-building.png", "platform": "mobile"},
{"id": "pacman", "title": "Pac-Man HTML5", "category": "classico", "description": "Percorra o labirinto, coma os pontinhos e desvie dos fantasmas. Recriação em HTML5.", "recent": true, "cover": "assets/covers/pacman.png", "platform": "flash"},
{"id": "boulderdash", "title": "Caça aos Diamantes", "category": "arcade", "description": "Explore cavernas, colete diamantes e encontre a saída. Recriação de Boulderdash.", "recent": true, "cover": "assets/covers/boulderdash.png", "platform": "console"},
{"id": "two-colors", "title": "Duas Cores — 0h h1", "category": "puzzle", "description": "Um quebra-cabeça de lógica com duas cores e desafios progressivos.", "recent": true, "cover": "assets/covers/two-colors.png", "platform": "mobile"},
{"id": "breaklock", "title": "Liga-Pontos — BreakLock", "category": "puzzle", "description": "Descubra a sequência secreta ligando os pontos. Jogo de raciocínio com interface em português.", "recent": true, "cover": "assets/covers/breaklock.png", "platform": "mobile"},
{"id": "mario-html5", "title": "Infinite Mario", "category": "retro", "description": "Recriação HTML de Infinite Mario, com fases de plataforma.", "recent": true, "recreation": true, "platform": "console"},
{"id": "mario64-cleanroom", "title": "Mario 64 — Clean Room", "category": "retro", "description": "Versão de fãs para navegador com texturas e sons recriados.", "recent": true, "recreation": true, "platform": "console"},
{"id": "zelda-tribute", "title": "Zelda 30 Year Tribute", "category": "retro", "description": "Recriação 3D de fãs de The Legend of Zelda.", "recent": true, "recreation": true, "platform": "console"},
{"id": "bombergirl", "title": "Bombergirl", "category": "retro", "description": "Recriação no estilo Bomberman, com oponentes controlados pelo computador.", "recent": true, "recreation": true, "platform": "console"},
{"id": "retro-racer", "title": "Retro Racer", "category": "retro", "description": "Corrida HTML com pistas e curvas no estilo OutRun.", "recent": true, "recreation": true, "platform": "console"},
{id:'flappy-bird',title:'Flappy Bird',category:'arcade',description:'Recriação HTML: bata as asas e passe entre os canos.',recent:true,popular:true,platform:'mobile'},
{id:'slope',title:'Slope 3D',category:'arcade',description:'Uma pista infinita em alta velocidade.',popular:true,cover:'assets/covers/slope-play.png',platform:'mobile'},
{id:'clumsy-bird',title:'Clumsy Bird',category:'arcade',description:'Bata as asas e desvie dos canos.',recent:true,platform:'mobile'},
{id:'tetris',title:'Tetris',category:'puzzle',description:'Encaixe as peças e complete as linhas.',recent:true,platform:'flash'},
{id:'snake',title:'Cobrinha Neon',category:'classico',description:'Coma as maçãs e faça a cobra crescer.',popular:true,cover:'assets/covers/snake.svg',platform:'flash'},
{id:'hextris',title:'Hextris',category:'puzzle',description:'Gire o hexágono e combine as cores.',recent:true,platform:'flash'},
{id:'breakout',title:'Breakout',category:'arcade',description:'Rebata a bola e destrua os blocos.',recent:true,platform:'flash'},
{id:'2048',title:'2048 Neon',category:'puzzle',description:'Combine os números até chegar a 2048.',popular:true,cover:'assets/covers/2048.svg',platform:'mobile'},
{id:'platformer',title:'Salto Cibernético',category:'acao',description:'Pule plataformas e colete moedas.',popular:true,cover:'assets/covers/platformer.svg',platform:'flash'},
{id:'pong',title:'Pong vs CPU',category:'classico',description:'Desafie o computador no tênis de mesa.',cover:'assets/covers/pong.svg',platform:'flash'},
{id:'memory',title:'Jogo da Memória',category:'puzzle',description:'Encontre todos os pares de cartas.',cover:'assets/covers/memory.svg',platform:'flash'}
];
const labels={todos:'Todos os jogos',recentes:'Novos jogos',populares:'Em alta',favoritos:'Meus favoritos',arcade:'Arcade',puzzle:'Puzzle',classico:'Clássicos',acao:'Ação',retro:'Retrô',leves:'Jogos leves',mobile:'📱 Mobile → PC',console:'🎮 Console Port',flash:'⚡ Estilo Flash'};
const HEAVY_GAMES = new Set(['slope','mario64-cleanroom','zelda-tribute']);
let currentCat='todos', searchQ='', favorites=[];
try { const stored=JSON.parse(localStorage.getItem('bundix_favorites')||'[]'); if(Array.isArray(stored)) favorites=[...new Set(stored.filter(id=>GAMES_DATA.some(g=>g.id===id)))]; } catch {}
const normalize=text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function filterGames(){return GAMES_DATA.filter(g=>{
const matches=currentCat==='todos'||(currentCat==='favoritos'?favorites.includes(g.id):currentCat==='recentes'?g.recent:currentCat==='populares'?g.popular:currentCat==='leves'?!HEAVY_GAMES.has(g.id):currentCat==='mobile'||currentCat==='console'||currentCat==='flash'?g.platform===currentCat:g.category===currentCat);
return matches&&normalize(`${g.title} ${g.description} ${labels[g.category]}`).includes(normalize(searchQ.trim()));
});}

function renderAll(focusFavorite) {
  const grid = document.getElementById('games-grid');
  const games = filterGames();
  grid.replaceChildren();
  document.querySelector('.welcome').hidden = Boolean(searchQ.trim()) || currentCat !== 'todos';
  document.getElementById('grid-title').textContent = searchQ.trim() ? 'Resultado da busca' : labels[currentCat];
  document.getElementById('grid-counter').textContent = `${games.length} ${games.length === 1 ? 'jogo' : 'jogos'}`;
  document.getElementById('fav-count').textContent = favorites.length;
  for (const g of games) {
    const card = document.createElement('article');
    card.className = 'game-card';
    const fav = favorites.includes(g.id);
    const route = `play.html?game=${encodeURIComponent(g.id)}`;
    const badge = g.recreation
      ? '<span class="new-badge recreation-badge">RECRIAÇÃO</span>'
      : g.popular
        ? '<span class="new-badge popular-badge">EM ALTA</span>'
        : g.recent ? '<span class="new-badge">NOVO</span>' : '';
    card.innerHTML = `
      <a href="${route}" class="game-thumb-link" title="${g.title} — ${g.description}">
        <img class="game-cover" src="${g.cover || `assets/covers/${g.id}.png`}" alt="${g.title}" width="256" height="256" decoding="async">
        <span class="play-overlay" aria-hidden="true"><span><svg class="icon"><use href="assets/icons.svg#play"></use></svg></span></span>${badge}
      </a>
      <button class="btn-favorite ${fav ? 'active' : ''}" data-id="${g.id}" aria-label="${fav ? 'Remover' : 'Adicionar'} ${g.title} ${fav ? 'dos' : 'aos'} favoritos" aria-pressed="${fav}"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#star"></use></svg></button>
      <div class="game-details"><a class="game-name" href="${route}" title="${g.title}">${g.title}</a><div class="game-meta"><span>${labels[g.category]}</span><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#arrow-up-right"></use></svg></div></div>`;
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
document.getElementById('random-game').addEventListener('click',()=>{const filtered=filterGames(), games=filtered.length?filtered:GAMES_DATA;location.href=`play.html?game=${encodeURIComponent(games[Math.floor(Math.random()*games.length)].id)}`;});
const initialFilter = new URLSearchParams(location.search).get('filtro');
if(initialFilter && Object.prototype.hasOwnProperty.call(labels,initialFilter))selectCategory(initialFilter);
else renderAll();
