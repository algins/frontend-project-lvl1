import readlineSync from 'readline-sync';
import { getName, greet, welcome } from './cli.js';

export default (game, description) => {
  welcome();
  const name = getName();
  greet(name);
  console.log(description);

  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer: correctAnswer } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
