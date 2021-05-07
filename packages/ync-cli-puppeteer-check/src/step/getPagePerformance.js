
const createBrowser = require('./createBrowser');
const config = require('../config');
const parsePerformance = require('../utils/parsePerformance');

// == 检测页面性能
const getPagePerformance = async options => {
  const { url, network = '3g' } = options;
  const browser = await createBrowser();
  const page = await browser.newPage();

  // == 开启终端
  const client = await page.target().createCDPSession();
  await client.send('Network.enable');
  // == 网络设置为中等网速-标准3G
  const networkConfig = config.networks[network];
  await client.send('Network.emulateNetworkConditions', networkConfig);

  // == 关闭缓存，开始测试
  page.setCacheEnabled(false);
  page.setDefaultNavigationTimeout(90 * 1000);

  const performance = await new Promise(resolve => {
    const info = { error: {} };

    // == 监听 error
    page.on('error', err => {
      if (err) info.error.crash = err.toString();
    });

    // == 监听 pageerror
    page.on('pageerror', err => {
      if (err) info.error.page = err.toString();
    });

    // == 监听 requestfailed
    page.on('requestfailed', err => {
      if (err) {
        const { _failureText, _url } = err;
        info.error.request = `${_failureText} ${_url || ''}`;
      }
    });

    // == 监听页面关闭
    page.on('close', () => resolve(info));

    // 打开页面并测试性能
    page.goto(url, { waitUntil: 'domcontentloaded' })
      .then(res => {
        // eslint-disable-next-line no-underscore-dangle
        info.status = res._status;
        return page
          .evaluate(() => JSON.stringify(window.performance || window.msPerformance || window.webkitPerformance))
          .then(per => JSON.parse(per));
      }).then(_performance => {
        info.performance = parsePerformance(_performance);
        page.close();
      }).catch(e => {
        info.error.e = e;
      });
  });
  await browser.close();

  return performance;
}

module.exports = getPagePerformance;
