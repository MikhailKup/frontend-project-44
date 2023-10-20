import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const hiddenElement = '..';
const task = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const progression = [];
  let startingNum = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(String(startingNum + step));
    startingNum += step;
  }
  return progression;
};

const getRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStart = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 5);
  const progression = createProgression(progressionStart, progressionStep, progressionLength);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const correctAnwear = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = hiddenElement;
  const question = progression.join(' ');
  return [question, correctAnwear];
};

const playProgression = () => playGame(task, getRound);

export default playProgression;
