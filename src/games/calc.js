import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * operators.length);
  return operators[randomOperator];
};

export const playBrainCalc = () => {
  const task = 'What is the result of the expression?';

  const calcGame = () => {
    const randomOperator = getRandomOperator();
    const randomNumber1 = getRandomNumber(1, 10);
    const randomNumber2 = getRandomNumber(1, 10);
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
  playGame(task, calcGame);
};
export default { playBrainCalc };
