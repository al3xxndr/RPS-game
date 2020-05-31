let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const action_p = document.getElementById('action-message');


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'ROCK';
    if (letter === 'p') return 'PAPER';
    if (letter === 's') return 'SCISSORS';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} BEATS ${convertToWord(computerChoice)} !<br> YOU WIN!`;
    action_p.innerHTML = `<br><br>USER CHOSE: ${convertToWord(userChoice)}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;COMPUTER CHOSE: ${convertToWord(computerChoice)}`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} LOSES TO ${convertToWord(computerChoice)} !<br> YOU LOST...`;
    action_p.innerHTML = `<br><br>USER CHOSE: ${convertToWord(userChoice)}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;COMPUTER CHOSE: ${convertToWord(computerChoice)}`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} DOES NOT BEAT ${convertToWord(computerChoice)} !<br>IT'S A DRAW!`;
    action_p.innerHTML = `<br><br>USER CHOSE: ${convertToWord(userChoice)}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;COMPUTER CHOSE: ${convertToWord(computerChoice)}`;
}


function game(userChoice) {
    const computerChoice = (getComputerChoice());
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;

    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}
main();
