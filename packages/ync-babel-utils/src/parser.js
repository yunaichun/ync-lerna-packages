const parser = require('@babel/parser');

module.exports = (source, options={}) => {
    const ast = parser.parse(source ,options);
    return ast;
}
