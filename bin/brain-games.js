#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askUserName } from "../src/cli.js";

console.log('Welcome to the Brain Games!');
askUserName();