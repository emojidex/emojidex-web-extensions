(function() {
  chrome.browserAction.onClicked.addListener(function() {
    return chrome.tabs.executeScript(null, {
      file: "js/on_click.js"
    });
  });

}).call(this);
