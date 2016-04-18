$(document).ready ->
  $("#pallet-btn").emojidexPallet
    onComplete: (e) =>
      $('.loading_info').remove()
      $('.ui-dialog .ui-dialog-titlebar button.btn-xs[aria-label="Close"]').remove()
      $('#pallet-btn').click()
      $('.ui-dialog').css('top', '0px')
