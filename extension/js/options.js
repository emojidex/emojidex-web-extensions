(function() {
  $(document).ready(function() {
    var ls, option, options;
    ls = $.localStorage;
    options = ls.get(['auto-replace', 'set-autocomplete']);
    for (option in options) {
      if (options[option]) {
        $("#" + option)[0].checked = true;
      }
    }
    return $('#auto-replace, #set-autocomplete').click(function(e) {
      ls.set(e.currentTarget.id, e.currentTarget.checked);
    });
  });

}).call(this);
