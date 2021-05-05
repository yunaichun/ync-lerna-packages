const chalk = require('chalk');
const spawn = require('cross-spawn');
const initHelp = require('./help');
const getUserInput = require('./inquirer');
const OutputTemplate = require('./template');
class Creation {
  async do() {
    initHelp();

    const userInput = await getUserInput();
    if (userInput.choice === 'create-react-app') {
      // == 集成命令 - create-react-app
      const child = spawn.sync('which', ['npx'], { stdio: 'inherit' });
      if (child.status !== 0) {
        console.log(chalk.red(`Please install npx: npm install npx -g`));
      } else {
        spawn.sync('npx', ['create-react-app', 'my-app'], { stdio: 'inherit' });
      }
    } else {
      // == 输出模版项目
      let output = new OutputTemplate(userInput);
      output.start(userInput);
      console.log(chalk.green(`Project construction completed！`));
      console.log(chalk.green(`Start project: cd ${userInput.projectName} && npm install`));
    }
  }
}

module.exports = Creation;
