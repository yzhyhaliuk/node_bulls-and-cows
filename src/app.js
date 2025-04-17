/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const realNumber = generateRandomNumber();

function playGame() {
  const guessNumber = process.argv.slice(2)[0];

  if (checkIsValidUserInput(guessNumber)) {
    console.log(getBullsAndCows(+guessNumber, realNumber));
  }
}

playGame();
