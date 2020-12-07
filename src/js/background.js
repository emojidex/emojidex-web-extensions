
let newTabId = undefined
let currentTabUrl = undefined
const regexpIgnoreUrl = /chrome:|chrome-extension:|file:|view-source:/
const ls = $.localStorage

const executeEmojidex = () => {
  if (!currentTabUrl.match(regexpIgnoreUrl)) {
    return chrome.tabs.query({
      active: true,
      highlighted: true
    }, () => {
      chrome.tabs.executeScript(null, {
        file: "js/lib/jquery.min.js"
      })
      chrome.tabs.executeScript(null, {
        file: "js/lib/emojidex.min.js"
      })
      return chrome.tabs.executeScript(null, {
        file: "js/content.js"
      })
    })
  }
}

const setCurrntTabInfo = (callback) => {
  return chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tab_array) => {
    if (newTabId === tab_array[0].id) {
      currentTabUrl = tab_array[0].url
      return callback()
    }
  })
}

chrome.runtime.onConnect.addListener((port) => {
  return port.onMessage.addListener((message) => {
    switch (message.method) {
      case 'getOptions':
        const defaultOptions = {
          currentTabUrl: currentTabUrl,
          autoReplace: true,
          setAutocomplete: true,
          autoUpdate: false,
          embedPaletteButton: true
        }

        const savedOptions = ls.get(['auto-replace', 'set-autocomplete', 'auto-update', 'embed-palettebutton'])
        const options = {
          currentTabUrl: currentTabUrl,
          autoReplace: savedOptions['auto-replace'],
          setAutocomplete: savedOptions['set-autocomplete'],
          autoUpdate: savedOptions['auto-update'],
          embedPaletteButton: savedOptions['embed-palettebutton']
        }

        if (options.autoReplace === null) {
          return port.postMessage(defaultOptions)
        } else {
          return port.postMessage(options)
        }
    }
  })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    newTabId = tab.id
    return setCurrntTabInfo(executeEmojidex)
  }
})

chrome.tabs.onActivated.addListener((activeInfo) => {
  newTabId = activeInfo.tabId
  return setCurrntTabInfo(executeEmojidex)
})

chrome.browserAction.onClicked.addListener((tab) => {
  return chrome.tabs.executeScript(null, {
    file: "js/on_click.js"
  })
})