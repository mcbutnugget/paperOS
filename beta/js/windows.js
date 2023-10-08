var windowAmmount = 1;
//window's appearing
function createWindow(title, contents, img, w, h) {
    $('body').append(`
<div class="window" style="left:`+ windowAmmount * 2 + `vw; top:` + windowAmmount * 2 + `vw; z-index:${windowAmmount*5}; width:${w ? w : 50}vw; height:${h ? h : 25}vw;" id="window#${windowAmmount}">
<!--the thing that is draggable-->

<div class="header">
    `+ title + `
</div>
<button class="windowButton minimizeButton"><img class="controlButtons" src="../icons/logos/windowIcons/minimizeIcon.png"/></button>
<button class="windowButton fullscreenButton"><img class="controlButtons" src="../icons/logos/windowIcons/FullscreenIcon.png"/></button>
<button class="windowButton closeButton"><img class="controlButtons" src="../icons/logos/windowIcons/closeIcon.png"/></button>
<!--contents of the window-->
<div class="contents">
`+ contents + `
</div>
<div class="resize-handle" id="resizeTop"></div>
<div class="resize-handle" id="resizeBottom"></div>
<div class="resize-handle" id="resizeLeft"></div>
<div class="resize-handle" id="resizeRight"></div>
<div class="resize-handle" id="resizeTopLeft"></div>
<div class="resize-handle" id="resizeTopRight"></div>
<div class="resize-handle" id="resizeBottomLeft"></div>
<div class="resize-handle" id="resizeBottomRight"></div>

</div>`);
    if (img) {
        $('#open').append(`<button class="showWindow" id="`+windowAmmount+`"><img id="`+windowAmmount+`" src="` + img + `"/></button>`);
    } else {
        $('#open').append(`<button class="showWindow" id="`+windowAmmount+`"><img id="`+windowAmmount+`" src="/paperos/icons/logos/defaultApplication.png"/></button>`);
    }
    windowData();
    windowAmmount++;
}



//window magic GOES LATS
async function windowData() {
    var windows = document.getElementsByClassName("window");
    var headers = document.getElementsByClassName("header");
    var ruler = document.getElementById("ruler");
    var mouseX = 0;
    var mouseY = 0;
    var selectedWindow = null;
    var offsetX = 0;
    var offsetY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (selectedWindow) {
            e.preventDefault();
            var newX = mouseX - offsetX;
            var newY = mouseY - offsetY;

            var rulerTop = ruler.getBoundingClientRect().top + window.pageYOffset;
            var headerHeight = headers[0].clientHeight;

            newY = Math.min(newY, rulerTop - headerHeight);

            selectedWindow.style.left = newX + "px";
            selectedWindow.style.top = newY + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        selectedWindow = null;
    });

    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener("mousedown", (e) => {
            selectedWindow = windows[i];
            bringToFront(selectedWindow);
            offsetX = mouseX - selectedWindow.getBoundingClientRect().left;
            offsetY = mouseY - selectedWindow.getBoundingClientRect().top;
        });
    }

    function bringToFront(window) {
        var maxZIndex = 0;
        for (let i = 0; i < windows.length; i++) {
            windows[i].style.zIndex = 1;
            var zIndex = parseInt(getComputedStyle(windows[i]).zIndex);
            if (zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        }
        window.style.zIndex = maxZIndex + 1;
    }

    // Add event listeners for closing buttons (assuming you have a ".closeWindow" class for close buttons)
    document.querySelectorAll('.closeButton').forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            var windowElement = closeButton.closest(".window");
            var showButton = String(windowElement.id).replace("window#","");
            console.log(showButton);
            if (windowElement) {
                windowElement.remove();
                document.getElementById(showButton).remove(); // Remove the window when the close button is clicked
                windowAmmount--;
            }
        });
    });

    //window resizing time!!!

    var resizing = false;
    var resizeHandle;
    var initialMouseX;
    var initialMouseY;
    var initialWidth;
    var initialHeight;

    document.querySelectorAll('.resize-handle').forEach(function (handle) {
        handle.addEventListener('mousedown', function (e) {
            resizing = true;
            resizeHandle = e.target;
            initialMouseX = e.clientX;
            initialMouseY = e.clientY;
            const window = resizeHandle.parentElement;
            initialWidth = parseFloat(getComputedStyle(window).width);
            initialHeight = parseFloat(getComputedStyle(window).height);
        });
    });



    document.addEventListener('mousemove', function (e) {
        if (!resizing) return;

        const deltaX = e.clientX - initialMouseX;
        const deltaY = e.clientY - initialMouseY;
        const window = resizeHandle.parentElement;

        if (resizeHandle.id === 'resizeTop' && Math.max(initialHeight - deltaY, 200) != 200) {
            const newHeight = Math.max(initialHeight - deltaY, 200); // Minimum height is 200px
            window.style.height = newHeight + 'px';
            window.style.top = e.clientY + 'px';
        } else if (resizeHandle.id === 'resizeBottom') {
            const newHeight = Math.max(initialHeight + deltaY, 200); // Minimum height is 200px
            window.style.height = newHeight + 'px';
        } else if (resizeHandle.id === 'resizeLeft' && Math.max(initialWidth - deltaX, 200) != 200) {
            const newWidth = Math.max(initialWidth - deltaX, 200); // Minimum width is 200px
            window.style.width = newWidth + 'px';
            window.style.left = e.clientX + 'px';
        } else if (resizeHandle.id === 'resizeRight') {
            const newWidth = Math.max(initialWidth + deltaX, 200); // Minimum width is 200px
            window.style.width = newWidth + 'px';
        } else if (resizeHandle.id === 'resizeTopLeft' && Math.max(initialHeight - deltaY, 200) != 200 && Math.max(initialWidth - deltaX, 200) != 200) {
            const newWidth = Math.max(initialWidth - deltaX, 200); // Minimum width is 200px
            const newHeight = Math.max(initialHeight - deltaY, 200); // Minimum height is 200px
            window.style.width = newWidth + 'px';
            window.style.height = newHeight + 'px';
            window.style.left = e.clientX + 'px';
            window.style.top = e.clientY + 'px';
        } else if (resizeHandle.id === 'resizeTopRight' && Math.max(initialWidth - deltaY, 200) != 200) {
            const newWidth = Math.max(initialWidth + deltaX, 200); // Minimum width is 200px
            const newHeight = Math.max(initialHeight - deltaY, 200); // Minimum height is 200px
            window.style.width = newWidth + 'px';
            window.style.height = newHeight + 'px';
            window.style.top = e.clientY + 'px';
        } else if (resizeHandle.id === 'resizeBottomLeft' && Math.max(initialWidth - deltaX, 200) != 200) {
            const newWidth = Math.max(initialWidth - deltaX, 200); // Minimum width is 200px
            const newHeight = Math.max(initialHeight + deltaY, 200); // Minimum height is 200px
            window.style.width = newWidth + 'px';
            window.style.height = newHeight + 'px';
            window.style.left = e.clientX + 'px';
        } else if (resizeHandle.id === 'resizeBottomRight') {
            const newWidth = Math.max(initialWidth + deltaX, 200); // Minimum width is 200px
            const newHeight = Math.max(initialHeight + deltaY, 200); // Minimum height is 200px
            window.style.width = newWidth + 'px';
            window.style.height = newHeight + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        resizing = false;
        resizeHandle = null;
    });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (selectedWindow) {
            e.preventDefault();
            var newX = mouseX - offsetX;
            var newY = mouseY - offsetY;

            var rulerTop = ruler.getBoundingClientRect().top + window.pageYOffset;
            var headerHeight = headers[0].clientHeight;

            newY = Math.min(newY, rulerTop - headerHeight);

            selectedWindow.style.left = newX + "px";
            selectedWindow.style.top = newY + "px";

            // Add a class to prevent text selection
            selectedWindow.classList.add("no-selection");
        }
    });

    document.addEventListener("mouseup", () => {
        selectedWindow = null;

        // Remove the class to allow text selection
        if (document.querySelector(".no-selection")) {
            document.querySelector(".no-selection").classList.remove("no-selection");
        }
    });
    document.addEventListener('mouseup', function () {
        resizing = false;
        resizeHandle = null;

        // Remove the class to allow text selection
        const selectedWindow = document.querySelector(".no-selection");
        if (selectedWindow) {
            selectedWindow.classList.remove("no-selection");
        }
    });

// Add event listeners for minimize buttons (assuming you have a ".minimizeButton" class for minimize buttons)
document.querySelectorAll('.minimizeButton').forEach(function (minimizeButton) {
    minimizeButton.addEventListener('click', async function () {
        var windowElement = minimizeButton.closest(".window");
        if (windowElement) {
            // Hide the window
            windowElement.style.transition = "0.5s";
            windowElement.style.opacity = "0"
            await POSH.pause(500);
            windowElement.style.display = "none";

            // Remove the no-selection class to allow other buttons to be clicked
            windowElement.classList.remove("no-selection");
        }
    });
});

const buttons = document.querySelectorAll(".showWindow");

for (const button of buttons) {
    button.addEventListener('click', async function(event) {
        document.getElementById("window#"+button.id).style.display="block";
        await POSH.pause(1);
        document.getElementById("window#"+button.id).style.transition = "0.5s";
        document.getElementById("window#"+button.id).style.opacity = "1";
        await POSH.pause(500);
        document.getElementById("window#"+button.id).style.transition = "0s";
    });
}

}