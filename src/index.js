import readlineSync from 'readline-sync';

// Greetings
const greetings = () => {
	return console.log('Welcome to the Brain Games!');
};

// Ask User name
const askUserName = () => {
	var userName = readlineSync.question('May I have your name? ');
	return console.log(`Hello, ${userName}!`);
}

export default { greetings, askUserName };
