const traverse = require('@babel/traverse').default;

// == 所有 type - https://babeljs.io/docs/en/babel-types#api
module.exports = (ast, options) => {
    traverse(ast, options);
    return ast;
}
