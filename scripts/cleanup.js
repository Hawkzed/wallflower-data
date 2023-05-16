#!/usr/bin/node
import readline from 'readline';
import decap from './_cleanup/decap.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function ask(q) {
  return new Promise((resolve, reject) => {
    rl.question(q, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  decap();
  const userInput = await ask(`Are you sure you want to commit these renames? (y/n)`);
  console.log(userInput);
  if (userInput === 'y') {
    console.log('writing files');
    decap(true);
  } else {
    console.log('aborting decap/rename');
  }
  rl.close();
}

main().catch((error) => {
  console.error('An error occurred:', error);
});
