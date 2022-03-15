import random from 'lodash.random';
import playGame from '../index.js';

const generateProgression = (start, step, size, hiddenIndex) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    progression[i] = i === hiddenIndex ? '..' : start + step * i;
  }

  return progression;
};

export default () => {
  const description = 'What number is missing in the progression?';

  playGame(() => {
    const start = random(0, 10);
    const step = random(0, 10);
    const size = random(5, 15);
    const hiddenIndex = random(0, size - 1);
    const progression = generateProgression(start, step, size, hiddenIndex);
    const hiddenItem = start + step * hiddenIndex;

    return {
      question: progression.join(' '),
      answer: String(hiddenItem),
    };
  }, description);
};
