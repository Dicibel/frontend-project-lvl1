import getRandomNumber from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const int = number1 > number2 ? number2 : number1;
  let result;
  for (let i = 1; i <= int; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const firstNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const playGCD = () => runGame(getQuestionAndAnswer, description);
export default playGCD;
