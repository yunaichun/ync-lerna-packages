const commander = require('commander');
const { green, cyan, yellow } = require('chalk');

const { log } = console;

const initHelp = ({ packageJson }) => {
  commander
    .version(packageJson.version)
    .option('-u, --url <url>', '默认值: N/A. 测试页面地址')
    .option('-n, --network <network>', '默认值: 3g. 测试环境, 可选3g/4g')
    .on('--help', () => {
      log(``);
      log(`  ${cyan('--network')} 必须为下面选择之一:`);
      log(`      - ${green('3g')} 3g网络测试环境`);
      log(`      - ${green('4g')} 4g网络测试环境`);
      log(``);
      log(
        `⚠️${yellow('目的: 页面内容获取、页面错误捕获、页面性能测试')}`,
      );
    })
    .parse(process.argv);
  return commander;
}

module.exports = initHelp;
