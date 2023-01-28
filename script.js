// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let characters; // The number of characters there will be
let characterArray = []; // String for password

// Function to prompt user for password options
function getPasswordOptions() {
  // When this function is called, do this:
  characters = prompt(
    // The variable characters is qual to the outcome of this prompt:
    "How many characters would you like your password to be? (Between 10 and 64)"
  );
  if (characters < 10 || characters > 64) {
    // If the user input is less than 10 or more than 64 then send this alert:
    alert(
      "Invailid. Please start again by pressing the 'Generate Password' button and choose a number between 10 and 64. Character length must be provided as a number."
    );
  } else {
    // If the user input is between 10 and 64 then send this alert:
    alert("Your Password will be " + characters + " characters long.");
  }

  // Confirm pop ups
  var upperCase = confirm(
    "Would you like Upper Case characters in your password?"
  );
  var lowerCase = confirm(" Would you like Lower Case characters aswell?");
  var numbers = confirm("Would you like Numbers aswell?");
  var special = confirm("Would you like Special characters aswell?");

  if (
    // If the user doesn't select any charcter choices then:
    upperCase === false &&
    lowerCase === false &&
    numbers === false &&
    special === false
  ) {
    alert(
      // Alert the user this:
      "You didn't choose any character types. Please start again and select at least one character type."
    );
  }

  if (upperCase) {
    characterArray.push(...upperCasedCharacters);
  }
  if (lowerCase) {
    characterArray.push(...lowerCasedCharacters); // If the variable lowercase is true the lowerCasedCharacters are pushed into the characterArray
  }
  if (numbers) {
    characterArray.push(...numericCharacters); // The spread syntax (...) expands the array into elements
  }
  if (special) {
    characterArray.push(...specialCharacters);
  }
}

// Function to generate password with user input
function generatePassword() {
  // When this function is called, do this:
  getPasswordOptions(); // Do this function:
  var randomPassword = ""; // Sets randomPassword as a string

  for (let index = 0; index < characters; index++) {
    // For the amount of password characters that was chosen at the start, do this:
    randomPassword += // randomPassword is equal to the the addition of:
      characterArray[Math.floor(Math.random() * characterArray.length)]; // A random selection of characters taken from the characterArray
  }
  return randomPassword; // Present the string randomPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // Links the JS variable to the HTML id

// Write password to the #password input
function writePassword() {
  // When this function is called, do this:
  var password = generatePassword(); // Sets the variable password as the function generatePassword
  var passwordText = document.querySelector("#password"); // Links the JS variable to the HTML id

  passwordText.value = password; // Sets the value of passwordText as the return of function generatepassword which is randomPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // When the Generate Password button is clicked, fun the function writePassword
