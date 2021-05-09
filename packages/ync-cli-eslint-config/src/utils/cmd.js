const spawn = require('cross-spawn');

/**
 * 执行 bash 命令
 * @param {String} command
 * @param {Array} args
 */
const cmd = (command, args = []) => new Promise((resolve, reject) => {
  const child = spawn(command, args, { stdio: 'inherit' });
  child.on('close', (code) => {
    if (code !== 0) {
      reject(code);
      return;
    }
    resolve();
  });
});

module.exports = cmd;
