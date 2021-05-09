/* eslint-disable class-methods-use-this */
const initCommander = require('./step/initCommander');
const installPkgs = require('./step/installPkgs');
const genESLintConfig = require('./step/genESLintConfig');
const genPrettierConfig = require('./step/genPrettierConfig');
const packageJson = require('../package.json');

class Creation {
  async do() {
    const commander = await initCommander({ packageJson });
    const options = commander.opts();
    await installPkgs({ ...options, packageJson });
    await genESLintConfig({ ...options, packageJson });
    await genPrettierConfig({ ...options, packageJson });
  }
}

module.exports = Creation;
