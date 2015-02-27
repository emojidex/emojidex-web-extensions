
chrome.browserAction.onClicked.addListener ->
  chrome.tabs.executeScript null,
    file: "js/lib/jquery.1.11.2.min.js"
  chrome.tabs.executeScript null,
    file: "js/lib/emojidex.min.js"
  chrome.tabs.getSelected null, (tab) ->
    chrome.tabs.executeScript(
      null
      code: "var tab_url = '#{tab.url}'"
      ->
        chrome.tabs.executeScript null,
        file: "js/on_click.js"
    )
