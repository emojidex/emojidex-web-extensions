(function() {
  chrome.browserAction.onClicked.addListener(function() {
    chrome.extension.sendRequest({
      method: "getLocalStorage",
      key: "path"
    }, function(response) {
      return console.log(response.data);
    });
    return chrome.tabs.executeScript(null, {
      file: "on_click.js"
    });
  });

}).call(this);
