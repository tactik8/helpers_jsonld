import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
let BASE_URL = 'http://localhost:3021/';

export class Input extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.initializedFlag = false;
    }

    get inputElement() {
        return this.querySelector('input');
    }

    render() {
        if (!this.inputElement) {
            this.innerHTML = `<h2>Some input</h2><input type="text" name="name" value=""></input>`;
        }

        this.inputElement.style.color = 'black';
        this.inputElement.value = h.getValue(this.record, this.propertyID);
        this.initListener();
    }

    initListener() {
        if (this.initializedFlag == true) {
            return;
        }
        this.initializedFlag = true;

        this.inputElement.addEventListener('input', (event) => {
            let r = { '@id': this.record_id };
            r[this.propertyID] = this.inputElement.value;
            db.patch(r);
        });
    }
}

customElements.define('kr-input', Input);
