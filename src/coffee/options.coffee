$(document).ready ->
  gm = chrome.i18n.getMessage

  $('#header').append "<h2>#{gm 'options_header'}</h2>"

  option_names = [
    'auto-replace'
    'set-autocomplete'
  ]
  forms = [
    "<div class='checkbox'><label><input id='#{option_names[0]}' type='checkbox'>#{gm 'options_auto_replace'}</label></div>"
    "<div class='checkbox'><label><input id='#{option_names[1]}' type='checkbox'>#{gm 'options_set_autocomplete'}</label></div>"
  ]

  $('form#setting').append forms

  ls = $.localStorage
  options = ls.get option_names
  console.dir options
  for option of options
    $("##{option}")[0].checked = true if options[option]

  $('#auto-replace, #set-autocomplete').click (e)->
    ls.set e.currentTarget.id, e.currentTarget.checked
    return
