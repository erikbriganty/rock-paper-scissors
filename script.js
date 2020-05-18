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
    sayComp.innerText = `Computer wins!\nTie: ${tie}`;
    return;
  }

  function playerWon() {
    const sayPlayer = document.getElementById("announce");
    const userScore = document.getElementById("userScore");
    playerScore += 1;
    userScore.innerText = playerScore;
    sayPlayer.innerText = `You win!\nTie: ${tie}`;
    return;
  }

  function setTie() {
    const sayTie = document.getElementById("announce");
    tie += 1;
    sayTie.innerText = `It's a tie.\nTie: ${tie}`;
    return;
  }

  function gameOver() {
    const endGame = document.getElementById("announce");
    endGame.innerText = `Game Over!\nTie: ${tie}`;
    rock.removeEventListener("click", rockChoice);
    paper.removeEventListener("click", paperChoice);
    scissor.removeEventListener("click", scissorChoice);
    return;
  }

  let games = 0;
  function playGame(playerSelection, computerSelection) {
    if (games === 3) return gameOver();

    if (
      (playerSelection === "scissor" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissor") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      ++games;
      return compWon();
    } else if (playerSelection == computerSelection) {
      --games;
      return setTie();
    } else {
      ++games;
      return playerWon();
    }
  }
})();
