import readlineSync from 'readline-sync';

// Game Rules
export const playGame = (task, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
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
      console.log(
        `'${userAnswear}' is wrong answer ;(. Correct answer was '${correctAnwear}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};
export default { playGame };
