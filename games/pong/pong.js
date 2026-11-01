// Pong vs CPU - BUNDIX
const canvas = document.getElementById('pong-canvas');
const ctx = canvas.getContext('2d');

const playerScoreEl = document.getElementById('player-score');
const cpuScoreEl = document.getElementById('cpu-score');
const btnRestart = document.getElementById('btn-restart');

// Configurações das Raquetes
const PADDLE_WIDTH = 12;
const PADDLE_HEIGHT = 80;
const PADDLE_SPEED = 7;

let playerY = canvas.height / 2 - PADDLE_HEIGHT / 2;
let cpuY = canvas.height / 2 - PADDLE_HEIGHT / 2;
let playerScore = 0;
let cpuScore = 0;
const WINNING_SCORE = 7;
let isGameOver = false;
let winnerText = '';

// Bola
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 7;
let ballSpeedX = 5;
let ballSpeedY = 3;
const BALL_INITIAL_SPEED = 5;

// Teclado
const keys = {
  w: false,
  s: false,
  ArrowUp: false,
  ArrowDown: false
};

// Sintetizador de Som Leve (Web Audio API)
let audioCtx = null;
function playBeep(freq = 440, duration = 0.08) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function resetBall(direction = 1) {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = BALL_INITIAL_SPEED * direction;
  ballSpeedY = (Math.random() * 4 - 2);
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  isGameOver = false;
  winnerText = '';
  playerScoreEl.textContent = '0';
  cpuScoreEl.textContent = '0';
  playerY = canvas.height / 2 - PADDLE_HEIGHT / 2;
  cpuY = canvas.height / 2 - PADDLE_HEIGHT / 2;
  resetBall(Math.random() > 0.5 ? 1 : -1);
}

// Atualização de física
function update() {
  if (isGameOver) return;

  // Movimento do Jogador (Teclado)
  if (keys.w || keys.ArrowUp) {
    playerY -= PADDLE_SPEED;
  }
  if (keys.s || keys.ArrowDown) {
    playerY += PADDLE_SPEED;
  }

  // Limite da raquete do jogador
  playerY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, playerY));

  // IA da CPU (Rastreamento suave)
  const cpuCenter = cpuY + PADDLE_HEIGHT / 2;
  const targetY = ballY;
  const cpuSpeed = 4.8; // Velocidade competitiva porém justa
  if (cpuCenter < targetY - 12) {
    cpuY += cpuSpeed;
  } else if (cpuCenter > targetY + 12) {
    cpuY -= cpuSpeed;
  }
  cpuY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, cpuY));

  // Movimento da bola
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Colisão com teto e chão
  if (ballY - ballRadius <= 0) {
    ballY = ballRadius;
    ballSpeedY = -ballSpeedY;
    playBeep(330, 0.05);
  } else if (ballY + ballRadius >= canvas.height) {
    ballY = canvas.height - ballRadius;
    ballSpeedY = -ballSpeedY;
    playBeep(330, 0.05);
  }

  // Colisão com raquete do Jogador (Esquerda)
  if (
    ballX - ballRadius <= 25 + PADDLE_WIDTH &&
    ballX + ballRadius >= 25 &&
    ballY >= playerY &&
    ballY <= playerY + PADDLE_HEIGHT
  ) {
    ballX = 25 + PADDLE_WIDTH + ballRadius;
    // Ângulo baseado no ponto de impacto
    const hitOffset = (ballY - (playerY + PADDLE_HEIGHT / 2)) / (PADDLE_HEIGHT / 2);
    ballSpeedY = hitOffset * 5.5;
    // Acelera levemente
    ballSpeedX = Math.min(Math.abs(ballSpeedX) * 1.05, 11);
    playBeep(520, 0.06);
  }

  // Colisão com raquete da CPU (Direita)
  const cpuX = canvas.width - 25 - PADDLE_WIDTH;
  if (
    ballX + ballRadius >= cpuX &&
    ballX - ballRadius <= cpuX + PADDLE_WIDTH &&
    ballY >= cpuY &&
    ballY <= cpuY + PADDLE_HEIGHT
  ) {
    ballX = cpuX - ballRadius;
    const hitOffset = (ballY - (cpuY + PADDLE_HEIGHT / 2)) / (PADDLE_HEIGHT / 2);
    ballSpeedY = hitOffset * 5.5;
    ballSpeedX = -Math.min(Math.abs(ballSpeedX) * 1.05, 11);
    playBeep(440, 0.06);
  }

  // Ponto para CPU
  if (ballX < 0) {
    cpuScore++;
    cpuScoreEl.textContent = cpuScore;
    playBeep(220, 0.2);
    if (cpuScore >= WINNING_SCORE) {
      isGameOver = true;
      winnerText = 'CPU Venceu!';
    } else {
      resetBall(1);
    }
  }

  // Ponto para Jogador
  if (ballX > canvas.width) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    playBeep(660, 0.2);
    if (playerScore >= WINNING_SCORE) {
      isGameOver = true;
      winnerText = 'Você Venceu! 🎉';
    } else {
      resetBall(-1);
    }
  }
}

// Renderização
function render() {
  // Fundo
  ctx.fillStyle = '#080611';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Linha central pontilhada
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Raquete Jogador (Verde neon)
  ctx.fillStyle = '#22c55e';
  ctx.shadowColor = '#22c55e';
  ctx.shadowBlur = 12;
  ctx.fillRect(25, playerY, PADDLE_WIDTH, PADDLE_HEIGHT);

  // Raquete CPU (Roxo neon)
  ctx.fillStyle = '#a855f7';
  ctx.shadowColor = '#a855f7';
  ctx.shadowBlur = 12;
  ctx.fillRect(canvas.width - 25 - PADDLE_WIDTH, cpuY, PADDLE_WIDTH, PADDLE_HEIGHT);

  // Bola (Branco com brilho)
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = 0;

  // Tela de Fim de Jogo
  if (isGameOver) {
    ctx.fillStyle = 'rgba(11, 9, 20, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = playerScore >= WINNING_SCORE ? '#22c55e' : '#ef4444';
    ctx.font = 'bold 30px system-ui';
    ctx.textAlign = 'center';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 10;
    ctx.fillText(winnerText, canvas.width / 2, canvas.height / 2 - 20);

    ctx.fillStyle = '#f3f4f6';
    ctx.font = '16px system-ui';
    ctx.shadowBlur = 0;
    ctx.fillText(`Placar Final: ${playerScore} x ${cpuScore}`, canvas.width / 2, canvas.height / 2 + 15);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px system-ui';
    ctx.fillText('Clique em "Nova Partida" para jogar novamente', canvas.width / 2, canvas.height / 2 + 45);
  }
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Eventos de teclado
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
  if (e.key in keys) keys[e.key] = true;
  if (e.key.toLowerCase() === 'w') keys.w = true;
  if (e.key.toLowerCase() === 's') keys.s = true;
});

window.addEventListener('keyup', (e) => {
  if (e.key in keys) keys[e.key] = false;
  if (e.key.toLowerCase() === 'w') keys.w = false;
  if (e.key.toLowerCase() === 's') keys.s = false;
});

// Controle direto pelo Mouse sobre o Canvas
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseY = e.clientY - rect.top;
  playerY = mouseY - PADDLE_HEIGHT / 2;
  playerY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, playerY));
});

// Botões Touch
const btnPUp = document.getElementById('btn-p-up');
const btnPDown = document.getElementById('btn-p-down');
if (btnPUp && btnPDown) {
  let touchInterval = null;
  const startMove = (direction) => {
    if (touchInterval) clearInterval(touchInterval);
    touchInterval = setInterval(() => {
      playerY += direction * (PADDLE_SPEED + 2);
      playerY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, playerY));
    }, 16);
  };
  const stopMove = () => {
    if (touchInterval) clearInterval(touchInterval);
  };

  btnPUp.addEventListener('mousedown', () => startMove(-1));
  btnPUp.addEventListener('mouseup', stopMove);
  btnPUp.addEventListener('touchstart', (e) => { e.preventDefault(); startMove(-1); });
  btnPUp.addEventListener('touchend', stopMove);

  btnPDown.addEventListener('mousedown', () => startMove(1));
  btnPDown.addEventListener('mouseup', stopMove);
  btnPDown.addEventListener('touchstart', (e) => { e.preventDefault(); startMove(1); });
  btnPDown.addEventListener('touchend', stopMove);
}

btnRestart.addEventListener('click', resetGame);

// Inicializa
resetGame();
requestAnimationFrame(gameLoop);

