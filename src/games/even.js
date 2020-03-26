import { getRandomNumber, isEven } from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const playEven = () => runGame(getQuestionAndAnswer, description);

export default playEven;
