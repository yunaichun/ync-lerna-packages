module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
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
    "browser": true,
    "es6": true,
    "node": true
  },
  rules: {
    // "off" 或 0 - 关闭规则、"warn" 或 1 - 将规则视为一个警告、"error" 或 2 - 将规则视为一个错误

    // == 缩进2行
    "indent": ["error", 2],

    // == 禁止 function 标识符和括号之间出现空格
    "no-spaced-func": 2,

    // == 禁用行尾空格
    "no-trailing-spaces": 2,

    // == 文件结尾有一行空行
    'eol-last': 2,

    // class member, allow single line member don't have empty line between each other
    // == class 方法之间空1行
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
    // == 引入 js、jsx、ts、tsx 可以不带别名
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
    // == 最好有 export default
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',

    // unused exports
    // == 引入没有用到的 moudle
    'import/no-unused-modules': [
      'warn',
      {
        unusedExports: true,
      },
    ],

    // max lines allowed
    // == 每行最大500字
    'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['warn', { max: 120, skipBlankLines: true, skipComments: true }],

    // ignore use this check for class methods
    // == class 里面可以用this
    'class-methods-use-this': 'off',

    // == 下划线不能在中间
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],

    // == 函数和class不能在定义前使用
    'no-use-before-define': ['error', { functions: true, classes: true }],
  },
};
