function getComputerChoice(){
    possible_choices = ['rock', 'paper', 'scissors'];
    choice = Math.floor(Math.random() * 3);
    return possible_choices[choice];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch(true) {

        case (playerSelection === "rock") && (computerSelection === 'rock'):
            return "I'ts a tie!";
            break;
        
        case (playerSelection === "rock") && (computerSelection === 'paper'):
            return 'You lose!, paper beats rock';
            break;

        case (playerSelection === "rock") && (computerSelection === 'scissors'):
            return 'You win!, rock beats scissors';
            break;
            
        case (playerSelection === "paper") && (computerSelection === 'rock'):
            return 'You win!, paper beats rock';
            break;

        case (playerSelection === "paper") && (computerSelection ==='paper'):
            return "It's a tie!";
            break;

        case (playerSelection === "paper") && (computerSelection ==='scissors'):
            return "You lose!, scissors beat paper";
            break;

        case (playerSelection === "scissors") && (computerSelection ==='rock'):
            return "You lose!, rock beats scissors";
            break;

        case (playerSelection === "scissors") && (computerSelection ==='paper'):
            return "You win!, scissors beat paper";
            break;

        case (playerSelection === "scissors") && (computerSelection ==='scissors'):
            return "It's a tie!";
            break;
    }
        
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    

    for (let i = 0; i < 5; i++) { 
        let playerMove = prompt('Choose a move');
        let roundResult = playRound(playerMove, getComputerChoice());

        if (roundResult.startsWith('You win!')) {
            playerScore++ 
        } else if (roundResult.startsWith('You lose!')) {
            computerScore++
        }

        console.log(`${roundResult} \n --- \n The score is: \n You: ${playerScore} | CPU ${computerScore}`)



    }
}

game()