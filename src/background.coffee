chrome.browserAction.onClicked.addListener ->

  console.log 11111
  chrome.tabs.executeScript null,
    file: "js/on_click.js"
