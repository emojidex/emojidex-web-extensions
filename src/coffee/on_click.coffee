$(document).ready ->
  if $('#emojidex-palette-btn-crx').length is 0
    palette_btn = $ '<span id="emojidex-palette-btn-crx">'
    $('body').append palette_btn
    palette_btn.emojidexPalette
      onComplete: (e) =>
        palette_btn.click()
  else
    $('#emojidex-palette-btn-crx').click()
