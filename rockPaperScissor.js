"use strict";


let compChoice;
let playerChoiceCheck;
let playChoice;
let playInput;

function getComputerChoice() {
    let compChoiceRandomNum = Math.floor(Math.random() * 3) + 1;
    if (compChoiceRandomNum === 1) {
        compChoice = 'Scissors';
    } else if (compChoiceRandomNum === 2) {
        compChoice = 'Paper';
    } else if (compChoiceRandomNum === 3) {
        compChoice = 'Rock';
    }
    console.log(compChoice);
}


function getPlayerChoice() {
    let playInput = prompt('Please type Rock,Paper, or Scissors');
    playChoice = (playInput.charAt(0).toUpperCase()) + (playInput.slice(1).toLowerCase());
    if (playChoice === 'Rock' || playChoice === 'Paper' || playChoice ==='Scissors') {
        playerChoiceCheck = 'yes';
    } else {
        playerChoiceCheck = 'no';
        alert('PLEASE ENTER "Rock", "Paper" or "Scissors" you entered ' + playChoice);
        getPlayerChoice();
    }
    console.log(playChoice);
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    if (playChoice === compChoice) {
        alert('you TIED, you and the computer chose ' + playChoice);
    } else if ((playChoice === 'Rock' && compChoice === 'Scissors')
              || (playChoice === 'Paper' && compChoice === 'Rock')
              || (playChoice === 'Scissors' && compChoice === 'Paper')) {
        alert('you WIN, ' + playChoice + ' beats ' + compChoice + '!');
    } else {
        alert('you LOSE, ' + playChoice + ' loses to ' + compChoice + '!'); 
    }
}