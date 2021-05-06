## 简介

- eslint, tslint, prettier 配置方案

## 如何扩展此 cli 工具

#### 相关命令

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

#### 项目相关 npm 包

```code
一、prettier
eslint-config-prettier

二、eslint
eslint
eslint-plugin-import

1、js
@babel/core
@babel/eslint-parser
eslint-config-airbnb [用到才安装]

2、react
eslint-plugin-react,
eslint-plugin-react-hooks,
eslint-plugin-jsx-a11y

3、taro
eslint-plugin-taro

4、ts
@typescript-eslint/parser
eslint-import-resolver-typescript,
@typescript-eslint/eslint-plugin,
eslint-plugin-deprecation

三、alias
eslint-import-resolver-alias
```

## 如何使用此 cli 工具

```bash
# 依赖安装
npm install ync-cli-eslint-config -D

# 使用方法
npx ync-eslint-config -t -a -f react
```

## 参数描述

| 参数名 | 说明 | 默认值 |
| --- | --- | --- |
| -f， --framework | 项目使用的框架 , 不传则使用 Javascript 相关 Eslint 配置 | false |
| -t， --typescript | 项目是否使用了 Typescript , 为 true 则添加 Typescript 相关 Eslint 配置 | false |
| -a， --alias | 项目是否使用了 webpack alias | false |
| -c， --cypress | 项目是否使用了 Cypress | false |

## IDE 配置

#### 配置 VScode

1. 安装 `eslint` 插件
2. 打开 vscode 的配置文件`setting.json`,然后添加如下配置

```
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

3. 重新启动 vscode

#### 配置 WebStorm

1. 打开设置面板

   - windows: file -> settings
   - mac: Preferences

2. 找到 eslint 设置页

   - search 'eslint'
   - Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint

3. 打开 eslint
   选择第二项： Automatic ESlint configuration

4. 如果碰到`ESLint: Delete `␍`(prettier/prettier)`的问题，可以是这尝试下面方案

```javascript
$ git config --global core.autocrlf false
然后删掉本地的仓库，重新 git clone.
```

## 常见问题 ⚠️⚠️⚠️

#### 实验型功能

如果项目依赖了一些试验型的功能（装饰器，class-properties）时，需要手动安装对应的 babel 插件，并配置到 babel.config.json

```
/** babel.config.json */
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
```

#### 文件别名配置

vscode 并不支持相对路径直接跳转，可以在项目根目录下创建 jsconfig.json 

```
/** jsconfig.json */
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"]
    }
  }
}
```

## 参考资料

- [eslint 官网](https://eslint.org)
- [prettier 官网](https://prettier.io)
- [VSCode 中使用 ESlint 和 prettier 的正确姿势](https://zhuanlan.zhihu.com/p/159426292)
- [React配置eslint+Airbnb规则](https://www.jianshu.com/p/6f7a84e570aa)
