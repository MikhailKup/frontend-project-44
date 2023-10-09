import readlineSync from 'readline-sync';

// Get User name
export const getUserName = () => readlineSync.question('May I have your name? ');

// Random Number
export const getRandom = (min, max) => {
  const num = min + Math.random() * (max + 1 - min);
  return Math.floor(num);
};

// Random Operator
export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * operators.length);
  return operators[randomOperator];
};

// Game Rules
export const setGameRules = (task, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(task);
  const triesCount = 3;
  for (let i = 1; i <= triesCount; i += 1) {
    const [correctAnwear, userAnswear] = game();
    if (userAnswear === correctAnwear) {
      console.log('Correct!');
      if (i === triesCount) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    } else {
      console.log(`'${userAnswear}' is wrong answer ;(. Correct answer was '${correctAnwear}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};
