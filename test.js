$(document).ready(function(){
  var extension_ID = "chrome-extension://" + chrome.runtime.id + "/";
  var emoji_path = "img/";
  $.getJSON(extension_ID + "json/utf_emoji_by_categories_non_anime.json", function(emoji) {
    var test = document.getElementsByClassName('emojidex_replace')[0].innerHTML.replace(/:[\-\w]+:/g, function(matched_string) {
      var category, emojis, path, replaced;
      replaced = matched_string;
      for (category in emoji) {
        for (var i = 0; i < emoji[category].length; i ++) {
          matched_string = matched_string.replace(/:/g, "");
          if (emoji[category][i].name === matched_string) {
            path = emoji_path || "";
            if (path.length && path.charAt(path.length - 1) !== "/") {
              path += "/";
            }
            replaced = "<img src='" + extension_ID + path + matched_string + ".svg' alt='" + matched_string + "'>";
            break;
          }
        }
      }
      return replaced;
    });
    $('.emojidex_replace').empty().append(test);
  })
})