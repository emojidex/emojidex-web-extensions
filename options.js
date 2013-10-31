var path = document.getElementsByName("kinds");

document.getElementById('save').onclick = function() {
  if (path[0].checked) {
    localStorage['path'] = 'all'
  } else if (path[1].checked) {
    localStorage['path'] = 'cssClass'
  }
}

document.body.onload = function() {
  switch(localStorage['path']) {
    case 'all':
      path[0].checked = true;
      break;

    case 'cssClass':
      path[1].checked = true;
      break;

    default:
      path[0].checked = true;
      break;
  }
}