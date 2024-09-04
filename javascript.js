

let currentRound = 0;

let humanScore = 0;
let computerScore= 0;

let playerAction;
let computerAction;

PlayGame();

function PlayGame(){
    if(currentRound < 5){
        PlayRound()
    }
    else{
        if(humanScore > computerScore){
            console.log("YOU WIN!!!");
        }
        else{
            console.log("YOU LOSE :(");
        }
    }
}

function PlayRound(){
    getHumanChoice();
    getComputerChoice();
    if (playerAction == computerAction){
        console.log("Tie! You chose the same action!");
        PlayGame();
    }
    else{
        currentRound++;
        if (playerAction == "Rock" && computerAction == "Paper" || playerAction == "Paper" && computerAction == "Scissors" || playerAction == "Scissors" && computerAction == "Rock"){
            console.log("You Lose! "+ computerAction+" beats " +playerAction); 
            computerScore++;
        }
        else{
            console.log("You Win! "+ playerAction+" beats " +computerAction); 
            humanScore++;
        }
        PlayGame();
    }
}

function getHumanChoice(){
    let playerChoice = Number(prompt("Write rock (0), paper (1) or scissors(2) to play: ", "0"));
    playerAction = assignActionToIndex(playerChoice);
}

function getComputerChoice(){
    let randIndex = getRandomInt(3);
    computerAction = assignActionToIndex(randIndex);
}

function assignActionToIndex(actionNum){
    switch (actionNum){
        case 0 :
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }