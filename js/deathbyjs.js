/*eslint-env browser*/

//STEP 1

// var sentence = window.prompt("Say something to alphabetize"); 

// function alphabetize (str) {
//     "use strict"; 
//     return str.split("").sort().join("");  // split after everyt character... sort all those characters... then join them together
    
// };

// window.console.log("Your sentence in alphabetical order is " + alphabetize(sentence));


//STEP 2

// var words;
// function upperCase(words) {
//     "use strict";
//     words = window.prompt("Please enter sentence");
  
//     //Take value from entry - and use regular expression to replace lowercase with and use a function with the upperCase() method 
//     // \b finds certain character at THE BEGINNING OF EACH WORD
//     // [a-z] means all lowercase functions 
//     words = words.toLowerCase().replace(/\b[a-z]/g, function (letter) {
//         return letter.toUpperCase();
//     });
//     return words;
// }
// window.console.log("Capitalizing the first letter of each world returns: " + upperCase(words));

//STEP 3

// var words;

// function findVowels(words) {
//     "use strict"; 
//     words = window.prompt("Enter a sentence"); 
//     // use the match method to find each instance using a reg ex as paramater
//     // use regular expression [aeiou]/g for the vowels 
//     // use .lenght to count the instances 
//     words = words.match(/[aeiou]/g).length;
//     return words; 

// }

// window.console.log("There are  " + findVowels(words) + " vowels in your sentence"); 

//STEP 4

// var amount;
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// function makeRandom (amount) { 
//     var randomText = ""
//     "use strict";
//     amount = window.prompt("Pick a random number");
//     // use the number you get from amount to iterate (amount) many times and every time you iterate you get a random number equal to the location of a character in the char_list string
//     // YOU NEED TO ADD AND ASSING += TO THE STRING FOR randomText if you only do =, you will only get 1 number 
//     for (var i = 0; i < amount; i++) {
//         randomText += char_list.charAt(Math.floor(Math.random() * char_list.length));
    
//     } 
//     return randomText; 
// }
    
// window.console.log(makeRandom(amount));


//STEP 5

// var countryNames = ["Australia", "Germany", "Nepal", "United States of America"]; 

// function longestCountry() {
//     "use strict";
    
    
// }


var countryNames = ("Australia, Germany, Nepal, United States of America"); 
var newCountries = countryNames.split(",");
window.console.log(newCountries); 
function counter () {
    var  countryArray;
for (var i = 0; i < newCountries.length; i++) {
    countryArray += newCountries[i].length;
    return countryArray;
}

}

window.console.log(counter(newCountries)); 




