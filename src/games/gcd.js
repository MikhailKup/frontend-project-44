import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';
import { getRandom } from "../index.js";

export const playBrainGCD = () => {
	const randomNumber1 = getRandom(1, 10);
	const randomNumber2 = getRandom(1, 10);

	console.log(`Question: ${randomNumber1}  ${randomNumber2}`);
	const getGCD = (a, b) => {
		while (b !== 0) {
			var temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	};
	const correctAnwear = String(getGCD(randomNumber1, randomNumber2));

	const userAnswear = readlineSync.question('Your answer: ');
	return [correctAnwear, userAnswear];
};