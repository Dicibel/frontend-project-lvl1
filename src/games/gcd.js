import randomNumber from '../lib/lib.js';
import rulesOfGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const questionAndAnswer = () => {
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  let correctAnswer;
  const int = firstNumber > secondNumber ? secondNumber : firstNumber;
  for (let i = 1; i <= int; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = String(i);
    }
  }
  return [question, correctAnswer];
};

const callGCD = () => rulesOfGames(questionAndAnswer, description);
export default callGCD;
