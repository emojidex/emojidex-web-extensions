elm_replace = $("body")
elm_autocomplete = $("[contentEditable=true], textarea")

if elm_replace.find('.emojidex-emoji').length is 0
  options = {}
  options.autoReplace = autoReplace
  options.autoUpdate = autoUpdate

  elm_replace.emojidexReplace options

  if setAutocomplete
    if tab_url.match /twitter.com/
      elm_autocomplete.emojidexAutocomplete
        insertImg: false
    else
      elm_autocomplete.emojidexAutocomplete()
else
  loaded_emoji = elm_replace.find('.emojidex-emoji')
  for reload in loaded_emoji
    new_img = "<img
      class='#{reload.className}'
      src='#{reload.src}'
      title='#{reload.title}'
    ></img>"
    $(reload).replaceWith new_img
