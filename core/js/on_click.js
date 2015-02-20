(function() {
  $(document).ready(function() {
    var emojis_path, extension_path;
    extension_path = "chrome-extension://" + chrome.runtime.id + "/";
    emojis_path = "img/";
    return $.getJSON(extension_path + "json/utf_emoji_by_categories_non_anime.json", function(emojis_data) {
      var emoji_regexps, setEmojiCSS_getEmojiRegexps, setEmojiIcons;
      setEmojiCSS_getEmojiRegexps = function(emojis_data) {
        var category, emoji, emojis_css, emojis_in_category, regexp_pattern_for_code, regexp_pattern_for_utf, _i, _len;
        regexp_pattern_for_utf = "";
        regexp_pattern_for_code = ":(";
        emojis_css = $('<style type="text/css" />');
        for (category in emojis_data) {
          emojis_in_category = emojis_data[category];
          for (_i = 0, _len = emojis_in_category.length; _i < _len; _i++) {
            emoji = emojis_in_category[_i];
            regexp_pattern_for_utf += emoji.moji + "|";
            regexp_pattern_for_code += emoji.name + "|";
            emojis_css.append("i.emojidex-" + emoji.moji + " {background-image: url('" + extension_path + emojis_path + emoji.name + ".svg')}");
          }
        }
        $("head").append(emojis_css);
        return [regexp_pattern_for_utf.slice(0, -1), regexp_pattern_for_code.slice(0, -1) + "):"];
      };
      setEmojiIcons = function(emojis_data, emoji_regexps) {
        var getEmojiTag, replaceForEmojiTagUsingCode, replaceForEmojiTagUsingUTF;
        getEmojiTag = function(emoji_utf) {
          return '<i class="emojidex-' + emoji_utf + '"></i>';
        };
        replaceForEmojiTagUsingUTF = function(replaced_string, emoji_regexp) {
          return replaced_string = replaced_string.replace(new RegExp(emoji_regexp, "g"), function(matched_string) {
            return getEmojiTag(matched_string);
          });
        };
        replaceForEmojiTagUsingCode = function(replaced_string, emoji_regexp, emojis_data) {
          return replaced_string = replaced_string.replace(new RegExp(emoji_regexp, "g"), function(matched_string) {
            var category, emoji, _i, _len, _ref;
            matched_string = matched_string.replace(/:/g, "");
            for (category in emojis_data) {
              _ref = emojis_data[category];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                emoji = _ref[_i];
                if (emoji.name === matched_string) {
                  return getEmojiTag(emoji.moji);
                }
              }
            }
          });
        };
        return $("body").find(":not(iframe,textarea,script)").andSelf().contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).each(function() {
          var replaced_string;
          replaced_string = this.textContent;
          replaced_string = replaceForEmojiTagUsingUTF(replaced_string, emoji_regexps[0]);
          replaced_string = replaceForEmojiTagUsingCode(replaced_string, emoji_regexps[1], emojis_data);
          return $(this).replaceWith(replaced_string);
        });
      };
      emoji_regexps = setEmojiCSS_getEmojiRegexps(emojis_data);
      return setEmojiIcons(emojis_data, emoji_regexps);
    });
  });

}).call(this);
