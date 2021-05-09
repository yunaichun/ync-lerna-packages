/* eslint-disable class-methods-use-this */
const initCommander = require('./step/initCommander');
const check = require('./step/check');
const config = require('./config');
const packageJson = require('../package.json');

class Creation {
  async do() {
    const commander = await initCommander({ packageJson });
    const options = commander.opts();
    await check({ options, config })
  }
}

module.exports = Creation;
