/* rock = 0
  paper = 1
  scissor = 2
  */

let playerScore = 0;
let computerScore = 0;
let count = 0;

function computerPlay(computerChoice){

    let c = Math.random() * 3;
    c = Math.floor(c);

    if(c == 0){
        computerChoice.value = "Rock";
    }

    else if(c == 1){
        computerChoice.value = "Paper";
    }

    else if(c == 2){
        computerChoice.value = "Scissor";
    }

    return c;

}

const Button1 = document.querySelector(".rock");
const Button2 = document.querySelector(".paper");
const Button3 = document.querySelector(".scissors");
const Result = document.querySelector(".result");

Button1.addEventListener("click" , () => playRound(0 , "Rock"));
Button2.addEventListener("click" , () => playRound(1 , "Paper"));
Button3.addEventListener("click", () => playRound(2 , "Scissor"));

function playRound(playerChoiceInt, playerChoice){
    count++;
    const currentRound = document.createElement('h3');
    currentRound.textContent = `Round : ${count}`;
    Result.appendChild(currentRound);
    let win_Array = [[0, 2, 1],
                     [1, 0, 2],
                     [2, 1, 0]];

    let computerChoice = {value : ""};
    let computerChoiceInt = computerPlay(computerChoice);

    let result = win_Array[playerChoiceInt][computerChoiceInt];
    let string = "";

    if(result == 0){
        string = `It's a tie! ${"\n"} You choose: ${playerChoice} ${"\n"} The Computer choose: ${computerChoice.value} ${"\n"}`;
        const para = document.createElement('p');
        para.textContent = string;
        Result.appendChild(para);
    }

    else if(result == 1){
        playerScore++;
        string = `You Won! ${"\n"} You choose: ${playerChoice} ${"\n"} The Computer choose: ${computerChoice.value} ${"\n"}`
        const para = document.createElement('p');
        para.textContent = string;
        Result.appendChild(para);
    }

    else if(result == 2){
        computerScore++;
        string = `You Lost! ${"\n"} You choose: ${playerChoice} ${"\n"} The Computer choose: ${computerChoice.value} ${"\n"}`;
        const para = document.createElement('p');
        para.textContent = string;
        Result.appendChild(para);
    }

    else {
        string = `No Result ${"\n"}`;
        const para = document.createElement('p');
        para.textContent = string;
        Result.appendChild(para);
    }
    if(count == 5){
        count = 0;
        const l1 = document.createElement('h2');
        if(playerScore > computerScore)
            l1.textContent = "Winner : Player";
        else if(playerScore < computerScore)
            l1.textContent = "Winner : Computer";
        else
            l1.textContent = "It's a tie!";
        Result.appendChild(l1);
        playerScore = 0;
        computerScore = 0;
    }
}

