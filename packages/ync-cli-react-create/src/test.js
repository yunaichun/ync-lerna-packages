const path = require('path');
const fse = require('fs-extra');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');

/**
 * 1、新建项目文件夹
 * 2、把模板文件读取出来，根据配置信息，进行替换（调用的是mem-fs-editor的copyTpl方法）
 * 3、拷贝其他文件
 * 4、输出最终文件到硬盘上
 */
class OutputTemplate {
  constructor() {
    // == 模板文件替换
    const store = memFs.create();
    this._mfs = memFsEditor.create(store);
    this._tplPath = '';
  }

  /**
   * 将模版目录下的 file 文件拷贝到 to 目录
   * @param {String} file 模版文件里面的 目录名/文件名
   * @param {String} to 新创建目录文件的 目录名/文件名
   */
  copy(file, to) {
    const filePath = this.getTplPath(file);
    if (fse.existsSync(filePath)) {
      fse.copy(filePath, to);
    }
  }

  /**
   * 替换模版文件的数据
   * @param {*} file 模版文件里面的 目录名/文件名
   * @param {*} to 新创建目录文件的 目录名/文件名
   * @param {*} data 数据
   */
  copyTpl(file, to, data = {}) {
    const filePath = this.getTplPath(file);
    if (fse.existsSync(filePath)) {
      console.log(111111, filePath, to, data)
      this._mfs.copyTpl(filePath, to, data);
    }
  }

  /**
   * 获取模版目录的某个文件
   * @param {String} file 
   */
  getTplPath(file) {
    return path.join(this._tplPath, file);
  }

  /**
   * 返回路径拼接函数
   * @param {String} projectPath 
   */
  getProjectResolve(projectPath) {
    return function (to) {
      return path.resolve(projectPath, to);
    }
  }

  start(setting) {
    return new Promise((resolve, reject) => {
      // == 新建项目
      const { projectName } = setting;
      this._tplPath = path.resolve(__dirname, '..', 'lib');
      const cwd = process.cwd();
      const projectPath = path.join(cwd, projectName);
      fse.mkdirSync(projectPath);

      // == copy 文件夹
      const projectResolve = this.getProjectResolve(projectPath);
      this.copy('src', projectResolve('src'));
      this.copy('test', projectResolve('test'));
      this.copy('.babelrc', projectResolve('.babelrc'));
      this.copy('.eslintrc.js', projectResolve('.eslintrc.js'));
      this.copy('.eslintignore', projectResolve('.eslintignore'));
      this.copy('jest.config.js', projectResolve('jest.config.js'));
      this.copy('README.md', projectResolve('README.md'));
      this.copy('webpack.config.js', projectResolve('webpack.config.js'));

      // == 根据配置信息，替换文件内容
      this.copyTpl('package.json', projectResolve('package.json'), setting);

      // == 将内存中的文件，输出到硬盘上
      this._mfs.commit(() => resolve());
    });
  }
}

module.exports = OutputTemplate;
