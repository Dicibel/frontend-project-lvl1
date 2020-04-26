import getRandomNumber from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 100;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEven = () => runGame(getQuestionAndAnswer, description);

export default playEven;
