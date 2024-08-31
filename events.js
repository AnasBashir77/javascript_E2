document.getElementById("click-me").onclick = function()
{
    alert("you clicked the button");
}
console.log("hello");

 function show_alert()
 {
    alert("you clicked the button");
 }
document.getElementById("hover-in").onmouseover = function()
{
    alert("you hovered");
}
 document.getElementById("hover-out").onmouseout = function()
 {
    alert("mouse out");
 }
   
 for( var i=0;i<5;i+=1)
 {
    console.log("Anas");
 }

 var count=0;
 while(count<5)
 {
    console.log("Ali");
    count++;
 };
 var j=0;
 do
 {
    console.log("Hamza");
    j++;
 }while(j<5);

 var arr1=["anas","hamza","huzaifa"];

 for(var k=0;k<arr1.length;k++)
 {
    console.log(arr1[k]);
 }
  var car =
  {
    "color":"red",
    "model":2000,
    "company":"toyota"
  }
   
for (var prop in car) 
   
{
    console.log(prop+": "+ car[prop]);
}

 
 