(function() {
  $(document).ready(function() {
    if (window.emojidexExecuted == null) {
      window.emojidexExecuted = true;
      if (ar) {
        $("body").emojidexReplace();
      }
      if (sa) {
        if (tab_url.match(/twitter.com/)) {
          return $("[contentEditable=true], textarea").emojidexAutocomplete({
            insertImg: false
          });
        } else {
          return $("[contentEditable=true], textarea").emojidexAutocomplete();
        }
      }
    }
  });

}).call(this);
