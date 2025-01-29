const playRound = (p1Answer) => {
  return checkChoices(p1Answer, getComputerChoice());
};

// Determine computer choice utilizing math.random()
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
      return "player";
    } else if (answer2 == "paper") {
      return "computer";
    }
  } else if (answer1 == "scissors") {
    if (answer2 == "paper") {
      return "player";
    } else if (answer2 == "rock") {
      return "computer";
    }
  } else if (answer1 == "paper") {
    if (answer2 == "rock") {
      return "player";
    } else if (answer2 == "scissors") {
      return "computer";
    }
  }
  // if no conditions above match, the result is a tie.
  return "tie";
}
