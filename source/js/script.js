!localStorage && (l = location, p = l.pathname.replace(/(^..)(:)/, "$1$$"), (l.href = l.protocol + "//127.0.0.1" + p));


function tabs(evt, typeTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(typeTab).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


$(function(){
  $(window).load(function() {
      $(".tv").mCustomScrollbar();
  });
});

$(".tv").mCustomScrollbar({
  axis: 'y',
  theme: 'inset-2-dark',
  scrollInertia: '0',
  mouseWheel: {
      deltaFactor: 80
  }
});


var modalWindow = document.querySelector('.login');
var loginBtn = document.querySelector('.user__login-btn');

loginBtn.onclick = function() {
  modalWindow.style.display = "block";
}

window.onclick = function() {
  modalWindow.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalWindow) {
      modalWindow.style.display = "none";
    }
}


var logoutBtn = document.querySelector('.user__logout');
var userhide = document.querySelector('.user__hide');

document.getElementById('entry').onclick = function () {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var out = document.getElementById('out');

	if (username === 'kostya' && password === '12345') {
    out.innerHTML = 'Константин К.';
    loginBtn.style.display = "none";
    modalWindow.style.display = "none";
    logoutBtn.style.display = "block";
  }

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('name', out.innerHTML);
  userhide.style.display = (userhide.style.display == 'inherit') ? '' : 'inherit';
  localStorage.setItem('hide', userhide.style.display);
}

var inputName = document.querySelector('.change-name');
var nameSave = document.querySelector('.name-save');

nameSave.onmousedown = function() {
  var changeName = document.getElementById('change').value;
  localStorage.setItem('name', changeName);
  inputName.style.display = 'none';
  out.style.display = 'block';
  out.innerHTML = localStorage.getItem('name');
  nameSave.style.display = 'none';
}

out.onclick = function() {
  inputName.style.display = 'block';
  nameSave.style.display = 'block';
  out.style.display = 'none';
  inputName.value = localStorage.getItem('name');
}

inputName.onblur = function() {
  inputName.style.display = 'none';
  nameSave.style.display = 'none';
  out.style.display = 'block';
}

if (localStorage.getItem('hide') == 'inherit') {
  document.querySelector('.user__hide').style.display = 'inherit';
  out.innerHTML = localStorage.getItem('name');
  loginBtn.style.display = "none";
  logoutBtn.style.display = "block";
}

logoutBtn.onclick = function() {
  location.reload();
  localStorage.clear();
}
