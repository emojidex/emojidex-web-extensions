$(document).ready ->
  # $.removeAllStorages()
  ls = $.localStorage
  options = ls.get ['auto-replace', 'set-autocomplete']

  for option of options
    $("##{option}")[0].checked = true if options[option]

  $('#auto-replace, #set-autocomplete').click (e)->
    ls.set e.currentTarget.id, e.currentTarget.checked
    return
