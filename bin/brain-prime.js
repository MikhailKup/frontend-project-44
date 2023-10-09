#!/usr/bin/env node

import { playBrainPrime } from "../src/games/prime.js";
import { setGameRules } from "../src/index.js";
const taskOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
setGameRules(taskOfPrime, playBrainPrime);