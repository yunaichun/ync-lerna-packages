const stg = require('./stg');
const prd = require('./prd');

module.exports = {
  stg,
  prd,
  cwd: process.cwd(),
};
