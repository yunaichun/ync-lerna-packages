const generator = require('../src/generator');

test('测试 generator 函数', () => {
  const sourceMap = {
    'a.js': 'var a = 1;',
    'b.js': 'var a = 2;',
  }
  const { code, map } = generator(sourceMap)
  // console.log(222, code, map);
  expect(code).toBe('var a = 1;\nvar a = 2;');
});
