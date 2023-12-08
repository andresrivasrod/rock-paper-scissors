function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
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
    let i = 0;
    let player = 0;
    let computer = 0;
    for (i; i < 5; ) {
        const playerSelection = prompt("Rock, paper or scissors: ");
        const computerSelection = getComputerChoice();
        let counts = playRound(playerSelection, computerSelection);
        if(counts === "computer"){
            computer++;
        }else if (counts === "player"){
            player++
        }else{
            i +=0;
        }
    }
    if(player > computer){
        return "You won " + player + " points to " + computer;
    }else{
        return "You lost " + computer + " points to " + player;
    }

  }
   
console.log(game());