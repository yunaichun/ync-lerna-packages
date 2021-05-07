## 简介

- 采用 husky 接入 commit-msg 和 pre-commit 等 Git Hook
- commit-msg 执行 Angular 代码提交信息规范
- pre-commit 执行 [ync-cli-eslint-config](https://github.com/yunaichun/ync-lerna-packages/tree/master/packages/ync-cli-eslint-config) 对代码 lint 和 prettier

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
# 依赖安装
npm install ync-cli-commit-check -D

# 项目目录下执行操作（仅需要执行一次即可）
npx ync-commit-check
```

## 参数描述

| 参数名 | 说明 | 默认值 |
| --- | --- | --- |
| -e， --exclude | 排除某种工作流<br> c: 检验是否是 git 仓库且当前是否在 .git 目录平级 <br>i:安装依赖且初始化 husky <br>h: 创建 commit-msg 和 pre-commit Git Hooks 命令 <br>l: 创建 commitlint 和 lintstagedrc 文件 <br>s: 创建 standard-version 命令 <br> 备注：排除多个工作流以 , 分割 | N/A |

## 参考资料

- [husky 官网](https://typicode.github.io/husky)
- [介绍Git Hooks](https://zhuanlan.zhihu.com/p/115224711)
- [Git 钩子](https://malcolmyu.github.io/2015/10/16/Git-Hooks/)
- [commitlint + husky 规范 commit 日志](https://blog.csdn.net/wei371522/article/details/84070803)
- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [从零配置 Eslint + Prettier + husky + lint-staged 构建前端代码工作流](https://segmentfault.com/a/1190000022497035)
