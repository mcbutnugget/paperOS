var stickynote_js = `

`;

var functions_js = `
/*made by mcbuttnugget
the POSH library*/
var var_name = [];
var var_data = [];
var time_since_begin=0;
var forPause;
var graphx;
var disp;
var returnData;

function createKeyHandler() {
    const keys = {};

    const keyDownHandler = (event) => {
        keys[event.key] = true;
    };

    const keyUpHandler = (event) => {
        keys[event.key] = false;
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => keys;
}
window.PresentKeys = createKeyHandler();

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  var POSH = {
    say:function(text, x, y){
    var formattedText = String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\\n/g, '<br>');

    var content = "<h4 class='user_disp'>" + formattedText + "</h4>";

    if (y !== undefined) {
        content = "<h4 class='user_disp' style='position: absolute; top: 0; left: 0;'>" +
                  "\\n".repeat(y) +
                  " ".repeat(x) +
                  formattedText +
                  "</h4>";
    } else {
        content += "<br>";
    }

    $('#console').append(content);
},
    clear:function(){
        document.getElementById("console").innerHTML = "";
    },
    pause:async function pause(amount) {
  return new Promise((resolve) => {
    forPause = setInterval(resolve, amount);
  });
},
    setColor: function(object, color, allText) {
        if (object && object === "text") {
          if (color) {
            var userDisps = document.getElementsByClassName("user_disp");
            var startIndex = allText ? 0 : userDisps.length - 1;
      
            for (var i = startIndex; i < userDisps.length; i++) {
              userDisps[i].style.color = color;
            }
          } else {
            $('#console').append("<br><h4 class='error'>ERR:color has not been set</h4>");
          }
        } else if (object && object === "background") {
          if (color) {
            document.querySelector("body").style.backgroundColor = color;
          } else {
            $('#console').append("<br><h4 class='error'>ERR:color has not been set</h4>");
          }
        }
      },
      set: function(name, data){
        if(var_name.includes(name)){
          var_data[var_name.indexOf(String(name))]=data;
        }else{
        var_name[var_name.length]=name;
        var_data[var_data.length]=data;
        }
      },
      get: function(name){
        return var_data[var_name.indexOf(String(name))];
      },
      if: function(condition, codeIfTrue,codeIfFalse){
       if (!codeIfFalse){
        if(condition){
          eval(codeIfTrue);
       }
      }else{
        if(condition){
          eval(codeIfTrue);
         }else{
          eval(codeIfFalse);
         }
      }
      },loop: function(n, codeToDo){
        if(n>0){
            POSH.loop(n-1);

        }
      },
      Graphics:{
        enableGraphicsMode:function(){
        $('#console').append("<canvas id='graphics'width="+$(document).width()+" height="+$(document).height()+"></canvas><br>");
        disp=document.getElementById("graphics");
        graphx=disp.getContext("2d");
      },
      drawRect:function(x,y,w,h,color,lineW){
        graphx.beginPath();
        if(lineW){
          graphx.lineWidth=lineW;
        }
        if(color){
          graphx.strokeStyle = color;
        }else{
          graphx.strokeStyle = "#00ff00";
        }
        graphx.rect(x,y,w,h);
        graphx.stroke();
      },
      drawPolygon: function(xArr, yArr, numVertices, fill, border, rotationAngle, rotationCenterX, rotationCenterY) {
        if (numVertices < 3) {
          POSH.say("A polygon must have at least 3 vertices.");
          return;
        }
      
        rotationAngle = rotationAngle || 0;
      
        
        rotationCenterX = rotationCenterX || xArr.reduce((acc, cur) => acc + cur, 0) / numVertices;
        rotationCenterY = rotationCenterY || yArr.reduce((acc, cur) => acc + cur, 0) / numVertices;
      
        window.rotatedXArr = [];
        window.rotatedYArr = [];
        for (let i = 0; i < numVertices; i++) {
          window.x = xArr[i];
          window.y = yArr[i];
          window.rotatedX =
            rotationCenterX +
            (x - rotationCenterX) * Math.cos(rotationAngle) -
            (y - rotationCenterY) * Math.sin(rotationAngle);
          window.rotatedY =
            rotationCenterY +
            (x - rotationCenterX) * Math.sin(rotationAngle) +
            (y - rotationCenterY) * Math.cos(rotationAngle);
          rotatedXArr.push(rotatedX);
          rotatedYArr.push(rotatedY);
        }
      
        graphx.beginPath();
        graphx.moveTo(rotatedXArr[0], rotatedYArr[0]);
      
        for (let i = 1; i < numVertices; i++) {
          graphx.lineTo(rotatedXArr[i], rotatedYArr[i]);
        }
      
        graphx.closePath();
      
        graphx.fillStyle = fill;
        graphx.fill();
      
        graphx.strokeStyle = border;
        graphx.lineWidth = 2;
        graphx.stroke();
      }
    },Mouse:{
      X:function(){
        var x;
        document.addEventListener("mousemove",(event) =>{
          x = event.pageX;
        });
        return x;
      },
      Y:function(event){
        return event.clientY;
      },
      click:function(event){
        return event.button;
      }
    }
      
};

async function runcoders(){
  if(localStorage.getItem("code-to-run").includes(".pap")){
    var POSHl = false;
    window.code = localStorage.getItem(localStorage.getItem("code-to-run")).split(/\\n/);
    if(code.includes("* add POSH;")){
      POSHl = true;
   }else{
     POSH.say("ERROR: the POSH library has not been added, to add it, just \\ntype * add POSH to the beggining of your code");
     POSH.setColor("text","red");
 }
    for(var i = 0; i<=code.length; i++){
if(POSHl == true){
  //key function
      window.Key = PresentKeys();
  //say command
  if(String(code[i]).includes("say(")&&String(code[i]).includes(");")){


    //POSH.say(code[i].replace("say(",""));
    eval("POSH.say("+code[i].replace("say(","").replace(");","")+");");



      //set command
        }else if(String(code[i]).includes("set ")&&String(code[i]).includes("=")&&String(code[i]).endsWith(";")){
          if(code[i].split("=")[1].replace(" ","").startsWith('"')
          ||code[i].split("=")[1].replace(" ","").startsWith("'")
          ||/^\\d/.test(code[i].split("=")[1].replace(" ",""))
          ||/^(true|false)/i.test(code[i].split("=")[1].replace(" ",""))
          ||code[i].split("=")[1].replace(" ","").startsWith('{')
          ||code[i].split("=")[1].replace(" ","").startsWith('[')
          ||code[i].split("=")[1].replace(" ","").startsWith(code[i].split(" ")[1])){
            eval("var "+code[i].split(" ")[1]+"="+code[i].split("=")[1].replace(" ",""));
          }else{
            POSH.say("that is not valid storage object thing");
            POSH.setColor("text","red");
          } 
         // console.log(String(code[i].split(" ")[1]));
          //console.log(String(code[i].split("=")[1].replace(" ","").replace(";","")));
        
        }else if(String(code[i]).includes("if(")){
          //console.log(Boolean(eval(code[i].replace("if(","").split(")")[0])));
          if(Boolean(eval(code[i].replace("if(","").split(")")[0]))){
            i=i;
          }else{
            i=code.indexOf("}",i+1);
          }
        }else if(String(code[i]).includes("goto(")){
          returnData = i;
          i = Number(code[i].replace("goto(","").split(");")[0])-2;

        }else if(String(code[i]).includes("setColor(")){
          eval("POSH.setColor("+code[i].replace("setColor(","").replace(");","")+");");
        }else if(String(code[i]).includes("pause(")){
          await POSH.pause(Number(code[i].replace("pause(","").split(");")[0]));
        }else if(String(code[i])=="clear;"){
          POSH.clear();
        }else if(String(code[i])=="return;"){
          i=returnData;
        }
      }
    }
  }else if(localStorage.getItem("code-to-run").includes(".js")){
    eval(localStorage.getItem(localStorage.getItem("code-to-run")));
  }
}

  window.Key = PresentKeys();

`;

if(!localStorage.getItem("computator")||localStorage.getItem("computator")=='[]'){
window.computator = [
    ["p",[
    ["main",[
      ["..",[]],
      ["users",[
        ["..",[]]
      ]]
    ]],
    ["data.incd",`welcome:true\nwarn:true\nalert:false\nstartPath:p/main\n`],
    ["paperOS_appdat",[
      ["..",[]],
      ["functions.js",functions_js],
      ["stickynote.js",stickynote_js],
      ["icons",[
        ["..",[]],
        ["backgrounds",[
          ["..",[]],
          ["console_logo.png",readDisk("../icons/logos/console logo.png")]
        ]]
      ]]
    ]]
    
    ] 
  ]
  ];
  localStorage.setItem("computator",JSON.stringify(computator));
}else{
  var bootloader = localStorage.getItem("computator");
  var computator = JSON.parse(bootloader);
}
eval(PathToFile(computator,"p/paperOS_appdat/functions.js"));
var folderData = [];
var folderName = PathToFile(computator,"p/data.incd").split("startPath:").pop().replace("\n","");
var folderDataRaw = PathToData(computator,folderName);
//folderDataRaw = begin[folder][1][folder][1]

//folderName= computator[directory][0]+"/"+computator[directory][1][in][numbers][0]

//every folder name ends with [0], and every data ends with [1]


var sets = [""];
var object;
var color = "rgb(0,255,0)";
var i = document.getElementsByClassName("user_disp").length-1;
var running = false;

var dontwarn = false;
function sleep(ms) {

  return new Promise((resolve) => setInterval(resolve, ms));
  
  }
/*async function run(file){
  document.getElementById("user").value = "";
  clear();
  var codeString = localStorage.getItem(file).split(";");
      
  var POSHall = false;
  var POSH = false;
  var varName = [];
  var varData = [];
  var loopPos;
  var loopTime;
  var looping = false;
  for(var t = 0;t<=codeString.length;t++){
  if(localStorage.getItem(file).includes("* add POSH;")){
    POSHall =true;
  }
  if(t>=codeString.length){
    running = false;
  }else{
    running = true;
  }
  if(POSHall==true){

    if (codeString[t].includes("loop(")&&looping!=true) {
      loopPos=t-1;
      looping = true;
      loopTime = codeString[t].split("(",2).pop().split(")",2)[0];
    }else if(codeString[t].includes('say(')){
      if(codeString[t].includes('say("')){
      say(codeString[t].split('"', 2).pop().replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;'));
      }
    }else if(codeString[t].includes('beep[')){
      //beep[500,50,90,"sine"];
      //beep[freq,length,vol,"type"];
     beep(codeString[t].split("beep[").pop().split(",",1).pop(),codeString[t].split("beep[").pop().split(",",2).pop(),codeString[t].split("beep[").pop().split(",",3).pop(),codeString[t].split("beep[").pop().split(",",4).pop().replace('"]',"").replace('"',''));
    }else if(codeString[t].includes('setcolor["')){
     setColor(codeString[t].split('"', 2).pop().replace(codeString[t].split('","', 2).pop().replace('"]',''),'').replace('","',''),codeString[t].split('","', 2).pop().replace('"]',''));
    }else if(codeString[t].includes('clear')){
      clear();
    }else if(codeString[t].includes('pause[')){
     await sleep(codeString[t].split('[').pop().replace(']',''));
    }else if(codeString[t].includes('||')||codeString[t].includes('')){

    }else{
       $('#shellData').append(`<h4 class = 'error'>ERR on line ${codeString[t]} not correct code syntax</h4>`);
       return 0;
    }

    if(codeString[t].includes("}")&&looping==true&&loopTime>=0){
      loopTime--;
      t=loopPos;

    }else if(loopTime<=0){
      looping=false;
    }
  
  }else{
    $('#shellData').append(`<h4 class = 'error'>the POSH book has not been added</h4>`);
    return 0;
  }
}
}*/

function decodeBase64(data) {
  return atob(data);
}

function readDisk(filepath) {
  let fileData = null;

  $.ajax({
    url: filepath,
    dataType: "text",
    async: false, // Make the request synchronous
    success: function (data) {
      // Assign the file data directly
      fileData = data;
    },
    error: function (xhr, status, error) {
      console.error('Error reading the file:', error);
      // Handle the error case as needed
    }
  });

  return fileData;
}

function extractImageFromBinary(binaryData) {
  // Find the start of the image data, which is typically indicated by the PNG signature.
  const pngSignature = "\x89PNG\r\n\x1A\n";
  const startIndex = binaryData.indexOf(pngSignature);

  if (startIndex !== -1) {
    // Extract the image pixel data starting from the PNG signature.
    const imageData = binaryData.substring(startIndex);

    return imageData;
  }

  // If the PNG signature is not found, return null or handle the error as needed.
  return null;
}

async function setColor(obj, col){
   if(obj=="bg"){
              document.body.style.backgroundColor=col;
            }else if(obj=="text"){
                color=col;
                setText();
            }else{

              $('#shellData').append(`<h4 class = 'error'>not a valid object</h4>`);
            }
}
async function say(text){

   $('#shellData').append(`<h4 class = 'user_disp'>${text.replace(/\\n/g,'<br>')}</h4>`);
}
async function clear(){
   i=0;
   document.getElementById("shellData").innerHTML = " ";
}


function PathToFile(computator, path) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    if (element === "..") {
      currentLocation = currentLocation[0][1]; // Go back one level
    } else {
      const item = currentLocation.find((item) => item[0] === element);

      if (!item) {
       // $('#shellData').append(`<h4 class = 'error'>File "${element}" in path "${path}" does not exist.</h4>`);
        return null;
      }

      if (Array.isArray(item[1])) {
        // If it's a folder, update the current location
        currentLocation = item[1];
      } else {
        // It's a file, check if it's the last element in the path
        if (element === pathElements[pathElements.length - 1]) {
          return item[1]; // Return the file data
        } else {
        //  $('#shellData').append(`<h4 class = 'error'>File "${element}" in path "${path}" is not a folder.</h4>`);
          return null;
        }
      }
    }
  }

 // $('#shellData').append(`<h4 class = 'error'>Path "${path}" does not point to a file.</h4>`);
  return null;
}



function goto(currentDirectory, directoryToGo) {
  const pathElements = currentDirectory.split("/");

  if (directoryToGo === "..") {
    pathElements.pop(); 
  } else {
    pathElements.push(directoryToGo); 
  }

  folderName = pathElements.join("/");
}

function createFolder(computator, path, folderName) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    const folder = currentLocation.find((item) => item[0] === element && Array.isArray(item[1]));
    if (!folder) {
      console.error(`Folder "${element}" in path "${path}" does not exist.`);
      return;
    }
    currentLocation = folder[1];
  }

  const newFolder = [folderName, [["..", []]]];
  currentLocation.push(newFolder);
}

function deleteFile(computator, path, fileName) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    const folder = currentLocation.find((item) => item[0] === element && Array.isArray(item[1]));
    if (!folder) {
      console.error(`Folder "${element}" in path "${path}" does not exist.`);
      return;
    }
    currentLocation = folder[1];
  }

  const index = currentLocation.findIndex((item) => item[0] === fileName && !Array.isArray(item[1]));
  if (index !== -1) {
    currentLocation.splice(index, 1);
  } else {
    console.error(`File "${fileName}" in path "${path}" does not exist.`);
  }
}

function deleteFolder(computator, path, folderName) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    const folder = currentLocation.find((item) => item[0] === element && Array.isArray(item[1]));
    if (!folder) {
      console.error(`Folder "${element}" in path "${path}" does not exist.`);
      return;
    }
    currentLocation = folder[1];
  }

  const index = currentLocation.findIndex((item) => item[0] === folderName && Array.isArray(item[1]));
  if (index !== -1) {
    currentLocation.splice(index, 1);
  } else {
    console.error(`Folder "${folderName}" in path "${path}" does not exist.`);
  }
}


function deleteFile(computator, path, fileName) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    const folder = currentLocation.find((item) => item[0] === element && Array.isArray(item[1]));
    if (!folder) {
      console.error(`Folder "${element}" in path "${path}" does not exist.`);
      return;
    }
    currentLocation = folder[1];
  }

  const index = currentLocation.findIndex((item) => item[0] === fileName && !Array.isArray(item[1]));
  if (index !== -1) {
    currentLocation.splice(index, 1);
  } else {
    console.error(`File "${fileName}" in path "${path}" does not exist.`);
  }
}


function createFile(computator, path, fileName) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    const folder = currentLocation.find((item) => item[0] === element && Array.isArray(item[1]));
    if (!folder) {

      $('#shellData').append(`<h4 class = 'error'>folder "${path}" does not exist or is not a folder, try a different folder or create a new one.</h4>`);
      return;
    }
    currentLocation = folder[1];
  }

  currentLocation.push([fileName, ``]);
}


function writeFile(computator, path, content) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    if (element === "..") {
      currentLocation = currentLocation[0][1]; // Go back one level
    } else {
      const item = currentLocation.find((item) => item[0] === element);

      if (!item) {
        console.error(`File "${element}" in path "${path}" does not exist.`);
        return;
      }

      if (Array.isArray(item[1])) {
        // If it's a folder, update the current location
        currentLocation = item[1];
      } else {
        // It's a file, check if it's the last element in the path
        if (element === pathElements[pathElements.length - 1]) {
          item[1] = content; // Update the file content
          localStorage.setItem("computator", JSON.stringify(computator)); // Save the updated computator to localStorage
          return;
        } else {
          return;
        }
      }
    }
  }

  console.error(`Path "${path}" does not point to a file.`);
}


function PathToData(computator, path) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    const folder = currentLocation.find((item) => item[0] === element && Array.isArray(item[1]));
    if (!folder) {
      $('#shellData').append(`<h4 class = 'error'>folder "${element}" does not exist or is not a folder<br><br>try a different folder or create a new one.</h4>`);
      return null;
    }
    currentLocation = folder[1];
  }

  return currentLocation;
}



function beep(freq, duration, vol, typeOf) {
  var context = new(window.AudioContext || window.webkitAudioContext);
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  gain.gain.setValueAtTime(0, context.currentTime);
  gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.002);
  oscillator.connect(gain);
  oscillator.frequency.value = freq;
  oscillator.type = typeOf;
  gain.connect(context.destination);
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration * .001);
  oscillator.onended = () => context.close();
  i++;
}
if(running==true){
  document.querySelector("tag").innerHTML="";
}

/*document.addEventListener("click",function(event){
  if(event.button=="1")
});*/






















