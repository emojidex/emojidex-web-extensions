(function() {
  $(document).ready(function() {
    var pallet_btn;
    if ($('#emojidex-pallet-btn-crx').length === 0) {
      pallet_btn = $('<span id="emojidex-pallet-btn-crx">');
      $('body').append(pallet_btn);
      return pallet_btn.emojidexPallet({
        onComplete: (function(_this) {
          return function(e) {
            return pallet_btn.click();
          };
        })(this)
      });
    } else {
      return $('#emojidex-pallet-btn-crx').click();
    }
  });

}).call(this);
