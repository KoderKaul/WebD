var numButtons = document.querySelectorAll(".drum").length;
var i = 0;
while (i < numButtons) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    makeSound(key);
    buttonPressed(key);
  });
  i++;
}
document.addEventListener("keydown", function (ev) {
  makeSound(ev.key);
  buttonPressed(ev.key);
});
function makeSound(key) {
  if (key == "w") var audio = new Audio("sounds/tom-1.mp3");
  else if (key == "a") var audio = new Audio("sounds/tom-2.mp3");
  else if (key == "s") var audio = new Audio("sounds/tom-3.mp3");
  else if (key == "d") var audio = new Audio("sounds/tom-4.mp3");
  else if (key == "j") var audio = new Audio("sounds/snare.mp3");
  else if (key == "k") var audio = new Audio("sounds/crash.mp3");
  else if (key == "l") var audio = new Audio("sounds/kick-bass.mp3");
  else return;
  audio.play();
  delete audio;
}
function buttonPressed(key) {
  var activeKey = document.querySelector("." + key);
  if (activeKey == null) return;
  activeKey.classList.add("pressed");
  setInterval(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
