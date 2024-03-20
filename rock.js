function AskComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber==0){
        return "rock";
    }
    else if(randomNumber == 1){
        return "paper";
    }
    else{
        return "scissor"
    }
}
function AskplayerChoice(){
    let choice = prompt("Rock Paper Scissor: ");
    return choice.toLowerCase();
}

function playRound(getComputeChoice, playerChoice){
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    getComputeChoice = getComputeChoice.charAt(0).toUpperCase() + getComputeChoice.slice(1);

    if(getComputeChoice == playerChoice){
        return "Its a tie";
    }
    else if(playerChoice == "Rock" && getComputeChoice == "Paper"){
        
        return "You lose," + getComputeChoice + " beats " + playerChoice;
    }
    else if(playerChoice == "Scissor" && getComputeChoice == "Rock"){
        return "You lose," + getComputeChoice + " beats " + playerChoice;
    }
    else if(playerChoice == "Paper" && getComputeChoice == "Scissor"){
        return "You lose," + getComputeChoice + " beats " + playerChoice;
    }
    else{
        return "You Win," + playerChoice + " beats " + getComputeChoice;
    }
}
function playGame(){
    let res = [];
    let computerPoints = 0;
    let playerPoints = 0;
    for(let i = 0; i<5; i++){
        const playerSelection = AskplayerChoice();
        const computerSelection = AskComputerChoice();
        res = playRound(computerSelection, playerSelection).match(/\b(\w+)\b/g);
        if(res[0] == "Its"){
            computerPoints++;
            playerPoints++;
        }
        else if(res[1] == "lose"){
            computerPoints++;
        }
        else{
            playerPoints++;
        }
        console.log("You: " + playerPoints + " | " + "Computer: " + computerPoints);
    }
    if(computerPoints>playerPoints){
        console.log("Computer Wins by " + (computerPoints - playerPoints));
    }
    else if(playerPoints>computerPoints){
        console.log("You Win by " + (playerPoints - computerPoints));
    }
    else{
        console.log("You have tied with the Computer");
    }
}
const roundCompChoice = AskComputerChoice();
const roundPlayerChoice = AskplayerChoice();
console.log(playRound(roundCompChoice, roundPlayerChoice));
playGame();