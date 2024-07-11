const container = document.querySelector(".container");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const scoreContainer = document.createElement("div");
const personScore = document.createElement("div");
const computerScoreContainer = document.createElement("div");
const winnerContainer = document.createElement("div");
const computerDecision = document.createElement("div");
const result = document.createElement("div");
const gameOver = document.createElement("h1");



rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");
scoreContainer.classList.add("score");
winnerContainer.classList.add("winner");
computerDecision.classList.add("computer-decision");
result.classList.add("result");
gameOver.classList.add("game-over");


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
            result.innerText = "Tie!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore == 5 || computerScore == 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "rock" && getComputerChoice == "paper") {
            
            result.innerText = "You Lose!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            computerScore = computerScore + 1;
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore == 5 || computerScore == 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "rock" && getComputerChoice == "scissors") {
            
            result.innerText = "You Win!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            humanScore = humanScore + 1;
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "paper" && getComputerChoice == "rock") {
            
            result.innerText = "You Win!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            humanScore = humanScore + 1;
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "paper" && getComputerChoice == "paper") {
            
            result.innerText = "Tie!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "paper" && getComputerChoice == "scissors") {
            
            result.innerText = "You Lose!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            computerScore = computerScore + 1;
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "scissors" && getComputerChoice == "rock") {
            
            result.innerText = "You Lose!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            computerScore = computerScore + 1;
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "scissors" && getComputerChoice == "paper") {
            
            result.innerText = "You Win!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            humanScore = humanScore + 1;
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
        else if (userChoice == "scissors"&& getComputerChoice == "scissors") {
            
            result.innerText = "Tie!";
            computerDecision.innerText = `Computer chose: ${getComputerChoice}`;
            container.appendChild(result);
            container.appendChild(computerDecision);
            
            personScore.innerText = `Your Score: ${humanScore}`;
            computerScoreContainer.innerText = `Computer Score: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5) {
                if (humanScore == 5) {
                    gameOver.innerText = "You Win The Match!";
                    container.appendChild(gameOver);
                }
                else {
                    gameOver.innerText = "You Lose The Match!";
                    container.appendChild(gameOver);
                };
                winnerContainer.innerText = "Game Over!";
                container.appendChild(winnerContainer);
            };
        }
    };
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    
};
playGame();