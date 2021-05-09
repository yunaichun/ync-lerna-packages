const fs = require('fs');

/**
 * 检测是否文件类型还是目录类型
 * @param {String} dir 
 */
const dirType = dir =>
  new Promise(resolve => {
    fs.stat(dir, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        resolve('file');
      } else if (stats.isDirectory()) {
        resolve('dir');
      }
    });
  })

module.exports = dirType;
