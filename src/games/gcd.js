import getRandomNumber, { isGCD } from '../lib/lib.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(isGCD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const playGCD = () => runGame(getQuestionAndAnswer, description);
export default playGCD;
