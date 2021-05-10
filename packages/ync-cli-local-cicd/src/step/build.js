const chalk = require('chalk');
const log = require('../utils/log');
const { syncCmd } = require('../utils/cmd');

module.exports = async () => {
  const label = `install packages`;
  const startTime = new Date();
  log(`--> ${label} packages ...`);
  const res = syncCmd('npm', ['ci']);
  if (res.status !== 0) return log(`安装命令${chalk.blue('npm ci')}执行失败！`);
  const duration = new Date() - startTime;
  log(`<-- ${label} packages ${chalk.green('success')} ${duration}ms`);

  return null;
}
