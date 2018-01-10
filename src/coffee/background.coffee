newTabId = undefined
currentTabUrl = undefined
regexpIgnoreUrl = /chrome:|chrome-extension:|file:|view-source:/
ls = $.localStorage

executeEmojidex = ->
  if not currentTabUrl.match(regexpIgnoreUrl)
    chrome.tabs.query {active: true, highlighted: true}, ->
      chrome.tabs.executeScript null,
        file: "js/lib/jquery.min.js"
      chrome.tabs.executeScript null,
        file: "js/lib/emojidex.min.js"
      chrome.tabs.executeScript null,
        file: "js/content.js"

setCurrntTabInfo = (callback) ->
  chrome.tabs.query
    active: true
    currentWindow: true
    (tab_array) ->
      if newTabId is tab_array[0].id
        currentTabUrl = tab_array[0].url
        callback()

# runtime callbacks --------
chrome.runtime.onConnect.addListener (port) ->
  port.onMessage.addListener (message) ->
    switch message.method
      when 'getOptions'
        defaultOptions =
          currentTabUrl: currentTabUrl
          autoReplace: true
          setAutocomplete: true
          autoUpdate: false
          embedPaletteButton: true

        savedOptions = ls.get ['auto-replace', 'set-autocomplete', 'auto-update', 'embed-palettebutton']
        options =
          currentTabUrl: currentTabUrl
          autoReplace: savedOptions['auto-replace']
          setAutocomplete: savedOptions['set-autocomplete']
          autoUpdate: savedOptions['auto-update']
          embedPaletteButton: savedOptions['embed-palettebutton']

        if options.autoReplace == null
          port.postMessage defaultOptions
        else
          port.postMessage options

# browser event's callbacks --------
chrome.tabs.onUpdated.addListener (tabId, changeInfo, tab) ->
  if changeInfo.status == 'complete'
    newTabId = tab.id
    setCurrntTabInfo executeEmojidex

chrome.tabs.onActivated.addListener (activeInfo) ->
  newTabId = activeInfo.tabId
  setCurrntTabInfo executeEmojidex

chrome.browserAction.onClicked.addListener (tab) ->
  chrome.tabs.executeScript null,
    file: "js/on_click.js"
