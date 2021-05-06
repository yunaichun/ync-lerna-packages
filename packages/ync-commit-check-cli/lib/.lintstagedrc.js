module.exports = {
  'src/*.{ts,tsx,js,jsx}': ['eslint --fix'],
};

try {
  // check if eslint installed
  require.resolve('eslint');
} catch (e) {
  // disable eslint related config if current project doesn't use eslint
  module.exports = {};
}