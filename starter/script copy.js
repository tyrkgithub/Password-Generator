// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
 var characters = prompt("How many characters would you like your password to be? (Between 10 and 64)")
if (isNaN(characters) === true) {
  alert("Invaild. Password must be provided as a number.")
  location.reload()  
} if (characters < 10 || characters > 64 || isNaN(characters)){
  alert("Invailid. Please start again and choose a number between 10 and 64.")
 }
 if (isNaN(characters ))
 alert("Your Password will be " + characters + " characters long.")
 
 var upperCase = confirm ("Would you like Upper Case characters in your password?")
if (upperCase = true) {
  var lowerCase = confirm("You DO want Upper Case characters in your password. Would you like Lower Case characters aswell?")
} else { 
  var lowerCase = confirm("You DO NOT want Upper Case characters in your password. Would you like any Lower Case characters?")
}
if (lowerCase = true){
  var numbers = confirm("You DO want Lower Case characters in your password. Would you like Numbers aswell?")
} else { 
  var numbers = confirm("You DO NOT want Lower Case characters in your password. Would you like any Numbers?")
}
if (numbers = true){
  var special = confirm("You DO want Numbers in your password. Would you like Special characters aswell?")
} else { 
  var special = confirm("You DO NOT want Numbers in your password. Would you like any Special characters?")
}
if (upperCase === false && lowerCase === false && numbers === false && special === false) {
  alert("You didn't choose any character types. Please start again and select at least one character type.")
}
console.log(upperCase)
console.log(lowerCase)
console.log(numbers)
console.log(special)
}

// Function for getting a random element from an array
function getRandom(arr) {


}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);