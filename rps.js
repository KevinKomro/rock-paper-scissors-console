// Rock Paper Scissors Game
//
// One player versus another.
// Choices of 'Rock', 'Paper' or 'Scissors'.
// Paper beats Rock.
// Scissors beats Paper.
// Rock beats Scissors.
// Account for invalid input.
// Loop until a player chooses 'Q' or 'q'.

// Logic:

// Delcare valid game options
const validChoices = ["rock", "paper", "scissors"];
let quitGame = false;

// Wrap everything in a while loop to keep the game going.
while (!quitGame) {
  // Ask Player 1 for their choice
  // convert to lowercase and assign to variable
  let p1Answer = prompt(
    "Player 1, what is your choice? Or 'q' to quit."
  ).toLowerCase();

  // Ask Player 2 for their choice
  // convert to lowercase and assign to variable
  let p2Answer = prompt(
    "Player 2, what is your choice? Or 'q' to quit."
  ).toLowerCase();

  if (p1Answer === "q" || p2Answer === "q") {
    quitGame = true;
    console.log("Game Over!");
  }

  if (!quitGame) {
    let validInput = true;

    // Validate Input
    // Player 1 first
    if (!validChoices.includes(p1Answer)) {
      validInput = false;
      console.log(
        "Player 1, that's not a valid option! Please use Rock, Paper or Scissors."
      );
    }
    // Then Player 2
    if (!validChoices.includes(p2Answer)) {
      validInput = false;
      console.log(
        "Player 2, that's not a valid option! Please use Rock, Paper or Scissors."
      );
    }

    // If valid input, call checkChoices to determine winner.
    if (validInput) {
      checkChoices(p1Answer, p2Answer);
    }
  }
}

// Compare player 1 choice to player 2
// If p1 choice beats p2 choice -> Player 1 wins
// If p2 choice beats p1 choice -> Player 2 wins
// Else -> It's a tie!
function checkChoices(answer1, answer2) {
  if (answer1 == "rock") {
    if (answer2 == "scissors") {
      console.log("Player 1 wins!");
    } else if (answer2 == "paper") {
      console.log("Player 2 wins!");
    } else {
      console.log("It's a Tie!");
    }
  } else if (answer1 == "scissors") {
    if (answer2 == "paper") {
      console.log("Player 1 wins!");
    } else if (answer2 == "rock") {
      console.log("Player 2 wins!");
    } else {
      console.log("It's a Tie!");
    }
  } else if (answer1 == "paper") {
    if (answer2 == "rock") {
      console.log("Player 1 wins!");
    } else if (answer2 == "scissors") {
      console.log("Player 2 wins!");
    } else {
      console.log("It's a Tie!");
    }
  }
}
