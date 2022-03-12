import playGame from '../index.js';

const getNumber = () => Math.round(Math.random() * 10);

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
    const num1 = getNumber();
    const num2 = getNumber();
    const operation = getOperation();

    return {
      question: `${num1} ${operation} ${num2}`,
      answer: String(calc(num1, num2, operation)),
    };
  }, description);
};
