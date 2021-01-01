// Created an Array for the 4 boxes

var upperCase = "ABCDEFGHIJKLMNOPQRSUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*";




//  Created DOM Elements  

// var pwdresults = document.getElementById("passwordarea");
var upperCasebox = document.getElementById("Uppercase");
var lowerCasebox = document.getElementById("Lowercase");
var numberBox = document.getElementById("Numbers");
var specialCharbox = document.getElementById("SpecialCharacters");
var pwdLength = document.getElementById("passwordlength");
var generateEL = document.getElementById("generate");
var copyEL = document.getElementById("copybutton");
     


// // Created a function to get a random element from an array for upperCase to specialCharacters
// function generaterandomupperCase() {
//     var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V" ,"W", "X", "Y", "Z"]
// return upperCase[Math.floor(Math.random() * upperCase.length)]
// }
// // console.log(generaterandomupperCase())

// function generaterandomlowerCase() {
//     var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
// return lowerCase[Math.floor(Math.random() * lowerCase.length)]
// }
// // console.log(generaterandomlowerCase())

// function generaterandomnumbers() {
//     var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     return numbers[Math.floor(Math.random() * numbers.length)]
// }
// // console.log(generaterandomnumbers())

// function generaterandomspecialCharacters() {
//     var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
//     return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
// }
// // console.log(generaterandomspecialCharacters())


generateEL.addEventListener("click", function() {

   if (upperCasebox.checked === false && lowerCasebox.checked === false && numberBox.checked === false && specialCharbox.checked === false) {
    alert("Tick 1 of the boxes below");
   } else {
    generatePassword()   
  }

});

function generatePassword() {
    var allcombo = "";
    var password = "";
    
var upperCaseCheck = upperCasebox.checked;
// console.log(uppercasecheck)
var lowerCaseCheck = lowerCasebox.checked;
// console.log(lowercasecheck)
var numbersCheck = numberBox.checked;
// console.log(numberscheck)
var specialCharactersCheck = specialCharbox.checked;
// console.log(specialcharacterscheck)
var passLengthval = pwdLength.value;
// console.log(upperCaseCheck, lowerCaseCheck, numbersCheck, specialCharactersCheck, passLengthval);

if(upperCaseCheck === true) {
    allcombo += upperCase;
}
if(lowerCaseCheck === true) {
    allcombo += lowerCase;
}
if(numbersCheck === true) {    
    allcombo += numbers;
}
if(specialCharactersCheck === true) {
    allcombo += specialCharacters;
}


for (i = 0; i<passLengthval; i++) {
password += allcombo[Math.floor(Math.random() * allcombo.length)];
}
passwordarea.innerText = password;
}

// Created a copy password to clipboard option

copyEL.addEventListener("click", function() {
var copytext = document.createElement("textarea");
var holdpassword = passwordarea.innerText;
    if(holdpassword === "") {
    return;
    }

copytext.value = holdpassword;
document.body.appendChild(copytext);
copytext.select();
document.execCommand("copy");
copytext.remove();
alert("Your password was just copied");
});







// const passwordFunction = {
//         pwdLength: passLengthval, 
//         upperCasebox: upperCaseCheck,  
//         lowerCasebox: lowerCaseCheck,
//         numberBox: numbersCheck,
//         specialCharbox: specialCharactersCheck,    
//         };
//      console.log(passwordFunction);

    // var gen = [];
    // gen.push(generaterandomupperCase(), generaterandomlowerCase(), generaterandomnumbers(), generaterandomspecialCharacters())
    // // console.log(gen);
    // // concantentate these 4 functions:
    // return gen;



// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");


//   passwordText.value = password;

// }

// // Add event listener to generate button
// // generateEL.addEventListener("click", writePassword); {
  
// // }
// writePassword();
