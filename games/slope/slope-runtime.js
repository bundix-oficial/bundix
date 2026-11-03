// Register the existing local Unity framework without executing a blob: script.
// The site's CSP intentionally does not permit blob: in script-src.
(function () {
  'use strict';
  var container = document.getElementById('gameContainer');
  var error = document.getElementById('slope-error');
  function fail(message) {
    container.dataset.ready = 'false';
    error.textContent = message;
    error.hidden = false;
  }
  if (!window.UnityLoader || typeof UnityLoader.playnovaSlopeFramework !== 'function') {
    fail('Não foi possível carregar os arquivos do Slope. Atualize a página para tentar novamente.');
    return;
  }
  UnityLoader.processWasmFrameworkJob = function (module, job) {
    UnityLoader.playnovaSlopeFramework(module);
    job.complete();
  };
  window.gameInstance = UnityLoader.instantiate('gameContainer', 'build/slope.json', {
    onProgress: function (instance, progress) {
      if (progress === 1) container.dataset.ready = 'true';
    },
    onError: function (message) {
      fail('O Slope não conseguiu iniciar: ' + message);
    }
  });
})();
