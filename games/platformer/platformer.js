// Salto Cibernético - BUNDIX
const canvas = document.getElementById('plat-canvas');
const ctx = canvas.getContext('2d');

const coinsEl = document.getElementById('coins-count');
const statusEl = document.getElementById('game-status');
const attemptsEl = document.getElementById('attempts-count');
const btnRestart = document.getElementById('btn-restart');

// Constantes de Física
const GRAVITY = 0.55;
const FRICTION = 0.82;
const JUMP_FORCE = -11.5;
const SPEED = 4.5;

let attempts = 1;
let coinsCollected = 0;
let isVictory = false;

// Jogador
const player = {
  x: 40,
  y: 280,
  w: 22,
  h: 28,
  vx: 0,
  vy: 0,
  grounded: false
};

// Plataformas
const platforms = [
  // Chão inicial
  { x: 0, y: 320, w: 180, h: 40, color: '#1e293b' },
  // Plataformas flutuantes
  { x: 210, y: 260, w: 90, h: 14, color: '#0ea5e9' },
  { x: 330, y: 200, w: 80, h: 14, color: '#0ea5e9' },
  { x: 440, y: 150, w: 90, h: 14, color: '#0ea5e9' },
  // Chão intermediário inferior
  { x: 240, y: 330, w: 150, h: 30, color: '#1e293b' },
  // Plataforma final
  { x: 550, y: 210, w: 90, h: 150, color: '#22c55e' }
];

// Espinhos perigosos
const hazards = [
  { x: 180, y: 345, w: 60, h: 15 },
  { x: 390, y: 345, w: 160, h: 15 }
];

// Moedas
let coins = [
  { x: 250, y: 230, collected: false },
  { x: 370, y: 170, collected: false },
  { x: 480, y: 120, collected: false },
  { x: 300, y: 300, collected: false },
  { x: 580, y: 170, collected: false }
];

// Bandeira / Meta
const goal = { x: 600, y: 165, w: 20, h: 45 };

// Controles
const keys = {
  left: false,
  right: false,
  jump: false
};

function resetPlayer() {
  player.x = 40;
  player.y = 280;
  player.vx = 0;
  player.vy = 0;
  player.grounded = false;
}

function resetGame() {
  resetPlayer();
  coins.forEach(c => c.collected = false);
  coinsCollected = 0;
  isVictory = false;
  coinsEl.textContent = '0 / 5';
  statusEl.textContent = 'Em Jogo';
  statusEl.style.color = '#06b6d4';
}

function triggerRespawn() {
  attempts++;
  attemptsEl.textContent = attempts;
  resetPlayer();
}

function update() {
  if (isVictory) return;

  // Movimento Horizontal
  if (keys.left) player.vx = -SPEED;
  else if (keys.right) player.vx = SPEED;
  else player.vx *= FRICTION;

  // Pulo
  if (keys.jump && player.grounded) {
    player.vy = JUMP_FORCE;
    player.grounded = false;
  }

  // Gravidade
  player.vy += GRAVITY;

  player.x += player.vx;
  player.y += player.vy;

  // Limite da esquerda
  if (player.x < 0) player.x = 0;

  // Colisão com Plataformas
  player.grounded = false;
  for (const plat of platforms) {
    if (
      player.x + player.w > plat.x &&
      player.x < plat.x + plat.w &&
      player.y + player.h >= plat.y &&
      player.y + player.h <= plat.y + plat.h + 12 &&
      player.vy >= 0
    ) {
      player.grounded = true;
      player.vy = 0;
      player.y = plat.y - player.h;
    }
  }

  // Colisão com Espinhos
  for (const h of hazards) {
    if (
      player.x + player.w > h.x &&
      player.x < h.x + h.w &&
      player.y + player.h > h.y &&
      player.y < h.y + h.h
    ) {
      triggerRespawn();
      return;
    }
  }

  // Queda no abismo
  if (player.y > canvas.height + 50) {
    triggerRespawn();
    return;
  }

  // Coleta de Moedas
  coins.forEach(coin => {
    if (!coin.collected) {
      const dist = Math.hypot((player.x + player.w / 2) - coin.x, (player.y + player.h / 2) - coin.y);
      if (dist < 20) {
        coin.collected = true;
        coinsCollected++;
        coinsEl.textContent = `${coinsCollected} / 5`;
      }
    }
  });

  // Vitória (Chegada na bandeira)
  if (
    player.x + player.w > goal.x &&
    player.x < goal.x + goal.w &&
    player.y + player.h > goal.y
  ) {
    isVictory = true;
    statusEl.textContent = 'Fase Concluída! 🏆';
    statusEl.style.color = '#22c55e';
  }
}

function render() {
  // Fundo
  ctx.fillStyle = '#080611';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grade estética
  ctx.strokeStyle = '#120f26';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Plataformas
  platforms.forEach(plat => {
    ctx.fillStyle = plat.color;
    ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
    // Borda neon superior
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(plat.x, plat.y, plat.w, 3);
  });

  // Espinhos
  hazards.forEach(h => {
    ctx.fillStyle = '#ef4444';
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 8;
    const spikeCount = Math.floor(h.w / 12);
    for (let i = 0; i < spikeCount; i++) {
      ctx.beginPath();
      ctx.moveTo(h.x + i * 12, h.y + h.h);
      ctx.lineTo(h.x + i * 12 + 6, h.y);
      ctx.lineTo(h.x + (i + 1) * 12, h.y + h.h);
      ctx.fill();
    }
  });
  ctx.shadowBlur = 0;

  // Moedas
  coins.forEach(coin => {
    if (!coin.collected) {
      ctx.fillStyle = '#eab308';
      ctx.shadowColor = '#eab308';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(coin.x, coin.y, 7, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  ctx.shadowBlur = 0;

  // Bandeira de Vitória
  ctx.fillStyle = '#fff';
  ctx.fillRect(goal.x, goal.y, 4, goal.h); // mastro
  ctx.fillStyle = '#22c55e';
  ctx.shadowColor = '#22c55e';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(goal.x + 4, goal.y);
  ctx.lineTo(goal.x + 22, goal.y + 10);
  ctx.lineTo(goal.x + 4, goal.y + 20);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Jogador Cibernético
  ctx.fillStyle = '#06b6d4';
  ctx.shadowColor = '#06b6d4';
  ctx.shadowBlur = 12;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // Viseira neon
  ctx.fillStyle = '#ffffff';
  ctx.shadowBlur = 0;
  ctx.fillRect(player.x + 5, player.y + 6, player.w - 10, 5);

  // Overlay de Vitória
  if (isVictory) {
    ctx.fillStyle = 'rgba(11, 9, 20, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 28px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('FASE CONCLUÍDA! 🎉', canvas.width / 2, canvas.height / 2 - 20);

    ctx.fillStyle = '#f3f4f6';
    ctx.font = '16px system-ui';
    ctx.fillText(`Moedas: ${coinsCollected}/5 | Tentativas: ${attempts}`, canvas.width / 2, canvas.height / 2 + 15);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px system-ui';
    ctx.fillText('Clique em "Reiniciar Fase" para jogar de novo', canvas.width / 2, canvas.height / 2 + 45);
  }
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Teclado
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
  if (k === 'arrowleft' || k === 'a') keys.left = true;
  if (k === 'arrowright' || k === 'd') keys.right = true;
  if (k === 'arrowup' || k === 'w' || k === ' ') keys.jump = true;
});

window.addEventListener('keyup', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'arrowleft' || k === 'a') keys.left = false;
  if (k === 'arrowright' || k === 'd') keys.right = false;
  if (k === 'arrowup' || k === 'w' || k === ' ') keys.jump = false;
});

// Controles Virtuais Touch
const tLeft = document.getElementById('t-left');
const tRight = document.getElementById('t-right');
const tJump = document.getElementById('t-jump');

if (tLeft) {
  tLeft.addEventListener('touchstart', (e) => { e.preventDefault(); keys.left = true; });
  tLeft.addEventListener('touchend', () => { keys.left = false; });
  tRight.addEventListener('touchstart', (e) => { e.preventDefault(); keys.right = true; });
  tRight.addEventListener('touchend', () => { keys.right = false; });
  tJump.addEventListener('touchstart', (e) => { e.preventDefault(); keys.jump = true; });
  tJump.addEventListener('touchend', () => { keys.jump = false; });
}

btnRestart.addEventListener('click', resetGame);

resetGame();
requestAnimationFrame(gameLoop);

