## 简介

- npm 组件项目存放 git 仓库
- 我的 npm 主页: https://www.npmjs.com/~yunaichun

## 如何使用

#### lerna

```bash
# 安装 lerna
npm install -g lerna

# 目录初始化
mkdir ync-lerna-packages && cd $_
npx lerna init

# 为指定包安装依赖
lerna add @babel/core --scope=ync-react-cli

# 根据每个包的 package.json 为所有组件安装依赖
lerna bootstrap

# 批量发布组件: 批量发布前到每个组件内部完成构建
lerna publish
```

#### 安装 commit check

```bash
# 依赖安装
npm install ync-commit-check-cli -D

# 项目目录下执行操作（仅需要执行一次即可）
npx ync-commit-check
```

#### 安装 eslint prettier

```bash
# 依赖安装
npm install ync-common-eslint-config -D

#  项目目录下执行操作（仅需要执行一次即可）
npx ync-eslint-config -f react
```

## 参考地址
- [lerna 官方 repeo](https://github.com/lerna/lerna)
- [使用lerna优雅地管理多个package](https://zhuanlan.zhihu.com/p/35237759)
