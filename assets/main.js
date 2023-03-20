buttons = document.querySelectorAll('img');

let choices = ['rock', 'paper', 'scissors'];
let scoreBoard = {computer: 0, user: 0}

const userName = prompt("Enter your name: ")

buttons.forEach(button => {
    // sets eventlisteners on all buttons
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.classList.value)
        score.innerText = `${userName} ${scoreBoard.user} - ${scoreBoard.computer} Computer`;
    });
})

score = document.querySelector('.score-board');
scoreText = document.querySelector('.score-text');

score.innerText = `${userName} 0 - 0 Computer`

function getComputerChoice() {
    // This gets computer's choice from the Array of choiced
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(computer, user) {
    // A single round of the game
    if (computer === user) {
        scoreText.innerText = "It's a tie";
    }else if (computer === "rock" && user === "scissors") {
        scoreBoard.computer += 1;
        scoreText.innerText = `${computer} beats ${user}, Computer wins!!!`;
    }else if (computer === "paper" && user === "rock") {
        scoreBoard.computer += 1;
        scoreText.innerText = `${computer} beats ${user}, Computer wins!!!`;
    }else if (computer === "scissors" && user === "paper") {
        scoreBoard.computer += 1;
        scoreText.innerText = `${computer} beats ${user}, Computer wins!!!`;
    }else {
        scoreBoard.user += 1;
        scoreText.innerText = `${user} beats ${computer}, ${userName} wins!!!`;
    }

    if (scoreBoard.computer === 5 || scoreBoard.user === 5) {
        // checks for match winner: First to 5 wins
        if (scoreBoard.computer === 5) {
            alert(`Computer wins ${scoreBoard.computer} : ${scoreBoard.user}`);
            scoreBoard.computer = 0, scoreBoard.user = 0;
            scoreText.innerText = "";
        }else {
            alert(`${userName} wins ${scoreBoard.user} : ${scoreBoard.computer}`);
            scoreBoard.computer = 0, scoreBoard.user = 0;
            scoreText.innerText = "";
        }
    }
}