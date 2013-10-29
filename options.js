var path = document.getElementsByName("kinds");

document.getElementById('save').onclick = function() {
  if (path[0].checked) {
    localStorage['path'] = 'stylish'
    //document.getElementById('img').innerHTML('<img src="img/Naty-cool.jpg"></img>');
  } else if (path[1].checked) {
    localStorage['path'] = 'cool'
  } else {
    localStorage['path'] = 'strong'
  }
}

document.body.onload = function() {
  switch(localStorage['path']) {
    case 'stylish':
      path[0].checked = true;
      break;

    case 'cool':
      path[1].checked = true;
      break;

    case 'strong':
      path[2].checked = true;
      break;

    default:
      path[0].checked = true;
      break;
  }
}
  //   localStorage['path'] = '<img src="img/Naty-stylish.jpeg"></img>'
  // } else if (path[1].checked) {
  //   localStorage['path'] = '<img src="img/Naty-cool.jpg"></img>'
  // } else {
  //   localStorage['path'] = '<img src="img/Naty-strong.jpg"></img>'