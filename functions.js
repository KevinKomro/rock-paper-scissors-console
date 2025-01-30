const playRound = (p1Answer) => {
  return determineWinner(p1Answer, getComputerChoice());
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
function determineWinner(answer1, answer2) {
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

const scoreWinner = (result) => {
  switch (result) {
    case "player":
      scorePlayer();
      break;
    case "computer":
      scoreComputer();
      break;
    default:
      div.textContent = `This round was a tie. Player has a score of ${playerScore}. Computer has a score of ${computerScore}`;
  }
};

const scorePlayer = () => {
  playerScore += 1;
  if (playerScore === 5) {
    div.textContent = "Player wins the game!";
    disableButtons();
  } else {
    div.textContent = `Player wins this round. Player has a score of ${playerScore}. Computer has a score of ${computerScore}`;
  }
};

const scoreComputer = () => {
  computerScore += 1;
  if (computerScore === 5) {
    div.textContent = "Computer wins the game!";
    disableButtons();
  } else {
    div.textContent = `Computer wins this round. Player has a score of ${playerScore}. Computer has a score of ${computerScore}`;
  }
};

const disableButtons = () => {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
};
