import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';
import { getRandom } from "../index.js";


export const playBrainProgression = () => {
	const expressionLength = getRandom(5, 10);
	let expressionElem = getRandom(1, 10);
	const expressionPlus = getRandom(1, 5);
	let correctAnwear;
	let expression = [];
	const newValue = '..'
	for (let i = 0; i < expressionLength; i++) {
		expression.push(String(expressionElem + expressionPlus));
		expressionElem = expressionElem + expressionPlus;
	}
	const randomElem = getRandom(0, expression.length - 1);
	correctAnwear = expression[randomElem];
	expression[randomElem] = newValue;

	console.log(`Question: ${expression.join(' ')}`);

	const userAnswear = readlineSync.question('Your answer: ');
	return [correctAnwear, userAnswear];
};