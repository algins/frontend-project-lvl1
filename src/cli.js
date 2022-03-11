import readlineSync from 'readline-sync';

const greet = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`;
};

export { greet };