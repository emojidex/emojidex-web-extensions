$(document).ready ->
  if $('#emojidex-pallet-btn-crx').length is 0
    pallet_btn = $ '<span id="emojidex-pallet-btn-crx">'
    $('body').append pallet_btn
    pallet_btn.emojidexPallet
      onComplete: (e) =>
        pallet_btn.click()
  else
    $('#emojidex-pallet-btn-crx').click()
