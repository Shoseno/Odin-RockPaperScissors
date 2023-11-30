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
    console.log(compChoice);
}

let playChoice;


let rockBtn = document.querySelector('#rock-btn');

rockBtn.addEventListener('click',function() {
    playChoice = 'Rock';
});

let paperBtn = document.querySelector('#paper-btn');
let scissorsBtn = document.querySelector('#scissors-btn');

function getPlayerChoice() {

   
}

/* 
let compChoice;
let playerChoiceCheck;
let playChoice;
let playInput;
let roundCount = 0;
let winCount = 0;
let lossCount = 0;

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
    roundCount = roundCount +1; 
    if (playChoice === compChoice) {
        alert('you TIED, you and the computer chose ' + playChoice);
    } else if ((playChoice === 'Rock' && compChoice === 'Scissors')
              || (playChoice === 'Paper' && compChoice === 'Rock')
              || (playChoice === 'Scissors' && compChoice === 'Paper')) {
        alert('you WIN, ' + playChoice + ' beats ' + compChoice + '!');
        winCount = winCount +1;
    } else {
        alert('you LOSE, ' + playChoice + ' loses to ' + compChoice + '!'); 
        lossCount = lossCount +1;
    }
}

function game() {
    playRound();
    if (winCount === 5) {
        alert('you beat the machine!');
    } else if (lossCount === 5) {
        alert('you lost to the machine!');
    } else {
        playRound();
    }
} 
*/ 