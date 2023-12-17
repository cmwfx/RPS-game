let computerSelection = () => {
	let randomChoice = Math.floor(Math.random() * 3);
	if (randomChoice == 0) {
		return "Rock";
	} else if (randomChoice == 1) {
		return "Paper";
	} else {
		return "Scissors";
	}
};

let playerSelection;
const rock = document.querySelector(".rock-choice");
const paper = document.querySelector(".paper-choice");
const scissors = document.querySelector(".scissors-choice");
let humanScore = document.querySelector(".human-score");
let computerScore = document.querySelector(".computer-score");
let drawScore = document.querySelector(".draw-score");
let gamePlayed = 0;

rock.addEventListener("click", () => {
	playerSelection = "rock";
	gamePlayed = playGame(playerSelection, computerSelection());
	if (gamePlayed.includes("Win")) {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
	} else if (gamePlayed.includes("Lose")) {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
	} else if (gamePlayed.includes("Tie")) {
		drawScore.textContent = parseInt(drawScore.textContent) + 1;
	}
});

paper.addEventListener("click", () => {
	playerSelection = "paper";
	gamePlayed = playGame(playerSelection, computerSelection());
	if (gamePlayed.includes("Win")) {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
	} else if (gamePlayed.includes("Lose")) {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
	} else if (gamePlayed.includes("Tie")) {
		drawScore.textContent = parseInt(drawScore.textContent) + 1;
	}
});

scissors.addEventListener("click", () => {
	playerSelection = "scissors";
	gamePlayed = playGame(playerSelection, computerSelection());
	if (gamePlayed.includes("Win")) {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
	} else if (gamePlayed.includes("Lose")) {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
	} else if (gamePlayed.includes("Tie")) {
		drawScore.textContent = parseInt(drawScore.textContent) + 1;
	}
});

//p1 = human
//p2 = computer
let playGame = (p1Selection, p2Selection) => {
	let humanSelection = p1Selection.toLowerCase();
	let compSelection = p2Selection.toLowerCase();
	if (humanSelection === compSelection) {
		return "It's a Tie! Please make another choice.";
	} else if (humanSelection == "rock" && compSelection == "paper") {
		return "You Lose! Paper beats Rock";
	} else if (humanSelection == "rock" && compSelection == "scissors") {
		return "You Win! Rock beats Scissors";
	} else if (humanSelection == "paper" && compSelection == "scissors") {
		return "You Lose! Scissors beats Paper";
	} else if (humanSelection == "paper" && compSelection == "rock") {
		return "You Win! Paper beats Rock";
	} else if (humanSelection == "scissors" && compSelection == "paper") {
		return "You Win! Scissors beats Paper";
	} else if (humanSelection == "scissors" && compSelection == "rock") {
		return "You Lose! Rock beats Scissors";
	}
};
