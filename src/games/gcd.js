import readlineSync from 'readline-sync';
import { getRandom } from '../index.js';

export const playBrainGCD = () => {
  const randomNumber1 = getRandom(1, 10);
  const randomNumber2 = getRandom(1, 10);

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
export default { playBrainGCD };
