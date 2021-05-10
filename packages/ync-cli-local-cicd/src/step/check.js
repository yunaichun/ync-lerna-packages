const chalk = require('chalk');
const log = require('../utils/log');
const { syncCmd } = require('../utils/cmd');

const check = async ({ options, config }) => {
  const { flow } = options;
  const { flows, branch } = config[flow];
  const { cmd } = flows.check;

  // == 分支校验
  log(`<-- check ${chalk.blue(branch)}`);
  const startTime = new Date();
  log(`--> check branch ${chalk.blue(branch)} ...`);
  const gitBranch = syncCmd(cmd.branch);
  const localBranch = gitBranch.stdout.toString().match(/\* (\S+)/)[1];
  if (localBranch !== branch) return log(`当前分支${chalk.blue(localBranch)}与${flow}环境对应分支${chalk.blue(branch)}不一致，请切换至${chalk.blue(branch)}分支发布.`);
  log(`<-- check branch ${chalk.blue(branch)} ${chalk.green('success')}`);

  // == 本地是否commit
  log(`--> check diff ${chalk.blue(branch)} ...`);
  const gitLocalDiff = syncCmd(cmd.diffLocal);
  log(`    check diff local${gitLocalDiff.stdout.toString()}`);
  const noLocalDiff = gitLocalDiff.stdout.toString() === '';
  if (!noLocalDiff) return log(`本地分支${chalk.blue(localBranch)}未提交，请先${chalk.red('add!')}`);

  // == 远程差异比对
  const gitRemoteDiff = syncCmd(cmd.diffRemote);
  log(`    check diff remote ${gitRemoteDiff.stdout.toString()}`);
  const noRemoteDiff = gitRemoteDiff.stdout.toString() === '';
  if (!noRemoteDiff) return log(`本地分支${chalk.blue(localBranch)}与远程分支不一致，请${chalk.red('commit')}后${chalk.red('push')}!`);
  log(`<-- check diff ${chalk.blue(branch)} ${chalk.green('success')}`);


  const duration = new Date() - startTime;
  log(`<-- check ${chalk.blue(branch)} ${chalk.green('success')} ${duration}ms`);

  return null;
}

module.exports = check;
