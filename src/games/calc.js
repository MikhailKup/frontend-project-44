import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const operators = ['+', '-', '*'];
let correctAnwear;
let question;

export const playBrainCalc = () => {
  const task = 'What is the result of the expression?';

  const calcGame = () => {
    const randomOperator = getRandomNumber(0, operators.length - 1);
    const operator = operators[randomOperator];
    const randomNumber1 = getRandomNumber(1, 10);
    const randomNumber2 = getRandomNumber(1, 10);

    const switchOperators = () => {
      switch (operator) {
        case '+':
          question = `${randomNumber1} + ${randomNumber2}`;
          correctAnwear = String(randomNumber1 + randomNumber2);
          break;
        case '-':
          question = `${randomNumber1} - ${randomNumber2}`;
          correctAnwear = String(randomNumber1 - randomNumber2);
          break;
        case '*':
          question = `${randomNumber1} * ${randomNumber2}`;
          correctAnwear = String(randomNumber1 * randomNumber2);
          break;
        default:
          throw new Error('Calculation error');
      }
    };
    switchOperators();
    return [question, correctAnwear];
  };
  playGame(task, calcGame);
};
export default { playBrainCalc };
