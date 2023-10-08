#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import readlineSync from 'readline-sync';

import { playBrainProgression } from "../src/games/progression.js";
import { setGameRules } from "../src/index.js";
const taskOfProgression = 'What number is missing in the progression?';
setGameRules(taskOfProgression, playBrainProgression);