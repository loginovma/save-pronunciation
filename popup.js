const button = document.querySelector('button');

async function sendMessage(event) {
  console.log('test test test');
  const gettingActiveTab = browser.tabs.query({ active: true, currentWindow: true });
  gettingActiveTab.then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, {});
  });
}

browser.tabs.executeScript({ file: '/content-script.js' }).then(() => {
  button.addEventListener('click', sendMessage);
});
