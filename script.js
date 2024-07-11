const container = document.querySelector(".container");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const scoreContainer = document.createElement("div");
const personScore = document.createElement("div");
const computerScoreContainer = document.createElement("div");



rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");
scoreContainer.classList.add("score");


rock.innerText = "Rock";
paper.innerText = "Paper";
scissors.innerText = "Scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(scoreContainer);





function getComputerChoice() {
    let min = 1;
    let max = 3;
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





function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    personScore.innerText = `Your Score: ${humanScore}`;
    computerScoreContainer.innerText = `Computer Score: ${computerScore}`;

    scoreContainer.appendChild(personScore);
    scoreContainer.appendChild(computerScoreContainer);
   
    
    
    function playRound(userChoice, getComputerChoice) {
        if (userChoice == "rock" && getComputerChoice == "rock") {
            console.log("Tie!");
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "rock" && getComputerChoice == "paper") {
            console.log("You Lose!");
            computerScore = computerScore + 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "rock" && getComputerChoice == "scissors") {
            console.log("You Win!");
            humanScore = humanScore + 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "paper" && getComputerChoice == "rock") {
            console.log("You Win!");
            humanScore = humanScore + 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "paper" && getComputerChoice == "paper") {
            console.log("Tie!");
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "paper" && getComputerChoice == "scissors") {
            console.log("You Lose!");
            computerScore = computerScore + 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "scissors" && getComputerChoice == "rock") {
            console.log("You Lose!");
            computerScore = computerScore + 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "scissors" && getComputerChoice == "paper") {
            console.log("You Win!");
            humanScore = humanScore + 1;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
        else if (userChoice == "scissors"&& getComputerChoice == "scissors") {
            console.log("Tie!");
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
        }
    };
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    
};
playGame();