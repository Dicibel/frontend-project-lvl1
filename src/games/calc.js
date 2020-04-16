import { getRandomNumber } from '../lib/utils.js';
import runGame from '../index.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 10;
  const firstNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
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
      throw new Error(`Unknown order state: '${randomOperation}'!`);
  }
  const correctAnswer = String(equality);
  return [question, correctAnswer];
};

const playCalc = () => runGame(getQuestionAndAnswer, description);

export default playCalc;
