import random from 'lodash.random';
import playGame from '../index.js';

const calcGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  const modulo = max % min;

  if (modulo === 0) {
    return min;
  }

  return calcGcd(min, modulo);
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  playGame(() => {
    const num1 = random(0, 10);
    const num2 = random(0, 10);

    return {
      question: `${num1} ${num2}`,
      answer: String(calcGcd(num1, num2)),
    };
  }, description);
};
