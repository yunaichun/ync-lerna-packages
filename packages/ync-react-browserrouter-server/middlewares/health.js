// == 自定义健康检查
module.exports = ({
  path='/health',
  body='ok'
}) => {
  return async (ctx, next) => {
    if (ctx.path === path) {
      ctx.body = body;
      return;
    }
    await next();
  }
}
