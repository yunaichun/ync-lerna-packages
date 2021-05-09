const spawn = require('cross-spawn');

/**
 * 执行 bash 命令
 * @param {String} command
 * @param {Array} args
 */
const cmd = (command, args = [], inherit = true) => new Promise((resolve, reject) => {
  const child = spawn(command, args, inherit ? { stdio: 'inherit' } : {});
  child.on('close', code => {
    if (code !== 0) {
      reject(code);
      return;
    }
    resolve();
  });
});

const syncCmd = (command, args = [], inherit = false) =>
  spawn.sync(command, args, inherit ? { stdio: 'inherit' } : {});

module.exports = {
  cmd,
  syncCmd
}
