#!/usr/bin/env node

// eslint-disable-next-line import/named
import { playBrainCalc } from '../src/games/calc.js';

import { setGameRules } from '../src/index.js';

const taskOfCalc = 'What is the result of the expression?';
setGameRules(taskOfCalc, playBrainCalc);
