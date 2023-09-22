var textarea = document.getElementById('code');


function load(){
    var bootloader = localStorage.getItem("computator");
    var computator = JSON.parse(bootloader);
}


var data = [""];
function save(){
data=document.getElementById("code").innerHTML;
localStorage.setItem(localStorage.getItem("location"),data);

}

$(document).keydown(function(e) {
    var code = document.getElementById("code");
    var key = undefined;
    var possible = [ e.key, e.keyIdentifier, e.keyCode, e.which ];

    while (key === undefined && possible.length > 0)
    {
        key = possible.pop();
    }

    if (key && (key == '115' || key == '83' ) && (e.ctrlKey || e.metaKey) && !(e.altKey))
    {
        e.preventDefault();
        save();
        return false;
    }
    if (key && (key == '69' || key == '69' ) && (e.ctrlKey || e.metaKey) && !(e.altKey))
    {
        e.preventDefault();
        exit();
        return false;
    }
    if (key == "9"){
        e.preventDefault();
        var start = code.selectionStart;
        var end = code.selectionEnd;
      
      
        code.value = code.value.substring(0, start) + "    " + code.value.substring(end);
        code.selectionStart = code.selectionEnd = start + 4;
        return false;
    }
    return true;
}); 

