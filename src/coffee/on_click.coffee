$(document).ready ->
  if $('#emojidex-emoji-palette').length is 0
    palette_btn = $ '<span class="emojidex-palette-button">'
    $('body').append palette_btn
    palette_btn.emojidexPalette
      onComplete: (e) =>
        palette_btn.click()
        palette_btn.hide()
  else
    $($('.emojidex-palette-button')[0]).click()
