var upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V" ,"W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var numbers = 
var specialCharacters = 



// Need to create a function to prompt user to select password length
function selection() {    
    var numberLength = prompt("How long would you want your password to be?");
// Will have to check if numberLength is a number
if (numberLength <=8 && numberLength >=128) {
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
    // Need an object to put the user input in 


}

// Need a function to get a random element from an array for uppercase to specialChar
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