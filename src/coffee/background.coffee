chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  # console.log tab.url
  unless tab.url.match /\S*google\S*q=|chrome:\S*|chrome-extension:\S*|file:\S*/
    ls = $.localStorage
    options = ls.get ['auto-replace', 'set-autocomplete']

    chrome.tabs.executeScript null,
      file: "js/lib/jquery.min.js"
    chrome.tabs.executeScript null,
      file: "js/lib/emojidex.min.js"
    chrome.tabs.getSelected null, ->
      chrome.tabs.executeScript(
        null
        code: "var
          tab_url = '#{tab.url}',
          ar = #{options['auto-replace']},
          sa = #{options['set-autocomplete']}
        "
        ->
          chrome.tabs.executeScript null,
            file: "js/content.js"
      )
