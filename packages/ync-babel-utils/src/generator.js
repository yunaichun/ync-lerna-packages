const parser = require('@babel/parser');
const generate = require('@babel/generator').default;

module.exports = (sourceMap) => {
  let combinationBody = [];
  for (let fileName in sourceMap) {
    const ast = parser.parse(sourceMap[fileName], { sourceFilename: fileName });
    combinationBody = [...combinationBody, ...ast.program.body]
  }

  const combinationAst = {
    type: 'Program',
    body: combinationBody
  };
  const { code, map } = generate(combinationAst, { sourceMaps: true }, sourceMap);
  return { code, map };
}
