var scrollOpen = false;

function openPoster(data) {
    const encodedData = base64.decode(data);
    console.log(`data:image/png;base64,${encodedData}`);
    createWindow("poster", `<img src="data:image/png;base64,${encodedData}" />`, "icons/logos/poster.png");
  }




function openStickynote(data){
    createWindow("stickynote",readDisk("html/stickynote.html"),"icons/logos/stickynoteIcon.png");
}

function openPaperCLP(){
    createWindow("paperCLIP",readDisk("html/paperClip.html"),"icons/logos/paperclip.png");
}

function time(){
    const daTime = new Date();
    const hours = daTime.getHours().toString().padStart(2, '0');
    const minutes = daTime.getMinutes().toString().padStart(2, '0');

    document.getElementById("time").innerHTML=`${hours}:${minutes}`;
}

function openPOSH(){
    createWindow("POSH",readDisk("html/POSH.html"),"icons/logos/console logo.png")
}


function openFolders(location){
       createWindow("bookshelf",readDisk("bookshelf.html") ,"icons/logos/bookshelf.png");
}

function openSettings(){
    createWindow("settings", readDisk("settings.html"))
}

function Scroll(){
    if(scrollOpen==false){
        document.getElementById('overlay').style.backgroundColor="rgba(32, 32, 32, 0.7)";
        document.getElementById('overlay').style.top="0";
        scrollOpen=true;
    }else{
        document.getElementById('overlay').style.backgroundColor="rgba(32, 32, 32, 0)";
        document.getElementById('overlay').style.top="100%";
        scrollOpen=false;
    }

}