window.addEventListener("load",bind);

function bind()
{
    document.querySelector("#login").addEventListener("click",check);
    printData();
}
function printData(data)
{
    detailsCrud.detOperations=data;
    console.log(detailsCrud.detOperations);
   
}
function check()
{
    var id=document.querySelector("#id").value;
    var pwd=document.querySelector("#password").value;
   var subArray= detailsCrud.search(id,pwd);
   if(subArray.length==0)
   {
   console.log("invalid userid and password");
   var h= document.createElement("h1");
   h.innerHTML="Invalid Password";
   
   
      }  
       else{
   console.log(subArray);
   document.querySelector("#welcome").innerHTML="Welcome "+subArray[0].type;
      window.open("login1.html");
   
   }
   if(subArray[0].type=="admin")
   admin();
 }
 function admin()
 {
     var div=document.getElementById("screen_2");
     div.classList="show";
     var add=document.querySelector("#add");
     add.addEventListener("click",details);

    
    

 }
 function details()
 {
     var det=document.querySelector("#det");
     det.classList="show";
 }