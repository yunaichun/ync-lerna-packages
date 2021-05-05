module.exports = {
  root: true,
  extends: ['./lib/eslint/javascript.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./lib/eslint/typescript.js'],
    },
  ],
};
