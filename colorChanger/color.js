//toggle the bodys background color between
// purple and white when a button is clicked

/* var button = document.querySelector("button");

button.addEventListener("click", changeColor);

function changeColor() {
  const change = document.body.style.backgroundColor;
  if (change === "white") {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "white";
  }
} */

/* var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
  if (isPurple) {
    document.body.style.background = "white";
    isPurple = false;
  } else {
    document.body.style.background = "purple";
    isPurple = true;
  }
}); */

/* var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
  if (isPurple) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "purple";
  }
  isPurple = !isPurple;
}); */

var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
