// Delcare valid game options
const validChoices = ["rock", "paper", "scissors"];

// While loop termination flag
let quitGame = false;

// Wrap everything in a while loop to keep the game going.
while (!quitGame) {

  // Ask Player 1 for their choice
  let p1Answer = prompt("Player 1, what is your choice? Or 'q' to quit.");

  if (p1Answer) {
    p1Answer = p1Answer.toLowerCase();
    if (p1Answer === "q") {
      quitGame = true;
      console.log("Game Over!");
    }
  } else { // player clicked 'cancel'
    quitGame = true;
    console.log("Game Over!");
  }

  if (!quitGame) {
    let validInput = true;

    // Get computer choice
    let computerChoice = getComputerChoice();

    // Validate Input
    if (!validChoices.includes(p1Answer)) {
      validInput = false;
      console.log(
        "Player 1, that's not a valid option! Please use Rock, Paper or Scissors."
      );
    }

    // If valid input, call checkChoices to determine winner.
    if (validInput) {
      checkChoices(p1Answer, computerChoice);
    }
  }
}
