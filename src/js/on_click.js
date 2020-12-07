$(() => {
  if ($('#emojidex-emoji-palette').length === 0) {
    const palette_btn = $('<span class="emojidex-palette-button">')
    $('body').append(palette_btn)
    return palette_btn.emojidexPalette({
      onComplete: ((_this) => {
        return (e) => {
          palette_btn.click()
          return palette_btn.hide()
        }
      })(this)
    })
  } else {
    return $($('.emojidex-palette-button')[0]).click()
  }
})