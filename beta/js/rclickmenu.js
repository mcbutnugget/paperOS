var menu = document.getElementById("rclickmenu");
var menuVisible = false;

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Prevent the default context menu
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    if (menuVisible) {
       
        menu.style.transition = "0.5s";
        menu.style.opacity = "0";

        setTimeout(function () {
          
            menu.style.transition = "0s"; 
            menu.style.left = mouseX + "px";
            menu.style.top = mouseY + "px";
            menu.style.backgroundColor="rgba(90, 90, 90, 0)";

  

        }, 500); 
    } else {
         
        menu.style.transition = "0s"; 
        menu.style.left = mouseX + "px";
        menu.style.top = mouseY + "px";
        menu.style.backgroundColor="rgba(90, 90, 90, 0.7)";
        menu.style.display = "block"; 

        

        menuVisible = true;
    }
});

// Handle left-click to hide the menu
document.addEventListener("click", function (e) {
    if (e.button === 0 && menuVisible) {
        menu.style.display = "none";
        menuVisible = false;
    }
});