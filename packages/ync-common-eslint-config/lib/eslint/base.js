module.exports = {
  root: true,
  extends: ['./commen/js.js', 'prettier'].map(require.resolve),
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true,
      legacyDecorators: true,
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
  },
  rules: {
    indent: ['error', 2],

    // class member, allow single line member don't have empty line between each other
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // import ignore resolving asset files
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true,
        ignore: ['.png$', '.jpe?g$', '.gif$', '.webp$', '.md$'],
      },
    ],

    // import js(x), ts(x) files without extension
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // prefer named export
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',

    // unused exports
    'import/no-unused-modules': [
      'warn',
      {
        unusedExports: true,
      },
    ],

    // max lines allowed
    'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['warn', { max: 120, skipBlankLines: true, skipComments: true }],

    // ignore use this check for class methods
    'class-methods-use-this': 'off',

    'no-underscore-dangle': ['warn', { allowAfterThis: true }],

    'no-use-before-define': ['error', { functions: true, classes: true }],
  },
};
