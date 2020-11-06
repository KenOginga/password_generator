var generateBtn = document.querySelector("#generate");
var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
var passwordLength = 10;

function writePassword () {
  var password = "";
  
  for (var i = 0; i < passwordLength; i++) {
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }
     
  document.getElementById("password").value = password;

}
generateBtn.addEventListener("click", writePassword);