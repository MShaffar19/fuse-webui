#!/usr/bin/env node
import { commandDir, scriptName } from 'yargs';

//tslint:disable-next-line:no-unused-variable
const _dummy = scriptName('fuse-gen')
  .commandDir('./commands')
  .help()
  .demandCommand(1).argv;
