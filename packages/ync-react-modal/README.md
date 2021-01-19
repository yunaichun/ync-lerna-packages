## 简介

基于 React 的全局弹窗，通过方法调用可以控制弹窗显示和隐藏。

## 如何开发

```bash
# 安装依赖
npm ci

# 发布前构建
npm run build

# 发布
npm publish
```

## 如何使用

```js
// == 安装:  
npm i ync-react-modal --save

// == 引用
import Modal from 'ync-react-modal'
import Modal from 'ync-react-modal/dist/index.css'

// == 打开弹窗
Modal.show({
    footer: null,
    okText: '确定',
    onOk: () => {},
    showCancel: false,
    cancelText: '取消',
    onCancel: () => {},
    jsxContent: null,
    closeClickMask: false,
    showCloseIcon: false,
    closeImg: 'https://www.answera.top/html/close.png',
    maskStyle: {},
    contentStyle: {},
});

// == 关闭弹窗
Modal.close();
```

## 参数描述
| 参数名 | 类型  | 是否必须 | 说明  |  默认值 |
| --- | --- | ---- | --- | --- |
| footer | React.element | 否 | 底部自定义按钮 | null |
| okText | string | 否 | 右边按钮文字 | 确定 |
| onOk | function | 否 | 右边按钮回调 | () => {} |
| showCancel | bool | 否 | 是否显示左边按钮 | true |
| cancelText | string | 否 | 左边按钮文字 | 取消 |
| onCancel | function | 否 | 左边按钮回调 | () => {} |
| jsxContent | React.element | 否 | 中间部分主体内容 | null |
| closeClickMask | bool | 否 | 点击蒙层是否关闭弹窗| false |
| showCloseIcon | bool | 否 | 是否显示右上角关闭按钮 | false |
| maskStyle | object | 否 | 透明背景样式 | {} |
| contentStyle | object | 否 | 主体内容样式 | {} |

## demo 地址

- [测试地址，点击打开弹窗，1秒后自动关闭](https://answera.top/react/modal)
