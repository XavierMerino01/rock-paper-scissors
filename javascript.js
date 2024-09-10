

let currentRound = 0;

let humanScore = 0;
let computerScore= 0;

let playerAction;
let computerAction;

let rockButton = document.querySelector("#RockButton");
let paperButton = document.querySelector("#PaperButton");
let scissorsButton = document.querySelector("#ScissorsButton");
let currentText = document.querySelector(".current");
let playerPoints = document.querySelector(".player");
let computerPoints = document.querySelector(".computer");

rockButton.addEventListener('click', () => getHumanChoice(0));
paperButton.addEventListener('click', () => getHumanChoice(1));
scissorsButton.addEventListener('click', () => getHumanChoice(2));


function PlayGame() {
    playerPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
    if(computerScore < 5 && humanScore < 5){
        return;
    }
    else{
        if(humanScore > computerScore){
            currentText.textContent = "YOU WIN!";
        }
        else{
            currentText.textContent = "YOU LOSE!";
        }
    }
}

function PlayRound() {

    if (computerScore >= 5 || humanScore >= 5) {
        return;
    }

    getComputerChoice();
    if (playerAction == computerAction){
        currentText.textContent = "Tie! You chose the same action!";
        PlayGame();
    }
    else{
        currentRound++;
        if (playerAction == "Rock" && computerAction == "Paper" || playerAction == "Paper" && computerAction == "Scissors" || playerAction == "Scissors" && computerAction == "Rock"){
            currentText.textContent = "You Lose! " + computerAction + " beats " + playerAction;
            computerScore++;
        }
        else{
            currentText.textContent = "You Win! " + playerAction + " beats " + computerAction;
            humanScore++;
        }
        PlayGame();
    }
}

function getHumanChoice(chosenOption) {
    let playerChoice = chosenOption;
    playerAction = assignActionToIndex(playerChoice);
    PlayRound();
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