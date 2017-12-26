(function() {
  var optionsPort;

  optionsPort = chrome.runtime.connect();

  optionsPort.postMessage({
    method: 'getOptions'
  });

  optionsPort.onMessage.addListener(function(options) {
    return $(document).ready(function() {
      var elm_autocomplete, elm_replace, excuteReplaeWithFlag, i, len, loaded_emoji, new_img, reload;
      excuteReplaeWithFlag = function() {
        var replace_options;
        if (options.autoReplace) {
          replace_options = {
            autoUpdate: options.autoUpdate
          };
          return elm_replace.emojidexReplace(replace_options);
        }
      };
      elm_replace = $("body");
      elm_autocomplete = $("[contentEditable=true], textarea");
      if (elm_replace.find('.emojidex-emoji').length === 0) {
        excuteReplaeWithFlag();
      } else {
        loaded_emoji = elm_replace.find('.emojidex-emoji');
        for (i = 0, len = loaded_emoji.length; i < len; i++) {
          reload = loaded_emoji[i];
          new_img = "<img class='" + reload.className + "' src='" + reload.src + "' title='" + reload.title + "' ></img>";
          $(reload).replaceWith(new_img);
        }
        excuteReplaeWithFlag();
      }
      if (options.setAutocomplete) {
        if (options.currentTabUrl.match(/twitter.com/)) {
          return elm_autocomplete.emojidexAutocomplete({
            insertImg: false
          });
        } else {
          return elm_autocomplete.emojidexAutocomplete();
        }
      }
    });
  });

}).call(this);
