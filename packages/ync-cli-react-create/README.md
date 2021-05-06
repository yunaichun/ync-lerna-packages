## 简介

- 根据用户输入创建 React 组件库模版项目
- 集成 create-react-app

## 如何扩展此 cli 工具

```bash
# 安装依赖【切记不能通过 cnpm 安装，否则下面 link 和 test 会报错】
npm ci

# link
npm run link

# 本地测试
npm run test

# 发布
npm publish --access=public
```

## 如何使用此 cli 工具

```bash
# 全局安装
npm install ync-cli-react-create -g

# 使用方法
ync-react-create
```

## 参考资料

- [从零开发一个健壮的npm包](https://juejin.cn/post/6844903605229584398)
- [node命令行工具之实现项目工程自动初始化的标准流程](https://juejin.cn/post/6844903910793019399)
