//let computerChoice = getComputerChoice(1,3);
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(min, max) {
    let computerChoice =  Math.floor(Math.random() * (max - min + 1) + min);
    if (computerChoice === 1) {
        let finalComputerChoice = "rock";
        console.log(finalComputerChoice);
        return finalComputerChoice;
    }
    else if (computerChoice === 2) {
        let finalComputerChoice = "paper";
        console.log(finalComputerChoice);
        return finalComputerChoice;
    }
    else if (computerChoice === 3) {
        let finalComputerChoice = "scissors";
        console.log(finalComputerChoice);
        return finalComputerChoice;
    }
};



function getUserChoice() {
    let answer = prompt("rock, paper, or scissors?");
    answer = answer.trim().toLocaleLowerCase();
    console.log(answer);
    return answer;
}







function playRound(userChoice, getComputerChoice) {
    if (userChoice == "rock" && getComputerChoice == "rock") {
        console.log("Tie!");
    }
    else if (userChoice == "rock" && getComputerChoice == "paper") {
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if (userChoice == "rock" && getComputerChoice == "scissors") {
        console.log("You Win!");
        humanScore = humanScore + 1;
    }
    else if (userChoice == "paper" && getComputerChoice == "rock") {
        console.log("You Win!");
        humanScore = humanScore + 1;
    }
    else if (userChoice == "paper" && getComputerChoice == "paper") {
        console.log("Tie!");
    }
    else if (userChoice == "paper" && getComputerChoice == "scissors") {
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if (userChoice == "scissors" && getComputerChoice == "rock") {
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if (userChoice == "scissors" && getComputerChoice == "paper") {
        console.log("You Win!");
        humanScore = humanScore + 1;
    }
    else if (userChoice == "scissors"&& getComputerChoice == "scissors") {
        console.log("Tie!");
    }
}

function playGame() {
    playRound(getUserChoice(), getComputerChoice(1, 3));
    playRound(getUserChoice(), getComputerChoice(1, 3));
    playRound(getUserChoice(), getComputerChoice(1, 3));
    playRound(getUserChoice(), getComputerChoice(1, 3));
    playRound(getUserChoice(), getComputerChoice(1, 3));
}
playGame();