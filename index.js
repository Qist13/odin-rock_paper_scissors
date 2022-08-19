function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  if (num == 1) {
    return "Rock";
  } else if (num == 2) {
    return "Paper";
  }

  return "Scissor";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      return "Tie!";
    } else if (computerSelection == "Paper") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You Win!";
    } else if (computerSelection == "Paper") {
      return "Tie!";
    } else {
      return "You Lose!";
    }
  } else {
    if (computerSelection == "Rock") {
      return "You Lose!";
    } else if (computerSelection == "Paper") {
      return "You Win!";
    } else {
      return "Tie!";
    }
  }
}

let display = document.querySelector(".results");
let playerScoreLabel = document.querySelector("#player-score");
let computerScoreLabel = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;
let playerImage = document.querySelector("#img-player");
let computerImage = document.querySelector("#img-computer");

function playGame(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = playRound(playerChoice, computerChoice);
  console.log(computerChoice);
  display.textContent = result;

  if (playerChoice === "Rock") {
    playerImage.src = "./images/rock.png";
  } else if (playerChoice === "Paper") {
    playerImage.src = "./images/paper.png";
  } else if (playerChoice === "Scissor") {
    playerImage.src = "./images/scissor.png";
  }

  if (computerChoice === "Rock") {
    computerImage.src = "./images/rock.png";
  } else if (computerChoice === "Paper") {
    computerImage.src = "./images/paper.png";
  } else if (computerChoice === "Scissor") {
    computerImage.src = "./images/scissor.png";
  }

  if (result === "You Win!") {
    playerScore++;
    playerScoreLabel.textContent = `Player Score: ${playerScore}`;
  } else if (result === "You Lose!") {
    computerScore++;
    computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
  }

  if (playerScore == 5) {
    display.textContent = "You have won the game! GG!";
    btnDisable();
  } else if (computerScore == 5) {
    display.textContent =
      "The computer has won the game! Better luck next time!";
    btnDisable();
  }
}

const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", () => playGame("Rock"));

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => playGame("Paper"));

const btnScissor = document.querySelector("#btn-scissor");
btnScissor.addEventListener("click", () => playGame("Scissor"));

const btnReset = document.querySelector("#btn-reset");
btnReset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreLabel.textContent = `Player Score: ${playerScore}`;
  computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
  display.textContent = "Select an option to play the game";
  playerImage.src = "./images/rps.png";
  computerImage.src = "./images/rps.png";
  btnEnable();
});

function btnDisable() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissor.disabled = true;
}

function btnEnable() {
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissor.disabled = false;
}
