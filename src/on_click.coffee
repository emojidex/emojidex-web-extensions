$(document).ready ->
  extension_path = "chrome-extension://" + chrome.runtime.id + "/"
  emoji_path = "img/"
  $.getJSON extension_path + "json/utf_emoji_by_categories_non_anime.json", (emoji) ->
    # replaced_html = document.getElementsByClassName("emojidex_replace")[0].innerHTML.replace(/:[\-\w]+:/g, (matched_string) ->
    #   category = undefined
    #   path = undefined
    #   replaced = undefined
    #   replaced = matched_string
    #   for category of emoji
    #     i = 0
    #     while i < emoji[category].length
    #       matched_string = matched_string.replace(/:/g, "")
    #       if emoji[category][i].name is matched_string
    #         path = emoji_path or ""
    #         path += "/"  if path.length and path.charAt(path.length - 1) isnt "/"
    #         replaced = "<img src='" + extension_path + path + matched_string + ".svg' alt='" + matched_string + "'>"
    #         break
    #       i++
    #   replaced
    # )
    # $(".emojidex_replace").empty().append replaced_html

    emoji_regexps = Plugin::setEmojiCSS_getEmojiRegexps emojis_data
    Plugin::setEmojiIcon emojis_data, element, emoji_regexps

    setEmojiCSS_getEmojiRegexps: (emojis_data) ->
      regexp_for_utf = ""
      regexp_for_code = ":("
      emojis_css = $('<style type="text/css" />')
      for category of emojis_data
        emojis_in_category = emojis_data[category]
        for emoji in emojis_in_category
          regexp_for_utf += emoji.moji + "|"
          regexp_for_code += emoji.name + "|"
          emojis_css.append "i.emojidex-" + emoji.moji + " {background-image: url('" + $.emojiarea.path + emoji.name + ".svg')}"
      $("head").append emojis_css
      return [regexp_for_utf.slice(0, -1), regexp_for_code.slice(0, -1) + "):"]

    setEmojiIcon: (emojis_data, element, emoji_regexps) ->
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

      $(element).find(":not(iframe,textarea,script)").andSelf().contents().filter(->
        @nodeType is Node.TEXT_NODE
      ).each ->
        replaced_string = @textContent
        replaced_string = replaceForUTF replaced_string, emoji_regexps[0]
        replaced_string = replaceForCode replaced_string, emoji_regexps[1], emojis_data
        $(@).replaceWith replaced_string