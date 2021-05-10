/* eslint-disable class-methods-use-this */
const initCommander = require('./step/initCommander');
const check = require('./step/check');
const install = require('./step/install');
const config = require('./config');
const packageJson = require('../package.json');

class Creation {
  async do() {
    const commander = await initCommander({ packageJson });
    const options = commander.opts();
    if (!options.flow) options.flow = 'prd';

    await check({ options, config });
    await install({ options, config, packageJson });
  }
}

module.exports = Creation;
