//start of console
$(() => {
  clear();
  if(PathToFile(computator,"p/data.incd").includes("welcome:true")){
  $('#shellData').append(`<h4 class = 'user_disp1'>welcome to POSH</h4>`);
  $('#shellData').append(`<h4 class = 'user_disp1'>type 'help' for a list of commands</h4>`);
  }else if(PathToFile(computator,"p/data.incd").includes("welcome:false")){

  }else{
    $('#shellData').append(`<h4 class = 'error'>ERROR: what did you do to data.incd!!!??? you removed the property for welcome!!!</h4>`);
  }
  document.querySelector("tag").innerHTML=folderName+"?>";
  $('input').on('keypress', async function(e) {
    if (e.keyCode == 13) {
      var output = $(this).val().replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
      const newCMD = output;
      $('#shellData').append(`<h4 class='user_disp1'>${folderName}?>${newCMD}</h4>`);
      if (newCMD) {
       if(newCMD=="where"){

         $('#shellData').append(`<h4 class = 'user_disp1'>${folderName}</h4>`);
         //says what's inside of the folder you're in
         }else if(newCMD == "what is the passcode" ||newCMD == "What is the passcode" ||newCMD == "what is the passcode." ||newCMD == "What is the passcode."){
           say(`
   _.-=-._     .-,\n 
 .'       "-.,' / \n
(          _.  <\n
 \`=.____.="  \`._\\ \\n
                   `);
           setColor("text","red");
         }else if(newCMD == "knight c4"){
            $('#shellData').append(`<h4 class = 'wingdings'>under the bench</h4>`);
         }else if(newCMD == "no i dont really feel better" || newCMD == "No I don't really feel better" |newCMD == "No i dont really feel better" |newCMD == "no I dont really feel better" |newCMD == "no i don't really feel better" |newCMD == "No I dont really feel better" | newCMD == "no I don't really feel better" |newCMD == "No i don't really feel better"){
           location.href="https://docs.google.com/document/d/1ZL-NE4GcONgxBxICMSD_gc1-a7F5p7UY-8qst4MojNU/edit?usp=sharing";
         }else if(newCMD=="inside"||newCMD=="ls"||newCMD=="dir"){
          for(var i = 0; i<=folderDataRaw.length-1; i++){
            folderData[folderData.length] = folderDataRaw[i][0];
          }
            $('#shellData').append(`<h4 class = 'user_disp1'>${folderData.join("<br><br>")}</h4>`);
            folderData = [];

          //makes a file/folder in the folder your in
         }else if(newCMD.startsWith("add ")){
         
            for(var i = 0; i<=folderDataRaw.length-1; i++){
              folderData[folderData.length] = folderDataRaw[i][0];
            }
  
            if(!folderData.includes(newCMD.split(" ").pop())){
              if(newCMD.split(" ").pop().includes(".")){
                createFile(computator,folderName,newCMD.split(" ").pop());
                if(newCMD.split(" ").pop().endsWith(".pap")&&PathToFile(computator,"p/papdat.incd").includes("pap_start_data:true")){
                  if(PathToFile(computator,"p/papdat.incd").includes("pap_hello:true")){
                   writeFile(computator,folderName+"/"+newCMD.split(" ").pop(),'* add POSH;\n\nsay("hello world!");');
                  }else if(PathToFile(computator,"p/papdat.incd").includes("pap_controller:true")){
                     writeFile(computator,folderName+"/"+newCMD.split(" ").pop(),`
* add POSH;

set x = 20;
set y = 20;


if(Key['d']){
set x = x + 1;
}
if(Key['a']){
set x = x - 1;
}
if(Key['s']){
set y = y + 1;
}
if(Key['w']){
set y = y - 1;
}
clear;
say("*",x,y);
pause(50);
goto(6);
                               `);
                  }else if(PathToFile(computator,"p/papdat.incd").includes("pap_counter:true")){
                                                 writeFile(computator,folderName+"/"+newCMD.split(" ").pop(),`* add POSH;

set time = 0;
set time = time + 1;

say(time,random(0,70),random(0,40));

setColor("text","hsl("+random(0,359)+",100%,50%)");

pause(1000);
goto(4);
                               `);                      
                  }
                }
              }else{
                createFolder(computator,folderName,newCMD.split(" ").pop());
              }
            $('#shellData').append(`<h4 class = 'user_disp1'>created!</h4>`);
          }else{

            $('#shellData').append(`<h4 class = 'error'>that file or folder all ready exists, type a different name</h4>`);
          }

          folderData=[]; 
          //goes into a folder that you made

      }else if(newCMD.startsWith("goto ")||newCMD.startsWith("cd ")){
          var isNull = PathToData(computator,folderName+"/"+newCMD.split(" ").pop());
          if(isNull!=null){
            goto(folderName,newCMD.split(" ").pop());
          folderDataRaw = PathToData(computator,folderName);
          document.querySelector("tag").innerHTML=folderName+"?>";
          //clears the console
          }
        }else if(newCMD == "clear"||newCMD == "cls"){
         clear();
        }else if(newCMD.split(" ", 1).pop()=="setcolor"){
            setColor(newCMD.split(" ", 2).pop(),newCMD.split(" ", 3).pop());
          //says what you want it to say
        }else if(newCMD.startsWith('say ')){
          say(newCMD.replace('say ',''));
        }else if(newCMD.startsWith("del ")||newCMD.startsWith("rm ")){
        
          if(PathToFile(computator,"p/data.incd").includes("warn:false")){
            for(var i = 0; i<=folderDataRaw.length-1; i++){
              folderData[folderData.length] = folderDataRaw[i][0];
            }
  
            if(folderData.includes(newCMD.split(" ").pop())){
              if(newCMD.split(" ").pop().includes(".")){
                deleteFile(computator,folderName,newCMD.split(" ").pop());
              }else{
                deleteFolder(computator,folderName,newCMD.split(" ").pop());
              }
            $('#shellData').append(`<h4 class = 'user_disp1'>deleted!</h4>`);
          }else{
  
            $('#shellData').append(`<h4 class = 'error'>that file/folder doesn't exist</h4>`);
          }
  
          folderData=[]; 
          //goes into a folder that you made
  
          }else if(PathToFile(computator,"p/data.incd").includes("warn:true")){
            $('#shellData').append(`<h4 class = 'warn'>u sure?\n\nif you do this, your data WILL be lost\n\n press <u>y</u> to proceed, otherwise press <u>n</u></h4>`);
            document.getElementById("user").value = "";
          document.querySelector("tag").innerHTML="";
          while(0==0){
            if(Key["y"]){
              for(var i = 0; i<=folderDataRaw.length-1; i++){
                folderData[folderData.length] = folderDataRaw[i][0];
              }
    
              if(folderData.includes(newCMD.split(" ").pop())){
                if(newCMD.split(" ").pop().includes(".")){
                  deleteFile(computator,folderName,newCMD.split(" ").pop());
                }else{
                  deleteFolder(computator,folderName,newCMD.split(" ").pop());
                }
                say("deleted! if you want this to not be here, just type 'goto ..' or 'cd ..',\n\nand edit data.incd to be 'warn:false' instead of 'warn:true'");
            }else{
    
              $('#shellData').append(`<h4 class = 'error'>that doesn't exist</h4>`);
            }
    
            folderData=[]; 
            //goes into a folder that you made
              document.querySelector("tag").innerHTML=folderName+"?>";
              break;
            }else if(Key["n"]){
              say("ok");
              document.querySelector("tag").innerHTML=folderName+"?>";
              break;

            }
            await POSH.pause(1);
          }
          }else{
            $('#shellData').append(`<h4 class = 'error'>ERROR: data.incd doesn't have a property set for warn!</h4>`);
          }


        }else if(newCMD=="help"){

           $('#shellData').append(`<h4 class = 'user_disp1'>tutorial - opens the help for .pap files<br><br>
help - displays this menu<br><br>
del <i>file or folder name</i> - deletes a file or folder<br><br>
setcolor <i>text or bg</i> <i>color</i>- sets the color of the bg or text<br><br>
clear - clears the shell<br><br>
add <i>name of file/folder</i> - adds a file or folder<br><br>
goto <i>folder</i> - opens a folder, cd also works and you can type 'goto ..' to go to the last\nfolder<br><br>
inside - shows what files are inside of your current directory<br><br>
where - shows where you are in your directory<br><br>
sn <i>file name</i> - opens a file in stickynote<br><br>
run <i>file name</i> - runs a file that you edited. This creates a new window so any changes you\nmake to the terminal gets saved, supports javascript and paper<br><br>about - shows who made the site and where to ask questions<br><br>
powerwash - resets all data to default<br><br>
seeIn <i>file name</i> - see's the contents of a file, should be used when stickynote breaks<br><br>
write[file name] : <i>data</i> - writes to the contents of a file, should be used when stickynote\nbreaks
           </h4>`);
        }else if(newCMD.startsWith("sn ")){
          if(PathToFile(computator,folderName+"/"+newCMD.split(" ").pop())!=null&&!newCMD.includes("..")){
            $('#shellData').append(`<h4 class = 'user_disp1'>opening...</h4>`);
            localStorage.setItem("location",folderName+"/"+newCMD.split(" ").pop());
            localStorage.setItem(folderName+"/"+newCMD.split(" ").pop(),PathToFile(computator,folderName+"/"+newCMD.split(" ").pop()));
            sn();
          }else{
            $('#shellData').append(`<h4 class = 'error'>there is nothing there or that is a folder,\n\nif you want to go into a folder, type 'goto 'foldername</h4>`);
          }
          }else if(newCMD.startsWith("run ")){
            localStorage.setItem(folderName+"/"+newCMD.split(" ").pop(),PathToFile(computator,folderName+"/"+newCMD.split(" ").pop()));
          localStorage.setItem("code-to-run",folderName+"/"+newCMD.split(" ").pop());
          run();

        }else if(newCMD=="tutorial"){
          location.href="tutorial/";
        }else if(newCMD=="about"){
                        say('this site was made by mcbuttnugget, if you have questions, email me at<br><br>jmcastrommx@gmail.com');
        }else if(newCMD=="powerwash"){
          clear();
          $('#shellData').append(`<h4 class = 'warn'>are you sure?<br><br>all of you data will be forever lost to time<br><br>press <u>N</u> to not, otherwise, press <u>y</u></h4>`);
          document.getElementById("user").value = "";
          document.querySelector("tag").innerHTML="";
          while(0==0){
            if(Key['y']){
              localStorage.clear();
              computator = [];
              localStorage.setItem("computator",JSON.stringify(computator));
              localStorage.setItem("p/funtions.js",PathToFile(computator,"p/functions.js"));
              say("your data has been reset, restarting now...");
              location.reload();
              document.querySelector("tag").innerHTML=folderName+"?>";
              break;
            }else if(Key['n']){
              say("you have saved your data!");
              document.querySelector("tag").innerHTML=folderName+"?>";
              break;

            }
            await POSH.pause(1);
          }
        }else if(newCMD.startsWith("seeIn ")||newCMD.startsWith("cat ")){

          say(PathToFile(computator,folderName+"/"+newCMD.split(" ").pop()));
         
        }else if(newCMD.startsWith("write[")){
          writeFile(computator,folderName+"/"+newCMD.split("[")[1].split("]")[0],newCMD.split(" : ").pop());
        }else if(newCMD=="update"){
          say("ok updating...");
          writeFile(computator,"p/functions.js",functions_js);
          say("done!");
        }else{

           $('#shellData').append(`<h4 class = 'error'>idk what that is</h4>`);
      
         }
      }
      document.getElementById("user").value = "";
      await POSH.pause(1);
      scrollToBottom("plag");
    }
  });
});
$(document).keydown(function(e) {

  var key = undefined;
  var possible = [ e.key, e.keyIdentifier, e.keyCode, e.which ];

  while (key === undefined && possible.length > 0)
  {
      key = possible.pop();
  }

     if (key && (key == '115' || key == '83' ) && (e.ctrlKey || e.metaKey) && !(e.altKey))
    {
        e.preventDefault();
        return false;
    }
}); 
function setText(){
  document.getElementsByClassName("user_disp1")[document.getElementsByClassName("user_disp1").length-1].style.color=color;
}