let computerChoice = getComputerChoice(1,3);
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


if (computerChoice === 1) {
    let a = "rock";
    console.log(a);
}
else if (computerChoice === 2) {
    let a = "paper";
    console.log(a);
}
else if (computerChoice === 3) {
    let a = "scissors";
    console.log(a);
}

function getUserChoice() {
    let answer = prompt("rock, paper, or scissors?");
    return answer;
}

let userChoice = getUserChoice().trim().toLocaleLowerCase();


console.log(userChoice);


function playRound(userChoice, computerChoice) {
    if (userChoice == "rock" && computerChoice == "rock") {
        console.log("Tie!");
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win!");
        humanScore = humanScore + 1;
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("You Win!");
        humanScore = humanScore + 1;
    }
    else if (userChoice == "paper" && computerChoice == "paper") {
        console.log("Tie!");
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win!");
        humanScore = humanScore + 1;
    }
    else if (userChoice == "scissors"&& computerChoice == "scissors") {
        console.log("Tie!");
    }
}

