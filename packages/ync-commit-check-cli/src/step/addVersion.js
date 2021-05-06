const fs = require('fs');

const addVersion = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('v') > -1) return;

  const { packageJson } = options;
  if (!packageJson.scripts) packageJson.scripts = {};
  if (!packageJson.scripts['release']) {
    packageJson.scripts['release'] = 'standard-version'
  } else {
    const index = packageJson.scripts['release'].indexOf('standard-version')
    if (index < 0) packageJson.scripts['release'] += ' && standard-version'
  }

  fs.writeFileSync(
    'package.json',
    `${JSON.stringify(packageJson)}\n`,
  );
}

module.exports = addVersion;
