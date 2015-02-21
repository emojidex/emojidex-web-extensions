chrome.browserAction.onClicked.addListener ->
  console.log 222

  console.log $

  chrome.tabs.executeScript(
    null
    file: "js/lib/jquery.1.11.2.min.js"
  )
  chrome.tabs.executeScript(
    null
    file: "js/lib/emojidex.js"
  )