#!/usr/bin/env node
import readlineSync from '/home/a/frontend-project-lvl1/src/index.js';

console.log("Welcome to the Brain Games!");

const userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName + '!');
