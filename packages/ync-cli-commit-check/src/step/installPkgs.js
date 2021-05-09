const cmd = require('../utils/cmd');

const installPkgs = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('i') > -1) return;

  // == 安装相关包
  await cmd('npm', [
    'install',
    'husky',
    '@commitlint/cli',
    '@commitlint/config-angular',
    'lint-staged',
    'standard-version',
    '--save-dev',
  ]);

  // == 初始化 husky
  await cmd('npx', ['husky-init']);
}

module.exports = installPkgs;
