(function() {
  $(document).ready(function() {
    var emojis_path, extension_path;
    extension_path = "chrome-extension://" + chrome.runtime.id + "/";
    emojis_path = "img/";
    return $("body").emojidexReplace();
  });

}).call(this);
