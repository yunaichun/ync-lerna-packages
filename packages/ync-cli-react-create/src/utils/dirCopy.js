const fs = require('fs');
const dirType = require('./dirType');
const dirCreate = require('./dirCreate');

/**
 * 拷贝 sourceDir 目录下的文件和目录至 targetDir 目录
 * @param {String} sourceDir 
 * @param {String} targetDir 
 */
const copyDir = async (sourceDir, targetDir = __dirname) => {
  // == 目录没有则创建
  await dirCreate(`${sourceDir}`);
  await dirCreate(`${targetDir}`);

  // == 遍历源目录
  const paths = fs.readdirSync(sourceDir);
  paths.forEach(async path => {
    const sourceDirChild = `${sourceDir}/${path}`;
    const targetDirChild = `${targetDir}/${path}`;
    const type = await dirType(sourceDirChild);
    if (type === 'file') {
      const readable = fs.createReadStream(sourceDirChild);
      const writable = fs.createWriteStream(targetDirChild);
      readable.pipe(writable);
    } else {
      await copyDir(sourceDirChild, targetDirChild);
    }
  });
}

module.exports = copyDir;
