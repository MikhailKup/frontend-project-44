import playGame from '../index.js';
import { getRandomNumber } from '../utilits.js';

const hiddenElement = '..';

const createProgression = (minLength, maxLength) => {
  const length = getRandomNumber(minLength, maxLength);
  let start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(String(start + step));
    start += step;
  }
  return progression;
};

const getRound = () => {
  const progression = createProgression(5, 10);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const correctAnwear = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = hiddenElement;
  const question = `${progression.join(' ')}`;
  return [question, correctAnwear];
};

const playProgression = () => {
  const task = 'What number is missing in the progression?';
  return playGame(task, getRound);
};

export default playProgression;
