import randomNumber from '../lib/lib.js';
import rulesOfGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const isGCD = (number1, number2) => {
  const int = number1 > number2 ? number2 : number1;
  let result;
  for (let i = 1; i <= int; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const firstNumber = randomNumber(0, 100);
  const secondNumber = randomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(isGCD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const callGCD = () => rulesOfGames(getQuestionAndAnswer, description);
export default callGCD;
