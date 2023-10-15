var pass;
var user = document.getElementById("user");

async function hash(string) {
    // Convert the string to a byte array
    var bytes = new TextEncoder().encode(string);
  
    // Create a new SHA-256 hash object
    var hash = new crypto.subtle.Sha256();
  
    // Update the hash object with the byte array
    hash.update(bytes);
  
    // Digest the hash object and return the hash as a string
    return await hash.digest('hex');
  }
  

function detectPasswordFor(user){
    pass = document.getElementById("password");
    if(Key["Enter"]){
        if(pass.value==PathToFile(computator,"p/main/users/"+user+"/userData.incd").split("\n")[0]){
            document.getElementById("loginPage").style.height="0";
            pass.style.outlineColor = "rgb(0,255,0)";
        }else{
           pass.style.outlineColor = "red";
        }
    }
}

async function loop(){
    noUsers();
    for(var i = 0; i<=PathToData(computator,"p/main/users").length-1; i++){
        folderData[folderData.length] = PathToData(computator,"p/main/users")[i][0];
      }
    if(Key["Enter"]&&folderData.length < 1){
        await NewUser(document.getElementById("username").value,document.getElementById("password").value);
    }
    if(folderData.length > 1){
        document.getElementById("loginPage").style.height="0";
        pass.style.outlineColor = "rgb(0,255,0)";
    }
    folderData = [];
}

async function NewUser(username,pass){
    h1 = await hash(pass);
    h2 = await hash(h1);
    h3 = await hash(h2);
    h4 = await hash(h3);
    h5 = await hash(h4);
    createFolder(computator, "p/main/users",username);
    createFile(computator, "p/main/users/"+username,"userData.incd");
    writeFile(computator, "p/main/users/"+username+"userData.incd",hash(h6)+"\nname:"+username);
}

function noUsers(){
    for(var i = 0; i<=PathToData(computator,"p/main/users").length-1; i++){
        folderData[folderData.length] = PathToData(computator,"p/main/users")[i][0];
      }
    if(folderData.length>1){
        document.getElementById("createUser").style.display = "none";
        document.getElementById("selectedUser").style.display = "none";
        document.getElementById("profileSelector").style.display = "block";
    }else{
        document.getElementById("createUser").style.display = "block";
        document.getElementById("selectedUser").style.display = "none";
        document.getElementById("profileSelector").style.display = "none";
    }
    folderData = [];
}

setInterval(loop,1);
