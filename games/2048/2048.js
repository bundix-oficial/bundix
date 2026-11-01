// 2048 Neon - BUNDIX
const gridContainer = document.getElementById('grid-container');
const scoreEl = document.getElementById('current-score');
const bestScoreEl = document.getElementById('best-score');
const btnRestart = document.getElementById('btn-restart');

const SIZE = 4;
let board = [];
let score = 0;
let bestScore = 0;
let won = false;

// Carregar melhor score
try {
  const saved = localStorage.getItem('bundix_2048_best');
  if (saved) {
    bestScore = parseInt(saved, 10) || 0;
    bestScoreEl.textContent = bestScore;
  }
} catch (e) {}

function initBoard() {
  board = Array(SIZE).fill(null).map(() => Array(SIZE).fill(0));
  score = 0;
  won = false;
  scoreEl.textContent = '0';
  addRandomTile();
  addRandomTile();
  renderBoard();
}

function addRandomTile() {
  const emptyCells = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) emptyCells.push({ r, c });
    }
  }
  if (emptyCells.length === 0) return;
  const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  board[r][c] = Math.random() < 0.9 ? 2 : 4;
}

function renderBoard() {
  gridContainer.innerHTML = '';
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const val = board[r][c];
      const cell = document.createElement('div');
      cell.className = `tile-cell ${val > 0 ? 'tile-' + (val <= 2048 ? val : '2048') : ''}`;
      cell.textContent = val > 0 ? val : '';
      gridContainer.appendChild(cell);
    }
  }

  scoreEl.textContent = score;
  if (score > bestScore) {
    bestScore = score;
    bestScoreEl.textContent = bestScore;
    try {
      localStorage.setItem('bundix_2048_best', bestScore);
    } catch (e) {}
  }
}

// Lógica de Movimento e Fusão
function slide(row) {
  let arr = row.filter(val => val !== 0);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      score += arr[i];
      if (arr[i] === 2048 && !won) {
        won = true;
        setTimeout(() => alert('Parabéns! Você alcançou o bloco 2048! Pode continuar jogando para bater recorde!'), 100);
      }
      arr[i + 1] = 0;
    }
  }
  arr = arr.filter(val => val !== 0);
  while (arr.length < SIZE) {
    arr.push(0);
  }
  return arr;
}

function moveLeft() {
  let changed = false;
  for (let r = 0; r < SIZE; r++) {
    const original = [...board[r]];
    board[r] = slide(board[r]);
    if (board[r].some((val, idx) => val !== original[idx])) changed = true;
  }
  return changed;
}

function moveRight() {
  let changed = false;
  for (let r = 0; r < SIZE; r++) {
    const original = [...board[r]];
    let reversed = [...board[r]].reverse();
    reversed = slide(reversed);
    board[r] = reversed.reverse();
    if (board[r].some((val, idx) => val !== original[idx])) changed = true;
  }
  return changed;
}

function moveUp() {
  let changed = false;
  for (let c = 0; c < SIZE; c++) {
    const col = [board[0][c], board[1][c], board[2][c], board[3][c]];
    const newCol = slide(col);
    for (let r = 0; r < SIZE; r++) {
      if (board[r][c] !== newCol[r]) {
        board[r][c] = newCol[r];
        changed = true;
      }
    }
  }
  return changed;
}

function moveDown() {
  let changed = false;
  for (let c = 0; c < SIZE; c++) {
    const col = [board[3][c], board[2][c], board[1][c], board[0][c]];
    const newCol = slide(col);
    for (let r = 0; r < SIZE; r++) {
      if (board[3 - r][c] !== newCol[r]) {
        board[3 - r][c] = newCol[r];
        changed = true;
      }
    }
  }
  return changed;
}

function canMove() {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) return true;
      if (c < SIZE - 1 && board[r][c] === board[r][c + 1]) return true;
      if (r < SIZE - 1 && board[r][c] === board[r + 1][c]) return true;
    }
  }
  return false;
}

function handleInput(direction) {
  let moved = false;
  if (direction === 'up') moved = moveUp();
  else if (direction === 'down') moved = moveDown();
  else if (direction === 'left') moved = moveLeft();
  else if (direction === 'right') moved = moveRight();

  if (moved) {
    addRandomTile();
    renderBoard();
    if (!canMove()) {
      setTimeout(() => alert('Fim de jogo! Não há mais movimentos disponíveis.'), 200);
    }
  }
}

// Teclado
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (key === 'arrowup' || key === 'w') handleInput('up');
  else if (key === 'arrowdown' || key === 's') handleInput('down');
  else if (key === 'arrowleft' || key === 'a') handleInput('left');
  else if (key === 'arrowright' || key === 'd') handleInput('right');
});

// Suporte a Swipe para Mobile
let touchStartX = 0;
let touchStartY = 0;
gridContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

gridContainer.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) < 25 && Math.abs(dy) < 25) return;

  if (Math.abs(dx) > Math.abs(dy)) {
    handleInput(dx > 0 ? 'right' : 'left');
  } else {
    handleInput(dy > 0 ? 'down' : 'up');
  }
});

// Botões Virtuais
document.getElementById('t-up')?.addEventListener('click', () => handleInput('up'));
document.getElementById('t-down')?.addEventListener('click', () => handleInput('down'));
document.getElementById('t-left')?.addEventListener('click', () => handleInput('left'));
document.getElementById('t-right')?.addEventListener('click', () => handleInput('right'));
btnRestart.addEventListener('click', initBoard);

initBoard();

