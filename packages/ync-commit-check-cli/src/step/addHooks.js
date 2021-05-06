const fs = require('fs');
const { cmd } = require('../utils');

const addHook = async (name, content) => {
  // == 创建 husky 指定钩子: 生成文件
  const fullName = `.husky/${name}`;
  await cmd('npx', ['husky', 'set', fullName, process.platform === 'win32' ? '" "' : '']);

  // == 将内容写入钩子文件
  const fileStr = fs.readFileSync(fullName, 'utf-8');
  return Promise.resolve(fs.writeFileSync(fullName, `${fileStr}\n${content}`));
}

const addHooks = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('h') > -1) return;

  await addHook('commit-msg', 'npx --no-install commitlint --edit "$1"');
  await addHook('pre-commit', 'echo pre-commit && npx lint-staged');
}

module.exports = addHooks;
