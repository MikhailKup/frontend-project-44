import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};
export default { askUserName };
