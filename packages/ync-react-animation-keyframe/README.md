## 简介

加载图片序列的 2 种方法封装:

- JsAnimationKeyframe 方法: 原生 js 加载图片序列
- ThreeAnimationKeyframe 方法: three.js 加载图片序列

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

#### 项目依赖安装

```bash
# 安装 three.js
npm install three --save

# 安装 @qt-react/animation-keyframe
npm install ync-react-animation-keyframe
```

#### 项目中调用

```js
import React, { useState, useEffect } from 'react';
import { JsAnimationKeyframe, ThreeAnimationKeyframe } from 'ync-react-animation-keyframe';

function App() {
    let [images, setImages] = useState([]);

    // ==  图片动态加载
    useEffect(() => {
            Promise.all([
                import('../../source/01/0.jpg'),
                import('../../source/01/1.jpg'),
                import('../../source/01/2.jpg'),
                import('../../source/01/3.jpg'),
                import('../../source/01/4.jpg'),
                import('../../source/01/5.jpg'),
            ]).then((res) => {
                setImages(res.map(i => i.default));
            })
    }, [])
  
    return <>
        <JsAnimationKeyframe
            seconds={150}
            images={images}
            style={{
                width: '100%',
                height: '100vh'
            }}
        />
        <ThreeAnimationKeyframe
            seconds={75}
            images={images}
            width={(window.innerHeight - 410) * (7/5.37)}
            height={window.innerHeight - 410}
        />
    </>;
}
```

## JsAnimationKeyframe 参数描述

| 参数名 | 类型  | 是否必须 | 说明  |  默认值 |
| --- | --- | ---- | --- | --- |
| seconds | number | 否 | 每张图片切换时间，单位毫秒 | 150 |
| images | array | 否 | 动态 import 引入的图片列表 | [] |
| style | object | 否 | 被渲染的每张照片的样式对象 | {} |

## ThreeAnimationKeyframe 参数描述

| 参数名 | 类型  | 是否必须 | 说明  |  默认值 |
| --- | --- | ---- | --- | --- |
| seconds | number | 否 | 每张图片切换时间，单位毫秒 | 150 |
| images | array | 否 | 动态 import 引入的图片列表 | [] |
| width | number | 否 | 图片宽度 | window.innderWidth |
| height | number | 否 | 图片高度 | window.innderHeight |
| style | object | 否 | 容器的样式 | {} |

## demo 地址

- [JsAnimationKeyframe 实现 demo](https://sss.staging.qingting.fm/qt-material-test/index.html#/animation)
- [ThreeAnimationKeyframe 实现 demo](https://sss.staging.qingting.fm/qt-material-test/index.html#/three)
- [年度听书报告](https://bp.qingting.fm/activities/ting-report_pre/index.html)

## 参考地址

- [帧动画多种实现方式](https://www.mdeditor.tw/pl/2RQ8)
- [震惊！100张图片竟能这样加载](https://sq.163yun.com/blog/article/193855219560202240)
- [炫酷H5中序列图片视频化播放的高性能实现](https://www.zhangxinxu.com/wordpress/2018/05/image-sequence-html5-video-play)
- [Three.js 动效方案](https://zhuanlan.zhihu.com/p/113747668)
- [lottie系列文章(一)：lottie介绍](https://imweb.io/topic/5b23a745d4c96b9b1b4c4efc)
