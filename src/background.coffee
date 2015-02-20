chrome.browserAction.onClicked.addListener ->
  chrome.tabs.executeScript null,
    file: "on_click.js"