const commander = require('commander');
const { yellow } = require('chalk');
const log = require('../utils/log');

const initCommander = ({ packageJson }) => {
  commander
    .version(packageJson.version)
    .option('-f, --flow <flow>', '发布流程，默认为prd，即生产发布流程')
    .on('--help', () => {
      log(``);
      log(
        `⚠️${yellow('目的：实现本地CI/C-分支检测、代码扫描、打包、发布、通知等流程')}`,
      );
    })
    .parse(process.argv);
  return commander;
}

module.exports = initCommander;
