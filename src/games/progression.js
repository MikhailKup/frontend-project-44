import { playGame } from '../index.js';
import { getRandomNumber } from '../utilits.js';

const createProgression = () => {
  const length = getRandomNumber(5, 10);
  let start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(String(start + step));
    start += step;
  }
  return progression;
};
const task = 'What number is missing in the progression?';
export const playBrainProgression = () => {
  const progression = createProgression();
  const hiddenElemIndex = getRandomNumber(0, progression.length - 1);
  const correctAnwear = progression[hiddenElemIndex];
  const hiddenElem = '..';
  progression[hiddenElemIndex] = hiddenElem;
  const question = `${progression.join(' ')}`;
  return [question, correctAnwear];
};
playGame(task, playBrainProgression);

export default { playBrainProgression };
