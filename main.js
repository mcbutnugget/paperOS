var open=true;
var fullscreen = false;
var fullscreenBg = false;
var nfullscreen = false;
var rclick = false;


function load(){
  if(!localStorage.bg){
    localStorage.bg=0;
  }
  
   
  if(localStorage.bg==1){
    
    document.getElementById("current").src = "https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/chalkboard.jpg?v=1670829310895";
    document.getElementById("launchbar").style.backgroundColor="#52331D";
    document.getElementById("bg").style.backgroundColor="#3D3D3D";
    document.getElementById("notepad").style.backgroundColor="#3D3D3D";
    document.getElementById("window").style.backgroundColor="#3D3D3D";
    document.getElementById("file").style.backgroundColor="#3D3D3D";
    document.getElementById("notepad").style.color="white";
    document.getElementById("html").style.backgroundImage = "url('https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/chalkboard.jpg?v=1670829310895')";
  }else if(localStorage.bg==0){
    document.getElementById("current").src = "https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/paper(1).png?v=1670306442348";
    document.getElementById("launchbar").style.backgroundColor="red";
    document.getElementById("bg").style.backgroundColor="#f1f1f1";
    document.getElementById("window").style.backgroundColor="#f1f1f1";
    document.getElementById("notepad").style.backgroundColor="#f1f1f1";
    document.getElementById("file").style.backgroundColor="#f1f1f1";
    document.getElementById("notepad").style.color="black";
    document.getElementById("html").style.backgroundImage = "url('https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/paper(1).png?v=1670306442348')";
  
}
  if (!localStorage.pass) {
    location.href = "paswordmaker.html";
  }

}
function menu(){
  if(open==false){
  document.getElementById("menu").style.display = "none";
    
    open=true;
}else if(open=true){
  document.getElementById("menu").style.display = "inline";

    open=false;
}
}

function shut(){
  location.href = "https://paperos.glitch.me"
  open=false;
  menu();
}
function newWindow(window){
  document.getElementById(window+"header").style.display = "inline";
  document.getElementById(window).style.display = "inline";
  open=false;
  menu();
}
function close(window){
  document.getElementById(window+"header").style.display = "none";
  document.getElementById(window).style.display = "none";
}
function fulscreen(window){
  
  if(fullscreen==false){
  document.getElementById(window).style.width = "100%";
  document.getElementById(window+"header").style.width = "100%";
  document.getElementById(window).style.height = "43vw";
  document.getElementById(window).style.left = "-14px";
    document.getElementById(window).style.top = "0px";
  fullscreen=true;
}else if(fullscreen==true){
  document.getElementById(window).style.width = "250px";
  document.getElementById('"'+window+"header").style.width = "250px";
  document.getElementById('"'+window).style.height = "200px";
  document.getElementById('"'+window).style.left = "50%";
    document.getElementById('"'+window).style.top = "50%";
  fullscreen=false;
}
}
function background(change){
  if(localStorage.bg==0){
    localStorage.bg=1;
    document.getElementById("current").src = "https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/chalkboard.jpg?v=1670829310895";
    document.getElementById("launchbar").style.backgroundColor="#52331D";
    document.getElementById(change).style.backgroundColor="#3D3D3D";
    
    document.getElementById("notepad").style.color="white";
    document.getElementById("html").style.backgroundImage = "url('https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/chalkboard.jpg?v=1670829310895')";
    
  }else if(localStorage.bg==1){
    localStorage.bg=0;
    document.getElementById("current").src = "https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/paper(1).png?v=1670306442348";
    document.getElementById(change).style.backgroundColor="#f1f1f1";
    document.getElementById("notepad").style.color="black";
    document.getElementById("launchbar").style.backgroundColor="red";
    document.getElementById("html").style.backgroundImage = "url('https://cdn.glitch.global/bcd81597-8b94-49e2-aee2-81079e0ec671/paper(1).png?v=1670306442348')";
    
  }
}

function buttonR(){
  if(rclick==false){
    document.getElementById("rclickmenu").style.display = "inline";
    rclick=true;
  }else if(rclick==true){
    document.getElementById("rclickmenu").style.display = "none";
    rclick=false;
  }
   
}
window.oncontextmenu = function ()
{
    buttonR();
    return false;     // cancel default menu
}