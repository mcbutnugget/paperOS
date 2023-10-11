async function search(){
    var search = document.getElementById("search");
    document.getElementById("body4").innerHTML = readDisk(search.value);
}