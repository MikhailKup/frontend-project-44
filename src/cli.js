const askUserName = () => {
	var readlineSync = require('readline-sync');
	// import readlineSync from 'readline-sync';
	var userName = readlineSync.question('May I have your name? ');
	return `Hello, ${userName}!`;
}

export default askUserName;
