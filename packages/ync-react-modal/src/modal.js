import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef, memo } from 'react';
import './modal.less';

const Modal = forwardRef(({
    footer=null,
    okText='确定',
    onOk=() => {},
    showCancel=false,
    cancelText='取消',
    onCancel=() => {},
    jsxContent=null,
    closeClickMask=false,
    showCloseIcon=false,
    closeImg='https://www.answera.top/html/close.png',
    maskStyle={},
    contentStyle={},
}, ref) => {
    let [hidden, setHidden] = useState(true);
    const maskRef = useRef();

    // == 提供给父组件调用的方法
    useImperativeHandle(ref, () => ({
        close,
        show,
    }));

    // == 点击蒙层是否关闭弹窗
    useEffect(() => {
        if (closeClickMask) {
            const dom = maskRef.current;
            if (!dom) return;
            const handler = (e) => {
                if (e.target === e.currentTarget) {
                    close();
                }
            }
            dom.addEventListener('click', handler)
            return () => {
                dom.removeEventListener('click', handler);
            }
        }
    })

    // == 渲染底部按钮
    const renderFooter = () => {
        if (footer) return footer;
        if (!showCancel) return <div className="btn-normal" onClick={submit}>{okText}</div>
        return (
            <div className="btn-container">
                <div className="btn-normal btn-cancel" onClick={cancel}>{cancelText}</div>
                <div className="btn-normal btn-ok" onClick={() => this.submit()}>{okText}</div>
            </div>
        )
    }

    // == 确定按钮点击事件
    const submit = () => {
        if (typeof onOk === 'function') onOk();
        close();
    }

    // == 取消按钮点击事件
    const cancel = () => {
        if (typeof onCancel === 'function') onCancel();
        close();
    }

    // == 关闭弹窗
    const close = () => {
        setHidden(true);
    }

    // == 显示弹窗
    const show = () => {
        setHidden(false);
    }

    return !hidden ? (
        <div className="modal-mask" style={maskStyle} ref={maskRef}>
            <div className="modal-content" style={contentStyle}>
                {showCloseIcon ? <img className="img-close" src={closeImg} alt="" onClick={close}/> : null}
                {jsxContent || null}
                {renderFooter()}
            </div>
        </div>
    ) : null;
})

export default memo(Modal);
