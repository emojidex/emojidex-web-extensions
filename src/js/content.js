const optionsPort = chrome.runtime.connect()
optionsPort.postMessage({
  method: 'getOptions'
})
optionsPort.onMessage.addListener((options) => {
  return $(() => {
    const excuteReplaeWithFlag = () => {
      if (options.autoReplace) {
        let replace_options = {
          autoUpdate: options.autoUpdate
        }
        return elm_replace.emojidexReplace(replace_options)
      }
    }

    const elm_replace = $("body")
    if (elm_replace.find('.emojidex-emoji').length === 0) {
      excuteReplaeWithFlag()
    } else {
      const loaded_emoji = elm_replace.find('.emojidex-emoji')
      for (let i = 0; i < loaded_emoji.length; i++) {
        $(loaded_emoji[i]).replaceWith(`<img class='${loaded_emoji[i].className}' src='${loaded_emoji[i].src}' title='${loaded_emoji[i].title}'></img>`)
      }
      excuteReplaeWithFlag()
    }

    const elm_autocomplete = $("[contentEditable=true], textarea")
    if (options.setAutocomplete) {
      if (options.currentTabUrl.match(/twitter.com/)) {
        elm_autocomplete.emojidexAutocomplete({
          insertImg: false
        })
      } else {
        elm_autocomplete.emojidexAutocomplete()
      }
    }

    if (options.embedPaletteButton) {
      if ($('.emojidex-crx-palette').length === 0) {
        $('input[type=text], textarea').addClass('emojidex-crx-palette')
        return $('input[type=text], textarea').emojidexPalette()
      }
    }
  })
})