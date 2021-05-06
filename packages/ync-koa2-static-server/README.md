## 简介

基于 koa2 搭建的静态服务。可以运行 React BrowserRouter 构建的前端页面。

## 如何使用

#### 默认开启健康检查和spa单页

```js
const koa = require('ync-react-browserrouter-server');

const app = new koa();

const port = process.env.PORT || 6001;

app.start(port);
```

#### 自定义健康检查

```js
const koa = require('ync-react-browserrouter-server');

const app = new koa({ health: {
    {
        path: '/healthCheck',
        body: 'success'
    }
}});

const port = process.env.PORT || 6001;

app.start(port);
```

#### 自定义 SPA 单页渲染

```js
const koa = require('ync-react-browserrouter-server');

const app = new koa({ spa: {
    entry: 'dist',
    spa: {
        index:'entry',
        ext: '.htm'
    }, 
}});

const port = process.env.PORT || 6001;

app.start(port);
```

## 默认参数

```js
{
    spa={
      entry: 'build',
      spa: {
        name: 'index',
        ext: '.html'
      }
    },
    health={
      path: '/health',
      body: 'ok'
    }
}
```

## 参数描述

| 参数名 | 类型  | 是否必须 | 说明  |  默认值 |
| --- | --- | ---- | --- | --- |
| spa.entry | string | 否 | react 构建目录名称 | build |
| spa.spa.name | string | 否 | react 构建目录启动文件名（不含文件扩展名） | index |
| spa.spa.ext | string | 否 | react 构建目录启动文件扩展名 | .html |
| health.path | string | 否 | koa2 静态服务健康检查地址 | /health |
| health.body | string | 否 | koa2 静态服务健康检查响应 | ok |
