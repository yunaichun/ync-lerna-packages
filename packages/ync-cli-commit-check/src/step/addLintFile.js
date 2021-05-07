const fs = require('fs');
const path = require('path');

const addLintFile = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('l') > -1) return;

  // == 添加 commitlint
  fs.copyFileSync(
    path.join(__dirname, '../../lib/commitlint.config.js'),
    path.join(process.cwd(), 'commitlint.config.js'),
  );

  // == 添加 lint-staged
  fs.copyFileSync(
    path.join(__dirname, '../../lib/.lintstagedrc.js'),
    path.join(process.cwd(), '.lintstagedrc.js'),
  );
}

module.exports = addLintFile;
