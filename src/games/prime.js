import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';
import { getRandom } from "../index.js";


export const playBrainPrime = () => {
	const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
	const randomNum = getRandom(1, 40);
	let correctAnwear;

	console.log(`Question: ${randomNum}`);
	if (primeArr.includes(randomNum)) {
		correctAnwear = 'yes';
	} else {
		correctAnwear = 'no';
	}
	const userAnswear = readlineSync.question('Your answer: ');
	return [correctAnwear, userAnswear];
};