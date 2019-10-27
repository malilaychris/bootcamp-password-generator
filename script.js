const passwordButton = document.getElementById("generatePasswordButton");
const passwordBox = document.getElementById("passwordBox");

let alphaString = "abcdefghijklmnopqrstuvwxyz";
let numString = "123456789";
let specString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let passLength;
let allowUppercase = false;
let allowNumeric = false;
let allowSpecial = false;
//let disableLowercase = false;

let passwordGenerated;

function generatePassword() {
  let validPassLength = false;
  while (!validPassLength) {
    passLength = parseInt(prompt("How long would you like your password to be? (can only be between 8 and 128 characters)"));
    if (passLength >= 8 && passLength <= 128) {
      validPassLength = true;
    } else {
      alert("Password length must be between 8 and 128 characters.")
    }
  }
  allowUppercase = confirm("Would you like to add uppercase letters to your password?");
  allowNumeric = confirm("Would you like to add numbers to your password?");
  allowSpecial = confirm("Would you like to add special characters to your password?");
  //disableLowerCase = confirm("Disable lowercase letters?");
  let passwordChars = randomizer();
  let passwordGeneratedArr = [];
  for (let i = 0; i < passLength; i++) {
    passwordGeneratedArr.push(passwordChars[Math.floor(Math.random() * passwordChars.length)]);
  }
  passwordGenerated = passwordGeneratedArr.join("");
  passwordBox.innerHTML = passwordGenerated;
}

function randomizer() {
  let passwordChars = [];

  let alphaArr = alphaString.split("");
  for (let i = 0; i < alphaArr.length; i++) {
    passwordChars.push(alphaArr[i]);
  }
  if (allowUppercase) {
    let alphaUpperString = alphaString.toUpperCase();
    let alphaUpperArr = alphaUpperString.split("");
    for (let i = 0; i < alphaUpperArr.length; i++) {
      passwordChars.push(alphaUpperArr[i]);
    }
  }
  if (allowNumeric) {
    let numArr = numString.split("");
    for (let i = 0; i < numArr.length; i++) {
      passwordChars.push(numArr[i]);
    }
  }
  if (allowSpecial) {
    let specArr = specString.split("");
    for (let i = 0; i < specArr.length; i++) {
      passwordChars.push(specArr[i]);
    }
  }
  return passwordChars;
}

passwordButton.addEventListener("click", generatePassword);