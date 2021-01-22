const { transformFromAst } = require('@babel/core');

module.exports = (ast, presets) => {
    const { code } = transformFromAst(ast, null, {
        presets
    });
    return code;
}
