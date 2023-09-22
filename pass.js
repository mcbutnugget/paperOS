localStorage.pass;
localStorage.user;
localStorage.entered = false;
function passD() {
  let x = document.getElementById("passN").value;
  let y = document.getElementById("passNc").value;
  let z = document.getElementById("user").value;
  let text;

  
  if (x == y && z != "") {
    localStorage.pass = y;
    localStorage.user = z;
    
    location.href = "https://paperos.glitch.me";
    text = "loading";
  } else if (x != y) {
    text = "password's don't match";
  } else if (z == "") {
    text = "you have no username";
  } else if (x != y && z == "") {
    text = "password's don't match and you have no username";
  }
  document.getElementById("error").innerHTML = text;
}
