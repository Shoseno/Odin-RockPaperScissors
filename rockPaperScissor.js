"use strict";

let rockBtn = document.querySelector('#rock-btn');

rockBtn.addEventListener('click',function() {
    playChoice = 'Rock';
    game();
});

let paperBtn = document.querySelector('#paper-btn');

paperBtn.addEventListener('click',function() {
    playChoice = 'Paper';
    game();
});

let scissorsBtn = document.querySelector('#scissors-btn');

scissorsBtn.addEventListener('click',function() {
    playChoice = 'Scissors';
    game();
});





let showRoundResult = '';

function playRound() {
    getComputerChoice();
    roundCount = roundCount +1; 
    document.querySelector('#roundCountDisplay').innerHTML = 'Rounds: ' + roundCount;

    if (playChoice === compChoice) {
        showRoundResult = ('you TIED, you and the computer chose ' + playChoice);
    } 
    
    else if ((playChoice === 'Rock' && compChoice === 'Scissors')
              || (playChoice === 'Paper' && compChoice === 'Rock')
              || (playChoice === 'Scissors' && compChoice === 'Paper')) {
        showRoundResult = ('you WIN, ' + playChoice + ' beats ' + compChoice + '!');
        winCount = winCount +1;
        document.querySelector('#playerScoreDisplay').innerHTML = 'Player Score: ' + winCount;
    } 
    
    else {
        showRoundResult = ('you LOSE, ' + playChoice + ' loses to ' + compChoice + '!'); 
        lossCount = lossCount +1;
        document.querySelector('#computerScoreDisplay').innerHTML = 'Computer Score: ' + lossCount;
    }
    console.log(winCount);
    console.log(lossCount);
    console.log(roundCount);
    console.log(showRoundResult);
}

function game() {
    playRound();
    if (winCount === 5) {
        alert('you beat the machine!');
    } else if (lossCount === 5) {
        alert('you lost to the machine!');
    } 
    document.querySelector('#instruction').innerHTML = showRoundResult;
} 


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
    document.querySelector('#compChoiceDisplay').innerHTML = 'Computer choice: ' + compChoice;
}

let playChoice;
let roundCount = 0;
let winCount = 0;
let lossCount = 0;

