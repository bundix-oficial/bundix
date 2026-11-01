// Jogo da Memória - BUNDIX
const board = document.getElementById('memory-board');
const movesEl = document.getElementById('moves-count');
const timerEl = document.getElementById('timer-display');
const pairsLeftEl = document.getElementById('pairs-left');
const btnRestart = document.getElementById('btn-restart');

const ICONS = ['🚀', '💎', '👾', '⚡', '🎮', '🍕', '👑', '🔥'];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;
let isLocked = false;

function initGame() {
  if (timerInterval) clearInterval(timerInterval);
  timer = 0;
  moves = 0;
  matchedPairs = 0;
  flippedCards = [];
  isLocked = false;

  movesEl.textContent = '0';
  timerEl.textContent = '00:00';
  pairsLeftEl.textContent = '8';

  // Duplicar e embaralhar
  const deck = [...ICONS, ...ICONS].sort(() => Math.random() - 0.5);

  board.innerHTML = '';
  cards = deck.map((icon, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.dataset.icon = icon;
    cardEl.dataset.index = index;

    cardEl.innerHTML = `
      <div class="card-face card-front"></div>
      <div class="card-face card-back">${icon}</div>
    `;

    cardEl.addEventListener('click', () => onCardClick(cardEl));
    board.appendChild(cardEl);
    return cardEl;
  });

  // Inicia cronômetro no primeiro clique ou direto
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
    const m = String(Math.floor(timer / 60)).padStart(2, '0');
    const s = String(timer % 60).padStart(2, '0');
    timerEl.textContent = `${m}:${s}`;
  }, 1000);
}

function onCardClick(card) {
  if (isLocked || card.classList.contains('flipped') || card.classList.contains('matched')) {
    return;
  }

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moves++;
    movesEl.textContent = moves;
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;
  const isMatch = c1.dataset.icon === c2.dataset.icon;

  if (isMatch) {
    c1.classList.add('matched');
    c2.classList.add('matched');
    matchedPairs++;
    pairsLeftEl.textContent = 8 - matchedPairs;
    flippedCards = [];

    if (matchedPairs === 8) {
      clearInterval(timerInterval);
      setTimeout(() => {
        alert(`🏆 Incrível! Você completou o jogo em ${moves} jogadas e ${timerEl.textContent}!`);
      }, 300);
    }
  } else {
    isLocked = true;
    setTimeout(() => {
      c1.classList.remove('flipped');
      c2.classList.remove('flipped');
      flippedCards = [];
      isLocked = false;
    }, 900);
  }
}

btnRestart.addEventListener('click', initGame);

initGame();

