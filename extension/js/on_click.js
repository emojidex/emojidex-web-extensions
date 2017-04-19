(function() {
  $(document).ready(function() {
    var palette_btn;
    if ($('#emojidex-palette-btn-crx').length === 0) {
      palette_btn = $('<span id="emojidex-palette-btn-crx">');
      $('body').append(palette_btn);
      return palette_btn.emojidexPalette({
        onComplete: (function(_this) {
          return function(e) {
            return palette_btn.click();
          };
        })(this)
      });
    } else {
      return $('#emojidex-palette-btn-crx').click();
    }
  });

}).call(this);
