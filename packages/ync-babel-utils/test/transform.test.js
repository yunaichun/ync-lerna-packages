const parser = require('../src/parser');
const transform = require('../src/transform');

test('测试 transform 函数', () => {
    const source = 'var a = () => {}';
    const ast = parser(source)
    const modifiedSouce = transform(ast, ['@babel/preset-env']);
    // console.log(222, modifiedSouce);
    expect(modifiedSouce).toBe('var a = function a() {};');
});
  