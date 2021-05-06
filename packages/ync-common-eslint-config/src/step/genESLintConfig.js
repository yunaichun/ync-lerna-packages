const fs = require('fs');

const genESLintConfigFile = async (options) => {
  const { framework, typescript, alias, cypress, packageJson } = options;
  const config = {
    extends: [`${packageJson.name}/lib/eslint/javascript.js`],
  };

  if (framework === 'react') {
    config.extends.push(`${packageJson.name}/lib/eslint/react.js`);
  }

  if (typescript) {
    if (!config.overrides) config.overrides = [];
    config.overrides.push({
      files: ['**/*.ts', '**/*.tsx'],
      extends: [`${packageJson.name}/lib/eslint/typescript.js`],
    });
  }

  if (alias) config.extends.push(`${packageJson.name}/lib/alias.js`);

  if (cypress) config.extends.push(`${packageJson.name}/lib/cypress.js`);

  // // == 非 @ 开头的包取绝对路径
  // config.extends = config.extends.map(require.resolve)

  fs.writeFileSync('.eslintrc.js', `module.exports = ${JSON.stringify(config)}`);
}

module.exports = genESLintConfigFile;
