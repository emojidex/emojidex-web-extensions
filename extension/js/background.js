(function() {
  var currentTabUrl, executeEmojidex, newTabId, regexpIgnoreUrl, setCurrntTabInfo;

  newTabId = void 0;

  currentTabUrl = void 0;

  regexpIgnoreUrl = /chrome:|chrome-extension:|file:|view-source:/;

  executeEmojidex = function() {
    var ls, options;
    if (!currentTabUrl.match(regexpIgnoreUrl)) {
      ls = $.localStorage;
      options = ls.get(['auto-replace', 'set-autocomplete', 'auto-update']);
      return chrome.tabs.query({
        active: true,
        highlighted: true
      }, function() {
        chrome.tabs.executeScript(null, {
          file: "js/lib/jquery.min.js"
        });
        chrome.tabs.executeScript(null, {
          file: "js/lib/emojidex.min.js"
        });
        chrome.tabs.executeScript(null, {
          code: "var tab_url = '" + currentTabUrl + "', autoReplace = " + options['auto-replace'] + ", setAutocomplete = " + options['set-autocomplete'] + ", autoUpdate = " + options['auto-update'] + ";"
        });
        return chrome.tabs.executeScript(null, {
          file: "js/content.js"
        });
      });
    }
  };

  setCurrntTabInfo = function(callback) {
    return chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tab_array) {
      if (newTabId === tab_array[0].id) {
        currentTabUrl = tab_array[0].url;
        return callback();
      }
    });
  };

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      newTabId = tab.id;
      return setCurrntTabInfo(executeEmojidex);
    }
  });

  chrome.tabs.onActivated.addListener(function(activeInfo) {
    newTabId = activeInfo.tabId;
    return setCurrntTabInfo(executeEmojidex);
  });

  chrome.browserAction.onClicked.addListener(function(tab) {
    return chrome.tabs.executeScript(null, {
      file: "js/on_click.js"
    });
  });

}).call(this);
