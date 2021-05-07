
const createBrowser = require('./createBrowser');

// == 捕获页面错误
const getPageError = async options => {
  const { url } = options;
  const browser = await createBrowser();
  const page = await browser.newPage();

  page.setCacheEnabled(false);

  const pageError = await new Promise(resolve => {
    const error = {};

    // == 监听 error
    page.on('error', err => {
      if (err) error.crash = err.toString();
    });

    // == 监听 pageerror
    page.on('pageerror', err => {
      if (err) error.page = err.toString();
    });

    // == 监听 requestfailed
    page.on('requestfailed', err => {
      if (err) {
        const { _failureText, _url } = err;
        error.request = `${_failureText} ${_url || ''}`;
      }
    });

    // == 监听页面关闭
    page.on('close', () => resolve(error));

    // == domcontentloaded 之后关闭页面
    page.goto(url, { waitUntil: 'domcontentloaded' })
      .then(res => {
        // eslint-disable-next-line no-underscore-dangle
        error.status = res._status;
        page.close();
      })
      .catch(e => {
        error.e = e;
        page.close();
      });
  });
  await browser.close();

  return pageError;
}

module.exports = getPageError;
