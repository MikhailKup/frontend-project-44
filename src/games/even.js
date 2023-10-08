import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';
import { getRandom } from "../index.js";

export const playBrainEven = () => {
	let randomNumber = getRandom(1, 10);
	let correctAnwear;
	console.log(`Question: ${randomNumber}`);
	if (randomNumber % 2 === 0) {
		correctAnwear = 'yes';
	} else {
		correctAnwear = 'no';
	}
	const userAnswear = readlineSync.question('Your answer: ');
	return [correctAnwear, userAnswear];
};