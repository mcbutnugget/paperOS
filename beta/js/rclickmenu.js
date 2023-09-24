var menu = document.getElementById("rclickmenu");
document.addEventListener("contextmenu",async function(e){
    if(e.button===2){
        e.preventDefault();
        console.log("rclick");
        menu.style.display = "none";
        menu.style.transition = "0s";
        menu.style.left = e.pageX+"px";
        menu.style.top = e.pageY+"px";
        menu.style.transition = "0.5s";
        menu.style.display = "block";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.8)"
    }else if(e.button === 0){
        menu.style.display = "none";
        menu.style.backgroundColor = "rgba(90,90,90,0)";
    }
});