import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';

class GlobalModal {
    constructor(options) {
        this.options = options;
        this.ref = createRef();
        this.createModal();
    }
    createModal() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        ReactDOM.render(<Modal ref={this.ref} {...this.options} />, this.div);
    }
    show() {
        if (this.ref.current) this.ref.current.show();
    }
    close() {
        if (this.ref.current) this.ref.current.close();
    }
}


let globalModal = null;
export default {
    show(options) {
        if (!globalModal) globalModal = new GlobalModal(options);
        globalModal.show(options);
    },
    close() {
        if (globalModal) globalModal.close();
    }
}
