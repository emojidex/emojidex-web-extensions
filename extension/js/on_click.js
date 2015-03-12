(function() {
  var elm_autocomplete, elm_replace, loaded_emoji, new_img, reload, _i, _len;

  elm_replace = $("body");

  elm_autocomplete = $("[contentEditable=true], textarea");

  if (elm_replace.find('.emojidex-emoji').length === 0) {
    elm_replace.emojidexReplace({
      useLoadingImg: false
    });
  }

  if (sa) {
    if (tab_url.match(/twitter.com/)) {
      elm_autocomplete.emojidexAutocomplete({
        insertImg: false
      });
    } else {
      elm_autocomplete.emojidexAutocomplete();
    }
  } else {
    loaded_emoji = elm_replace.find('.emojidex-emoji');
    for (_i = 0, _len = loaded_emoji.length; _i < _len; _i++) {
      reload = loaded_emoji[_i];
      new_img = "<img      class='" + reload.className + "'      src='" + reload.src + "'      title='" + reload.title + "'    ></img>";
      $(reload).replaceWith(new_img);
    }
  }

}).call(this);
