import readlineSync from 'readline-sync';
import { getName, greet, welcome } from '../cli.js';

const isEven = (num) => num % 2 === 0;
const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default (rounds) => {
  welcome();
  const name = getName();
  greet(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= rounds; i += 1) {
    const num = Math.round(Math.random() * 10);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer(num);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
