import random from 'lodash.random';
import playGame from '../index.js';

const generateProgression = (start, step, size) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

export default () => {
  const description = 'What number is missing in the progression?';

  playGame(() => {
    const start = random(0, 10);
    const step = random(0, 10);
    const size = random(5, 15);
    const progression = generateProgression(start, step, size);
    const hiddenItemIndex = random(0, progression.length);
    const hiddenItem = progression[hiddenItemIndex];

    return {
      question: progression.map((item) => (item === hiddenItem ? '..' : item)).join(' '),
      answer: String(hiddenItem),
    };
  }, description);
};
