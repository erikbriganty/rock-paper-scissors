(function rockPaperOrScissors() {
  let computerScore = 0;
  let playerScore = 0;
  let tie = 0;
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissor = document.getElementById("scissor");

  rock.addEventListener("click", rockChoice);
  paper.addEventListener("click", paperChoice);
  scissor.addEventListener("click", scissorChoice);

  function rockChoice() {
    return playGame("rock", computerPlay());
  }
  function paperChoice() {
    return playGame("paper", computerPlay());
  }
  function scissorChoice() {
    return playGame("scissor", computerPlay());
  }

  function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
  }

  function compWon() {
    const sayComp = document.getElementById("announce");
    const compScore = document.getElementById("compScore");
    computerScore += 1;
    compScore.innerText = computerScore;
    sayComp.innerText += "Computer wins!";
    if (playerScore === 5 || computerScore === 5) return gameOver();
    return;
  }

  function playerWon() {
    const sayPlayer = document.getElementById("announce");
    const userScore = document.getElementById("userScore");
    playerScore += 1;
    userScore.innerText = playerScore;
    sayPlayer.innerText += "You win!";
    if (playerScore === 5 || computerScore === 5) return gameOver();
    return;
  }

  function setTie() {
    const sayTie = document.getElementById("announce");
    const tieScore = document.getElementById("tieScore");
    tie += 1;
    tieScore.innerText = tie;
    sayTie.innerText = "It's a tie.";
    return;
  }

  function gameOver() {
    const endGame = document.getElementById("announce");
    endGame.innerText += "\nGame Over.";
    rock.removeEventListener("click", rockChoice);
    paper.removeEventListener("click", paperChoice);
    scissor.removeEventListener("click", scissorChoice);
    return;
  }

  function playGame(playerSelection, computerSelection) {
    const compChoice = document.getElementById("announce");
    if (
      (playerSelection === "scissor" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissor") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      compChoice.innerText = `Your opponent chose ${computerSelection}.\n`;
      return compWon();
    } else if (playerSelection == computerSelection) {
      return setTie();
    } else {
      compChoice.innerText = `Your opponent chose ${computerSelection}.\n`;
      return playerWon();
    }
  }
})();
