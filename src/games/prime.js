import { getRandomNumber } from '../lib/utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  let correctAnswer;
  if (question < 2) {
    correctAnswer = 'no';
  }
  for (let i = 2; i < question / 2; i += 1) {
    if (question % i !== 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
      break;
    }
  }
  return [question, correctAnswer];
};

const playPrime = () => runGame(getQuestionAndAnswer, description);
export default playPrime;
