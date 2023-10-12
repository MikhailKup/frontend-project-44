import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

export const playBrainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const gcdGame = () => {
    const randomNumber1 = getRandomNumber(1, 10);
    const randomNumber2 = getRandomNumber(1, 10);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const getGCD = (a, b) => {
      let newA = a;
      let newB = b;
      while (newB !== 0) {
        const temp = newB;
        newB = newA % newB;
        newA = temp;
      }
      return newA;
    };
    const correctAnwear = String(getGCD(randomNumber1, randomNumber2));

    const userAnswear = readlineSync.question('Your answer: ');
    return [correctAnwear, userAnswear];
  };
  playGame(task, gcdGame);
};
export default { playBrainGCD };
