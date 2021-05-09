const commander = require('commander');
const chalk = require('chalk');
const log = require('../utils/log');

const initCommander = ({ packageJson }) => {
  commander
    .version(packageJson.version)
    .on('--help', () => {
      log(chalk.green('run ync-react-cli to init the project.'));
    })
    .parse(process.argv);
}

module.exports = initCommander;
