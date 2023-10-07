#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';

import { playBrainEven } from "../src/games/even.js";
import { setGameRules } from "../src/index.js";
const taskOfCalc = 'Answer "yes" if the number is even, otherwise answer "no".';
setGameRules(taskOfCalc, playBrainEven);