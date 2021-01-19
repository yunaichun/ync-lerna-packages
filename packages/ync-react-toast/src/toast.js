import React, { forwardRef, useImperativeHandle, useState, useEffect, memo } from 'react';
import './toast.less';

const Toast = forwardRef(({
    content='',
    duration=2000,
    onClose=()=>{}
}, ref) => {
    let [hidden, setHidden] = useState(true);
    let timer = null;

    // == 提供给父组件调用的方法
    useImperativeHandle(ref, () => ({
        close,
        show,
    }));

    // == 清除定时器
    useEffect(() => {
        if (!hidden) {
            timer = setTimeout(() => {
                if (typeof onClose === 'function') onClose();
                close();
                clearTimeout(timer);
            }, duration);

            return () => {
                if(timer) clearTimeout(timer);
            }
        }
    }, [hidden])

    // == 关闭 Toast
    const close = () => {
        setHidden(true);
        if(timer) clearTimeout(timer);
    }

    // == 显示 Toast
    const show = () => {
        setHidden(false);
    }

    return !hidden ? (
        <div className="toast-mask">
            <div className="toast-content">
                <div className="content">
                    <div dangerouslySetInnerHTML={{__html: content}} />
                </div> 
            </div>
        </div>
    ) : null;
})

export default memo(Toast);
