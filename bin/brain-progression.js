#!/usr/bin/env node

import { playBrainProgression } from "../src/games/progression.js";
import { setGameRules } from "../src/index.js";
const taskOfProgression = 'What number is missing in the progression?';
setGameRules(taskOfProgression, playBrainProgression);