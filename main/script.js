// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Declaring variables for password
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var specialCharacters = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `]`, `^`, `_`, `'`, `{`, `|`, '}', `~`];
    var possibleChoices = [];
    var finalPassword = "";
    var characters = window.prompt("Choose a password length between 8 and 128 characters");


     // Check if characters is valid between 8 and 128
    while (characters < 8 || characters > 128 || isNaN(characters)) {
        window.alert("Invalid Choice. Please select a password length between 8 and 128 characters.");
        characters = window.prompt("Choose a password length between 8 and 128 characters");
    }

    var checkLowercase = window.confirm("Do you want lowercase letters?");
    var checkUppercase = window.confirm("Do you want uppercase letters?");
    var checkNumeric = window.confirm("Do you want numbers?");
    var checkSpecialCharacters = window.confirm("Do you want special characters");   
  
    // Check if atleast 1 on the selections is true
    while (!checkLowercase && !checkNumeric && !checkUppercase && !checkSpecialCharacters) {
        window.alert("Invalid Choice. Please select at least one character");
        checkLowercase = window.confirm("Do you want lowercase letters?");
        checkUppercase = window.confirm("Do you want uppercase letters?");
        checkNumeric = window.confirm("Do you want numbers?");
        checkSpecialCharacters = window.confirm("Do you want special characters");
    }

    // Create an array of possible choices using the spread operator
    possibleChoices = [ ...(checkLowercase ? lowercase : []),
    ...(checkUppercase ? uppercase : []),
    ...(checkNumeric ? numbers : []),
    ...(checkSpecialCharacters ? specialCharacters : [])];
    
    // Random selection of characters from the posible choices array
    for (var i=0; i < characters; i++) {
        finalPassword += possibleChoices[Math.floor(Math.random()* possibleChoices.length)];
    }

    return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
