(function() {
  chrome.browserAction.onClicked.addListener(function() {
    console.log(11111);
    return chrome.tabs.executeScript(null, {
      file: "js/on_click.js"
    });
  });

}).call(this);
