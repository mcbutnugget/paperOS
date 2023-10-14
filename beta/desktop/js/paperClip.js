function search() {
    var search = document.getElementById("search");
    document.getElementById("body4").innerHTML=`<iframe style='width:100%; height:100%;' frameborder="0" src='${search.value}'/>`;
}