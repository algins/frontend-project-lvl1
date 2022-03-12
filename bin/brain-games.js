#!/usr/bin/env node

import { getName, greet, welcome } from '../src/cli.js';

welcome();
const name = getName();
greet(name);
