function search(){
var search = document.getElementById("search");
var iframe = document.createElement("iframe");
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.frameBorder = "0";
iframe.id = "theSiteThatYouWantToGoTo";
document.getElementById("body4").appendChild(iframe);

iframe.onload = function () {
  var iframeDocument = iframe.contentDocument;
  iframeDocument.open();

  // Replace with the URL of the page you want to load
  var url = search.value;

  // Make a request to the PHP proxy
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'php/proxy.php?url=' + encodeURIComponent(url), true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

      iframeDocument.write(response.html);
      
      // Dynamically create script elements for the scripts
      response.scripts.forEach(function (scriptSrc) {
        var scriptElement = document.createElement("script");
        scriptElement.src = scriptSrc;
        iframeDocument.body.appendChild(scriptElement);
      });

      // Dynamically create link elements for the styles
      response.styles.forEach(function (styleHref) {
        var linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = styleHref;
        iframeDocument.head.appendChild(linkElement);
      });

      iframeDocument.close();
    }
  };
  xhr.send();
};
}