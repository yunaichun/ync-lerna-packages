## 简介

前端本地化CI/CD工具，实现了如下功能：
- 分支检测：staging和master分支执行指定命令、检验本地代码和远程代码是否一致
- 代码扫描：通过sonarqube实现代码扫描、并将结果上传到sonarqube
- 构建发布：支持发布到阿里oss和又拍云、分段发布、发布失败重发、发布到pre环境、发布正式环境
- 通知：钉钉消息通知，commit信息、代码扫描地址、项目访问地址

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
npm install ync-cli-ci-cd -D

# 项目目录下执行操作（仅需要执行一次即可）
# 执行完成之后，在项目目录下 publish.config.js 文件填写相关配置
npx ync-commit-check init

# staging 分支发布到测试环境
npm run deploy:stg

# master 分支发布到正式环境
npm run deploy
```
