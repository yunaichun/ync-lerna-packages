const spawn = require('cross-spawn');

/**
 * 执行 bash 命令
 * @param {Array} args
 */
const cmd = (args = [], inherit = true) =>
  new Promise((resolve, reject) => {
    const newArgs = args.slice();
    const command = newArgs.shift();
    const child = spawn(command, newArgs, inherit ? { stdio: 'inherit' } : {});
    child.on('close', code => {
      if (code !== 0) {
        reject(code);
        return;
      }
      resolve();
    });
  });

/**
 * 执行 bash 命令
 * @param {Array} args
 */
const syncCmd = (args = [], inherit = false) => {
  const newArgs = args.slice();
  const command = newArgs.shift();
  return spawn.sync(command, newArgs, inherit ? { stdio: 'inherit' } : {});
}

module.exports = {
  cmd,
  syncCmd
}
