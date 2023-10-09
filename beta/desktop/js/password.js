var pass;
var user = document.getElementById("user");



function detectPassword(){
    pass = document.getElementById("password");
    if(Key["Enter"]){
        if(pass.value=="password"){
            document.getElementById("loginPage").style.height="0";
            pass.style.outlineColor = "rgb(0,255,0)";
        }else{

            pass.style.outlineColor = "red";
        }
    }
}
function NewUser(){
    
}

setInterval(detectPassword,1);
