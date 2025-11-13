const log = console.log;

const choiceArr = ['rock', 'paper', 'scissors'];

function getComputerChoice(choiceArr) {
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

function playGame(numRounds = 5) {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice){
        const winnerObj = {
            rock: 'scissors',
            scissors: 'paper',
            paper: 'rock'
        };

        if (computerChoice === humanChoice) log(`It's a Draw, you both chose ${computerChoice}`)
        else if (winnerObj[computerChoice] === humanChoice) {
            log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore ++;
        }
        else if (winnerObj[humanChoice] === computerChoice) {
            log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore ++;
        }
    }   

    for (let i = 1; i < numRounds; i ++) {
        playRound(getComputerChoice(choiceArr), getHumanChoice(choiceArr));
    }

    if (computerScore > humanScore) log(`You lose!!!\nYour opponent won ${computerScore} to ${humanScore}`)
    else if (humanScore > computerScore) log(`You win!!!\nYou won ${humanScore} to ${computerScore}`)
    else  log(`It's a draw!!!\nYou both scored ${humanScore}`)
}

playGame()