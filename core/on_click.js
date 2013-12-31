(function() {
  $(document).ready(function() {
    var emoji_path, extension_path;
    extension_path = "chrome-extension://" + chrome.runtime.id + "/";
    emoji_path = "img/";
    return $.getJSON(extension_path + "json/utf_emoji_by_categories_non_anime.json", function(emoji) {
      var emoji_regexps;
      emoji_regexps = Plugin.prototype.setEmojiCSS_getEmojiRegexps(emojis_data);
      Plugin.prototype.setEmojiIcon(emojis_data, element, emoji_regexps);
      return {
        setEmojiCSS_getEmojiRegexps: function(emojis_data) {
          var category, emojis_css, emojis_in_category, regexp_for_code, regexp_for_utf, _i, _len;
          regexp_for_utf = "";
          regexp_for_code = ":(";
          emojis_css = $('<style type="text/css" />');
          for (category in emojis_data) {
            emojis_in_category = emojis_data[category];
            for (_i = 0, _len = emojis_in_category.length; _i < _len; _i++) {
              emoji = emojis_in_category[_i];
              regexp_for_utf += emoji.moji + "|";
              regexp_for_code += emoji.name + "|";
              emojis_css.append("i.emojidex-" + emoji.moji + " {background-image: url('" + $.emojiarea.path + emoji.name + ".svg')}");
            }
          }
          $("head").append(emojis_css);
          return [regexp_for_utf.slice(0, -1), regexp_for_code.slice(0, -1) + "):"];
        },
        setEmojiIcon: function(emojis_data, element, emoji_regexps) {
          var getEmojiTag, replaceForCode, replaceForUTF;
          getEmojiTag = function(emoji_utf) {
            return '<i class="emojidex-' + emoji_utf + '"></i>';
          };
          replaceForUTF = function(replaced_string, emoji_regexp) {
            return replaced_string = replaced_string.replace(new RegExp(emoji_regexp, "g"), function(matched_string) {
              return getEmojiTag(matched_string);
            });
          };
          replaceForCode = function(replaced_string, emoji_regexp, emojis_data) {
            return replaced_string = replaced_string.replace(new RegExp(emoji_regexp, "g"), function(matched_string) {
              var category, _i, _len, _ref;
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
          return $(element).find(":not(iframe,textarea,script)").andSelf().contents().filter(function() {
            return this.nodeType === Node.TEXT_NODE;
          }).each(function() {
            var replaced_string;
            replaced_string = this.textContent;
            replaced_string = replaceForUTF(replaced_string, emoji_regexps[0]);
            replaced_string = replaceForCode(replaced_string, emoji_regexps[1], emojis_data);
            return $(this).replaceWith(replaced_string);
          });
        }
      };
    });
  });

}).call(this);
