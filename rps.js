const validChoices = ["rock", "paper", "scissors"];
let quitGame = false;

// Loop until player chooses to quit.
while (!quitGame) {
  let validInput = true;

  let p1Answer = prompt("Player 1, what is your choice? Or 'q' to quit.");

  // Validation
  if (p1Answer) {
    p1Answer = p1Answer.toLowerCase();
    if (p1Answer === "q") {
      quitGame = true;
      console.log("Game Over!");
    } else if (!validChoices.includes(p1Answer)) {
      validInput = false;
      console.log(
        "Player 1, that's not a valid option! Please use Rock, Paper or Scissors."
      );
    }
  } else {
    // player clicked 'cancel'
    quitGame = true;
    console.log("Game Over!");
  }

  if (!quitGame && validInput) {
    let computerChoice = getComputerChoice();
    checkChoices(p1Answer, computerChoice);
  }
}
