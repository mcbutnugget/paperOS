var menu = document.getElementById("rclickmenu");
document.addEventListener("contextmenu",async function(e){
    e.preventDefault();
    if(e.button === 2){
        menu.style.display = "block";
        menu.style.transition = "0.5s";
        menu.style.backgroundColor = "rgba(90,90,90,0)";
        menu.style.backdropFilter= "blur(0px)";
        await POSH.pause(510);
        menu.style.transition = "0s";
        menu.style.display = "none";
        menu.style.left = e.pageX+"px";
        menu.style.top = e.pageY+"px";
        await POSH.pause(1);
        menu.style.display = "block";
        menu.style.transition = "0.5s";
        menu.style.backdropFilter= "blur(6px)";
        await POSH.pause(500);
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)"
        await POSH.pause(500);
    }else if(e.button === 0){
        console.log("click");
        menu.style.backgroundColor = "rgba(90,90,90,0)";
        await POSH.pause(500);
        menu.style.display = "none";
    }
});