(function () {
  if (window.hasRun) {
    return;
  }

  window.hasRun = true;

  function getAudio() {
    console.log('hello');
    const url = document.querySelector('.us audio source[type="audio/mpeg"]').src;

    window.open(url, '_blank');
  }

  browser.runtime.onMessage.addListener(getAudio);
})();
