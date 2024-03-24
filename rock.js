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

const roundCompChoice = AskComputerChoice();
const roundPlayerChoice = AskplayerChoice();
console.log(playRound(roundCompChoice, roundPlayerChoice));

const div = document.createElement("div");
const btnrock = div.createElement("button");
const btnpaper = div.createElement("button");
const btnscissor = div.createElement("button");

div.appendChild(btnrock);
div.appendChild(btnpaper);
div.appendChild(btnscissor);

const rockChoice = AskComputerChoice();
console.log(btnrock.addEventListenter("click", playRound(rockChoice, 'rock')));

const paperChoice = AskComputerChoice();
console.log(btnrock.addEventListenter("click", playRound(paperChoice, 'paper')));

const scissorChoice = AskComputerChoice();
console.log(btnrock.addEventListenter("click", playRound(scissorChoice, 'scissor')));

const div2 = document.createElement("div");
