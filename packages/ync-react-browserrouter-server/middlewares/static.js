const fs = require('fs');
const pathUtil = require('path');
const send = require('koa-send');

// == 自定义 SPA 渲染
// == 关于普通函数参数：
// == 1、默认一定会有 entry 和 spa 参数
// == 2、如果只传入一个参数，spa 参数取默认值
module.exports = ({
  entry='build',
  spa={
    name: 'index',
    ext: '.html'
  }
}) => {
  console.log(22222, entry, spa)
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
