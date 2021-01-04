// Created an Array for the 4 boxes

var upperCase = "ABCDEFGHIJKLMNOPQRSUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*";


//  Created DOM Elements  

var upperCasebox = document.getElementById("Uppercase");
var lowerCasebox = document.getElementById("Lowercase");
var numberBox = document.getElementById("Numbers");
var specialCharbox = document.getElementById("SpecialCharacters");
var pwdLength = document.getElementById("passwordlength");
var generateEL = document.getElementById("generate");
var copyEL = document.getElementById("copybutton");
     


// Created a function when the button generate password is clicked
generateEL.addEventListener("click", function() {

    // Created an alert to the user if no box option is selected to go ahead and select one
   if (upperCasebox.checked === false && lowerCasebox.checked === false && numberBox.checked === false && specialCharbox.checked === false) {
    alert("Tick 1 of the boxes below");
   } else {
    generatePassword()   
  }

});

// Created a function to generate the password
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

// Created IF Functions to check which box is checked and generate password accordingly
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

// Created For Function for generate password
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
});
