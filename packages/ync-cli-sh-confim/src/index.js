/* eslint-disable class-methods-use-this */
const initCommander = require('./step/initCommander');
const initVerify = require('./step/initVerify');
const packageJson = require('../package.json');

class Creation {
  async do() {
    await initCommander({ packageJson });
    await initVerify();
  }
}

module.exports = Creation;
