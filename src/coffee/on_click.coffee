$(document).ready ->
  if $('#emojidex-pallet-btn-crx').length is 0
    style_path = chrome.extension.getURL 'css/lib/emojidex.min.css'
    style_tag = $ "<link href='#{style_path}' rel='stylesheet'>"
    $('head').append style_tag
    pallet_btn = $ '<span id="emojidex-pallet-btn-crx">'
    $('body').append pallet_btn
    pallet_btn.emojidexPallet
      onComplete: (e) =>
        pallet_btn.click()
  else
    $('#emojidex-pallet-btn-crx').click()
