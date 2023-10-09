#!/usr/bin/env node

import { playBrainGCD } from "../src/games/gcd.js";
import { setGameRules } from "../src/index.js";
const taskOfGcd = 'Find the greatest common divisor of given numbers.';
setGameRules(taskOfGcd, playBrainGCD);