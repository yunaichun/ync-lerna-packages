/* eslint-disable class-methods-use-this */
const initCommander = require('./step/initCommander');
const check = require('./step/check');
const installPkgs = require('./step/installPkgs');
const addHooks = require('./step/addHooks');
const addLintFile = require('./step/addLintFile');
const addScript = require('./step/addScript');
const packageJson = require('../package.json');

class Creation {
  async do() {
    const commander = await initCommander({ packageJson });
    const options = commander.opts();
    await check({ ...options, packageJson });
    await installPkgs({ ...options, packageJson });
    await addHooks({ ...options, packageJson });
    await addLintFile({ ...options, packageJson });
    await addScript({ ...options, packageJson });
  }
}

module.exports = Creation;
