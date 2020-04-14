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
  let gamesCounter = 0;
  const maxGames = 3;
  while (gamesCounter < maxGames) {
    const [question, correctAnswer] = getGameInfo();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      gamesCounter += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(.`);
      console.log(`Correct answer was "${correctAnswer}"!`);
      console.log(`Let's try again, ${userName}!`);
      gamesCounter = 4;
    }
  }
  if (gamesCounter === maxGames) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
