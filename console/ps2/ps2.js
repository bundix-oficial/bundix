// PLAYNOVA local-ISO frontend. Play! engine: BSD-2-Clause, see runtime/LICENSE-Play.txt.
const $ = id => document.getElementById(id);
const canvas = $('outputCanvas');
let selectedFile = null;
let enginePromise = null;
let engine = null;
let playing = false;
let busy = false;
let soundEnabled = false;
let controllerFrame = 0;
let statsTimer = 0;
const audioContexts = new Set();
const heldGamepadKeys = new Set();

function status(message, error = false) {
  $('status').textContent = message;
  $('status').dataset.error = String(error);
}
function updateAudioButton() {
  $('sound').textContent = soundEnabled ? 'Desligar som' : 'Ativar som';
  $('sound').setAttribute('aria-pressed', String(soundEnabled));
}
function silence() {
  soundEnabled = false;
  for (const context of audioContexts) context.suspend().catch(() => {});
  updateAudioButton();
}
// This page owns its audio contexts; native engine auto-resume must honor the user's switch.
for (const key of ['AudioContext', 'webkitAudioContext']) {
  const NativeContext = window[key];
  if (!NativeContext) continue;
  window[key] = class extends NativeContext {
    constructor(...args) {
      super(...args);
      audioContexts.add(this);
      const resumeNative = this.resume.bind(this);
      this.resume = () => soundEnabled && !document.hidden ? resumeNative() : Promise.resolve();
      if (!soundEnabled) this.suspend().catch(() => {});
    }
  };
}

// Adapted from Play!'s DiscImageDevice.ts. Only local File slices are read; there is no upload.
class LocalDiscImage {
  constructor(module) { this.module = module; this.file = null; this.doneFlag = false; }
  setFile(file) { this.file = file; }
  getFileSize() { if (!this.file) throw new Error('Nenhuma ISO selecionada.'); return this.file.size; }
  isDone() { return this.doneFlag; }
  read(pointer, offset, size) {
    if (!this.file) throw new Error('Nenhuma ISO selecionada.');
    this.doneFlag = false;
    if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(size) || offset < 0 || size < 0 || size > 64 * 1024 * 1024 || pointer < 0 || pointer + size > this.module.HEAPU8.length) {
      this.doneFlag = true;
      fail('O emulador pediu um bloco inválido da ISO. Use Parar jogo para reiniciar.');
      return;
    }
    this.file.slice(offset, offset + size).arrayBuffer().then(buffer => {
      this.module.HEAPU8.set(new Uint8Array(buffer), pointer);
      this.doneFlag = true;
    }).catch(() => {
      this.doneFlag = true;
      fail('Não foi possível ler a ISO local. Use Parar jogo para reiniciar.');
    });
  }
}
function fail(message) {
  busy = false;
  playing = false;
  cancelAnimationFrame(controllerFrame);
  clearInterval(statsTimer);
  $('start').disabled = true;
  $('stop').disabled = false;
  document.body.dataset.engineState = 'error';
  status(message, true);
  silence();
}
function checkEnvironment() {
  if (!window.isSecureContext || !('WebAssembly' in window) || !('SharedArrayBuffer' in window) || !window.crossOriginIsolated) {
    return false;
  }
  return true;
}

export async function initializeEmulator() {
  if (enginePromise) return enginePromise;
  if (!checkEnvironment()) throw new Error('O navegador ainda não ativou o suporte necessário. Aguarde o recarregamento ou abra por HTTPS/servidor local.');
  const probe = document.createElement('canvas');
  const context = probe.getContext('webgl2');
  if (!context) throw new Error('Este computador não disponibilizou WebGL 2 para o emulador.');
  context.getExtension('WEBGL_lose_context')?.loseContext();
  document.body.dataset.engineState = 'starting';
  status('Iniciando o emulador PS2…');
  $('stop').disabled = false;
  enginePromise = (async () => {
    const { default: Play } = await import('./runtime/Play.js');
    const module = await Play({
      canvas,
      locateFile: name => new URL('./runtime/' + name, import.meta.url).href,
      mainScriptUrlOrBlob: new URL('./runtime/Play.js', import.meta.url).href,
      print: text => console.info('[Play!]', text),
      printErr: text => console.warn('[Play!]', text),
      onAbort: () => fail('O emulador foi interrompido. Use Parar jogo para reiniciar.'),
    });
    module.FS.mkdir('/work');
    module.discImageDevice = new LocalDiscImage(module);
    module.ccall('initVm', '', [], []);
    if (typeof module.bootDiscImage !== 'function') throw new Error('O motor não disponibilizou a abertura de ISO.');
    engine = module;
    document.body.dataset.engineState = 'ready';
    status(selectedFile ? 'Emulador pronto para abrir a ISO.' : 'Emulador pronto. Selecione uma ISO.');
    return module;
  })();
  return enginePromise;
}

export async function validateIso(file) {
  if (!file || !file.name.toLowerCase().endsWith('.iso')) throw new Error('Escolha um arquivo com extensão .iso.');
  if (file.size < 17 * 2048) throw new Error('Este arquivo é pequeno demais para ser uma ISO de PS2.');
  if (file.size > 9 * 1024 * 1024 * 1024) throw new Error('O arquivo é maior que uma imagem de disco PS2 suportada por esta página.');
  const header = new Uint8Array(await file.slice(16 * 2048, 17 * 2048).arrayBuffer());
  if (String.fromCharCode(...header.slice(1, 6)) !== 'CD001') throw new Error('Não foi encontrado um cabeçalho ISO9660 válido. Confirme que o arquivo é uma ISO extraída, sem compressão.');
  return file;
}
$('iso-file').addEventListener('change', async event => {
  if (playing || busy) return;
  selectedFile = null;
  $('start').disabled = true;
  $('selected-file').textContent = 'Nenhum arquivo selecionado.';
  try {
    const file = event.target.files?.[0];
    if (!file) { status('Selecione uma ISO para jogar.'); return; }
    await validateIso(file);
    selectedFile = file;
    $('selected-file').textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(1)} MB`;
    $('start').disabled = !checkEnvironment();
    status(checkEnvironment() ? 'Arquivo local selecionado. Pressione Iniciar jogo.' : 'Arquivo selecionado. O navegador ainda precisa ativar o suporte do emulador.');
  } catch (error) { status(error.message, true); }
});
$('start').addEventListener('click', async () => {
  if (!selectedFile || busy || playing) return;
  busy = true;
  $('start').disabled = true;
  $('iso-file').disabled = true;
  try {
    const module = await initializeEmulator();
    module.discImageDevice.setFile(selectedFile);
    module.bootDiscImage('local.iso');
    playing = true;
    busy = false;
    document.body.dataset.engineState = 'disc-open';
    $('screen-idle').hidden = true;
    canvas.focus();
    status('ISO aberta no emulador. Clique na tela para usar o teclado. Se a tela não avançar, a compatibilidade desse jogo precisa ser conferida.');
    pollGamepads();
    statsTimer = window.setInterval(() => {
      const frames = module.getFrames();
      module.clearStats();
      $('fps').textContent = `${frames} quadros/s`;
    }, 1000);
  } catch (error) { fail(error.message || 'Não foi possível iniciar esta ISO.'); }
});
$('stop').addEventListener('click', () => { silence(); location.reload(); });
$('fullscreen').addEventListener('click', async () => {
  try { await $('screen-wrap').requestFullscreen(); }
  catch { status('Tela cheia indisponível neste navegador.', true); }
});
$('sound').addEventListener('click', async () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled && !document.hidden) {
    for (const context of audioContexts) await context.resume().catch(() => {});
  } else silence();
  updateAudioButton();
});
document.addEventListener('visibilitychange', () => { if (document.hidden) silence(); });
window.addEventListener('blur', silence);
window.addEventListener('pagehide', () => {
  silence();
  cancelAnimationFrame(controllerFrame);
  clearInterval(statsTimer);
  for (const context of audioContexts) context.close().catch(() => {});
  selectedFile = null;
});
function sendKey(code, pressed) {
  if (!playing) return;
  canvas.dispatchEvent(new KeyboardEvent(pressed ? 'keydown' : 'keyup', { code, bubbles: true, cancelable: true }));
}
for (const button of document.querySelectorAll('[data-key]')) {
  button.addEventListener('pointerdown', event => {
    event.preventDefault(); button.setPointerCapture(event.pointerId);
    sendKey(button.dataset.key, true); button.setAttribute('aria-pressed', 'true');
  });
  const release = () => { sendKey(button.dataset.key, false); button.setAttribute('aria-pressed', 'false'); };
  button.addEventListener('pointerup', release);
  button.addEventListener('pointercancel', release);
  button.addEventListener('lostpointercapture', release);
}
canvas.addEventListener('keydown', event => { if (playing) event.preventDefault(); });
function pollGamepads() {
  const pad = navigator.getGamepads?.()?.find(gamepad => gamepad?.connected);
  const next = new Set();
  if (pad && !document.hidden) {
    const buttons = { 0:'KeyZ', 1:'KeyX', 2:'KeyA', 3:'KeyS', 4:'Key1', 5:'Key8', 6:'Key2', 7:'Key9', 8:'Backspace', 9:'Enter', 10:'Key3', 11:'Key0', 12:'ArrowUp', 13:'ArrowDown', 14:'ArrowLeft', 15:'ArrowRight' };
    for (const [index, key] of Object.entries(buttons)) if (pad.buttons[index]?.pressed) next.add(key);
    for (const [axis, negative, positive] of [[0,'KeyF','KeyH'],[1,'KeyT','KeyG'],[2,'KeyJ','KeyL'],[3,'KeyI','KeyK']]) {
      if (pad.axes[axis] < -.35) next.add(negative);
      if (pad.axes[axis] > .35) next.add(positive);
    }
  }
  for (const key of next) if (!heldGamepadKeys.has(key)) sendKey(key, true);
  for (const key of heldGamepadKeys) if (!next.has(key)) sendKey(key, false);
  heldGamepadKeys.clear(); for (const key of next) heldGamepadKeys.add(key);
  if (playing) controllerFrame = requestAnimationFrame(pollGamepads);
}
if (checkEnvironment()) document.body.dataset.environment = 'ready';
else {
  document.body.dataset.environment = 'pending';
  $('iso-file').disabled = true;
  status('Ativando o suporte do navegador. A primeira visita pode recarregar uma vez.');
  setTimeout(() => {
    if (!checkEnvironment()) status('O navegador não ativou o suporte necessário. Abra por HTTPS ou pelo ABRIR-SITE.bat e use Chrome ou Firefox atualizado.', true);
  }, 10000);
}
