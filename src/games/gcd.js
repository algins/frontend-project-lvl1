import random from 'lodash.random';
import playGame from '../index.js';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calcGcd(num2, num1 % num2);
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
