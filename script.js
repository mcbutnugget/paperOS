function load(){
  document.getElementById("WC").innerHTML = "welcome "+localStorage.user;
}
function passs() {
  var x = document.getElementById("pass").value;
 document.getElementById("WC").innerHTML = "welcome "+localStorage.user;
  var text;
  if (x == localStorage.pass) {
    location.href = "main.html";
    localStorage.entered = true;
    
    text = "loading...";
  } else if (!localStorage.pass) {
    location.href = "paswordmaker.html";
  } else {
    text = "wrong password";
  }
  document.getElementById("error").innerHTML = text;
  event.preventDefault();
}

document.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    passs();
  }
});
if (localStorage.pass) {
  passs();
} else if (!localStorage.pass) {
  location.href = "paswordmaker.html";
}


  

  