newTabId = undefined
currentTabUrl = undefined
regexpIgnoreUrl = /chrome:|chrome-extension:|file:|view-source:/

executeEmojidex = ->
  # console.log currentTabUrl
  if not currentTabUrl.match(regexpIgnoreUrl)
    ls = $.localStorage
    options = ls.get ['auto-replace', 'set-autocomplete', 'auto-update']

    chrome.tabs.query {active: true, highlighted: true}, ->
      chrome.tabs.executeScript null,
        file: "js/lib/jquery.min.js"
      chrome.tabs.executeScript null,
        # file: "js/lib/emojidex.js"
        file: "js/lib/emojidex.min.js"
      chrome.tabs.executeScript null,
        code: "var
          tab_url = '#{currentTabUrl}',
          autoReplace = #{options['auto-replace']},
          setAutocomplete = #{options['set-autocomplete']},
          autoUpdate = #{options['auto-update']};
        "
      chrome.tabs.executeScript null,
        file: "js/content.js"

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
  if changeInfo.status == 'complete'
    newTabId = tab.id
    setCurrntTabInfo executeEmojidex

chrome.tabs.onActivated.addListener (activeInfo) ->
  # console.log "activeInfo -----"
  # console.dir activeInfo

  newTabId = activeInfo.tabId
  setCurrntTabInfo executeEmojidex

# use popup window

chrome.browserAction.onClicked.addListener (tab) ->
  ls = $.localStorage
  option = ls.get 'embed-palettebutton'
  chrome.tabs.executeScript null,
    code: "var embedPaletteButton = #{option};"
  chrome.tabs.executeScript null,
    file: "js/on_click.js"
