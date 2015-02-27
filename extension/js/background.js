(function() {
  var currentTabUrl, executeEmojidex, newTabId, regexpIgnoreUrl, setCurrntTabInfo;

  newTabId = void 0;

  currentTabUrl = void 0;

  regexpIgnoreUrl = /\S*google\S*q=|chrome:|chrome-extension:|file:|view-source:/;

  executeEmojidex = function() {
    var ls, options;
    if (!currentTabUrl.match(regexpIgnoreUrl)) {
      console.log("execute ----------------------");
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
          code: "var          tab_url = '" + currentTabUrl + "',          ar = " + options['auto-replace'] + ",          sa = " + options['set-autocomplete'] + "        "
        }, function() {
          return chrome.tabs.executeScript(null, {
            file: "js/content.js"
          });
        });
      });
    }
  };

  setCurrntTabInfo = function(callback) {
    return chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tab_array) {
      console.log(newTabId);
      if (newTabId === tab_array[0].id) {
        currentTabUrl = tab_array[0].url;
        return callback();
      }
    });
  };

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    newTabId = tab.id;
    return setCurrntTabInfo(executeEmojidex);
  });

  chrome.tabs.onActivated.addListener(function(activeInfo) {
    newTabId = activeInfo.tabId;
    return setCurrntTabInfo(executeEmojidex);
  });

}).call(this);
