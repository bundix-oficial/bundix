// Cobrinha Neon - BUNDIX
const canvas = document.getElementById('snake-canvas');
const ctx = canvas.getContext('2d');

const scoreEl = document.getElementById('current-score');
const highScoreEl = document.getElementById('high-score');
const speedEl = document.getElementById('speed-level');
const btnRestart = document.getElementById('btn-restart');

// Configurações da grade
const GRID_SIZE = 20;
const TILE_COUNT = canvas.width / GRID_SIZE; // 20x20

let snake = [];
let food = { x: 5, y: 5 };
let dx = 1;
let dy = 0;
let nextDx = 1;
let nextDy = 0;
let score = 0;
let highScore = 0;
let gameLoop = null;
let isGameOver = false;
let currentInterval = 120; // ms

// Carregar recorde do LocalStorage
try {
  const saved = localStorage.getItem('bundix_snake_highscore');
  if (saved) {
    highScore = parseInt(saved, 10) || 0;
    highScoreEl.textContent = highScore;
  }
} catch (e) {
  console.warn(e);
}

function initGame() {
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ];
  dx = 1;
  dy = 0;
  nextDx = 1;
  nextDy = 0;
  score = 0;
  isGameOver = false;
  currentInterval = 120;
  scoreEl.textContent = score;
  speedEl.textContent = 'Nível 1';
  spawnFood();

  if (gameLoop) clearInterval(gameLoop);
  gameLoop = setInterval(update, currentInterval);
}

function spawnFood() {
  let valid = false;
  while (!valid) {
    food.x = Math.floor(Math.random() * TILE_COUNT);
    food.y = Math.floor(Math.random() * TILE_COUNT);
    valid = !snake.some(segment => segment.x === food.x && segment.y === food.y);
  }
}

function update() {
  if (isGameOver) return;

  dx = nextDx;
  dy = nextDy;

  // Próxima posição da cabeça
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Colisão com as bordas
  if (head.x < 0 || head.x >= TILE_COUNT || head.y < 0 || head.y >= TILE_COUNT) {
    return triggerGameOver();
  }

  // Colisão com o próprio corpo
  for (let i = 0; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return triggerGameOver();
    }
  }

  snake.unshift(head);

  // Comeu a comida
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreEl.textContent = score;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      try {
        localStorage.setItem('bundix_snake_highscore', highScore);
      } catch (e) {}
    }

    // Aumento de velocidade progressivo
    if (score % 50 === 0 && currentInterval > 60) {
      currentInterval -= 10;
      clearInterval(gameLoop);
      gameLoop = setInterval(update, currentInterval);
      const level = Math.floor((120 - currentInterval) / 10) + 1;
      speedEl.textContent = `Nível ${level}`;
    }

    spawnFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  // Fundo
  ctx.fillStyle = '#080611';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grade de fundo sutil
  ctx.strokeStyle = '#120f24';
  ctx.lineWidth = 1;
  for (let i = 0; i <= canvas.width; i += GRID_SIZE) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  // Comida neon
  ctx.fillStyle = '#ef4444';
  ctx.shadowColor = '#ef4444';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(
    food.x * GRID_SIZE + GRID_SIZE / 2,
    food.y * GRID_SIZE + GRID_SIZE / 2,
    GRID_SIZE / 2 - 2,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // Cobra neon
  snake.forEach((segment, idx) => {
    ctx.shadowColor = idx === 0 ? '#4ade80' : '#22c55e';
    ctx.shadowBlur = idx === 0 ? 12 : 6;
    ctx.fillStyle = idx === 0 ? '#4ade80' : '#22c55e';
    ctx.fillRect(
      segment.x * GRID_SIZE + 1,
      segment.y * GRID_SIZE + 1,
      GRID_SIZE - 2,
      GRID_SIZE - 2
    );

    // Olhos na cabeça
    if (idx === 0) {
      ctx.fillStyle = '#0b0914';
      ctx.shadowBlur = 0;
      const eyeOffset = 4;
      ctx.fillRect(segment.x * GRID_SIZE + eyeOffset, segment.y * GRID_SIZE + eyeOffset, 3, 3);
      ctx.fillRect(segment.x * GRID_SIZE + GRID_SIZE - eyeOffset - 3, segment.y * GRID_SIZE + eyeOffset, 3, 3);
    }
  });

  ctx.shadowBlur = 0;
}

function triggerGameOver() {
  isGameOver = true;
  clearInterval(gameLoop);

  // Overlay de Game Over no canvas
  ctx.fillStyle = 'rgba(11, 9, 20, 0.85)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ef4444';
  ctx.font = 'bold 28px system-ui';
  ctx.textAlign = 'center';
  ctx.shadowColor = '#ef4444';
  ctx.shadowBlur = 10;
  ctx.fillText('FIM DE JOGO!', canvas.width / 2, canvas.height / 2 - 20);

  ctx.fillStyle = '#f3f4f6';
  ctx.font = '16px system-ui';
  ctx.shadowBlur = 0;
  ctx.fillText(`Pontuação Final: ${score}`, canvas.width / 2, canvas.height / 2 + 15);
  ctx.fillStyle = '#9ca3af';
  ctx.font = '14px system-ui';
  ctx.fillText('Pressione ESPAÇO para jogar de novo', canvas.width / 2, canvas.height / 2 + 45);
}

// Controles pelo Teclado
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }

  if (isGameOver && (e.code === 'Space' || key === ' ')) {
    initGame();
    return;
  }

  if ((key === 'arrowup' || key === 'w') && dy === 0) {
    nextDx = 0;
    nextDy = -1;
  } else if ((key === 'arrowdown' || key === 's') && dy === 0) {
    nextDx = 0;
    nextDy = 1;
  } else if ((key === 'arrowleft' || key === 'a') && dx === 0) {
    nextDx = -1;
    nextDy = 0;
  } else if ((key === 'arrowright' || key === 'd') && dx === 0) {
    nextDx = 1;
    nextDy = 0;
  }
});

// Botão de Reiniciar
btnRestart.addEventListener('click', initGame);

// Controles Virtuais Touch
const tUp = document.getElementById('t-up');
const tDown = document.getElementById('t-down');
const tLeft = document.getElementById('t-left');
const tRight = document.getElementById('t-right');

if (tUp) {
  tUp.addEventListener('click', () => { if (dy === 0) { nextDx = 0; nextDy = -1; } });
  tDown.addEventListener('click', () => { if (dy === 0) { nextDx = 0; nextDy = 1; } });
  tLeft.addEventListener('click', () => { if (dx === 0) { nextDx = -1; nextDy = 0; } });
  tRight.addEventListener('click', () => { if (dx === 0) { nextDx = 1; nextDy = 0; } });
}

// Inicia
initGame();

