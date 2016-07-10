(function() {
  $(document).ready(function() {
    var pallet_btn, style_path, style_tag,
      _this = this;
    if ($('#emojidex-pallet-btn-crx').length === 0) {
      style_path = chrome.extension.getURL('css/lib/emojidex.min.css');
      style_tag = $("<link href='" + style_path + "' rel='stylesheet'>");
      $('head').append(style_tag);
      pallet_btn = $('<span id="emojidex-pallet-btn-crx">');
      $('body').append(pallet_btn);
      return pallet_btn.emojidexPallet({
        onComplete: function(e) {
          return pallet_btn.click();
        }
      });
    } else {
      return $('#emojidex-pallet-btn-crx').click();
    }
  });

}).call(this);
