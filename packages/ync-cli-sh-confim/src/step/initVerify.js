const { exec } = require('child_process');
const chalk = require('chalk');
const { popConfim } = require('../utils/confom');
const log = require('../utils/log');


const initVerify = async () => {
  const commandArgs = process.argv.slice(2);
  if (commandArgs.length) {
    const commandStr = commandArgs.join(' ');
    const message = `\nYou will excute: ${commandStr}, are you sure?\n\n`
    const confim = await popConfim({ message })
    if (confim) {
      exec(commandStr, (err, stdout, stderr) => {
        if (err) {
          log(chalk.red(`Execute command error: ${commandStr}.\n`));
          log(chalk.red(`Error: ${err}.`));
          return;
        }
        log(chalk.green(`Execute command success: ${commandStr}.\n`));
        if (stderr) {
          log(chalk.cyan(`Child process history is: \n`));
          // == 内部标准输入
          const wrapLine = /\r\n|\r|\n/;
          const history = stderr.split(wrapLine).filter(d => d);
          history.map((d, i) => log(chalk.cyan(`${i + 1}: ${d.replace(/^(\+)*/, '')}`)));
          // == 内部标准输出
          // == log(chalk.green(`Execute: ${stdout}`));
        }
      });
    } else {
      log(chalk.green(`\nYou have canceled the execution: ${commandStr}.\n`));
    }
  } else {
    log(chalk.yellow('\nIt should have command after ync-sh-confim.\n'));
    log(chalk.yellow('please run ync-sh-confim -h for help.\n'));
  }
}

module.exports = initVerify;
