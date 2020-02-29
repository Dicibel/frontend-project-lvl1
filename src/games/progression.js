const description = 'What number is missing in the progression?';
const questionAndAnswer = () => {
  const firstSymbol = randomNumber(0, 100);
  const changeSymbol = randomNumber(0, 9);
  const progression = randomNumber(1, 15);
  const stack = [firstSymbol];
  const counter = 9;
  let correctAnswer;
  let pushSymbol = firstSymbol;
  for (let i = 0; i <= counter; i += 1) {
    if (i === changeSymbol) {
      pushSymbol = stack.pop();
      correctAnswer = String(pushSymbol);
      stack.push('..');
    } else {
      pushSymbol += progression;
      stack.push(pushSymbol);
    }
  }
  const separator = ' ';
  const question = stack.join(separator);

  return [question, correctAnswer];
};

const callProgression = () => rulesOfGames(questionAndAnswer, description);
export default callProgression;
