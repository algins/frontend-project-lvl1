import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');
const greet = (name) => console.log(`Hello, ${name}!`);
const welcome = () => console.log('Welcome to the Brain Games!');

export { getName, greet, welcome };

export default () => {
  welcome();
  const name = getName();
  greet(name);
};
