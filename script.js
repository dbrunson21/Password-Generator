
var generateBtn = document.querySelector("#generate");
//add event listener to genrerate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  //prompt the user for password legth
  //retrive user inputs
  var lengthInput = document.querySelector("#length");
  var uppercaseInput = document.querySelector("#uppercase");
  var lowercaseInput = document.querySelector("#lowercase");
  var numbersInput = document.querySelector("#numbers");
  var specialInput = document.querySelector("#special");
  var passwordOutput = document.querySelector("#password");

  //validate the length input
  var length = parseInt(lengthInput);
  if (isNaN(length) || length < 6 || length > 128) {
    alert("Please enter a valid password length between 6 and 128 characters. ");
    return;
  }

  //character sets
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()<>;:?[]{}_-";

  var allChars = "";
  if (uppercaseInput.checked) allChars += uppercaseChars;
  if (lowercaseInput.checked) allChars += lowercaseChars;
  if (numbersInput.checked) allChars += numberChars;
  if (specialInput.checked) allChars += specialChars;

  //if character requirements aren't met
  if (allChars === "") {
    alert("Please select at least one character set. ")
    return;
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex)
  }

  //display the gernerated password
  passwordOutput.value = password;
}  