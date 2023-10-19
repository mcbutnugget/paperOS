function search() {
    var search = document.getElementById("search");
    document.getElementById("body4").innerHTML=`<iframe style='width:100%; height:100%;' frameborder="0" id="theSiteThatYouWantToGoTo"></iframe>`;
    document.getElementById("theSiteThatYouWantToGoTo").contentDocument.write(readDisk(search.value));
}