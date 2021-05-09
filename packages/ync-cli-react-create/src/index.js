/* eslint-disable class-methods-use-this */
const path = require('path');
const chalk = require('chalk');
const initCommander = require('./step/initCommander');
const initInquirer = require('./step/initInquirer');
const copyDir = require('./utils/dirCopy');
const fileReplace = require('./utils/fileReplace');
const cmd = require('./utils/cmd');
const log = require('./utils/log');
const packageJson = require('../package.json');

class Creation {
  async do() {
    await initCommander({ packageJson });
    const userInput = await initInquirer();
    const { choice, projectName } = userInput;
    if (choice === 'create-react-app') {
      // == 集成create-react-app命令
      const code = await cmd('which', ['npx']);
      if (code !== 0) log(chalk.red(`Please install npx: npm install npx -g`));
      else await cmd('npx', ['create-react-app', projectName]);
    } else {
      // == 输出模版项目
      const sourceDir = path.resolve(__dirname, '..', 'lib');
      const targetDir = path.resolve(process.cwd(), projectName);
      const filePath = 'package.json';
      await copyDir(sourceDir, targetDir);
      await fileReplace(`${sourceDir}/${filePath}`, `${targetDir}/${filePath}`, userInput);
      log(chalk.green(`Project created successful！`));
      log(chalk.green(`Next: cd ${projectName} && npm install`));
    }
  }
}

module.exports = Creation;
