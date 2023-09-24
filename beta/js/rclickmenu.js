var menu = document.getElementById("rclickmenu");
var menuVisible = false;

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Prevent the default context menu
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    if (menuVisible) {
        // Hide the menu with a fade-out effect
        menu.style.transition = "0.5s";
        menu.style.opacity = "0";

        setTimeout(function () {
            // After the fade-out animation, move the menu to the mouse position
            menu.style.transition = "0s"; // Disable transition for instant teleportation
            menu.style.left = mouseX + "px";
            menu.style.top = mouseY + "px";
            menu.style.backgroundColor = "rgba(90, 90, 90, 0)"; // Set background to transparent
            menu.style.opacity = "1"; // Make it fully visible again
            menu.style.display = "block"; // Ensure it's displayed

        }, 500); // Adjust the timeout duration to match the fade-out duration

        menuVisible = false;
    } else {
        // Teleport the menu to the mouse position and make it visible
        menu.style.transition = "0s"; // Disable transition for instant teleportation
        menu.style.left = mouseX + "px";
        menu.style.top = mouseY + "px";
        menu.style.backgroundColor = "rgba(90, 90, 90, 0.7)"; // Set background to semi-transparent
        menu.style.opacity = "1"; // Make it fully visible
        menu.style.display = "block"; // Ensure it's displayed

        menuVisible = true;
    }
});

// Handle left-click to hide the menu
document.addEventListener("click", function (e) {
    if (e.button === 0 && menuVisible) {
        menu.style.transition = "0.5s"; // Apply a fade-out effect
        menu.style.opacity = "0";

        setTimeout(function () {
            // After the fade-out animation, hide the menu
            menu.style.transition = "0s"; // Disable transition for instant teleportation
            menu.style.display = "none";
        }, 500); // Adjust the timeout duration to match the fade-out duration

        menuVisible = false;
    }
});
