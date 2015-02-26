(function() {
  chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {
      file: "js/lib/jquery.1.11.2.min.js"
    });
    chrome.tabs.executeScript(null, {
      file: "js/lib/emojidex.min.js"
    });
    return chrome.tabs.getSelected(null, function(tab) {
      return chrome.tabs.executeScript(null, {
        code: "var tab_url = '" + tab.url + "'"
      }, function() {
        return chrome.tabs.executeScript(null, {
          file: "js/on_click.js"
        });
      });
    });
  });

}).call(this);
