var menu = document.getElementById("rclickmenu");
document.addEventListener("contextmenu",async function(e){
    e.preventDefault();
    if(e.button === 2){
        //fade
        menu.style.display = "block";
        menu.style.transition = "0.5s";
        menu.style.backgroundColor = "rgba(90,90,90,0)";
        await POSH.pause(500);
        menu.style.display = "none";
        //go to mouse
        menu.style.transition = "0s";
        menu.style.left = e.pageX+"px";
        menu.style.top = e.pageY+"px";
        await POSH.pause(1);
        //appear
        menu.style.display = "block";
        menu.style.transition = "0.5s";
        await POSH.pause(500);
        menu.style.backdropFilter= "blur(6px)";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)";
    }
});

document.addEventListener("click", async function(e){
        console.log("click");
        menu.style.backgroundColor = "rgba(90,90,90,0)";
        await POSH.pause(500);
        menu.style.display = "none";
})