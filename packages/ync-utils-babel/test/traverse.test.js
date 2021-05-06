const parser = require('../src/parser');
const traverse = require('../src/traverse');
const transform = require('../src/transform');

test('测试 traverse 函数', () => {
  const source = `function square(n) {
    return n * n;
  }`;
  const ast = parser(source);
  const modifiedAst = traverse(ast, {
    // == 修改了函数的名称
    FunctionDeclaration: function (path) {
      path.node.id.name = 'x';
    }
  });
  const modifiedSouce = transform(modifiedAst);
  // console.log(1111, modifiedSouce)
  expect(modifiedSouce).toBe('function x(n) {\n  return n * n;\n}');
});
