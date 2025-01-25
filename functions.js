// Generate computer choice utilizing math.random()
function getComputerChoice() {
  let random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Determine winner, or tie.
// Win conditions are outlined in the README.
function checkChoices(answer1, answer2) {
  if (answer1 == "rock") {
    if (answer2 == "scissors") {
      console.log("Player 1 wins!");
    } else if (answer2 == "paper") {
      console.log("Computer wins!");
    } else {
      console.log("It's a Tie!");
    }
  } else if (answer1 == "scissors") {
    if (answer2 == "paper") {
      console.log("Player 1 wins!");
    } else if (answer2 == "rock") {
      console.log("Computer wins!");
    } else {
      console.log("It's a Tie!");
    }
  } else if (answer1 == "paper") {
    if (answer2 == "rock") {
      console.log("Player 1 wins!");
    } else if (answer2 == "scissors") {
      console.log("Computer wins!");
    } else {
      console.log("It's a Tie!");
    }
  }
}
