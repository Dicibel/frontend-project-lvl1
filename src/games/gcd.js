import { getRandomNumber, getGCD } from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 100;
  const firstNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const playGCD = () => runGame(getQuestionAndAnswer, description);
export default playGCD;
