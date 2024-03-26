function AskComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber==0){
        return "rock";
    }
    else if(randomNumber == 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}


let playerPoints = 0;
let comPoints = 0;
function playRound(getComputeChoice, playerChoice){
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    getComputeChoice = getComputeChoice.charAt(0).toUpperCase() + getComputeChoice.slice(1);

    if (comPoints >= 5 || playerPoints >= 5) {
        if (comPoints > playerPoints) {
            divres.innerHTML += " Computer Wins" + "<br>";
        } else if (comPoints < playerPoints) {
            divres.innerHTML += " Player Wins" + "<br>";
        } else {
            divres.innerHTML += " It's a tie" + "<br>";
        }
    }
    else if(getComputeChoice == playerChoice){
        playerPoints++;
        comPoints++;
        divres.innerHTML += `Player: ` + playerPoints + `  Computer: ` + comPoints + '<br>';
    }
    else if(playerChoice == "Rock" && getComputeChoice == "Paper"){
        comPoints++;
        divres.innerHTML += `Player: ` + playerPoints + `  Computer: ` + comPoints + "<br>";
    }
    else if(playerChoice == "Scissor" && getComputeChoice == "Rock"){
        comPoints++;
        divres.innerHTML += `Player: ` + playerPoints + `  Computer: ` + comPoints + '<br>';
    }
    else if(playerChoice == "Paper" && getComputeChoice == "Scissor"){
        comPoints++;
        divres.innerHTML += `Player: ` + playerPoints + `  Computer: ` + comPoints + '<br>';
    }
    else{
        playerPoints++;
        divres.innerHTML += `Player: ` + playerPoints + `  Computer: ` + comPoints + "<br>";
    }
}

const div = document.createElement("div");
document.body.appendChild(div);

const btnrock = document.createElement("button");
const btnpaper = document.createElement("button");
const btnscissor = document.createElement("button");

btnrock.textContent = "Rock";
btnpaper.textContent = "Paper";
btnscissor.textContent = "Scissor";

div.appendChild(btnrock);
div.appendChild(btnpaper);
div.appendChild(btnscissor);

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.style.backgroundColor = "coral";
    button.style.width = "20%";
    button.style.fontSize = "300%";
    button.style.margin = "6.5%";
    button.style.alignContent = "center";
});

    btnrock.addEventListener("click", function () {
        const compChoice = AskComputerChoice();
        playRound(compChoice, "rock");
    });
    btnpaper.addEventListener("click", function () {
        const compChoice = AskComputerChoice();
        playRound(compChoice, "paper");
    });
    btnscissor.addEventListener("click", function () {
        const compChoice = AskComputerChoice();
        playRound(compChoice, "scissor");
    });
divres = document.createElement("div");
document.body.appendChild(divres);
divres.textContent = "";
divres.style.color = "DarkSlateGray";
divres.style.fontSize = "300%";
// divres.style.justifycontent= "center";
divres.style.textAlign = "center";

document.body.style.backgroundColor = "PaleTurquoise";


