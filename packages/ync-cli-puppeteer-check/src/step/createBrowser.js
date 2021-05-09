const puppeteer = require('puppeteer');

// == 创建无头浏览器
const createBrowser = ({ headless = true } = {}) => {
  const params = headless ? {
    headless: true,
    timeout: 90 * 1000,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-zygote',
      '--single-process'
    ]
  } : {
      headless: false,
      devtools: true
    };

  return puppeteer.launch(params);
}

module.exports = createBrowser;
