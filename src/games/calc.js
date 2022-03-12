import random from 'lodash.random';
import playGame from '../index.js';

const getOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calc = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operation!');
  }
};

export default () => {
  const description = 'What is the result of the expression?';

  playGame(() => {
    const num1 = random(0, 10);
    const num2 = random(0, 10);
    const operation = getOperation();

    return {
      question: `${num1} ${operation} ${num2}`,
      answer: String(calc(num1, num2, operation)),
    };
  }, description);
};
