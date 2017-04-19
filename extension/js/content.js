(function() {
  $(document).ready(function() {
    var elm_autocomplete, elm_replace, i, len, loaded_emoji, new_img, options, reload;
    elm_replace = $("body");
    elm_autocomplete = $("[contentEditable=true], textarea");
    if (elm_replace.find('.emojidex-emoji').length === 0) {
      if (autoReplace) {
        options = {
          autoUpdate: autoUpdate
        };
        elm_replace.emojidexReplace(options);
      }
    } else {
      loaded_emoji = elm_replace.find('.emojidex-emoji');
      for (i = 0, len = loaded_emoji.length; i < len; i++) {
        reload = loaded_emoji[i];
        new_img = "<img class='" + reload.className + "' src='" + reload.src + "' title='" + reload.title + "' ></img>";
        $(reload).replaceWith(new_img);
      }
    }
    if (setAutocomplete) {
      if (tab_url.match(/twitter.com/)) {
        return elm_autocomplete.emojidexAutocomplete({
          insertImg: false
        });
      } else {
        return elm_autocomplete.emojidexAutocomplete();
      }
    }
  });

}).call(this);
