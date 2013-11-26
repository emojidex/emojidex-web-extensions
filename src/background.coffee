chrome.browserAction.onClicked.addListener ->
  chrome.extension.sendRequest
    method: "getLocalStorage"
    key: "path"
  , (response) ->
    console.log response.data

  chrome.tabs.executeScript null,
    file: "on_click.js"