// Assignment code here
// click on generate password then window.prompt 
//How many characters? 8-128
// If 8-128 window.alert lowercase, uppercase, numeric, special characters? else please choose valid option
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values/characters 
// Special 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric 
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alpha
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space for the Uppercase conversion
space = [];
// Choices not in if statement 
var choices;
//  alpha to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// generate variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start generate password function
function generatePassword() {
    // Asks for user input
    enter = window.prompt("Enter the number of characters (8-128) for your password");
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = window.prompt("Please enter a number between 8 and 128");

    } else {
        // Continues once user input is valid
        confirmNumber = confirm("Do you want numbers in your pasword? To include click 'ok' if not click 'cancel'.");
        confirmCharacter = confirm("Special characters?");
        confirmUppercase = confirm("Uppercase letters?");
        confirmLowercase = confirm("Lowercase letters?");
    };

    // Else if for all options cancelled
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose atleast one option");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if all 4  options ok
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3  options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2  options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // space variable for uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // password var= array placeholder for user provided length
    var password = [];

    // Start random selection
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
