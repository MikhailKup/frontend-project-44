import readlineSync from 'readline-sync';
import { getRandom } from '../index.js';

export const playBrainProgression = () => {
  const expressionLength = getRandom(5, 10);
  let expressionElem = getRandom(1, 10);
  const expressionPlus = getRandom(1, 5);
  const expression = [];
  const newValue = '..';
  for (let i = 0; i < expressionLength; i += 1) {
    expression.push(String(expressionElem + expressionPlus));
    expressionElem += expressionPlus;
  }
  const randomElem = getRandom(0, expression.length - 1);
  const correctAnwear = expression[randomElem];
  expression[randomElem] = newValue;

  console.log(`Question: ${expression.join(' ')}`);

  const userAnswear = readlineSync.question('Your answer: ');
  return [correctAnwear, userAnswear];
};
export default { playBrainProgression };
