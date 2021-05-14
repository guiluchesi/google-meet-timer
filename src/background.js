chrome
  .browserAction
  .onClicked
  .addListener(notifyContent);

function notifyContent({ id }) {
  const message = {
    action: 'START_TIMMER',
  };

  chrome.tabs.sendMessage(id, message);
}
