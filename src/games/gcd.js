import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const calculateGCD = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
};

const task = 'Find the greatest common divisor of given numbers.';
export const playBrainGCD = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnwear = String(calculateGCD(randomNumber1, randomNumber2));
  return [question, correctAnwear];
};
playGame(task, playBrainGCD);
export default { playBrainGCD };
