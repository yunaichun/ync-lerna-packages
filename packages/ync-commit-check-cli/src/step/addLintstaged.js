const fs = require('fs');
const path = require('path');

const addLintstaged = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('l') > -1) return;

  // == 添加 commitlint
  fs.copyFileSync(
    path.join(process.cwd(), 'commitlint.config.js'),
    path.join(__dirname, 'commitlint.config.js'),
  );

  // == 添加 lint-staged
  fs.copyFileSync(
    path.join(process.cwd(), '.lintstagedrc.js'),
    path.join(__dirname, '.lintstagedrc.js'),
  );
}

module.exports = addLintstaged;
