#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';

import { playBrainGCD } from "../src/games/gcd.js";
import { setGameRules } from "../src/index.js";
const taskOfGcd = 'Find the greatest common divisor of given numbers.';
setGameRules(taskOfGcd, playBrainGCD);