const fs = require('fs');

const genESLintConfigFile = async (options) => {
  const { framework, typescript, alias, cypress, packageJson } = options;
  const config = {
    extends: [],
  };
  
  if (framework === 'react') {
    config.extends.push(`${packageJson.name}/lib/eslint/react.js`, `prettier`);
  }

  if (typescript) {
    if (!config.overrides) config.overrides = [];
    config.overrides.push({
      files: ['**/*.ts', '**/*.tsx'],
      extends: [`${packageJson.name}/lib/eslint/typescript.js`],
    });
  }

  if (alias) {
    config.extends.push(`${packageJson.name}/lib/alias.js`);
  }

  if (cypress) {
    config.extends.push(`${packageJson.name}/lib/cypress.js`);
  }

  config.extends.push(`${packageJson.name}/lib/eslint/base.js`);

  console.log(22222, config)
  fs.writeFileSync('.eslintrc.js', `module.exports = ${JSON.stringify(config)}`);
}

module.exports = genESLintConfigFile;
