$(document).ready ->
  elm_replace = $("body")
  elm_autocomplete = $("[contentEditable=true], textarea")

  console.dir elm_replace.find('.emojidex-emoji')

  unless elm_replace.find('.emojidex-emoji').length
    console.log "execute!!!!! --------------------------------"
    elm_replace.emojidexExecuted = true
    if ar
      elm_replace.emojidexReplace()
        # onComplete: (replaced_elm) ->
        #   elm_replace[0].emojidexExecuted = undefined

    if sa
      if tab_url.match /twitter.com/
        elm_autocomplete.emojidexAutocomplete
          insertImg: false
      else
        elm_autocomplete.emojidexAutocomplete()
