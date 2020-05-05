///////// Detecting Click on Buttons

/// Start button
document.querySelector(".startButton").addEventListener("click", function () {
  document.querySelector("h1").innerHTML = "Level 1";
  var randomButton = randomNumber(1, 4);
  var newButton = secuenceOfbuttons.push(randomButton);
  makeSound(randomButton);
  buttonAnimation(randomButton);
});

/// Blue
document.querySelector(".blue").addEventListener("click", function () {
  var buttonbyUser = secuenceByUser.push("blue");
  makeSound("blue");
  buttonAnimation("blue");
  setTimeout(function () {
    validator();
  }, 1000);
});

/// Green
document.querySelector(".green").addEventListener("click", function () {
  var buttonbyUser = secuenceByUser.push("green");
  makeSound("green");
  buttonAnimation("green");
  setTimeout(function () {
    validator();
  }, 1000);
});
/// Red
document.querySelector(".red").addEventListener("click", function () {
  var buttonbyUser = secuenceByUser.push("red");
  makeSound("red");
  buttonAnimation("red");
  setTimeout(function () {
    validator();
  }, 1000);
});
/// Yellow
document.querySelector(".yellow").addEventListener("click", function () {
  var buttonbyUser = secuenceByUser.push("yellow");
  makeSound("yellow");
  buttonAnimation("yellow");
  setTimeout(function () {
    validator();
  }, 1000);
});

///////// Counters

var secuenceOfbuttons = []; ///// Game
var secuenceByUser = []; ///// User
var numberOfClick = secuenceByUser.length;

///////// Validator
function validator() {
  var secuenceOk = true;
  for (i = 0; i < secuenceByUser.length; i++) {
    if (secuenceOfbuttons[i] === secuenceByUser[i]) {
    } else {
      document.querySelector("h1").innerHTML = "Game Over ";
      secuenceOk = false;
      makeSound("wrong");
      document.querySelector("body").classList.add("game-over");
      break;
    }
  }
  if (
    secuenceOk == true &&
    secuenceOfbuttons.length === secuenceByUser.length
  ) {
    newLevel();
  }
}
//////// Next Level
function newLevel() {
  setTimeout(function () {}, 1000);
  document.querySelector("h1").innerHTML =
    "Level " + (secuenceOfbuttons.length + 1);
  newButton();
  secuenceByUser = [];
}

//////// Making Sound

function makeSound(color) {
  switch (color) {
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    case "wrong":
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      break;
  }
}

//////// Button Animation

function buttonAnimation(number) {
  switch (number) {
    case "blue":
      var activeButton = document.querySelector(".blue");
      activeButton.classList.add("pressed");

      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
      break;
    case "green":
      var activeButton = document.querySelector(".green");
      activeButton.classList.add("pressed");

      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
      break;
    case "red":
      var activeButton = document.querySelector(".red");
      activeButton.classList.add("pressed");

      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
      break;
    case "yellow":
      var activeButton = document.querySelector(".yellow");
      activeButton.classList.add("pressed");

      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
  }
}

///////// Random Color

function randomNumber(min, maxi) {
  var result = Math.floor(Math.random() * (maxi - min + 1)) + min;
  switch (result) {
    case 1:
      result = "blue";
      break;
    case 2:
      result = "green";
      break;
    case 3:
      result = "red";
      break;
    case 4:
      result = "yellow";
      break;
  }
  return result;
}

///////// New Button

function newButton() {
  var randomButton = randomNumber(1, 4);
  var newButton = secuenceOfbuttons.push(randomButton);
  makeSound(randomButton);
  buttonAnimation(randomButton);
}
