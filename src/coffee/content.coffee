$(document).ready ->
  elm_replace = $("body")
  elm_autocomplete = $("[contentEditable=true], textarea")

  if elm_replace.find('.emojidex-emoji').length is 0
    if autoReplace
      options =
        autoUpdate: autoUpdate
      elm_replace.emojidexReplace options
  else
    loaded_emoji = elm_replace.find('.emojidex-emoji')
    for reload in loaded_emoji
      new_img = "<img
        class='#{reload.className}'
        src='#{reload.src}'
        title='#{reload.title}'
      ></img>"
      $(reload).replaceWith new_img

  if setAutocomplete
    if tab_url.match /twitter.com/
      elm_autocomplete.emojidexAutocomplete
        insertImg: false
    else
      elm_autocomplete.emojidexAutocomplete()

  if embedPaletteButton
    elements = $('input[type=text], textarea').toArray()
    if $('#emojidex-emoji-palette').length is 0 && elements.length > 0
      $(elements.pop()).emojidexPalette
        onComplete: (e) =>
          for element, index in elements
            $(element).emojidexPalette()
