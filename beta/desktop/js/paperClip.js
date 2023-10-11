function search(){
    var search = document.getElementById("search");
    var searchResults = await fetch(search.value);
    var searchResultsHTML = await searchResults.text();

    document.getElementById("body4").innerHTML = searchResultsHTML;
}