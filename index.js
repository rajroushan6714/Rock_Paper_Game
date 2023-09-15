let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function computerPlay(){

    let c = Math.floor(Math.random() * 3);
    switch(c) {
        case 0: {
            return "ROCK";
        }
        case 1 : {
            return "PAPER";
        }
        case 2 : {
            return "SCISSORS";
        }
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

// UI 

const roundResult = document.getElementById("scoreInfo");
const roundMessage = document.getElementById("scoreMessage");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorBtn");
const endGameModal = document.getElementById("endGameModal");
const endGameMessage = document.getElementById("endGameMessage");
const restartBtn = document.getElementById("restartBtn");
const overLay = document.getElementById("overlay");

rockBtn.addEventListener("click" , () => handleClick("ROCK"));
paperBtn.addEventListener("click" , () => handleClick("PAPER"));
scissorsBtn.addEventListener("click" , () => handleClick("SCISSORS"));
restartBtn.addEventListener("click", restartGame);
overLay.addEventListener("click", closeEndgameModal);

function handleClick(playerChoice){
    if(isGameOver()){
        openEndgameModel()
        return 
    }
    let computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
    updateChoices(playerChoice, computerChoice);
    updateScore();

    if(isGameOver()){
        openEndgameModel();
        setFinalMessage();
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        roundWinner = 'tie';
    }
    else if(
        playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
        playerChoice == "PAPER" && computerChoice == "ROCK" ||
        playerChoice == "SCISSORS" && computerChoice == "PAPER"  
        )
    {
        playerScore++;
        roundWinner = 'Player';
    }
    else {
        computerScore++;
        roundWinner = 'Computer'
    }
    updateScoreMessage(roundWinner , playerChoice , computerChoice);
}

function updateScoreMessage(roundWinner , playerChoice, computerChoice) {
    if(roundWinner == "Player"){
        roundMessage.textContent = `${playerChoice} beats ${computerChoice}`;
        return;
    }
    else if(roundWinner == "Computer") {
        roundMessage.textContent = `${playerChoice} is beaten by ${computerChoice}`;
        return;
    }
    roundMessage.textContent = `${playerChoice} ties with ${computerChoice}`;
}

function updateChoices(playerChoice, computerChoice){
    switch(playerChoice){
        case "ROCK" :
            playerSign.textContent = "✊"
            break
        case "PAPER" :
            playerSign.textContent = "✋"
            break
        case "SCISSORS" :
            playerSign.textContent = "✌"
            break
    }
    switch(computerChoice){
        case "ROCK" :
            computerSign.textContent = "✊"
            break
        case "PAPER" :
            computerSign.textContent = "✋"
            break
        case "SCISSORS" :
            computerSign.textContent = "✌"
            break
    }
}

function updateScore() {
    if(roundWinner == "tie"){
        roundResult.textContent = "It's a tie!"
    }
    else if(roundWinner == "Player"){
        roundResult.textContent = "You Won!"
    }
    else{
        roundResult.textContent = "You Lost!"
    }
    playerScorePara.textContent = `Player : ${playerScore}`;
    computerScorePara.textContent = `Computer : ${computerScore}`;
}

function openEndgameModel() {
    endGameModal.classList.add("active");
    overLay.classList.add("active");
}

function closeEndgameModal() {
    endGameModal.classList.remove("active");
    overLay.classList.remove("active");
}

function setFinalMessage() {
    endGameMessage.textContent = playerScore > computerScore ? "You Won!" : "You Lost...";
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "Choose Your Weapon";
    roundMessage.textContent = "First to score 5 points wins the game";
    playerScorePara.textContent = "Player : 0";
    computerScorePara.textContent = "Computer : 0";
    playerSign.textContent = "❔";
    computerSign.textContent = "❔";
    endGameModal.classList.remove("active");
    overLay.classList.remove("active");
}