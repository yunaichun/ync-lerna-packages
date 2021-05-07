const spawn = require('cross-spawn');

const cmd = (command, args = []) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { stdio: 'inherit' });
  child.on('close', (code) => {
    if (code !== 0) {
      reject(code);
    }
    resolve();
  });
});

module.exports = cmd;
