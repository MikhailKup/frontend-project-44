import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const operators = ['+', '-', '*'];
const task = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Wrong operator: "${operator}"`);
  }
};

const getRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const indexOfOperator = getRandomNumber(0, operators.length - 1);
  const operator = operators[indexOfOperator];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnwear = String(calculate(randomNumber1, randomNumber2, operator));
  return [question, correctAnwear];
};

const playCalc = () => playGame(task, getRound);

export default playCalc;
