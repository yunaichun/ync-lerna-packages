const commander = require('commander');
const chalk = require('chalk');

const packageJson = require('../package.json');
const log = console.log;

function initHelp() {
  commander
    .version(packageJson.version)
    .on('--help', () => {
      log(chalk.green('run ync-react-cli to init the project.'));
    })
    .parse(process.argv);
}

module.exports = initHelp;
