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
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, "'")
        .replace(/\n/g, '<br>');

    var content = "<h4 class='user_disp'>" + formattedText + "</h4>";

    if (y !== undefined) {
        content = "<h4 class='user_disp' style='position: absolute; top: 0; left: 0;'>" +
                  "\n".repeat(y) +
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
    var paperOSl = false;
    window.code = localStorage.getItem(localStorage.getItem("code-to-run")).split(/\n/);
    if(code.includes("* add POSH;")){
      POSHl = true;
   }else{
     POSH.say("ERROR: the POSH library has not been added, to add it, just \ntype * add POSH to the beggining of your code");
     POSH.setColor("text","red");
 }
 if(code.includes("* add paperOS;")){
    paperOSl = true;
 }
    for(var i = 0; i<=code.length; i++){
if(POSHl == true){
  //key function
      window.Key = PresentKeys();
  //say command
  if(paperOSl = true){
    document.getElementById("body3").style.backgroundColor = "white";
    document.getElementById("body3").style.color = "black";
    document.getElementById("body3").style.fontFamily = "sans-serif";
  }
  if(String(code[i]).includes("say(")&&String(code[i]).includes(");")){


    //POSH.say(code[i].replace("say(",""));
    eval("POSH.say("+code[i].replace("say(","").replace(");","")+");");



      //set command
        }else if(String(code[i]).includes("set ")&&String(code[i]).includes("=")&&String(code[i]).endsWith(";")){
          if(code[i].split("=")[1].replace(" ","").startsWith('"')
          ||code[i].split("=")[1].replace(" ","").startsWith("'")
          ||/^\d/.test(code[i].split("=")[1].replace(" ",""))
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
  runcoders();

