async function search(){
    var search = document.getElementById("search");
    document.getElementById("body4").innerHTML = "<iframe src= `data:text/html,"+readDisk(search.value)+"`/>";
}