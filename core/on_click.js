(function() {
  $(document).ready(function() {
    var emoji_path, extension_path;
    extension_path = "chrome-extension://" + chrome.runtime.id + "/";
    emoji_path = "img/";
    return $.getJSON(extension_path + "json/utf_emoji_by_categories_non_anime.json", function(emoji) {
      var replaced_html;
      replaced_html = document.getElementsByClassName("emojidex_replace")[0].innerHTML.replace(/:[\-\w]+:/g, function(matched_string) {
        var category, i, path, replaced;
        category = void 0;
        path = void 0;
        replaced = void 0;
        replaced = matched_string;
        for (category in emoji) {
          i = 0;
          while (i < emoji[category].length) {
            matched_string = matched_string.replace(/:/g, "");
            if (emoji[category][i].name === matched_string) {
              path = emoji_path || "";
              if (path.length && path.charAt(path.length - 1) !== "/") {
                path += "/";
              }
              replaced = "<img src='" + extension_path + path + matched_string + ".svg' alt='" + matched_string + "'>";
              break;
            }
            i++;
          }
        }
        return replaced;
      });
      return $(".emojidex_replace").empty().append(replaced_html);
    });
  });

}).call(this);
