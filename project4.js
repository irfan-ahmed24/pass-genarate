var passwordShow = document.querySelector(".password");
var copyIcon = document.querySelector(".icon");
var slider = document.querySelector(".range");
var sliderValue = document.querySelector(".sliderValue");
var lowerCase = document.querySelector("#Lowercase");
var upperCase = document.querySelector("#upercase");
var number = document.querySelector("#number");
var symble = document.querySelector("#symbles");
var genarate = document.querySelector(".genarate");

sliderValue.innerHTML = slider.value;
slider.addEventListener("input", function () {
  sliderValue.innerHTML = slider.value;
});
genarate.addEventListener("click", function () {
  passwordShow.value = createPass();
});

function createPass() {
  var uperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var digit = "0123456789";
  var symb = "#%&/?*@£$^~!<>";
  var allchar = "";

  allchar += upperCase.checked ? uperchar : "";
  allchar += lowerCase.checked ? lowerChar : "";
  allchar += number.checked ? digit : "";
  allchar += symble.checked ? symb : "";

  var pass = "";
  var i = 0;
  while (i < slider.value) {
    pass += allchar.charAt(Math.floor(Math.random() * allchar.length));
    i++;
  }
  return pass;
}
copyIcon.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordShow.value);
  alert("password copied successfully");
});
