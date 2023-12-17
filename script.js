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
let humanImage = document.querySelector(".humanIMG");
let computerImage = document.querySelector(".AI-Img");

rock.addEventListener("click", () => {
	playerSelection = "rock";
	gamePlayed = playGame(playerSelection, computerSelection());
	if (gamePlayed.includes("Win")) {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		humanImage.src = "./images/HUMANrock.png";
		computerImage.src = "./images/AIscissors.png";
	} else if (gamePlayed.includes("Lose")) {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		humanImage.src = "./images/HUMANrock.png";
		computerImage.src = "./images/AIpaper.png";
	} else if (gamePlayed.includes("Tie")) {
		drawScore.textContent = parseInt(drawScore.textContent) + 1;
		humanImage.src = "./images/HUMANrock.png";
		computerImage.src = "./images/AIrock.png";
	}
});

paper.addEventListener("click", () => {
	playerSelection = "paper";
	gamePlayed = playGame(playerSelection, computerSelection());
	if (gamePlayed.includes("Win")) {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		humanImage.src = "./images/HUMANpaper.png";
		computerImage.src = "./images/AIrock.png";
	} else if (gamePlayed.includes("Lose")) {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		humanImage.src = "./images/HUMANpaper.png";
		computerImage.src = "./images/AIscissors.png";
	} else if (gamePlayed.includes("Tie")) {
		drawScore.textContent = parseInt(drawScore.textContent) + 1;
		humanImage.src = "./images/HUMANpaper.png";
		computerImage.src = "./images/AIpaper.png";
	}
});

scissors.addEventListener("click", () => {
	playerSelection = "scissors";
	gamePlayed = playGame(playerSelection, computerSelection());
	if (gamePlayed.includes("Win")) {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		humanImage.src = "./images/HUMANscissors.png";
		computerImage.src = "./images/AIpaper.png";
	} else if (gamePlayed.includes("Lose")) {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		humanImage.src = "./images/HUMANscissors.png";
		computerImage.src = "./images/AIrock.png";
	} else if (gamePlayed.includes("Tie")) {
		drawScore.textContent = parseInt(drawScore.textContent) + 1;
		humanImage.src = "./images/HUMANscissors.png";
		computerImage.src = "./images/AIscissors.png";
	}
});

//p1 = human
//p2 = computer
let compSelection = "";
let humanSelection = "";
let playGame = (p1Selection, p2Selection) => {
	humanSelection = p1Selection.toLowerCase();
	compSelection = p2Selection.toLowerCase();
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
