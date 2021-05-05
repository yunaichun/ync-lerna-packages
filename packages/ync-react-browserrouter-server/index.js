const Koa = require('koa');
const createHealth = require('./middlewares/health');
const createStatic = require('./middlewares/static');

class StaticServe extends Koa {
  // == 1、如果不传入参数、传入空对象、非对象会取默认值
  // == 2、如果传入对象，但是仅传入 spa 或 health，另一个取默认
  constructor({
    spa = {
      entry: 'build',
      spa: {
        name: 'index',
        ext: '.html'
      }
    },
    health = {
      path: '/health',
      body: 'ok'
    }
  } = {}) {
    super();
    this.startMiddleware = [];
    this.endMiddleware = [];
    this.coreMiddleware = [];
    if (spa) this.coreMiddleware.push(createStatic(spa));
    if (health) this.coreMiddleware.push(createHealth(health));
  }

  // == 添加 health 或 spa 前置或后置中间件
  use(middleware, type) {
    if (type === 'end') {
      this.endMiddleware.push(middleware);
    } else {
      this.startMiddleware.push(middleware);
    }
    return this;
  }

  // == 启动服务
  async start(port) {
    this.middleware = this.startMiddleware.concat(this.coreMiddleware, this.endMiddleware);
    await new Promise((resolve) => {
      this.listen(port, () => {
        console.log(`running on port ${port}`);
        resolve();
      });
    });
    return this;
  }
}

module.exports = StaticServe;
