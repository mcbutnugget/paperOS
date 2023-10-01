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
        await POSH.pause(500);
        //go to mouse
        menu.style.transition = "0s";
        menu.style.left = e.pageX+"px";
        menu.style.top = e.pageY+"px";
        await POSH.pause(1);
        //appear
        menu.style.display = "block";
        menu.style.transition = "0.5s";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)"
        menu.style.backdropFilter= "blur(6px)";
    }
});

document.addEventListener("click", async function(e){
        console.log("click");
        menu.style.backgroundColor = "rgba(90,90,90,0)";
        await POSH.pause(500);
        menu.style.display = "none";
})