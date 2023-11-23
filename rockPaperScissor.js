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