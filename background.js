chrome.browserAction.onClicked.addListener(function() {
  chrome.extension.sendRequest({method: "getLocalStorage", key: "path"}, function(response) {
    console.log(response.data);
  });
  chrome.tabs.executeScript(null, {
    file: "on_click.js"
  })
})