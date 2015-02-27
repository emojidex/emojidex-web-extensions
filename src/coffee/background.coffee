chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  unless tab.url.match /\S*google\S*q=/
    ls = $.localStorage
    options = ls.get ['auto-replace', 'set-autocomplete']

    chrome.tabs.executeScript null,
      file: "js/lib/jquery.min.js"
    chrome.tabs.executeScript null,
      file: "js/lib/emojidex.min.js"
    chrome.tabs.getSelected null, ->
      chrome.tabs.executeScript(
        null
        code: "var tab_url = '#{tab.url}'; var ar = #{options['auto-replace']}; var sa = #{options['set-autocomplete']}"
        ->
          chrome.tabs.executeScript null,
            file: "js/content.js"
      )

