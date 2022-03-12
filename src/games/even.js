import random from 'lodash.random';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(() => {
    const num = random(0, 10);

    return {
      question: num,
      answer: getAnswer(num),
    };
  }, description);
};
