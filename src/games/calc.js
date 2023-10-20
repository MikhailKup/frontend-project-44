import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const operators = ['+', '-', '*'];
let correctAnwear;
let question;

const setRandomOperator = () => {
  const indexOfOperator = getRandomNumber(0, operators.length - 1);
  const operator = operators[indexOfOperator];
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  question = `${randomNumber1} ${operator} ${randomNumber2}`;
  switch (operator) {
    case '+':
      correctAnwear = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      correctAnwear = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      correctAnwear = String(randomNumber1 * randomNumber2);
      break;
    default:
      throw new Error('Calculation error');
  }
};

const task = 'What is the result of the expression?';
export const playBrainCalc = () => {
  setRandomOperator();
  return [question, correctAnwear];
};
playGame(task, playBrainCalc);
export default { playBrainCalc };
