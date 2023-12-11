let player = 0;
let computer = 0;
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const scorePlayerP = document.getElementById('scorePlayer')
const scoreComputerP = document.getElementById('scoreComputer')
const roundInfo = document.getElementById('roundInfo')
const winner = document.getElementById('winner')
rock.addEventListener('click', () => playRound("rock"))
paper.addEventListener('click', () =>playRound("paper"))
scissors.addEventListener('click', () => playRound("scissors"))

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock")){
        roundInfo.textContent = "You won! " + playerSelection + " beats " + computerSelection;
        player ++;
        scorePlayerP.textContent = 'Player: ' + player;
    }else if (playerSelection === computerSelection){
        roundInfo.textContent ="You tie";
    }else{
        roundInfo.textContent = "You lost! " + computerSelection + " beats " + playerSelection;
        computer ++;
        scoreComputerP.textContent = 'Computer: ' + computer;
    }
    if(computer === 5 || player === 5){
        restartGame();
    } 
}

function restartGame(){
    if (computer > player){
        winner.textContent = "You lost " + computer + " points to " + player;
    }else{
        winner.textContent = "You won " + player + " points to " + computer;
    }
    player = 0;
    computer = 0;
    scoreComputerP.textContent = "Computer: " + computer;
    scorePlayerP.textContent = "Player: " + player;
}