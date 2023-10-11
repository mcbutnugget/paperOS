function search(){
    var search = document.getElementById("search");
    document.getElementById("body4").innerHTML = readDisc(search.value).replace("<body>","<div>").replace("<head>","");
}