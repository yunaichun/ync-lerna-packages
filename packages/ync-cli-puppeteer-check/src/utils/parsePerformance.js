// == 解析性能
module.exports = (_performance) => {
  const {
    domainLookupEnd,
    domainLookupStart,
    connectEnd,
    connectStart,
    responseEnd,
    responseStart,
    domComplete,
    domInteractive,
    navigationStart,
    domContentLoadedEventEnd,
    loadEventEnd
  } = _performance.timing;
  const performance = {};

  // dns查询
  performance.dns = domainLookupEnd - domainLookupStart;
  // tcp连接
  performance.tcp = connectEnd - connectStart;
  // 白屏耗时
  performance.whiteScreen = responseStart - navigationStart;
  // 请求响应
  performance.request = responseEnd - responseStart;
  // domReady
  performance.domReady = domContentLoadedEventEnd - navigationStart;
  // dom解析
  if (domComplete > 0) performance.domParsed = domComplete - domInteractive;
  // onLoad时间
  if (loadEventEnd > 0) performance.pageReady = loadEventEnd - navigationStart;

  return performance;
}