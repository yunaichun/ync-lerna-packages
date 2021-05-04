const fs = require('fs');

const genESLintConfigFile = async (options) => {
  const { packageJson } = options;
  // fs.writeFileSync('.prettierrc.js', `module.exports = require("${packageJson.name}/lib/prettier.js")`);
}

module.exports = genESLintConfigFile;
