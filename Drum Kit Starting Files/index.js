var btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    anim(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  anim(event.key);
});
function makeSound(chara) {
  switch (chara) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log();
  }
}

function anim(currentKey) {
  var ab = document.querySelector("." + currentKey);
  ab.classList.add("pressed");
  setTimeout(function () {
    ab.classList.remove("pressed");
  }, 100);
}

// var au = new Audio("sounds/tom-1.mp3");
//     au.play();

// function Exanmple(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var ex1 = new Exanmple("Jhony", 3);
// var ex3 = new Exanmple("Jhony1", 5);
