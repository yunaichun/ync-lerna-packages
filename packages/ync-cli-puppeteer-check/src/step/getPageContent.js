const createBrowser = require('./createBrowser');

// == 获取页面内容
const getPageContent = async options => {
  const { url } = options;
  const browser = await createBrowser();
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
  await page.close();
  await browser.close();
  return content;
}

module.exports = getPageContent;
