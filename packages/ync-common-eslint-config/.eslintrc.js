module.exports = {
  root: true,
  extends: ['./lib/base.js', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [require.resolve('./lib/typescript.js')],
    },
  ],
};
