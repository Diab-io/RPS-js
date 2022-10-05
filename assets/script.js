function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getUserChoice() {
    let invalidChoice = true

    while(invalidChoice) {
        var choice = prompt("Rock, Paper, Scissors").toLowerCase();

        if (choices.includes(choice)) {
            invalidChoice = false;
        }else {
            console.log("Enter a valid choice")
        }
    }
    return choice;
}

function winnerOfRound(computer, user) {
    if (computer === user) {
        return "It's a tie"
    }else if (computer === "rock" && user === "scissors") {
        scoreBoard.computer += 1;
        return `${computer} beats ${user}, Computer wins!!!`;
    }else if (computer === "paper" && user === "rock") {
        scoreBoard.computer += 1;
        return `${computer} beats ${user}, Computer wins!!!`;
    }else if (computer === "scissors" && user === "paper") {
        scoreBoard.computer += 1;
        return `${computer} beats ${user}, Computer wins!!!`;
    }else {
        scoreBoard.user += 1;
        return `${user} beats ${computer}, You win!!!`;
    }
}

function playGame() {
    gameStillGoing = true;

    while (gameStillGoing) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice()

        console.log(winnerOfRound(computerChoice, userChoice));

        if (scoreBoard.computer === 5 || scoreBoard.user === 5) {
            gameStillGoing = false;

            if (scoreBoard.computer === 5) {
                return `Computer wins ${scoreBoard.computer} : ${scoreBoard.user}`;
            }else {
                return `You win ${scoreBoard.user} : ${scoreBoard.computer}`;
            }
        }else {
            gameStillGoing = true;
        }
    }
}

let choices = ['rock', 'paper', 'scissors'];

let scoreBoard = {computer: 0, user: 0}

console.log(playGame());