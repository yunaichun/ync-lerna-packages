/* eslint-disable prefer-promise-reject-errors */
const chalk = require('chalk');
const log = require('../utils/log');
const { syncCmd } = require('../utils/cmd');

const install = async ({ options, config }) => {
  const { flow } = options;
  const { flows } = config[flow];
  const { cmd } = flows.install;

  // == 安装
  const startTime = new Date();
  log(`--> install packages ...`);
  const res = syncCmd(cmd);
  if (res.status !== 0) return Promise.reject(`安装命令${chalk.blue(cmd.join(' '))}执行失败！`);
  const duration = new Date() - startTime;
  log(`<-- install packages ${chalk.green('success')} ${duration}ms`);

  return null;
}

module.exports = install;
