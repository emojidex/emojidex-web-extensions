chrome.browserAction.onClicked.addListener ->
  chrome.tabs.executeScript null,
    file: "js/on_click.js"