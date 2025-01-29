const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

let playerScore,
  computerScore = 0;

btnRock.addEventListener("click", () => {
  p1Answer = "rock";
  let result = playRound(p1Answer);
  switch (result) {
    case "player":
      console.log("Player wins!");
      break;
    case "computer":
      console.log("Computer wins!");
      break;
    default: 
      console.log("It's a Tie!")
  }
});

btnPaper.addEventListener("click", () => {
  p1Answer = "paper";
});

btnScissors.addEventListener("click", () => {
  p1Answer = "scissors";
});
