
// Get your guess number from the input value
const inputVal = document.querySelector("input");

// Get your button element
const inputButton = document.getElementsByClassName("btn")[0];

// Generate a guess
const actualGuess = 10;

//Generate an attempt
var attempt = 5;

function checkGuess(userGuess, actualGuess) {
// Function body where implementation happens


  // Check if guess is the same with user guess
  // If guess is the same, user wins
  if (userGuess > 0) {
    if (userGuess === actualGuess) {
      alert("Right Anwser");
    }
    // Else if guess is not the same, User loses
    else if (userGuess !== actualGuess) {
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0)
        {
        alert('you are blocked');
        inputButton.disabled = true, inputButton.style.background = '#999';
        }

    }

    return
  }
  alert("Input is empty")

}

inputButton.addEventListener("click", function (e) {
    e.preventDefault()
    // input.value equals userGuess during function definition AND
    // actualGuess equals actualGuess during function definition
  checkGuess(inputVal.value, actualGuess);
  inputVal.value = "";
});

