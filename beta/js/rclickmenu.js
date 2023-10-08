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

        toDoOnClick(e);
    }
});

document.addEventListener("click", async function(e){
        console.log("click");
        menu.style.backgroundColor = "rgba(90,90,90,0)";
        await POSH.pause(500);
        menu.style.display = "none";
})

function createObject(name){
             
    for(var i = 0; i<=folderDataRaw.length-1; i++){
        folderData[folderData.length] = folderDataRaw[i][0];
      }

      if(!folderData.includes(name)){
        if((name.includes("."))){
          createFile(computator,_location,name);
        }else{
          createFolder(computator,_location,name);
        }
      $('#shellData').append(`<h4 class = 'user_disp'>created!</h4>`);
    }else{

      $('#shellData').append(`<h4 class = 'error'>that file or folder all ready exists, type a different name</h4>`);
    }

    folderData=[]; 
    //goes into a folder that you made

}

function toDoOnClick(e){
    if(e.currentTarget==document.getElementById("listOfFiles")){
        menu.innerHTML=`
            <button onClick='createFile()'>create file/folder</button>
        `
    }
}