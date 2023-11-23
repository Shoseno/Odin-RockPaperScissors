"use strict";


let compChoice;

function getComputerChoice() {
    let compChoiceRandomNum = Math.floor(Math.random() * 3) + 1;
    if (compChoiceRandomNum === 1) {
        compChoice = 'Scissors';
    } else if (compChoiceRandomNum === 2) {
        compChoice = 'Paper';
    } else if (compChoiceRandomNum === 3) {
        compChoice = 'Rock';
    }

}
let playerChoiceCheck;
let playChoice;
let playInput;

function getPlayerChoice() {
    let playInput = prompt('Please type Rock,Paper, or Scissors');
    let playChoice = (playInput.charAt(0).toUpperCase()) + (playInput.slice(1).toLowerCase());
    if (playChoice === 'Rock' || playChoice === 'Paper' || playChoice ==='Scissors') {
        playerChoiceCheck = 'yes';
    } else {
        playerChoiceCheck = 'no';
        alert('Please enter "Rock", "Paper" or "Scissors"');
        getPlayerChoice();
    }
}