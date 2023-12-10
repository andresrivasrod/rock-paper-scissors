const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
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
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")){
        alert("You won! " + playerSelection + " beats " + computerSelection)
        return "player";
    }else if (playerSelection === computerSelection){
        alert("You tie")
        return false;
    }else{
        alert("You lost! " + computerSelection + " beats " + playerSelection)
        return "computer";
    }
  }

  function game(){
    let player = 0;
    let computer = 0;
    let flag = true;
    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissors = document.querySelector('#scissors')
    rock.addEventListener('click', playRound("rock"))
    paper.addEventListener('click', playRound("paper"))
    scissors.addEventListener('click', playRound("scissors"))
    while (flag) {
        if(counts === "computer"){
            computer++;
        }else if (counts === "player"){
            player++;
        }else{
            continue;
        }
        if(computer === 5 || player === 5){
            flag = false;
        } 
    }
    if(player > computer){
        return "You won " + player + " points to " + computer;
    }else{
        return "You lost " + computer + " points to " + player;
    }

  }
