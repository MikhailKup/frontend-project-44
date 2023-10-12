import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

export const playBrainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeGame = () => {
    const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    const randomNum = getRandomNumber(1, 40);
    let correctAnwear;

    console.log(`Question: ${randomNum}`);
    if (primeArr.includes(randomNum)) {
      correctAnwear = 'yes';
    } else {
      correctAnwear = 'no';
    }
    const userAnswear = readlineSync.question('Your answer: ');
    return [correctAnwear, userAnswear];
  };
  playGame(task, primeGame);
};
export default { playBrainPrime };
