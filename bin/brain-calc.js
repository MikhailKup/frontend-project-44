#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';

import { playBrainCalc } from "../src/games/calc.js";
import { setGameRules } from "../src/index.js";
const taskOfCalc = 'What is the result of the expression?';
setGameRules(taskOfCalc, playBrainCalc);
