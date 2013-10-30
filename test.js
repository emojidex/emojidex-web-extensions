$(document).ready(function(){
  var emoji_path = "img/utf/";
  $.getJSON("chrome-extension://__MSG_@@extension_id__/json/utf_emoji_by_categories_non_anime.json", function(emoji) {
    console.log(emoji)
  })
  var test = document.getElementsByClassName('emojidex_replace')[0].innerText;
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