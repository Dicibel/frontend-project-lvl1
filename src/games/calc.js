import randomNumber from '../lib/lib.js';
import rulesOfGames from '../index.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const numberOfOperations = operations.length;
  const randomOperation = operations[randomNumber(0, numberOfOperations - 1)];
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

const callCalc = () => rulesOfGames(getQuestionAndAnswer, description);

export default callCalc;
