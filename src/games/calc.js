import { getRandomNumber } from '../lib/utils.js';
import runGame from '../index.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const numberOfOperations = operations.length;
  const randomOperation = operations[getRandomNumber(0, numberOfOperations - 1)];
  const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
  let equality;

  switch (randomOperation) {
    case '+':
      equality = firstNumber + secondNumber;
      break;
    case '-':
      equality = firstNumber - secondNumber;
      break;
    case '*':
      equality = firstNumber * secondNumber;
      break;
    default:
      return null;
  }
  const correctAnswer = String(equality);
  return [question, correctAnswer];
};

const playCalc = () => runGame(getQuestionAndAnswer, description);

export default playCalc;
