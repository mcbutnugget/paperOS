var menu = document.getElementById("rclickmenu");
document.addEventListener("click",async function(e){
    if(e.type=="2"){
        console.log("rclick");
        menu.style.top = e.clientY+"px";
        menu.style.left = e.clientY+"px";
        menu.style.display = "block";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)"
        await POSH.pause(500);
        menu.style.backdropFilter= "blur(10px)"; 
        await POSH.pause(800);
        menu.style.backdropFilter= "blur(2px)"; 
        await POSH.pause(1000);
        menu.style.backdropFilter= "blur(6px)"; 
        e.preventDefault();
    }else if(e.type = "0"){
        menu.style.display = "none";
        menu.style.backgroundColor = "rgba(90,90,90,0)";
    }
});