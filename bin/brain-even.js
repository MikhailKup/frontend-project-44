#!/usr/bin/env node

import { playBrainEven } from "../src/games/even.js";
import { setGameRules } from "../src/index.js";
const taskOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
setGameRules(taskOfEven, playBrainEven);