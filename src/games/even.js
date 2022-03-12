import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const getNumber = () => Math.round(Math.random() * 10);

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(() => {
    const num = getNumber();

    return {
      question: num,
      answer: getAnswer(num),
    };
  }, description);
};
