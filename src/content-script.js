import { saveAs } from 'file-saver';

(function () {
  if (window.hasRun) {
    return;
  }

  window.hasRun = true;

  function getAudio() {
    const url = document.querySelector('.us audio source[type="audio/mpeg"]').src;

    const filename = url.split('/').pop();
    saveAs(url, filename);
  }

  browser.runtime.onMessage.addListener(getAudio);
})();
