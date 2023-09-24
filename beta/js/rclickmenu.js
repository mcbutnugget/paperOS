
document.addEventListener("click",function(e){
    var menu = document.getElementById("rclickmenu");
    if(e.type=="2"){
        console.log("rclick");
        menu.style.top = e.clientY;
        menu.style.left = e.clientY;
        menu.style.display = "block";
        menu.style.backgroundColor = "rgba(20, 20, 20, 0.699)"
        POSH.pause(500);
        menu.style.backdropFilter= "blur(10px)"; 
        POSH.pause(800);
        menu.style.backdropFilter= "blur(2px)"; 
        POSH.pause(1000);
        menu.style.backdropFilter= "blur(6px)"; 
        e.preventDefault();
    }else if(e.type = "0"){
        menu.style.display = "none";
        menu.style.backgroundColor = "rgba(20,20,20,0)";
    }
});