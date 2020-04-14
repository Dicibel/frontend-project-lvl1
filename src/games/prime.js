import { getRandomNumber, isPrime } from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => runGame(getQuestionAndAnswer, description);
export default playPrime;
