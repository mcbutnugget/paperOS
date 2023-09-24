var menu = document.getElementById("rclickmenu");
document.addEventListener("contextmenu",async function(e){
    e.preventDefault();
    if (e.button === 2) {
        menu.style.display = "block";
        menu.style.transition = "0.5s";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0)";
        menu.style.backdropFilter = "blur(0px)";
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    
        setTimeout(async () => {
            menu.style.transition = "0s";
            menu.style.display = "none";
    
            await POSH.pause(1);
    
            menu.style.display = "block";
            menu.style.transition = "0.5s";
            menu.style.backdropFilter = "blur(6px)";
            menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)";
    
            await POSH.pause(500);
        }, 510);
    }
    
    if (e.button === 0) {
        console.log("click");
        menu.style.backgroundColor = "rgba(90, 90, 90, 0)";
    
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
    }
    
});