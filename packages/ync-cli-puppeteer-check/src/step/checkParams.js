// == 检测参数
const checkParams = async options => {
  const { url } = options;
  if (!url) {
    console.log('-u params is required\nync-puppeteer-check --help');
    throw new Error('-u params');
  }
}

module.exports = checkParams;
