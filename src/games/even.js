import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

export const playBrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  let correctAnwear;
  const evenGame = () => {
    const randomNumber = getRandomNumber(1, 10);
    const question = `${randomNumber}`;
    if (randomNumber % 2 === 0) {
      correctAnwear = 'yes';
    } else {
      correctAnwear = 'no';
    }
    return [question, correctAnwear];
  };
  playGame(task, evenGame);
};
export default { playBrainEven };
