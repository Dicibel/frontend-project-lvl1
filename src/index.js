import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const runGame = (getGameInfo, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);
  let gameCounter = 0;
  const maxGameNumber = 3;
  while (gameCounter < maxGameNumber) {
    const [question, correctAnswer] = getGameInfo();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      gameCounter += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${correctAnswer}"!`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
