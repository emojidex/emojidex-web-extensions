(function() {
  $(document).ready(function() {
    var palette_btn;
    if ($('#emojidex-emoji-palette').length === 0) {
      palette_btn = $('<span class="emojidex-palette-button">');
      $('body').append(palette_btn);
      return palette_btn.emojidexPalette({
        onComplete: (function(_this) {
          return function(e) {
            palette_btn.click();
            return palette_btn.hide();
          };
        })(this)
      });
    } else {
      return $($('.emojidex-palette-button')[0]).click();
    }
  });

}).call(this);
