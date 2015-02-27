$(document).ready ->
  # console.log ar
  # console.log sa
  unless window.emojidexExecuted?
    window.emojidexExecuted = true
    if ar
      $("body").emojidexReplace()

    if sa
      if tab_url.match /twitter.com/
        $("[contentEditable=true], textarea").emojidexAutocomplete
          insertImg: false
      else
        $("[contentEditable=true], textarea").emojidexAutocomplete()
