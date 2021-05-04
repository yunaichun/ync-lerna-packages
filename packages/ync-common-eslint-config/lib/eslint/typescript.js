const path = require('path');

module.exports = {
  extends: ['./commen/ts.js'].map(require.resolve),
  plugins: ['deprecation'],
  parserOptions: { sourceType: 'module', project: path.join(process.cwd(), './tsconfig.json') },
  rules: {
    // switch to typescript version rules
    // camelcase
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow',
        custom: {
          regex: 'Id([A-Z0-9]|\\b)',
          match: false,
        },
      },
      // SomeEnum.ENUM_VALUE
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      // variableLike
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      // Type, Interface
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'snake_case', 'UPPER_CASE'],
      },
    ],
    // array type
    '@typescript-eslint/array-type': ['error'],
    // no-unused-vars
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    // no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    // no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off',
    // deprecation
    'deprecation/deprecation': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      // for deprecation plugin
      typescript: {
        alwaysTryTypes: true,
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
};
