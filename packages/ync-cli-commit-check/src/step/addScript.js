const fs = require('fs');
const path = require('path');

const addScript = async options => {
  const { exclude = '' } = options;
  if (exclude.split(',').indexOf('v') > -1) return;

  const str = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8');
  const json = JSON.parse(str);
  if (!json.scripts) json.scripts = {};
  if (!json.scripts.release) {
    json.scripts.release = 'standard-version'
  } else {
    const index = json.scripts.release.indexOf('standard-version')
    if (index < 0) json.scripts.release += ' && standard-version'
  }

  fs.writeFileSync(
    'package.json',
    `${JSON.stringify(json)}\n`,
  );
}

module.exports = addScript;
