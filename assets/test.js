buttons = document.querySelectorAll('button');

let choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
    // sets eventlisteners on all buttons
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.classList.value)
    });
})


function getComputerChoice() {
    // This gets computer's choice from the Array of choiced
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(computer, user) {
    // A single round of the game
    if (computer === user) {
        console.log("It's a tie")
    }else if (computer === "rock" && user === "scissors") {
        console.log(`${computer} beats ${user}, Computer wins!!!`);
    }else if (computer === "paper" && user === "rock") {
        console.log(`${computer} beats ${user}, Computer wins!!!`);
    }else if (computer === "scissors" && user === "paper") {
        console.log(`${computer} beats ${user}, Computer wins!!!`);
    }else {
        console.log(`${user} beats ${computer}, You win!!!`);
    }
}

// let choices = ['rock', 'paper', 'scissors'];
// let scoreBoard = {computer: 0, user: 0}
