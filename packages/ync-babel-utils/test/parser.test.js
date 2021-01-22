const parser = require('../src/parser');

test('测试 parser 函数', () => {
    const source = `function square(n) {
        return n * n;
    }`;
    const ast = parser(source, {
        sourceType: 'module',
        plugins: [
            'jsx',
            'flow',
        ]
    });
    console.log(1111, ast.program.body);
    expect(ast.program.body.length).toBe(1);
});
