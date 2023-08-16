/* rock = 0
  paper = 1
  scissor = 2
  */
function computerPlay(computerChoice){
    let c = Math.random() * 3;
    c = Math.floor(c);
    if(c == 0){
        computerChoice.value = "rock";
    }
    else if(c == 1){
        computerChoice.value = "paper";
    }
    else if(c == 2){
        computerChoice.value = "scissors";
    }
    console.log(`Computer choice: ${computerChoice.value}`);
    return c;
}
function playRound(playerChoiceInt, playerChoice, computerChoice , computerChoiceInt){
    let win_Array = [[0, 2, 1],
                     [1, 0, 2],
                     [2, 1, 0]];
    let result = win_Array[playerChoiceInt][computerChoiceInt];
    if(result == 0){
        console.log(`It's a tie! You choose: ${playerChoice} , and The Computer choose: ${computerChoice.value}`);
    }
    else if(result == 1){
        console.log(`You Won! You choose: ${playerChoice} , and The Computer choose: ${computerChoice.value}`)
    }
    else if(result == 2){
        console.log(`You Lost! You choose: ${playerChoice} , and The Computer choose: ${computerChoice.value}`);
    }
    console.log("\n");
}

function game(){
    let computerChoice = {value : ""};
    let computerChoiceInt ;
    let playerChoice;
    let playerChoiceInt;

    for(let i = 1 ; i <= 5 ; i++){
        playerChoice = prompt("Please enter your choice: ").toLowerCase();
        if(playerChoice == "rock"){
            playerChoiceInt = 0;
        }
        else if(playerChoice == "paper"){
            playerChoiceInt = 1;
        }
        else if(playerChoice == "scissors"){
            playerChoiceInt = 2;
        }
        computerChoiceInt = computerPlay(computerChoice);
        playRound(playerChoiceInt, playerChoice, computerChoice , computerChoiceInt);
    }
}