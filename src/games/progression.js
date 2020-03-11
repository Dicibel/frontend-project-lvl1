import randomNumber from '../lib/lib.js';
import rulesOfGames from '../index.js';

const description = 'What number is missing in the progression?';
const getProgressionElement = (start, step, i) => start + step * i;

const getQuestionAndAnswer = () => {
  const hiddenIndex = randomNumber(0, 9);
  const progressionStep = randomNumber(1, 15);
  const progressionLength = 10;
  const progressionStart = randomNumber(0, 100);
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

const callProgression = () => rulesOfGames(getQuestionAndAnswer, description);
export default callProgression;
