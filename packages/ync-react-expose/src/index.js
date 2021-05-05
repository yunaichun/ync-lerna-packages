import React, { memo, useState, useRef, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Expose = ({ expose, seconds, openDebugger, children }) => {
  const ref = useRef();
  const [last, setLast] = useState(null);
  const [rendered, setRendered] = useState(false);
  const [offset, setOffset] = useState({});
  const processStyle = ['background: magenta; color: white'];
  const detailStyle = ['color: blue;', 'color: green; font-weight: bolder;'];

  const domDetail = () => {
    if (openDebugger) {
      const node = ref.current;
      if (!node) return false;
      const dom = ref.current.node;
      const { height, width, top, bottom, left, right } = dom.getBoundingClientRect();
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
      console.log('%c============dom detail============', ...processStyle);
      console.log('%cdom is: ', 'color: blue;', dom);
      console.log(`%cdom height is: %c${height}`, ...detailStyle);
      console.log(`%cdom width is: %c${width}`, ...detailStyle);
      console.log(`%cdom bottom to window top is: %c${bottom}`, ...detailStyle);
      console.log(`%cdom top to window bottom is: %c${windowHeight - top}`, ...detailStyle);
      console.log(`%cdom right to window left is: %c${right}`, ...detailStyle);
      console.log(`%cdom left to window right is: %c${windowWidth - left}`, ...detailStyle);
      console.log('%c============dom detail============', ...processStyle);
    }
  }

  const timeDetail = (now, last) => {
    if (openDebugger) {
      const [now_hours, now_minutes, now_seconds] = [now.getHours(), now.getMinutes(), now.getSeconds()];
      const [last_hours, last_minutes, last_seconds] = [last.getHours(), last.getMinutes(), last.getSeconds()];
      const interval = (now.getTime() - last.getTime()) / 1000;
      console.log('%c============time detail============', ...processStyle);
      console.log(`%cnow: %c${now_hours}:${now_minutes}:${now_seconds}`, ...detailStyle);
      console.log(`%clase: %c${last_hours}:${last_minutes}:${last_seconds}`, ...detailStyle);
      console.log(`%cnow - last: %c${interval}s`, ...detailStyle);
      console.log('%c============time detail============', ...processStyle);
    }
  }

  const domInWindow = () => {
    const node = ref.current;
    if (!node) return false;
    const dom = ref.current.node;
    const { height, width, top, bottom, left, right } = dom.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const bottomInWondow = bottom > height / 2;
    const topInWondow = windowHeight - top > height / 2;
    const rightInWondow = right > width / 2;
    const leftInWondow = windowWidth - left > width / 2;
    return bottomInWondow && topInWondow && rightInWondow && leftInWondow;
  }

  const onVisiblityChange = (visible) => {
    if (typeof expose !== 'function' && typeof seconds !== 'number') {
      console.error('expose needs to bu function and seconds needs tobe number');
      return;
    }

    openDebugger && console.log(`%celement visible: ${visible}`, ...processStyle);

    // == 标记页面已经完成渲染
    if (!visible && !rendered) {
      openDebugger && console.log('%cpage rendered', ...processStyle);
      setRendered(true);
      return;
    }

    // == 设置漏出 50% 才算元素可见
    const node = ref.current;
    if (node) {
      const dom = ref.current.node;
      const { height, width } = dom.getBoundingClientRect();
      if (height) setOffset({ top: height / 2, bottom: height / 2, left: width / 2, right: width / 2 });
    }

    // == 页面初始曝光
    if (visible && !last) {
      domDetail();
      expose();
      return;
    }

    // == 离开页面后超过 seconds 秒之后被曝光打点
    const now = new Date();
    if (visible) {
      timeDetail(now, last)
      if (last && now.getTime() - last.getTime() > seconds * 1000) {
        domDetail();
        expose();
        setLast(null);
      }
    } else {
      setLast(now);
    }
  }

  useEffect(function () {
    const onPageAppear = window.onPageAppear;
    window.onPageAppear = async () => {
      const inWindow = domInWindow();
      if (inWindow) {
        if (openDebugger) domDetail();
        expose();
        setLast(null);
      } else {
        const now = new Date();
        setLast(now);
      }
      onPageAppear();
    }
  }, [])

  return (
    <VisibilitySensor
      ref={ref}
      partialVisibility={true}
      offset={offset}
      onChange={visible => onVisiblityChange(visible)}
    >
      {children}
    </VisibilitySensor>
  );
}

const ExposeContainer = ({ expose = () => { }, seconds = 10, openDebugger = false, children }) => {
  return <Expose expose={expose} seconds={seconds} openDebugger={openDebugger}>{children}</Expose>
}

export default memo(ExposeContainer);
