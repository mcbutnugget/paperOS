var menu = document.getElementById("rclickmenu");
document.addEventListener("contextmenu",async function(e){
    if(e.button===2){
        e.preventDefault();
        console.log("rclick");
        menu.style.top = e.pageX+"px";
        menu.style.left = e.pageY+"px";
        menu.style.display = "block";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)"
        await POSH.pause(500);
        menu.style.backdropFilter= "blur(10px)"; 
        await POSH.pause(800);
        menu.style.backdropFilter= "blur(2px)"; 
        await POSH.pause(1000);
        menu.style.backdropFilter= "blur(6px)"; 
    }else if(e.button === 0){
        menu.style.display = "none";
        menu.style.backgroundColor = "rgba(90,90,90,0)";
    }
});