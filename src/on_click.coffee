$(document).ready ->
  extension_path = "chrome-extension://" + chrome.runtime.id + "/"
  emoji_path = "img/"
  $.getJSON extension_path + "json/utf_emoji_by_categories_non_anime.json", (emoji) ->
    replaced_html = document.getElementsByClassName("emojidex_replace")[0].innerHTML.replace(/:[\-\w]+:/g, (matched_string) ->
      category = undefined
      path = undefined
      replaced = undefined
      replaced = matched_string
      for category of emoji
        i = 0
        while i < emoji[category].length
          matched_string = matched_string.replace(/:/g, "")
          if emoji[category][i].name is matched_string
            path = emoji_path or ""
            path += "/"  if path.length and path.charAt(path.length - 1) isnt "/"
            replaced = "<img src='" + extension_path + path + matched_string + ".svg' alt='" + matched_string + "'>"
            break
          i++
      replaced
    )
    $(".emojidex_replace").empty().append replaced_html