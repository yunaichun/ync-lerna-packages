/* eslint-disable prefer-promise-reject-errors */
const chalk = require('chalk');
const inquirer = require('inquirer');
const log = require('../utils/log');
const { syncCmd } = require('../utils/cmd');

const build = async ({ options, config, packageJson }) => {
  const { flow } = options;
  const { flows } = config[flow];
  const { cmd } = flows.build;
  const { scripts = {} } = packageJson;
  const exist = scripts.build;

  // == 执行构建命令
  if (!exist) {
    const { pass } = await inquirer.prompt([{
      name: 'pass',
      type: 'confirm',
      message: `构建命令${chalk.blue(cmd.join(' '))}不存在，是否${chalk.red('忽略本流程继续发布(Y)')}或者${chalk.green('取消发布(n)')}`,
    }]);
    if (!pass) return Promise.reject(`
    发布已取消
    1. 请在package.json文件添加${chalk.red(cmd.join(' '))}命令后继续
    2. 无需构建流程请在${chalk.red('ync-local-cicd')}参数后添加${chalk.red('-e build')}排除!
    `);
  }

  log(`--> build source ${exist ? '...' : chalk.yellow(`忽略构建命令${cmd.join(' ')}`)}`);
  const startTime = new Date();
  if (exist) {
    const res = syncCmd(cmd);
    if (res.status !== 0) return Promise.reject(`构建命令${chalk.red(cmd.join(' '))}执行${chalk.red(exist)}失败，请检查！`);
  }
  const duration = new Date() - startTime;
  log(`<-- build source ${exist ? chalk.green('success') : chalk.yellow('ignore')} ${duration}ms`);

  return null;
}

module.exports = build;
