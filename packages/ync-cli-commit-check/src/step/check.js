const fs = require('fs');
const { cmd, log } = require('../utils');

const check = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('c') > -1) return;

  // == 1、查看 .git 存在的绝对路径确保在 git 仓库下操作
  const notGitDir = await cmd('git', ['rev-parse', '--git-dir']).catch(e => e);
  if (notGitDir) {
    log('not a Git repository');
    throw new Error('not allowed intall outside Git repository');
  }

  // == 2、确保当前目录下就有 .git 
  const url = 'https://typicode.github.io/husky/#/?id=custom-directory';
  if (!fs.existsSync('.git')) {
    log('not have .git dir');
    throw new Error(`.git can't be found (see ${url})`);
  }
}

module.exports = check;
