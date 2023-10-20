import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const checkNumberForEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
export const playBrainEven = () => {
  const randomNumber = getRandomNumber(1, 10);
  const question = `${randomNumber}`;
  const correctAnwear = checkNumberForEven(randomNumber);
  return [question, correctAnwear];
};
playGame(task, playBrainEven);
export default { playBrainEven };
