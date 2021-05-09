const spawn = require('cross-spawn');

const installPkgs = async options => {
  const { framework, typescript, alias, cypress } = options;
  const pkgs = ['eslint-config-airbnb'];

  if (framework === 'react') {
    pkgs.push(
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'eslint-plugin-jsx-a11y',
    );
  }

  if (typescript) {
    pkgs.push(
      '@typescript-eslint/parser',
      '@typescript-eslint/eslint-plugin',
      'eslint-import-resolver-typescript',
      'eslint-plugin-deprecation',
    );
  }

  if (alias) pkgs.push('eslint-import-resolver-alias');

  if (cypress) pkgs.push('eslint-plugin-cypress');

  return new Promise((resolve) => {
    if (pkgs.length > 0) {
      const child = spawn('npm', ['install', ...pkgs, '--save-dev'], { stdio: 'inherit' });
      child.on('close', code => {
        if (code !== 0) {
          throw new Error(`child exit with ${code}`);
        }
        resolve(undefined);
      });
    } else {
      resolve(undefined);
    }
  });
}

module.exports = installPkgs;
