## 简介

前端本地化CI/CD工具，实现如下工作流：

- 安全检测（check）：检验是否在约定分支下执行命令、检验本地代码是否commit、检验本地代码是否push
- 代码扫描（scan）
- 安装依赖（install）
- 执行测试（test）
- 打包构建（build）
- 预发布（pre）
- 生产发布（put）：支持发布到又拍云、阿里oss
- 消息通知（notice）：钉钉消息通知，包含代码提交记录、代码扫描地址、页面访问地址

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
npm install ync-cli-local-cicd -D

# 项目目录下执行操作（仅需要执行一次即可）
# 执行完成之后，在项目目录下 publish.config.js 文件填写相关配置
npx ync-local-cicd init

# staging 分支发布到测试环境
npm run deploy:stg

# master 分支发布到正式环境
npm run deploy
```
