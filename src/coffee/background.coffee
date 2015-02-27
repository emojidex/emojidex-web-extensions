newTabId = undefined
currentTabUrl = undefined
regexpIgnoreUrl = /\S*google\S*q=|chrome:|chrome-extension:|file:|view-source:/

executeEmojidex = ->
  if not currentTabUrl.match(regexpIgnoreUrl)
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
          tab_url = '#{currentTabUrl}',
          ar = #{options['auto-replace']},
          sa = #{options['set-autocomplete']}
        "
        ->
          chrome.tabs.executeScript null,
            file: "js/content.js"
      )

setCurrntTabInfo = (callback) ->
  chrome.tabs.query
    active: true
    currentWindow: true
    (tab_array) ->
      # console.log newTabId
      if newTabId is tab_array[0].id
        currentTabUrl = tab_array[0].url
        callback()

chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  newTabId = tab.id
  setCurrntTabInfo executeEmojidex

chrome.tabs.onActivated.addListener (activeInfo) ->
  # console.log "activeInfo -----"
  # console.dir activeInfo

  newTabId = activeInfo.tabId
  setCurrntTabInfo executeEmojidex
