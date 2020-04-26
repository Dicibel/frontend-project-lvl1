import getRandomNumber from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 100;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => runGame(getQuestionAndAnswer, description);
export default playPrime;
