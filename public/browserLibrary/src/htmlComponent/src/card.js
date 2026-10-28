import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
let BASE_URL = 'http://localhost:3021/';

export class Card extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    render() {
        let newHtml = h.html.shadcn.blocks.Card(this.record, BASE_URL);
        if (newHtml != this.innerHTML) {
            this.innerHTML = newHtml;
        }
    }
}

customElements.define('kr-card', Card);
