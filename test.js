$(document).ready(function(){
  var extension_ID = "chrome-extension://" + chrome.runtime.id + "/";
  var emoji_path = "img/utf/";
  $.getJSON(extension_ID + "json/utf_emoji_by_categories_non_anime.json", function(emoji) {
    console.log(emoji);
    var test = document.getElementsByClassName('emojidex_replace')[0].innerHTML.replace(/:[\-\w]+:/g, function(matched_string) {
      return "hit"
    });
    $('.emojidex_replace').empty().append(test);
  })

})

// console.log(test)
// var replaced_html = test.replace(/:[\-\w]+:/g, function(matched_string) {
//   var category, emojis, path, replaced;
//   replaced = matched_string;
// });
// console.log(replaced_html)

// replaced_html = target.innerHTML.replace(/:[\-\w]+:/g, function(matched_string) {
//   var category, emojis, path, replaced;
//   replaced = matched_string;
//   for (category in $.emojiarea.icons) {
//     emojis = $.emojiarea.icons[category];
//     i = 0;
//     while (i < emojis.length) {
//       matched_string = matched_string.replace(/:/g, "");
//       if (emojis[i].name === matched_string) {
//         path = $.emojiarea.path || "";
//         if (path.length && path.charAt(path.length - 1) !== "/") {
//           path += "/";
//         }
//         replaced = "<img src=\"" + path + matched_string + ".svg\" alt=\"" + matched_string + "\">";
//         break;
//       }
//       i++;
//     }
//   }
//   return replaced;
//   });
//return $.each($(element), function(i, target) {
//   var replaced_html;
//   replaced_html = target.innerHTML.replace(/:[\-\w]+:/g, function(matched_string) {
//     var category, emojis, path, replaced;
//     replaced = matched_string;
//     for (category in $.emojiarea.icons) {
//       emojis = $.emojiarea.icons[category];
//       i = 0;
//       while (i < emojis.length) {
//         matched_string = matched_string.replace(/:/g, "");
//         if (emojis[i].name === matched_string) {
//           path = $.emojiarea.path || "";
//           if (path.length && path.charAt(path.length - 1) !== "/") {
//             path += "/";
//           }
//           replaced = "<img src=\"" + path + matched_string + ".svg\" alt=\"" + matched_string + "\">";
//           break;
//         }
//         i++;
//       }
//     }
//     return replaced;
//   });
//   return $(target).empty().append(replaced_html);
// });