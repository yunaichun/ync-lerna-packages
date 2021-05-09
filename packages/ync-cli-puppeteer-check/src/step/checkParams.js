const log = require('../utils/log');

// == 参数 url 必填校验
const checkParams = async options => {
  const { url } = options;
  if (!url) {
    log('-u params is required\nync-puppeteer-check --help');
    throw new Error('-u params');
  }
}

module.exports = checkParams;
