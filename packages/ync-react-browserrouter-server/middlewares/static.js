const fs = require('fs');
const pathUtil = require('path');
const send = require('koa-send');

// == 自定义 SPA 渲染
// == 1、如果不传入参数、传入空对象、非对象会取默认值
// == 2、如果传入对象，但是仅传入 entry 或 spa，另一个取默认
module.exports = ({
  entry='build',
  spa={
    name: 'index',
    ext: '.html'
  }
}) => {
  // == build 绝对路径
  const cwd = process.cwd();
  const rootPath = pathUtil.isAbsolute(entry) ? entry : pathUtil.resolve(cwd, entry);
  return async (ctx, next) => {
    let renderPath = ctx.path;
    
    if (spa) {
      // == 1、静态资源
      // == ctx.path: '/static/media/24.b8660976.jpg'
      // == '/'、'/static/media'、'24.b8660976.jpg'、'24.b8660976'、'.jpg'
      let { root, dir, base, name, ext } = pathUtil.parse(ctx.path);

      // == 2、BrowserRouter 路由
      // == ctx.path: /react/three
      // == '/'、'/react'、'three'、'three'、''
      if (!ext) {
        // == '/react/three.html'
        const filePathWithExt = pathUtil.format({
          root,
          dir,
          base: `${name || spa.name}${spa.ext}`,
          name: name || spa.name,
          ext: spa.ext,
        });
        const fullFilePath = pathUtil.resolve(rootPath, filePathWithExt);

        // == '/react/three.html' 存在则返回，否则返回 build 目录下的 index.html
        renderPath = fs.existsSync(fullFilePath) ? filePathWithExt : `${spa.name}${spa.ext}`;
      }
    }

    // == 根目录 build 下的 renderPath 路径
    await send(ctx, renderPath, {root: rootPath});
    await next();
  }
}
