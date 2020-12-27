var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V" ,"W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]



// Need to create a function to prompt user to select password length
function selection() {    
    var numberLength = prompt("How long would you want your password to be?");
// Will have to check if numberLength is a number
var numbers = ("8 to 128");
if (numbers == false) {
    alert("Please enter a number between 8 to 128");
} else {
    alert("Your good to go");
}


if (numberLength >=8 && numberLength <=128) {
alert("Please choose a password between 8 and 128 characters long");
return;
}
    alert("Tick all boxes below to start generating your password");
    var upperCasebox = document.getElementById("box1");
    var lowerCasebox = document.getElementById("box2");
    var numberBox = document.getElementById("box3");
    var specialCharbox = document.getElementById("box4");

    if (upperCasebox === false && lowerCasebox === false && numberBox === false && specialCharbox === false) {
        alert("Please select atleast 1 character type")
        return;
    }

    const rangeLength = document.getElementById("rangeLength")
    const numberLength = document.getElementById("numberLength")

    rangeLength.addEventListener('input', syncPasswordLength)
    numberLength.addEventListener('input', syncPasswordLength)

    function syncPasswordLength(e) {
        const value = e.target.value
        rangeLength.value = value
        numberLength.value = value
    }
    // Need an object to put the user input in 


}

// Need a function to get a random element from an array for upperCase to specialCharacters
function generaterandomupperCase() {
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V" ,"W", "X", "Y", "Z"]
return upperCase[Math.floor(Math.random() * upperCase.length)]
}
console.log(generaterandomupperCase())

function generaterandomlowerCase() {
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}
console.log(generaterandomlowerCase())

function generaterandomnumbers() {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    return numbers[Math.floor(Math.random() * numbers.length)]
}
console.log(generaterandomnumbers())

function generaterandomspecialCharacters() {
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}
console.log(generaterandomspecialCharacters())



// Need a function to put the password together 





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
