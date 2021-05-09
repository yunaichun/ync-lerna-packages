const commander = require('commander');
const { green, cyan, yellow } = require('chalk');
const log = require('../utils/log');

const initCommander = ({ packageJson }) => {
  commander
    .version(packageJson.version)
    .option('-a, --alias', '默认值: false, 是否使用了 webpack alias')
    .option('-t, --typescript', '默认值: false, 是否使用了 typescript')
    .option('-f, --framework <framework>', '默认值: N/A, 使用的框架')
    .option('-c, --cypress', '默认值: N/A, 项目集成了cypress测试')
    .on('--help', () => {
      log(`  ${cyan('--framework')} 必须为下面选择之一:`);
      log(`      -  ${green('normal')}`);
      log(`      -  ${green('react')}`);
      log(`      -  ${green('vue')}`);
      log(
        `⚠️${yellow('为了统一团队的风格跟规则，该功能会覆盖原有的.eslintrc.js  .prettierrc.js')}`,
      );
    })
    .parse(process.argv);
  return commander;
}

module.exports = initCommander;
