//create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

//check if guess is correct
if (guess === secretNumber) {
  alert("you got it right");
}

//otherwise check if higher / lower
else if (guess > secretNumber) {
  alert("too high guess again");
} else {
  alert("too low");
}
