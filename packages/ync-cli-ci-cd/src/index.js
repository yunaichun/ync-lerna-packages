const initCommander = require('./commander');
const packageJson = require('../package.json');

class Creation {
  // eslint-disable-next-line class-methods-use-this
  async do() {
    const commander = await initCommander({ packageJson });
    const options = commander.opts();
    console.log(123, options)
  }
}

module.exports = Creation;
