const commander = require('commander');
const chalk = require('chalk');

const packageJson = require('../package.json');
const log = console.log;

const initHelp = async () => {
    commander
        .version(packageJson.version)
        .on('--help', () => {
            log(chalk.yellow('\nrun ync-sh-confim before deploy command in your project. As shown below:\n'));
            log(chalk.yellow('ync-sh-confim npm run deploy\n'));
        })
        .parse(process.argv);
}

module.exports = initHelp;
