var scrollOpen = false;

function openPoster(data) {
    console.log(data);
  
    if (data) {
        var dataBytes = new Uint8Array(data.length);
        for (var i = 0; i < dataBytes.length; i++) {
          dataBytes[i] = data.charCodeAt(i);
        }
        
        var blob = new Blob([dataBytes])
  
      // Create a URL for the Blob.
      var url = URL.createObjectURL(blob);
  
      console.log(url);
      // Call your createWindow function to display the image.
      createWindow("poster", `<img src="${url}" width="100%" height="100%"/>`, "../icons/logos/poster.png");
    } else {
      // Handle the case where the image data is empty.
      console.error("Image data is empty.");
    }
  }




function openStickynote(data){
    createWindow("stickynote", `
    <link rel="stylesheet" href="../styles/stickynote.css">
    <script src="../js/stickynote.js" defer></script>
<div id="body2">
    <div id="controlButtons">
    <button id="saveFile" style="width:33.3%; height:1.5%;" onClick = "save()">save</button><button id="saveAsFile" style="width:33.3%; height:1.5%;">save as</button><button id="openFile" style="width:33.3%; height:1.5%;">open</button>
    </div>
    <textarea id="code">${data}</textarea>
</div>
`,"../icons/logos/stickynoteIcon.png");
}

function openPOSH(){
    createWindow("POSH",`
    <div id="bodyNumberTwo">
    <link rel="stylesheet" href="../styles/POSH.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press Start 2P" defer/>
    <script src="../js/POSH functions.js" defer></script>
    <script src="../js/POSH.js" defer></script>
    <ul id = "shell">
    <pre  id="shellData">
        <h4 class="user_disp">
            POSH is broken, this can happen from a variety of reasons, one of those being that you're not using an HTTP server
        </h4>
    </pre>
    <tag class="plag"></tag><input  type="text" name="shell" value="" spellcheck="false" id="input" contenteditable="true" autocomplete="off">
    <br>
    <br>
    <br>

    
</ul>


</div>
    `,"../icons/logos/console logo.png")
}




function openFolders(location){
       createWindow("bookshelf", `
       <link rel="Stylesheet" href="../styles/bookshelf.css"/>
       <script src="../js/bookshelf.js" defer></script>
       <script>
       function goBack() {
        var locationElement = document.getElementById("locat_ion");
        var currentPath = locationElement.innerHTML;
    
        // Split the current path by '/'
        var pathParts = currentPath.split('/');
    
        if (pathParts.length > 1) {
            // If there are more than one parts, remove the last one and update the innerHTML
            pathParts.pop(); // Remove the last part
            locationElement.innerHTML = pathParts.join('/');
        } else {
            console.log("no");
        }
    }
       </script>
       <div id="controlContainer" style=" position:absolute; top:0; background-color:rgb(35,35,35); width:100%; height:2.5vw; z-index:5;">
       <h3 id="locat_ion">${location}</h3>
        <button id=".." class="FileButton" onClick = 'goBack(); load();'></button>
       </div>
    <div id="listOfFiles" style='background-color:rgb(55,55,55); color:white; width:100%; height:100%;'>
    <br><br>
    <div id="files">

    </div>
    </div>
    `,"../icons/logos/bookshelf.png");
}

function openSettings(){
    createWindow("settings", `
    
    <link rel="Stylesheet" href="settings.css"/>
    <script src="../js/settings.js">
    <div id="background">
    <center>
        <h1>settings</h1>
        <button class="settingButton">change background/theme</button>
        <div id="subsetting">

        </div>
    </center>

    </div>
    `)
}







function Scroll(){
    if(scrollOpen==false){
        document.getElementById('overlay').style.opacity="0.9";
        document.getElementById('overlay').style.top="0";
        scrollOpen=true;
    }else{
        document.getElementById('overlay').style.opacity="0";
        document.getElementById('overlay').style.top="100%";
        scrollOpen=false;
    }

}