const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');

/**
 * 根据源文件模版和数据将模版替换到指定目录下的文件
 * @param {String} filePath 源文件模版绝对路径
 * @param {String} to       目标文件模版绝对路径
 * @param {Object} data     模版所需要数据对象
 */
const fileReplace = async (filePath, to, data) => {
  // == 因为读写流的创建是并发的，这里做一个延迟
  setTimeout(() => {
    // if (fs.existsSync(to)) fs.unlinkSync(to);
    const store = memFs.create();
    const mfs = memFsEditor.create(store);
    mfs.copyTpl(filePath, to, data);
    mfs.commit(() => { });
  }, 2000)
}
module.exports = fileReplace;
