## 简介

- npm 组件项目存放 git 仓库
- npm 主页: https://www.npmjs.com/~yunaichun

## 如何使用

#### 项目初始化

```bash
# 安装依赖
npm install
```
[eslint config 脚手架](https://github.com/yunaichun/ync-lerna-packages/tree/master/packages/ync-cli-eslint-config)
[commit check 脚手架](https://github.com/yunaichun/ync-lerna-packages/tree/master/packages/ync-cli-commit-check)

#### lerna 使用

```bash
# 安装 lerna
npm install -g lerna

# 初始化 lerna
npx lerna init

# 为指定包安装依赖
lerna add @babel/core --scope=ync-react-cli

# 为所有组件安装依赖
lerna bootstrap

# 批量发布组件（批量发布前到每个组件内部完成构建）
lerna publish
```

## 参考地址
- [lerna 官方 repeo](https://github.com/lerna/lerna)
- [使用lerna优雅地管理多个package](https://zhuanlan.zhihu.com/p/35237759)
