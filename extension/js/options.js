(function() {
  $(document).ready(function() {
    var forms, gm, ls, option, option_names, options;
    gm = chrome.i18n.getMessage;
    $('#header').append("<h2>" + (gm('options_header')) + "</h2>");
    $('#licensing_info-btn').text(gm('options_nav_licensing_info'));
    $('#licensing_info-title').text(gm('options_nav_licensing_info'));
    $('#licensing-header-1').text(gm('options_licensing_header_1'));
    $('#licensing-header-2').text(gm('options_licensing_header_2'));
    $('#licensing-description').text(gm('options_licensing_description'));
    option_names = ['auto-replace', 'set-autocomplete'];
    forms = ["<div class='checkbox'><label><input id='" + option_names[0] + "' type='checkbox'>" + (gm('options_auto_replace')) + "</label></div>", "<div class='checkbox'><label><input id='" + option_names[1] + "' type='checkbox'>" + (gm('options_set_autocomplete')) + "</label></div>"];
    $('form#setting').append(forms);
    ls = $.localStorage;
    options = ls.get(option_names);
    for (option in options) {
      if (options[option]) {
        $("#" + option)[0].checked = true;
      }
    }
    return $('#auto-replace, #set-autocomplete').click(function(e) {
      ls.set(e.currentTarget.id, e.currentTarget.checked);
    });
  });

}).call(this);
