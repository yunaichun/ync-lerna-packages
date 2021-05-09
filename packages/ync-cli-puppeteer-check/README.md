## 简介

通过 puppeteer 和 window.performance API，结合命令行工具可以获取页面 url 在 3g/4g 网络下的页面性能，具体包括：

- dns查询时间
- tcp连接时间
- request请求时间
- 白屏时间
- dom树解析时间
- domReady时间
- onLoad时间

同时可以捕获页面的报错信息，具体包括：

- 监听页面error事件：捕获页面崩溃错误信息
- 监听页面pageerror事件：捕获页面报错信息
- 监听页面requestfailed事件：捕获页面请求失败信息

## 如何扩展此 cli 工具

```bash
# 安装依赖【切记不能通过 cnpm 安装，否则下面 link 和 test 会报错】
npm ci

# puppeteer 安装较慢可以采用如下方法单独安装
PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors npm i puppeteer -S

# link
npm run link

# 本地测试
npm run test

# 发布
npm publish --access=public
```

## 如何使用此 cli 工具

```bash
# 全局安装
npm install ync-cli-puppeteer-check -g

# 执行命令
npx ync-puppeteer-check -u https://www.answera.top -n 4g
```

## 参数描述

| 参数名 | 类型 | 说明 | 默认值 | 必须 |
| --- | --- | --- | --- | --- |
| url | String | 页面链接 | N/A | 是 |
| network | String | 网络模式，3g/4g | 3g | 否 |

## 参考资料

- [puppeteer 中文官网](https://www.kancloud.cn/luponu/puppeteer/870142)
- [Puppeteer 入门与实战](https://segmentfault.com/a/1190000023601892)
- [前端性能监控：window.performance](https://www.cnblogs.com/libin-1/p/6501951.html)
