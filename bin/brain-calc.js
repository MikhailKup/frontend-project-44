#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';

// Step 1. Greetings
const greetings = () => {
	return console.log('Welcome to the Brain Games!');
};
greetings();


// Step 2. Greetings
var userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);


// Step 3. Game
const playBrainCalc = () => {
	console.log('What is the result of the expression?');
	for (let i = 0; i < 3; i++) {
		const operators = ['+', '-', '*'];
		const randomOperator = Math.floor(Math.random() * operators.length);
		const randomNumber1 = Math.floor(Math.random() * 10) + 1;
		const randomNumber2 = Math.floor(Math.random() * 10) + 1;
		const expression = randomNumber1 + " " + operators[randomOperator] + " " + randomNumber2;
		console.log(`Question: ${expression}`);
		var userAnswear = readlineSync.question('Your answer: ');
		if (+userAnswear === eval(expression)) {
			console.log('Correct!');
		} else {
			console.log(`'${userAnswear}' is wrong answer ;(. Correct answer was '${eval(expression)}'.`);
			console.log(`Let's try again, ${userName}!`);
			return;
		}
	}
	return console.log(`Congratulations, ${userName}!`);
}
playBrainCalc();