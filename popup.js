const button = document.querySelector('button');

async function sendMessage(event) {
  const gettingActiveTab = browser.tabs.query({ active: true, currentWindow: true });
  gettingActiveTab.then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, {});
  });
}

button.addEventListener('click', sendMessage);
