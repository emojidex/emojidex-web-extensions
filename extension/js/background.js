(function() {
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var ls, options;
    if (!tab.url.match(/\S*google\S*q=|chrome-extension:\S*|file:\S*/)) {
      ls = $.localStorage;
      options = ls.get(['auto-replace', 'set-autocomplete']);
      chrome.tabs.executeScript(null, {
        file: "js/lib/jquery.min.js"
      });
      chrome.tabs.executeScript(null, {
        file: "js/lib/emojidex.min.js"
      });
      return chrome.tabs.getSelected(null, function() {
        return chrome.tabs.executeScript(null, {
          code: "var tab_url = '" + tab.url + "'; var ar = " + options['auto-replace'] + "; var sa = " + options['set-autocomplete']
        }, function() {
          return chrome.tabs.executeScript(null, {
            file: "js/content.js"
          });
        });
      });
    }
  });

}).call(this);
