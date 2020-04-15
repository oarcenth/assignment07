/*eslint-env browser*/

//STEP 1
// var num = window.prompt("Pick a number");
// window.console.log(Math.abs(num));
//STEP 2
// var num = window.prompt("Pick a floating point value (a decimal)");
// window.console.log("Rounding up " + num + " you get " + Math.ceil(num));
//STEP 3
// var num = window.prompt("Pick a floating point value (a decimal)");
// window.console.log("Rounding down " + num + " you get " + Math.floor(num));


//STEP 4
var num = window.prompt("Pick a number an delimit them with , (1,2,3,4,5)");
var num2 = num.split(","); 

window.console.log("The largest number in that list is: " + Math.max.apply(null, num2)); // use .apply(null, num2) to pass the  new array into the math object 
window.console.log("The smallest number in that list is: "+ Math.min.apply(null, num2)); // use .apply(null, num2) to pass the  new array into the math object 




//STEP 5
// var num = window.prompt("Pick a number to square root");
// window.console.log("The square root of " + num + " is: " + Math.sqrt(num));