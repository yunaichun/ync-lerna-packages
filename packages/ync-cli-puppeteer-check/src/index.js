const initHelp = require('./help');
const checkParams = require('./step/checkParams');
// const getPageContent = require('./step/getPageContent');
// const getPageError = require('./step/getPageError');
const getPagePerformance = require('./step/getPagePerformance');
const packageJson = require('../package.json');

class Creation {
  // eslint-disable-next-line class-methods-use-this
  async do() {
    const commander = await initHelp({ packageJson });
    const options = commander.opts();

    await checkParams(options);
    // const content = await getPageContent(options);
    // const error = await getPageError(options);
    const performance = await getPagePerformance(options);

    // == 结果打印: https://stackoverflow.com/questions/5670752/how-can-i-pretty-print-json-using-node-js
    console.log(`页面性能: \n${JSON.stringify(performance, null, "  ")}`);
  }
}

module.exports = Creation;
