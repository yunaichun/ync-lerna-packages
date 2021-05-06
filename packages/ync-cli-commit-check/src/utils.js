const spawn = require('cross-spawn');
const chalk = require('chalk');

/**
 * 日志打印
 * @param String msg
 */
const log = msg => {
  console.log(chalk.red(`commit check --> ${msg}, skipping hooks installation`))
};

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

module.exports = {
  log,
  cmd
};
