import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2 === 0));

const getRound = () => {
  const randomNumber = getRandomNumber(1, 10);
  const question = String(randomNumber);
  const correctAnwear = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnwear];
};

playGame(task, getRound);

export default getRound;
