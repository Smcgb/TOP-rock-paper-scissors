let humanScore = 0;
let computerScore = 0;



function getComputerChoice(list) {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}

function getHumanChoice(list) {
    let humanChoice = prompt("Rock, paper or scissors?");
    
    while (!list.includes(humanChoice.toLowerCase())) {
        console.log('Error, option not in list')
        return getHumanChoice(list);
    }    
    return humanChoice.toLowerCase();
    }


function playRound() {
    const RPS = ["rock","paper","scissors"];
    const computerSelection = getComputerChoice(RPS);
    let humanSelection = getHumanChoice(RPS);

    console.log(`Human: ${humanSelection} Computer: ${computerSelection}`);
    
    if (humanSelection == computerSelection) {
        console.log(`Both players selected ${humanSelection}, tie game!`);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
        return;
    }
    
    else if (humanSelection == 'rock') {
        if (computerSelection == "scissors") {
            humanScore++;
            console.log("Human wins!");
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
            return;
        }
    
        
        else {
            computerScore++;
            console.log("Computer wins!");
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
            return;            
        }
    }

    else if (humanSelection == 'paper') {
        if (computerSelection == "rock") {
            humanScore++;
            console.log("Human wins!");
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
            return;
        }
        
        else {
            computerScore++;
            console.log("Computer wins!");
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
            return;            
        }
    }
        
    else {
        if (computerSelection == "paper") {
            humanScore++;
            console.log("Human wins!");
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
            return;
        }
        
        else {
            computerScore++;
            console.log("Computer wins!");
            console.log(`Human: ${humanScore} Computer: ${computerScore}`);
            return;            
        }        
    }
}

while (humanScore < 5 && computerScore < 5) {
    playRound();
}

console.log('Game over!');
console.log(`Human: ${humanScore} Computer: ${computerScore}`);

if (humanScore == 5) {
    console.log('Human wins the game!');
} 

else {
    console.log('Computer wins the game!');
}