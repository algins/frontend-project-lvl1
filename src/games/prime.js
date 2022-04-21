import random from 'lodash.random';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(() => {
    const num = random(0, 10);

    return {
      question: num,
      answer: getAnswer(num),
    };
  }, description);
};
