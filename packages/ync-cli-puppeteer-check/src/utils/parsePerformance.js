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

  // == dns查询时间
  performance.dns = domainLookupEnd - domainLookupStart;
  // == tcp连接时间
  performance.tcp = connectEnd - connectStart;
  // == request请求时间
  performance.request = responseEnd - responseStart;
  // == 白屏时间
  performance.whiteScreen = responseStart - navigationStart;
  // ==dom树解析时间
  if (domComplete > 0) performance.domParsed = domComplete - domInteractive;
  // == domReady时间
  performance.domReady = domContentLoadedEventEnd - navigationStart;
  // == onLoad时间
  if (loadEventEnd > 0) performance.pageReady = loadEventEnd - navigationStart;

  return performance;
}
