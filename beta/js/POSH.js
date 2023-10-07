//start of console

$(() => {
  clear();
  if(PathToFile(computator,"p/data.incd").includes("welcome:true")){
  $('#shellData').append(`<h4 class = 'user_disp'>welcome to POSH</h4>`);
  $('#shellData').append(`<h4 class = 'user_disp'>type 'help' for a list of commands</h4>`);
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
      if (newCMD) {
       //says where you are in the folder tabs
        $('#shellData').append(`<h4 class='user_disp'>${folderName}?>${newCMD}</h4>`);
       if(newCMD=="where"){

         $('#shellData').append(`<h4 class = 'user_disp'>${folderName}</h4>`);
         //says what's inside of the folder you're in
         }else if(newCMD=="inside"||newCMD=="ls"||newCMD=="dir"){
          for(var i = 0; i<=folderDataRaw.length-1; i++){
            folderData[folderData.length] = folderDataRaw[i][0];
          }
            $('#shellData').append(`<h4 class = 'user_disp'>${folderData.join("<br><br>")}</h4>`);
            folderData = [];

          //makes a file/folder in the folder your in
         }else if(newCMD.startsWith("add ")){
         
            for(var i = 0; i<=folderDataRaw.length-1; i++){
              folderData[folderData.length] = folderDataRaw[i][0];
            }
  
            if(!folderData.includes(newCMD.split(" ",3).pop())){
              if(newCMD.split(" ",3).pop().includes(".")){
                createFile(computator,folderName,newCMD.split(" ",3).pop());
              }else{
                createFolder(computator,folderName,newCMD.split(" ",3).pop());
              }
            $('#shellData').append(`<h4 class = 'user_disp'>created!</h4>`);
          }else{

            $('#shellData').append(`<h4 class = 'error'>that file or folder all ready exists, type a different name</h4>`);
          }

          folderData=[]; 
          //goes into a folder that you made

      }else if(newCMD.startsWith("goto ")||newCMD.startsWith("cd ")){
          var isNull = PathToData(computator,folderName+"/"+newCMD.split(" ",3).pop());
          if(isNull!=null){
            goto(folderName,newCMD.split(" ",3).pop());
          folderDataRaw = PathToData(computator,folderName);
          document.querySelector("tag").innerHTML=folderName+"?>";
          //clears the console
          }
        }else if(newCMD == "clear"){
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
  
            if(folderData.includes(newCMD.split(" ", 2).pop())){
              if(newCMD.split(" ",2).pop().includes(".")){
                deleteFile(computator,folderName,newCMD.split(" ",2).pop());
              }else{
                deleteFolder(computator,folderName,newCMD.split(" ",2).pop());
              }
            $('#shellData').append(`<h4 class = 'user_disp'>deleted!</h4>`);
          }else{
  
            $('#shellData').append(`<h4 class = 'error'>that file/folder doesn't exist</h4>`);
          }
  
          folderData=[]; 
          //goes into a folder that you made
  
          }else if(PathToFile(computator,"p/data.incd").includes("warn:true")){
            $('#shellData').append(`<h4 class = 'warn'>u sure?\n\nif you do this, your data WILL be lost\n\n press <u>y</u> to proceed, otherwise press <u>n</u></h4>`);
            document.getElementById("input").value = "";
          document.querySelector("tag").innerHTML="";
          while(0==0){
            if(Key['y']){
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
            }else if(Key['n']){
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

           $('#shellData').append(`<h4 class = 'user_disp'>
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
          if(PathToFile(computator,folderName+"/"+newCMD.split(" ",3).pop())!=null&&newCMD!=".."){
          if(computator,folderName+"/"+newCMD.split(" ",3).pop()=="p/functions.js"){
          }
            $('#shellData').append(`<h4 class = 'user_disp'>opening...</h4>`);
            localStorage.setItem("location",folderName+"/"+newCMD.split(" ",3).pop());
            localStorage.setItem(folderName+"/"+newCMD.split(" ").pop(),PathToFile(computator,folderName+"/"+newCMD.split(" ",2).pop()));
            openStickynote(localStorage.getItem(localStorage.getItem("location")));
          }else{
            $('#shellData').append(`<h4 class = 'error'>there is nothing there or that is a folder,\n\nif you want to go into a folder, type 'goto 'foldername</h4>`);
          }
          }else if(newCMD.startsWith("run ")){
            localStorage.setItem(folderName+"/"+newCMD.split(" ",3).pop(),PathToFile(computator,folderName+"/"+newCMD.split(" ",3).pop()));
          localStorage.setItem("code-to-run",folderName+"/"+newCMD.split(" ",3).pop());
          document.location.href="runner.html";

        }else if(newCMD=="about"){
                        say('this site was made by mcbuttnugget, if you have questions, email me at<br><br>jmcastrommx@gmail.com');
        }else if(newCMD=="powerwash"){
          clear();
          $('#shellData').append(`<h4 class = 'warn'>are you sure?<br><br>all of you data will be forever lost to time<br><br>press <u>N</u> to not, otherwise, press <u>y</u></h4>`);
          document.getElementById("input").value = "";
          document.querySelector("tag").innerHTML="";
          while(0==0){
            if(Key['y']){
              localStorage.clear();
              computator = [];
              localStorage.setItem("computator",JSON.stringify(computator));
              localStorage.setItem("p/funtions.js",PathToFile(computator,"p/functions.js"));
              say("your data has been reset, please restart POSH");
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
          writeFile(computator,"p/functions.js",functions_js)
          say("done!");
        }else{

           $('#shellData').append(`<h4 class = 'error'>idk what that is</h4>`);
      
         }


        document.getElementById("input").value = "";
      }
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
  document.getElementsByClassName("user_disp")[document.getElementsByClassName("user_disp").length-1].style.color=color;
}