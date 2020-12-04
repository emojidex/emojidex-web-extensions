$(document).ready(function() {
  return $("#palette-btn").emojidexPallet({
    onComplete: (function(_this) {
      return function(e) {
        $('.loading_info').remove()
        $('.ui-dialog .ui-dialog-titlebar button.btn-xs[aria-label="Close"]').remove()
        $('#palette-btn').click()
        return $('.ui-dialog').css('top', '0px')
      }
    })(this)
  })
})