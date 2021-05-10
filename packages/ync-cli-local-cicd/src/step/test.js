/* eslint-disable prefer-promise-reject-errors */
const chalk = require('chalk');
const log = require('../utils/log');
const { syncCmd } = require('../utils/cmd');

const test = async ({ options, config, packageJson }) => {
  const { flow } = options;
  const { flows } = config[flow];
  const { cmd } = flows.test;
  const { scripts = {} } = packageJson;
  const exist = scripts.test;

  // == 执行测试命令
  log(`--> test ${exist ? '...' : chalk.yellow(`忽略测试命令${cmd.join(' ')}`)}`);
  const startTime = new Date();
  if (exist) {
    const res = syncCmd(cmd);
    if (res.status !== 0) return Promise.reject(`测试命令${chalk.red(cmd.join(' '))}执行${chalk.red(exist)}失败，请检查！`);
  }
  const duration = new Date() - startTime;
  log(`<-- test ${exist ? chalk.green('success') : chalk.yellow('ignore')} ${duration}ms`);

  return null;
}

module.exports = test;
