function getComputerChoice(){
    possible_choices = ['rock', 'paper', 'scissors'];
    choice = Math.floor(Math.random() * 3);
    return possible_choices[choice];
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){
    const resultsDiv = document.querySelector('#results')
    const scoreDiv = document.querySelector('#score')
    const finalResultDiv = document.querySelector('#final_result')
    
    // reset the final result text for a new match
    if (finalResultDiv.textContent !== '') finalResultDiv.textContent = ''
    
    switch(true) {

        case (playerSelection === "rock") && (computerSelection === 'rock'):
            resultsDiv.textContent =  "I'ts a tie!";
            break;
        
        case (playerSelection === "rock") && (computerSelection === 'paper'):
            resultsDiv.textContent =  'You lose!, paper beats rock';
            computerScore ++
            break;

        case (playerSelection === "rock") && (computerSelection === 'scissors'):
            resultsDiv.textContent =  'You win!, rock beats scissors';
            playerScore ++
            break;
            
        case (playerSelection === "paper") && (computerSelection === 'rock'):
            resultsDiv.textContent =  'You win!, paper beats rock';
            playerScore ++
            break;

        case (playerSelection === "paper") && (computerSelection ==='paper'):
            resultsDiv.textContent =  "It's a tie!";
            break;

        case (playerSelection === "paper") && (computerSelection ==='scissors'):
            resultsDiv.textContent =  "You lose!, scissors beat paper";
            computerScore ++
            break;

        case (playerSelection === "scissors") && (computerSelection ==='rock'):
            resultsDiv.textContent =  "You lose!, rock beats scissors";
            computerScore ++
            break;

        case (playerSelection === "scissors") && (computerSelection ==='paper'):
            resultsDiv.textContent =  "You win!, scissors beat paper";
            playerScore ++
            break;

        case (playerSelection === "scissors") && (computerSelection ==='scissors'):
            resultsDiv.textContent =  "It's a tie!";
            break;
    }

    // Display current score
    scoreDiv.textContent = `Your score :${playerScore}  |  CPU: ${computerScore}`

    // Check for winner
    if (playerScore === 5) {
        finalResultDiv.textContent = 'You won!.'
        // Reset the score
        playerScore = 0 
        computerScore = 0

    } else if (computerScore === 5) {
        finalResultDiv.textContent = 'You lost.'
        // Reset the score
        playerScore = 0
        computerScore = 0
    }
        
}



const btn_rock = document.querySelector('#rock');
btn_rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
})

const btn_paper = document.querySelector('#paper');
btn_paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})

const btn_scissors = document.querySelector('#scissors');
btn_scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})

