module.exports = {
  networks: {
    // == 标准3G：750KB
    '3g': {
      'offline': false,
      'downloadThroughput': 750 * 1024 / 8,
      'uploadThroughput': 250 * 1024 / 8,
      'latency': 100
    },
    // == 标准4G：3MB
    '4g': {
      'offline': false,
      'downloadThroughput': 3 * 1024 * 1024 / 8,
      'uploadThroughput': 1024 * 1024 / 8,
      'latency': 100
    }
  }
}
