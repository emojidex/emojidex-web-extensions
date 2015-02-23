(function() {
  var emojis_path, extension_path;

  extension_path = "chrome-extension://" + chrome.runtime.id + "/";

  emojis_path = "img/";

  $("body").emojidexReplace();

  $("[contentEditable=true], textarea").emojidexAutocomplete();

}).call(this);
