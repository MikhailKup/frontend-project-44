import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

export const playBrainProgression = () => {
  const task = 'What number is missing in the progression?';

  const progressionGame = () => {
    const expressionLength = getRandomNumber(5, 10);
    let expressionElem = getRandomNumber(1, 10);
    const expressionPlus = getRandomNumber(1, 5);
    const expression = [];
    const newValue = '..';
    for (let i = 0; i < expressionLength; i += 1) {
      expression.push(String(expressionElem + expressionPlus));
      expressionElem += expressionPlus;
    }
    const randomElem = getRandomNumber(0, expression.length - 1);
    const correctAnwear = expression[randomElem];
    expression[randomElem] = newValue;

    console.log(`Question: ${expression.join(' ')}`);

    const userAnswear = readlineSync.question('Your answer: ');
    return [correctAnwear, userAnswear];
  };
  playGame(task, progressionGame);
};
export default { playBrainProgression };
