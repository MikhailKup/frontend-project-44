import readlineSync from 'readline-sync';

const triesCount = 3;

const playGame = (task, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 1; i <= triesCount; i += 1) {
    const [question, correctAnwear] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnwear) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnwear}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
