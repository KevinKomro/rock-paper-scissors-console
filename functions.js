// Generate computer choice
// math.random() => value between 0 and 1.
// 0 -> .33 => Rock
// .34 -> .66 => Paper
// .67 -> 1 => Scissors
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

// Compare player 1 choice to player 2
// If p1 choice beats computer choice -> Player 1 wins
// If computer choice beats p1 choice -> Computer wins
// Else -> It's a tie!
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
