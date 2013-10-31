chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {
    file: "on_click.js"
  })
})