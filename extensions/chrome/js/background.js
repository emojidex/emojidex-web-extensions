(function() {
  var currentTabUrl, executeEmojidex, ls, newTabId, regexpIgnoreUrl, setCurrntTabInfo;

  newTabId = void 0;

  currentTabUrl = void 0;

  regexpIgnoreUrl = /chrome:|chrome-extension:|file:|view-source:/;

  ls = $.localStorage;

  executeEmojidex = function() {
    if (!currentTabUrl.match(regexpIgnoreUrl)) {
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

  chrome.runtime.onConnect.addListener(function(port) {
    return port.onMessage.addListener(function(message) {
      var defaultOptions, options, savedOptions;
      switch (message.method) {
        case 'getOptions':
          defaultOptions = {
            currentTabUrl: currentTabUrl,
            autoReplace: true,
            setAutocomplete: true,
            autoUpdate: false,
            embedPaletteButton: true
          };
          savedOptions = ls.get(['auto-replace', 'set-autocomplete', 'auto-update', 'embed-palettebutton']);
          options = {
            currentTabUrl: currentTabUrl,
            autoReplace: savedOptions['auto-replace'],
            setAutocomplete: savedOptions['set-autocomplete'],
            autoUpdate: savedOptions['auto-update'],
            embedPaletteButton: savedOptions['embed-palettebutton']
          };
          if (options.autoReplace === null) {
            return port.postMessage(defaultOptions);
          } else {
            return port.postMessage(options);
          }
      }
    });
  });

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
