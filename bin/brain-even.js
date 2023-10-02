#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


// Step 1. Greetings
console.log('Welcome to the Brain Games!');


// Step 2. Greetings
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);


// Step 3. Greetings
const askQuestion = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3; i++) {
		let randomNumber = Math.floor(Math.random() * 10) + 1;
		console.log(`Question: ${randomNumber}`);
		var userAnswear = readlineSync.question('Your answer: ');
		if (randomNumber % 2 === 0 && userAnswear === 'yes') {
			console.log('Correct!');
		} else if (randomNumber % 2 !== 0 && userAnswear === 'no') {
			console.log('Correct!');
		} else if (randomNumber % 2 !== 0 && userAnswear === 'yes') {
			console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
			console.log(`Let's try again, ${userName}!`);
			return;
		} else if (randomNumber % 2 === 0 && userAnswear === 'no') {
			console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
			console.log(`Let's try again, ${userName}!`);
			return;
		}
	}
	return console.log(`Congratulations, ${userName}!`);
}
askQuestion();