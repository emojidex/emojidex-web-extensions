(function() {
  $(document).ready(function() {
    var elm_autocomplete, elm_replace, loaded_emoji, new_img, reload, _i, _len, _results;
    elm_replace = $("body");
    elm_autocomplete = $("[contentEditable=true], textarea");
    if (elm_replace.find('.emojidex-emoji').length === 0) {
      if (ar) {
        elm_replace.emojidexReplace({
          useLoadingImg: true
        });
      }
      if (sa) {
        if (tab_url.match(/twitter.com/)) {
          return elm_autocomplete.emojidexAutocomplete({
            insertImg: false
          });
        } else {
          return elm_autocomplete.emojidexAutocomplete();
        }
      }
    } else {
      loaded_emoji = elm_replace.find('.emojidex-emoji');
      _results = [];
      for (_i = 0, _len = loaded_emoji.length; _i < _len; _i++) {
        reload = loaded_emoji[_i];
        new_img = "<img        class='" + reload.className + "'        src='" + reload.src + "'        title='" + reload.title + "'      ></img>";
        _results.push($(reload).replaceWith(new_img));
      }
      return _results;
    }
  });

}).call(this);
