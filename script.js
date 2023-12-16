//create getComputerChoice function *
//this function will randomly return either 'rock', 'paper', or 'scissors' *
//create a function that plays a single game *
//it should take 2 parameters - the player selection and computerSelection *
//it should then return a string that declares the winner *
//make the function parameter case sensative *
//if its a tie replay the round *
//create function called game which uses the previous function inside this one to play a best of five game that keeps score and reports a winner or looser at the end
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

let playerSelection = prompt("What is your choice");

//p1 = human
//p2 = computer
let playGame = (p1Selection, p2Selection) => {
	let humanSelection = p1Selection.toLowerCase();
	let compSelection = p2Selection.toLowerCase();

	// while (humanSelection === compSelection) {
	// 	playerSelection = prompt("Its a Tie! Please make another choice");
	// 	humanSelection = playerSelection.toLowerCase();
	// 	compSelection = computerSelection().toLowerCase();
	// }
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

//console.log(playGame(playerSelection, computerSelection()));
let game = () => {
	let i = 0;
	let j = 0;
	let k = 0;
	while (i < 5 && j < 5) {
		let playerSelection = prompt("What is your choice?");
		let gameResult = playGame(playerSelection, computerSelection());
		if (gameResult.includes("Win")) {
			i++;

			if (i == 5) {
				console.log(i);
				console.log(j);
				console.log(k);
				return "You Win";
			}
		} else if (gameResult.includes("Lose")) {
			j++;

			if (j == 5) {
				console.log(j);
				console.log(i);
				console.log(k);
				return "Computer wins";
			}
		} else if (gameResult.includes("Tie")) {
			k++;
		}
	}
};

console.log(game());
