import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const randomNum = getRandomNumber(1, 40);
  const question = String(randomNum);
  const correctAnwear = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnwear];
};
playGame(task, getRound);

export default getRound;
