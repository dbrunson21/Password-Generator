
var generateBtn = document.querySelector("#generate");
//add event listener to genrerate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  //prompt the user for password legth
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters)"));

  //validate the length input

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters. ");
    return generatePassword();
  }

  //Prompt for character types to include
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  //validate that at least one character type is selected
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
    alert("Please select at least one character type.");
    return generatePassword();
  }

  //generate password based on selected criteria
  var password = generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial);

  //display the generated password
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}



function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {

  //character sets
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()<>;:?[]{}_-";
  var allChars = "";

  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSpecial) allChars += specialChars;

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex)
  }

  return password;
}

//retrive user inputs
var lengthInput = document.querySelector("#length");
var uppercaseInput = document.querySelector("#uppercase");
var lowercaseInput = document.querySelector("#lowercase");
var numbersInput = document.querySelector("#numbers");
var specialInput = document.querySelector("#special");
var passwordOutput = document.querySelector("#password");
