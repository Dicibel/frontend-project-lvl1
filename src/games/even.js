#!/usr/bin/env node

import randomNumber from '../lib/lib.js';
import rulesOfGames from '../index.js';

const isEvenNumber = (number) => number % 2 === 0 ? 'yes' : 'no';

const description = `Answer "yes" if the number is even, otherwise answer "no"`;
const questionAndAnswer = () => {
		const question = randomNumber(0, 100);
		const correctAnswer = isEvenNumber(question);
		
		return [question, correctAnswer];
};

const callEven = () => rulesOfGames(questionAndAnswer, description);

export default callEven;
