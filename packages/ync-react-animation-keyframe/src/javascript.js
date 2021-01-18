import React, { useEffect, useState } from 'react';

export const JsAnimationKeyframe = ({seconds=150, images=[], style={}}) => {
  let [index, setIndex] = useState(0);
  let timer = null;
  
  useEffect(() => {
    if (images.length) loopAnimation();

    return () => {
        if (timer) clearTimeout(timer);
    }
  }, [images]);

  const loopAnimation = () => {
    const render = () => {
      // == 渲染
      setIndex(index++);

      // == 下一桢再次渲染
      if (index === images.length) index = 0;
      setTimeout(render, seconds);
      // window.requestAnimationFrame(render);
    };
    render();
  }

  return images.map((i, j) => {
    return <img 
        key={i}
        src={i}
        style={{...style, display: j === index ? 'block' : 'none'}}
    />
  });
}
