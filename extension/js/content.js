(function() {
  $(document).ready(function() {
    var elm_autocomplete, elm_replace;
    elm_replace = $("body");
    elm_autocomplete = $("[contentEditable=true], textarea");
    console.dir(elm_replace.find('.emojidex-emoji'));
    if (!elm_replace.find('.emojidex-emoji').length) {
      console.log("execute!!!!! --------------------------------");
      elm_replace.emojidexExecuted = true;
      if (ar) {
        elm_replace.emojidexReplace();
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
    }
  });

}).call(this);
