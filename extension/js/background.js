(function() {
  chrome.browserAction.onClicked.addListener(function() {
    console.log(222);
    chrome.tabs.executeScript(null, {
      file: "js/lib/jquery.1.11.2.min.js"
    });
    chrome.tabs.executeScript(null, {
      file: "js/lib/emojidex-web/dist/js/emojidex.js"
    });
    return chrome.tabs.executeScript(null, {
      file: "js/on_click.js"
    });
  });

}).call(this);
