import { createRequire } from 'module';
const require = createRequire(import.meta.url);

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
export default playBrainCalc;