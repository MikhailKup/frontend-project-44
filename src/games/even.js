import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';
import { getRandom } from "../index.js";

export const playBrainEven = () => {
	let randomNumber = getRandom();
	let correctAnwear;
	console.log(`Question: ${randomNumber}`);
	if (randomNumber % 2 === 0) {
		correctAnwear = 'yes';
	} else {
		correctAnwear = 'no';
	}
	const userAnswear = readlineSync.question('Your answer: ');
	return [correctAnwear, userAnswear];

	// for (let i = 0; i < 3; i++) {
	// 	let randomNumber = Math.floor(Math.random() * 10) + 1;
	// 	console.log(`Question: ${randomNumber}`);
	// 	var userAnswear = readlineSync.question('Your answer: ');
	// 	if (randomNumber % 2 === 0 && userAnswear === 'yes') {
	// 		console.log('Correct!');
	// 	} else if (randomNumber % 2 !== 0 && userAnswear === 'no') {
	// 		console.log('Correct!');
	// 	} else if (randomNumber % 2 !== 0 && userAnswear === 'yes') {
	// 		console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
	// 		console.log(`Let's try again, ${userName}!`);
	// 		return;
	// 	} else if (randomNumber % 2 === 0 && userAnswear === 'no') {
	// 		console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
	// 		console.log(`Let's try again, ${userName}!`);
	// 		return;
	// 	}
	// }
	// return console.log(`Congratulations, ${userName}!`);
};