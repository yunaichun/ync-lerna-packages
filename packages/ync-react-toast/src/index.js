import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import Toast from './toast';

class GlobalToast {
    constructor(options) {
        this.options = options;
        this.ref = createRef();
        this.createToast();
    }
    createToast() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        ReactDOM.render(<Toast ref={this.ref} {...this.options} />, this.div);
    }
    show() {
        if (this.ref.current) this.ref.current.show();
    }
    close() {
        if (this.ref.current) this.ref.current.close();
    }
}


let globalToast = null;
export default {
    show(options) {
        if (!globalToast) globalToast = new GlobalToast(options);
        globalToast.show(options);
    },
    close() {
        if (globalToast) globalToast.close();
    }
}
