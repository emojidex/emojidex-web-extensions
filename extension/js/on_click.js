(function() {
  $("body").emojidexReplace();

  if (tab_url.match(/twitter.com/)) {
    $("[contentEditable=true], textarea").emojidexAutocomplete({
      insertImg: false
    });
  } else {
    $("[contentEditable=true], textarea").emojidexAutocomplete();
  }

}).call(this);
