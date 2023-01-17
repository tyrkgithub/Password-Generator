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


// let promptChoices = []

// Function to prompt user for password options
function getPasswordOptions() {

  // Character Length
 var characters = prompt("How many characters would you like your password to be? (Between 10 and 64)")
 if (characters < 10 || characters > 64 || isNaN(characters) === true){
  alert("Invailid. Please start again by pressing the 'Generate Password' button again and choose a number between 10 and 64. Character length must be provided as a number.")
  location.reload()
 } else{
 alert("Your Password will be " + characters + " characters long.")}
//  UpperCase
 var upperCase = confirm("Would you like Upper Case characters in your password?")
//  LowerCase
if (upperCase = true) {
  // promptChoices = promptChoices.concat(upperCasedCharacters);
  var lowerCase = confirm("You DO want Upper Case characters in your password. Would you like Lower Case characters aswell?")
} else { 
  var lowerCase = confirm("You DO NOT want Upper Case characters in your password. Would you like any Lower Case characters?")
}
// Numbers
if (lowerCase = true){
  // promptChoices = promptChoices.concat(lowerCasedCharacters);
  var numbers = confirm("You DO want Lower Case characters in your password. Would you like Numbers aswell?")
} else { 
  var numbers = confirm("You DO NOT want Lower Case characters in your password. Would you like any Numbers?")
}
// Special
if (numbers = true){
  // promptChoices = promptChoices.concat(numericCharacters);
  var special = confirm("You DO want Numbers in your password. Would you like Special characters aswell?")
} else { 
  var special = confirm("You DO NOT want Numbers in your password. Would you like any Special characters?")
}
if (special = true) {
  // promptChoices = promptChoices.concat(specialCharacters);
}
if (upperCase === false && lowerCase === false && numbers === false && special === false) {
  alert("You didn't choose any character types. Please start again and select at least one character type.")
}
}

// Function for getting a random element from an array
  // function getRandom(arr) {
  //   let randomIndex = Math.floor(Math.random()*arr.length);
  //   return arr[randomIndex];
  // }




// Function to generate password with user input
// function generatePassword() {
//   let password = ""
//   for (let i = 0; i < characters; i++) {
//   let randomIndex = Math.floor(Math.random() * promptChoices.length);
//   password = password +  promptChoices[randomIndex];
//  }
//  return password;

// }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var newpassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = newpassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);