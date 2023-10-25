import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Wrong operator');
  }
};

const setRandomOperator = (arr) => {
  const indexOfOperator = getRandomNumber(0, arr.length - 1);
  return arr[indexOfOperator];
};

const getRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operator = setRandomOperator(operators);
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnwear = String(calculate(randomNumber1, randomNumber2, operator));
  return [question, correctAnwear];
};

const playCalc = () => {
  const task = 'What is the result of the expression?';
  return playGame(task, getRound);
};

export default playCalc;
