(function rockPaperOrScissors() {
	let computerScore = 0;
	let playerScore = 0;
	let tie = 0;

	const getPlayerChoice = (userChoice) => {
		const lowercaseChoice = userChoice.toLowerCase();
		const options = ["rock", "paper", "scissor"];
		if (options.includes(lowercaseChoice)) {
			return userChoice;
		} else {
			console.log("Invalid option.");
		}
	};

	const computerPlay = () => {
		let randomNumber = Math.floor(Math.random() * 3);

		if (randomNumber === 0) {
			return "scissor";
		} else if (randomNumber === 1) {
			return "rock";
		} else if (randomNumber === 2) {
			return "paper";
		}
	};

	const setComputerWinner = () => {
		computerScore += 1;
		const computerWinsText = `Computer wins!\nComputer: ${computerScore} Player: ${playerScore} Tie: ${tie}`;
		return computerWinsText;
	};

	const setHumanWinner = () => {
		playerScore += 1;
		const humanWinsText = `You win!\nComputer: ${computerScore} Player: ${playerScore} Tie: ${tie}`;
		return humanWinsText;
	};

	const setTie = () => {
		tie += 1;
		const tieText = `It's a tie.\nComputer: ${computerScore} Player: ${playerScore} Tie: ${tie}`;
		return tieText;
	};

	const playRound = (playerSelection, computerSelection) => {
		const lowerCasePlayer = playerSelection.toLowerCase();

		if (lowerCasePlayer === computerSelection) {
			return setTie();
		}

		if (lowerCasePlayer === "scissor") {
			if (computerSelection === "rock") {
				return setComputerWinner();
			} else {
				return setHumanWinner();
			}
		}

		if (lowerCasePlayer === "paper") {
			if (computerSelection === "scissor") {
				return setComputerWinner();
			} else {
				return setHumanWinner();
			}
		}

		if (lowerCasePlayer === "rock") {
			if (computerSelection === "paper") {
				return setComputerWinner();
			} else {
				return setHumanWinner();
			}
		}
	};

	const game = () => {
		for (let i = 0; i < 5; ++i) {
			let playerSelection = getPlayerChoice(
				prompt("Choose between rock, paper, scissor")
			);
			if (playerSelection == null) {
				alert("Invalid. Try again.");
				--i;
				continue;
			}
			const computerSelection = computerPlay();

			console.log(`You chose: ${playerSelection.toLowerCase()}`);
			console.log(`Computer chose: ${computerSelection}`);
			console.log(playRound(playerSelection.toLowerCase(), computerSelection));
		}
		if (playerScore > computerScore) {
			console.log("Game over.\nCongratulations! You beat the Computer!");
		} else if (computerScore > playerScore) {
			console.log("Game over.\nSorry! You lost.");
		} else {
			console.log("Game over.\nYou tied with the Computer.");
		}
	};
	game();
})();
