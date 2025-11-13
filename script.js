const log = console.log;

const choiceArr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(choiceArr) {
    let humanChoice;
    let message = "Please choose rock, paper, scissors";
    let entryValue = '';

    while (!humanChoice) {
        entryValue = prompt(message, entryValue).toLowerCase().trim();
        if (choiceArr.includes(entryValue)) humanChoice = entryValue;
        else message += '\nPlease check the spelling'
    }

    return humanChoice
}