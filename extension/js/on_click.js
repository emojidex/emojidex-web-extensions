(function() {
  $("body").emojidexReplace();

  if (tab_url.match(/twitter.com/)) {
    $("[contentEditable=true], textarea").emojidexAutocomplete({
      contentEditablePlaneText: true
    });
  } else {
    $("[contentEditable=true], textarea").emojidexAutocomplete();
  }

}).call(this);
