$(document).ready ->
  extension_path = "chrome-extension://" + chrome.runtime.id + "/"
  emojis_path = "img/"

  $("body").emojidexReplace()