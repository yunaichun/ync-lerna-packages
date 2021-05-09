const chalk = require('chalk');
const log = require('../utils/log');
const { syncCmd } = require('../utils/cmd');

const check = async ({ options, config }) => {
  const { flow } = options;
  const { stg, prd } = config;
  const conf = flow === 'stg' ? stg : prd;
  const { branch } = conf;
  const gitBranch = syncCmd('git', ['branch']);
  const localBranch = gitBranch.stdout.toString().match(/\* (\S+)/)[1];

  // == 分支校验
  const startTime = new Date();
  const label = `check ${chalk.blue(branch)}`;
  log(`--> ${label} branch ${chalk.blue(branch)} ...`);
  if (localBranch !== branch) return log(`当前分支${chalk.blue(localBranch)}与${flow}环境对应分支${chalk.blue(branch)}不一致，请切换至${chalk.blue(branch)}分支发布.`);
  log(`<-- ${label} branch ${chalk.blue(branch)} ${chalk.green('success')}`);

  // == 本地是否commit
  log(`--> ${label} diff ${chalk.blue(branch)}`);
  const gitLocalDiff = syncCmd('git', ['diff', '--stat']);
  log(`    ${label} diff local\n${gitLocalDiff.stdout.toString()}`);
  const noLocalDiff = gitLocalDiff.stdout.toString() === '';
  if (!noLocalDiff) return log(`本地分支${chalk.blue(localBranch)}未提交，请先commit!`);

  // == 远程差异比对
  const gitRemoteDiff = syncCmd('git', ['diff', '--stat', localBranch, `origin/${branch}`]);
  log(`    ${label} diff remote ${gitRemoteDiff.stdout.toString()}`);
  const noRemoteDiff = gitRemoteDiff.stdout.toString() === '';
  if (!noRemoteDiff) return log(`本地分支${chalk.blue(localBranch)}与远程分支不一致，请先push!`);
  log(`<-- ${label} diff ${chalk.blue(branch)} ${chalk.green('success')}`);

  const duration = new Date() - startTime;
  log(`<-- ${label} ${chalk.blue(branch)} ${chalk.green('success')} ${duration}ms`);
}

module.exports = check;
