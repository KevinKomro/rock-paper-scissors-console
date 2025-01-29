const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

let playerScore,
  computerScore = 0;

btnRock.addEventListener("click", () => {
  p1Answer = "rock";
});

btnPaper.addEventListener("click", () => {
  p1Answer = "paper";
});

btnScissors.addEventListener("click", () => {
  p1Answer = "scissors";
});

// Loop until score reaches 5
// while (playerScore < 5 && computerScore < 5) {

//   btnRock.addEventListener("click", () => {
//     p1Answer = 'rock';
//   });

//   btnPaper.addEventListener("click", () => {
//     p1Answer = "paper";
//   });

//   btnScissors.addEventListener("click", () => {
//     p1Answer = "scissors";
//   });

//   checkChoices(p1Answer, getComputerChoice());
// }
