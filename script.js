const log = console.log;

const choiceArr = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let num =  Math.floor(Math.random() * 3);
    return choiceArr[num]
}

function getHumanChoice(choiceArr) {
    let humanChoice;
    let message = "Please choose rock, paper, scissors";
    let entryValue = '';

    while (!humanChoice) {
        entryValue = prompt(message, entryValue).toLowerCase().trim();
        if (choiceArr.includes(entryValue)) humanChoice = entryValue;
        else message += '\nPlease check the spelling';
    }

    return humanChoice;
}

function playRound(computerChoice, humanChoice){
    const winnerObj = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };

    log(winnerObj[computerChoice])
    if (computerChoice === humanChoice) log(`It's a Draw, you both chose ${computerChoice}`)
    else if (winnerObj[computerChoice] === humanChoice) {
        log(`You lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore ++;
    }
    else if (winnerObj[humanChoice] === computerChoice) {
        log(`You win!, ${humanChoice} beats ${computerChoice}`);
        humanScore ++;
    }
}

playRound(getComputerChoice(), getHumanChoice(choiceArr))