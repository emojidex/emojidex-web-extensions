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
    if $('.emojidex-crx-autocomplete').length is 0
      elm_autocomplete.addClass('emojidex-crx-autocomplete')
      if tab_url.match /twitter.com/
        elm_autocomplete.emojidexAutocomplete
          insertImg: false
      else
        elm_autocomplete.emojidexAutocomplete()

  if embedPaletteButton
    if $('.emojidex-crx-palette').length is 0
      $('input[type=text], textarea').addClass('emojidex-crx-palette')
      $('input[type=text], textarea').emojidexPalette()
