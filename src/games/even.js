import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

export const playBrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenGame = () => {
    const randomNumber = getRandomNumber(1, 10);
    let correctAnwear;
    console.log(`Question: ${randomNumber}`);
    if (randomNumber % 2 === 0) {
      correctAnwear = 'yes';
    } else {
      correctAnwear = 'no';
    }
    const userAnswear = readlineSync.question('Your answer: ');
    return [correctAnwear, userAnswear];
  };
  playGame(task, evenGame);
};
export default { playBrainEven };
