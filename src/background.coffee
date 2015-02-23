chrome.browserAction.onClicked.addListener ->
  console.log 111

  chrome.tabs.executeScript(
    null
    file: "js/lib/jquery.1.11.2.min.js"
  )
  chrome.tabs.executeScript(
    null
    file: "js/lib/emojidex-web/dist/js/emojidex.js"
  )
  chrome.tabs.executeScript(
    null
    file: "js/on_click.js"
  )