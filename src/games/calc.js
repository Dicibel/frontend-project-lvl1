#!/usr/bin/env node

import randomNumber from '../lib/lib.js';
import rulesOfGames from '../index.js';

const operations = ['+', '-', '*'];
const description = `What is the result of the expression?`;
const questionAndAnswer = () => {
  const firstNumber  = randomNumber(0, 10);
  const secondNumber  = randomNumber(0, 10);
  const randomOperations = operations[randomNumber(0, 2)];
		
  const question = `${firstNumber} ${randomOperations} ${secondNumber}`;
  let correctAnswer;
		
  switch(randomOperations) {
    case '+':
      correctAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      correctAnswer = String(firstNumber - secondNumber);
      break;
    default:
    correctAnswer = String(firstNumber * secondNumber);
  }

  return [question, correctAnswer];
};

const callCalc = () => rulesOfGames(questionAndAnswer, description);

export default callCalc;
