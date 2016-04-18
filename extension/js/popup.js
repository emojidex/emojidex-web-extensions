(function() {
  $(document).ready(function() {
    var _this = this;
    return $("#pallet-btn").emojidexPallet({
      onComplete: function(e) {
        $('.loading_info').remove();
        $('.ui-dialog .ui-dialog-titlebar button.btn-xs[aria-label="Close"]').remove();
        $('#pallet-btn').click();
        return $('.ui-dialog').css('top', '0px');
      }
    });
  });

}).call(this);
