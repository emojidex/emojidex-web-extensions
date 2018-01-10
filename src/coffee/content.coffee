optionsPort = chrome.runtime.connect()
optionsPort.postMessage method: 'getOptions'
optionsPort.onMessage.addListener (options) ->
  $(document).ready ->
    excuteReplaeWithFlag = () ->
      if options.autoReplace
        replace_options =
          autoUpdate: options.autoUpdate
        elm_replace.emojidexReplace replace_options

    elm_replace = $("body")
    elm_autocomplete = $("[contentEditable=true], textarea")

    if elm_replace.find('.emojidex-emoji').length is 0
      excuteReplaeWithFlag()
    else
      loaded_emoji = elm_replace.find('.emojidex-emoji')
      for reload in loaded_emoji
        new_img = "<img
          class='#{reload.className}'
          src='#{reload.src}'
          title='#{reload.title}'
        ></img>"
        $(reload).replaceWith new_img
      excuteReplaeWithFlag()

    if options.setAutocomplete
      if options.currentTabUrl.match /twitter.com/
        elm_autocomplete.emojidexAutocomplete
          insertImg: false
      else
        elm_autocomplete.emojidexAutocomplete()

    if options.embedPaletteButton
      if $('.emojidex-crx-palette').length is 0
        $('input[type=text], textarea').addClass('emojidex-crx-palette')
        $('input[type=text], textarea').emojidexPalette()
