## 简介

- eslint, tslint, prettier 配置方案

## 如何扩展此 cli 工具

```bash
# 安装依赖
npm ci

# 本地测试
npm run test

# link 测试
npm run link-test

# 发布
npm publish
```

## 如何使用此 cli 工具

```bash
# 全局安装
npm install ync-common-eslint-config -D

# 使用方法
npx ync-eslint-config -t -a -f react
```

## 参数描述

| 参数名 | 说明 | 默认值 |
| --- | --- | --- |
| -t， --typescript | 项目是否使用了 Typescript , 为 true 则添加 Typescript 相关 Eslint 配置 | false |
| -f， --framework `<name>` | 项目使用的框架 , 不传则使用 Javascript 相关 Eslint 配置 | false |
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
},
"javascript.format.enable": true,
"javascript.eslint.enable": true
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

因为开启了 eslint 代码检测，项目会根据配置文件对代码进行检查，如果项目依赖了一些试验型的功能（装饰器，class-properties）时，需要手动安装对应的`babel`插件，并在 `babel.config.json` 跟 `webpack.config.js`里进行相应的配置。

```
/** babel.config.json */
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}

/** webpack.config.js */
{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react']],
      },
    },
  ],
},
```

⚠️ 如果`package.json`里面对`babel`做了相应的配置时，记得删除，它会覆盖`babel.config.json`里的配置。

#### 文件的别名配置

在写代码的时候，为了不想写太多`../../../`的相对路径，我们会定义一些 alias，然后在 webpack 里进行配置，但 vscode 并不支持直接跳转，可以在项目根目录下创建 `jsconfig.json` 文件，然后输入下面配置。

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

⚠️ 值得注意的是，我们的 alias 都必须使用`～/`而不是`@`来定义项目根目录，这么做的原因主要是`@`一般用于 npm 私有包的前缀。

另外我们的 eslint 配置里，为了统一，默认的 alias 采用的也是`~/`。

如果`jsconfig.json`文件报错，可以重启一些 ide。[issue](https://stackoverflow.com/questions/63124462/how-to-fix-file-node-modules-dotenv-types-not-found-error-coming-from-j)

#### 对于 bable 插件命名问题

babel 官方对插件命名已经更新，[来源](https://www.freecodecamp.org/news/were-nearing-the-7-0-babel-release-here-s-all-the-cool-stuff-we-ve-been-doing-8c1ade684039/)
我们在使用一些插件时，建议使用 babel 新命名的包。
如下：

```
/** 建议使用 */
- @babel/plugin-proposal-class-properties

/** 不建议使用 */
- babel-plugin-transform-class-properties.
```

## 参考资料

- [eslint 官网](https://eslint.org)
- [prettier 官网](https://prettier.io)
