// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

document.addEventListener("DOMContentLoaded", function () {

  generateBtn.addEventListener("click", writePassword);

  function generatePassword() {
    var length = parseInt(lengthInput.value);
    var includeUppercase = uppercaseInput.checked;
    var includeLowercase = lowercaseInput.checked;
    var inlcudeNumbers = numbersInput.checked;
    var includeSpecial = specialInput.checked;

    var upppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()<>;:?[]{}_-";

    let allChars = "";
    if (includeUppercase) allChars += upppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (inlcudeNumbers) allChars += numberChars;
    if (includeSpecial) allChars += specialChars;
  }
});