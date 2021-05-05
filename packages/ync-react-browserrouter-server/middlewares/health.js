// == 自定义健康检查
// == 1、如果不传入参数、传入空对象、非对象会取默认值
// == 2、如果传入对象，但是仅传入 path 或 body，另一个取默认
module.exports = ({
  path = '/health',
  body = 'ok'
}) => {
  return async (ctx, next) => {
    if (ctx.path === path) {
      ctx.body = body;
      return;
    }
    await next();
  }
}
