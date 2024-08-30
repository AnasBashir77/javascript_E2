
 var v1=document.getElementById("get1").innerText;
 var v2=document.getElementById("get2").innerText;
 var v3=document.getElementById("get3").innerText;
 
function conversion(c)
{
    var F;
    F = (9 * c/ 5) + 32
    return F;
}var res1=conversion(v1);
document.getElementById("return1").innerText=res1;

var res2=conversion(v2);
document.getElementById("return2").innerText=res2;

var res3=conversion(v3);
document.getElementById("return3").innerText=res3;


var arr1= [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
 document.getElementById("best").innerText=arr1[3]+","+arr1[4]+","+arr1[5];

 var course =
 {
    'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4

 }
  function percentage(value)
  { 
    var res;
    res=value/557*100;
    return res;
  } 
  var pres=percentage(course['5_stars_reviews']);

 document.getElementById("title").innerText=course.title;
 document.getElementById("main").innerText=course.categories[0];
 document.getElementById("percentage").innerText=pres;

console.log("Task 4");
console.log("Removing last item and placing it in the start");

 var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
console.log(" list before=Milk,Butter,Juice ,Bread ,Beer, Rice, Potatoes, Chocolate");



console.log("After");
shoppingList.unshift(shoppingList.pop("chocolate"));

console.log(shoppingList);
var shoppingList_2 = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
 console.log( "list before=Milk, Butter, Juice, Bread, Beer, Rice, Potatoes, Chocolate");
 shoppingList_2.push("cheese");
 shoppingList_2.push("eggs");
 console.log("Updated array after addition");
 console.log(shoppingList_2);
 

 







