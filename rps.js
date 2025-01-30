const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const div = document.querySelector(".resultDiv");

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", () => {
  p1Answer = "rock";
  let result = playRound(p1Answer);
  scoreWinner(result);
});

btnPaper.addEventListener("click", () => {
  p1Answer = "paper";
  let result = playRound(p1Answer);
  scoreWinner(result);
});

btnScissors.addEventListener("click", () => {
  p1Answer = "scissors";
  let result = playRound(p1Answer);
  scoreWinner(result);
});
