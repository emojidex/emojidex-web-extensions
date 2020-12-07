$(() => {
  const gm = chrome.i18n.getMessage
  $('#header').append("<h2>" + (gm('options_header')) + "</h2>")
  $('#licensing_info-btn').text(gm('options_nav_licensing_info'))
  $('#licensing_info-title').text(gm('options_nav_licensing_info'))
  $('#licensing-description').replaceWith(gm('options_licensing_description'))

  const option_names = ['auto-replace', 'auto-update', 'set-autocomplete', 'embed-palettebutton']
  $('#optiom-auto-replace').find('h4').append(gm('options_auto_replace_header'))

  const auto_replace_forms = ["<ul style='padding-left: 0px'> <li class='checkbox'><label><input id='" + option_names[0] + "' type='checkbox'>" + (gm('options_auto_replace')) + "</label> <ul> <li class='checkbox'><label><input id='" + option_names[1] + "' type='checkbox'>" + (gm('options_auto_update')) + "</label> </ul> </ul>"]
  $('#optiom-auto-replace').find('form').append(auto_replace_forms)
  $('#option-set-autocomplete').find('h4').append(gm('options_set_autocomplete_header'))

  const set_autocomplete_forms = ["<div class='checkbox'><label><input id='" + option_names[2] + "' type='checkbox'>" + (gm('options_set_autocomplete')) + "</label></div>"]
  $('#option-set-autocomplete').find('form').append(set_autocomplete_forms)
  $('#option-embed-palettebutton').find('h4').append(gm('options_embed_palettebutton_header'))

  const embed_palettebutton_forms = ["<div class='checkbox'><label><input id='" + option_names[3] + "' type='checkbox'>" + (gm('options_embed_palettebutton')) + "</label></div>"]
  $('#option-embed-palettebutton').find('form').append(embed_palettebutton_forms)

  const ls = $.localStorage
  if (ls.isSet(option_names)) {
    const options = ls.get(option_names)
    for (option in options) {
      if (options[option]) {
        $("#" + option)[0].checked = true
      }
    }
  } else {
    for (let i = 0; i < option_names.length; i++) {
      const option = option_names[i];
      if (option === 'auto-update') {
        ls.set(option, false)
        $("#" + option)[0].checked = false
      } else {
        ls.set(option, true)
        $("#" + option)[0].checked = true
      }
    }
  }
  $('#auto-replace').click((e) => {
    ls.set(e.currentTarget.id, e.currentTarget.checked)
    if (e.currentTarget.checked) {
      $('#auto-update').prop({
        'disabled': false
      })
      ls.set('auto-update', $('#auto-update').prop('checked'))
    } else {
      $('#auto-update').prop({
        'disabled': true
      })
      ls.set('auto-update', false)
    }
  })
  return $('#auto-update, #set-autocomplete, #embed-palettebutton').click((e) => {
    ls.set(e.currentTarget.id, e.currentTarget.checked)
  })
})