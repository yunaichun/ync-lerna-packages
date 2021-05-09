const commander = require('commander');
const { green, cyan, yellow } = require('chalk');
const log = require('../utils/log');

const initCommander = ({ packageJson }) => {
  commander
    .version(packageJson.version)
    .option('-e, --exclude <exclude>', '默认值: N/A. 是否忽略某个工作流，如有多个以,分开')
    .on('--help', () => {
      log(``);
      log(`  ${cyan('--exclude')} 可以为以下选择组合:`);
      log(`      - ${green('c')} 检验是否是 git 仓库且当前是否在 .git 目录平级`);
      log(`      - ${green('i')} 安装依赖且初始化 husky (与 .git 目录平级)`);
      log(`      - ${green('h')} 创建 commit-msg 和 pre-commit Git Hooks 命令`);
      log(`      - ${green('l')} 创建 commitlint 和 lintstagedrc 文件`);
      log(`      - ${green('s')} 创建 standard-version 命令`);
      log(``);
      log(
        `⚠️${yellow('目的：配合 ync-common-eslint-config 工具，统一团队的提交代码commit信息、lint检查、生成文档')}`,
      );
    })
    .parse(process.argv);
  return commander;
}

module.exports = initCommander;
