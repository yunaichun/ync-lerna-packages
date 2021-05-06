## 简介

1. 执行 Shell 命令前做一层确认弹窗提示
2. 执行 Shell 命令后控制台输出执行的子进程命令历史记录

## 如何扩展此 cli 工具

```bash
# 安装依赖【切记不能通过 cnpm 安装，否则下面 link 和 test 会报错】
npm ci

# link
npm run link

# 本地测试
npm run test

# 发布
npm publish
```

## 如何使用此 cli 工具

```bash
# 全局安装
npm install ync-cli-sh-confim -g

# 使用方法
ync-sh-confim npm run deploy
```
