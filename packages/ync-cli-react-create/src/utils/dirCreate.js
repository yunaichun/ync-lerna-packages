const fs = require('fs');

/**
 * 校验目录是否存在，不存在则创建
 * @param {String} dir 
 */
const createDir = dir =>
  new Promise(resolve => {
    fs.access(dir, fs.constants.F_OK, err => {
      if (err) {
        fs.mkdirSync(dir);
        resolve(dir);
      }
      resolve(dir);
    })
  })

module.exports = createDir;
