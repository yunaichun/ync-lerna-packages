## 简介

- npm 组件项目存放 git 仓库
- 我的 npm 主页: https://www.npmjs.com/~yunaichun

## 如何使用

```bash
# 1、安装 lerna
npm install -g lerna

# 2、目录初始化
mkdir mkdir ync-lerna-packages && cd $_
npx lerna init

# 3、新建一个组件包
cd packages && mkdir ync-react-cli && cd $_
npm init

# 4、为指定包安装依赖
lerna add @babel/core --scope=ync-react-cli

# 5、根据每个包的 package.json 为所有组件安装依赖
lerna bootstrap

# 6、批量发布组件（批量发布前到每个组件内部完成构建）
lerna publish
```

## 参考地址
- [lerna 官方 repeo](https://github.com/lerna/lerna)
- [使用lerna优雅地管理多个package](https://zhuanlan.zhihu.com/p/35237759)
