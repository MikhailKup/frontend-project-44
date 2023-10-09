import { createRequire } from "module";
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';

export const askUserName = () => {
	var userName = readlineSync.question('May I have your name? ');
	return console.log(`Hello, ${userName}!`);
};


