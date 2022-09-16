import { setImmediate } from 'timers';
import { readFile } from 'fs';

function someAsyncOperation(callback) {
  readFile('./README.md', callback);
}

// 3. Read a small file, will take a few ms
someAsyncOperation(function done(error, content) {
  if (error) {
    return console.error(error);
  }

  console.log(`README.md content: ${content.toString('utf-8')}`);
});

// 4. Schedule for later
const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// 2. Do in this phase: check
setImmediate(function callback() {
  console.log('I get to log just after');
});

// 1. Synchronous
(function synchronous() {
  console.log('Synchronous and always first');
})();
