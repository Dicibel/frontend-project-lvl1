import getRandomNumber, { getProgressionElement } from '../lib/lib.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const hiddenIndex = getRandomNumber(0, 9);
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = 10;
  const progressionStart = getRandomNumber(0, 100);
  const correctAnswer = getProgressionElement(progressionStart, progressionStep, hiddenIndex);
  const stack = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = hiddenIndex === i
      ? '..'
      : getProgressionElement(progressionStart, progressionStep, i);
    stack.push(currentElement);
  }
  const separator = ' ';
  const question = stack.join(separator);

  return [question, String(correctAnswer)];
};

const playProgression = () => runGame(getQuestionAndAnswer, description);
export default playProgression;
