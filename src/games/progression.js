import { getRandomNumber, getProgressionElement } from '../lib/utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const minHiddenIndex = 0;
  const maxHiddenIndex = 9;
  const hiddenIndex = getRandomNumber(minHiddenIndex, maxHiddenIndex);
  const minProgressionStep = 1;
  const maxProgressionStep = 15;
  const progressionStep = getRandomNumber(minProgressionStep, maxProgressionStep);
  const progressionLength = 10;
  const minProgressionStart = 0;
  const maxProgressionStart = 100;
  const progressionStart = getRandomNumber(minProgressionStart, maxProgressionStart);
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
