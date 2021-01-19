## 简介

基于 React 的全局 Toast，通过方法调用可以控制 Toast 显示和隐藏。

## 如何开发

```bash
# 安装依赖
npm ci

# 发布前构建
npm run build

# 发布
npm publish --access=public
```

## 如何使用

```js
// == 安装:  
npm i ync-react-toast --save

// == 引用
import Toast from 'ync-react-toast'
import 'ync-react-toast/dist/index.css'

// == 显示 Toast
Toast.info({
    content: '领取成功',
    duration: 5000,
    onClose: () => {
        alert('toast 弹窗已关闭')
    }
})

// == 关闭 Toast
Toast.close();
```

## 参数描述

| 参数名 | 类型  | 是否必须 | 说明  |  默认值 |
| --- | --- | ---- | --- | --- |
| content | string | 否 | 提示内容，为富文本格式 | '' |
| duration | number | 否 | 多久后自动关闭，单位毫秒 | 2000 |
| onClose | function | 否 | 关闭时回调函数 | ()=>{} |

## demo 地址

- [测试地址，点击打开 Toast，2秒后自动消失](https://answera.top/react/toast)
