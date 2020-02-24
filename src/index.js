#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const rulesOfGames = (game, description) => {
  let gamesCounter = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);
  do {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      gamesCounter += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  } while (gamesCounter < 3);

  if (gamesCounter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default rulesOfGames;
