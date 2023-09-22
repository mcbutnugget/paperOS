


async function load(){
    var _location = document.getElementById("locat_ion").innerHTML;
    document.getElementById("files").innerHTML = "";
    document.getElementById("..").innerHTML = "";
if(_location!="p"){
    document.getElementById("..").innerHTML= `<img src='../icons/logos/windowIcons/arrowActive.png'/>`;
}else{

    document.getElementById("..").innerHTML = "<img src='../icons/logos/windowIcons/arrowUnactive.png'/>";
}




var data;
var folderData = [];
var folderDataRaw = PathToData(computator,_location);
for(var i = 0; i<=folderDataRaw.length-1; i++){
    folderData[folderData.length] = folderDataRaw[i][0];
  }
    data = folderData.join("<br>");

    for(var i = 0; i<=folderData.length-1;i++){
        if(folderData[Number(i)]!=".."){
            if(folderData[Number(i)].includes(".")){
                $('#files').append(`<button style="width:100%;" id="FILE_${folderData[Number(i)]}" onClick='localStorage.setItem("location",folderName+"/"+button.id.replace("_FILE",""));openStickynote(PathToFile(computator,folderName+"/"+button.id.replace("_FILE","")))' class = "FileButton">${folderData[Number(i)]}</button><br>`);
            }else{
                $('#files').append(`<button style="width:100%;" id="FOLDER_${folderData[Number(i)]}" onClick='document.getElementById("locat_ion").innerHTML = document.getElementById("locat_ion").innerHTML + "/"+this.id.replace("FOLDER_",""); load();' class = "FileButton">${folderData[Number(i)]}</button><br>`);
            }
        }
       
    }

    folderData = [];


}
load();