import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const task = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempB !== 0) {
    const temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
  }
  return tempA;
};

const getRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnwear = String(calculateGCD(randomNumber1, randomNumber2));
  return [question, correctAnwear];
};

const playGCD = () => playGame(task, getRound);

export default playGCD;
