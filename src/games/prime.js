import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const playBrainPrime = () => {
  let correctAnwear;
  const randomNum = getRandomNumber(1, 40);
  const question = `${randomNum}`;
  if (isPrime(randomNum)) {
    correctAnwear = 'yes';
  } else {
    correctAnwear = 'no';
  }
  return [question, correctAnwear];
};
playGame(task, playBrainPrime);

export default { playBrainPrime };
