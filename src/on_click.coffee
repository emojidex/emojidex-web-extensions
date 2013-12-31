$(document).ready ->
  extension_path = "chrome-extension://" + chrome.runtime.id + "/"
  emojis_path = "img/"
  $.getJSON extension_path + "json/utf_emoji_by_categories_non_anime.json", (emojis_data) ->

    setEmojiCSS_getEmojiRegexps = (emojis_data) ->
      regexp_for_utf = ""
      regexp_for_code = ":("
      emojis_css = $('<style type="text/css" />')
      for category of emojis_data
        emojis_in_category = emojis_data[category]
        for emoji in emojis_in_category
          regexp_for_utf += emoji.moji + "|"
          regexp_for_code += emoji.name + "|"
          emojis_css.append "i.emojidex-" + emoji.moji + " {background-image: url('" + extension_path + emojis_path + emoji.name + ".svg')}"
      $("head").append emojis_css
      return [regexp_for_utf.slice(0, -1), regexp_for_code.slice(0, -1) + "):"]

    setEmojiIcon = (emojis_data, emoji_regexps) ->
      getEmojiTag = (emoji_utf) ->
        return '<i class="emojidex-' + emoji_utf + '"></i>'
      
      replaceForUTF = (replaced_string, emoji_regexp) ->
        replaced_string = replaced_string.replace new RegExp(emoji_regexp, "g"), (matched_string) ->
          return getEmojiTag matched_string
      
      replaceForCode = (replaced_string, emoji_regexp, emojis_data) ->
        replaced_string = replaced_string.replace new RegExp(emoji_regexp, "g"), (matched_string) ->
          matched_string = matched_string.replace /:/g, ""
          for category of emojis_data
            for emoji in emojis_data[category]
              if emoji.name is matched_string
                return getEmojiTag emoji.moji

      $("body").find(":not(iframe,textarea,script)").andSelf().contents().filter(->
        @nodeType is Node.TEXT_NODE
      ).each ->
        replaced_string = @textContent
        replaced_string = replaceForUTF replaced_string, emoji_regexps[0]
        replaced_string = replaceForCode replaced_string, emoji_regexps[1], emojis_data
        $(@).replaceWith replaced_string

    emoji_regexps = setEmojiCSS_getEmojiRegexps emojis_data
    setEmojiIcon emojis_data, emoji_regexps
