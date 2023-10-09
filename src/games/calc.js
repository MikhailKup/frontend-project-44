import readlineSync from 'readline-sync';
import { getRandom, getRandomOperator } from '../index.js';

export const playBrainCalc = () => {
  const randomOperator = getRandomOperator();
  const randomNumber1 = getRandom(1, 10);
  const randomNumber2 = getRandom(1, 10);
  let correctAnwear;
  switch (randomOperator) {
    case '+':
      console.log(`Question: ${randomNumber1} + ${randomNumber2}`);
      correctAnwear = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      console.log(`Question: ${randomNumber1} - ${randomNumber2}`);
      correctAnwear = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      console.log(`Question: ${randomNumber1} * ${randomNumber2}`);
      correctAnwear = String(randomNumber1 * randomNumber2);
      break;
    default:
      break;
  }
  const userAnswear = readlineSync.question('Your answer: ');
  return [correctAnwear, userAnswear];
};
export default { playBrainCalc };
