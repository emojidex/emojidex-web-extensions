$(document).ready ->
  if embedPaletteButton
    elements = $('input[type=text], textarea')
    if $('#emojidex-emoji-palette').length is 0 && elements.length > 0
      $(elements[0]).emojidexPalette
        onComplete: (e) =>
          for i in [1...elements.length]
            $(elements[i]).emojidexPalette()
          $('.emojidex-palette-button')[0].click()

  else
    if $('#emojidex-palette-btn-crx').length is 0
      palette_btn = $ '<span id="emojidex-palette-btn-crx">'
      $('body').append palette_btn
      palette_btn.emojidexPalette
        onComplete: (e) =>
          palette_btn.click()
    else
      $('#emojidex-palette-btn-crx').click()
