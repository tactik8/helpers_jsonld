import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
let BASE_URL = 'http://localhost:3021/';

export class Value extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    render() {
        this.innerHTML = h.getValue(this.record, this.propertyID);
    }
}

customElements.define('kr-value', Value);

export class ValueJSON extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    render() {
        this.innerHTML = `<pre><code id="json-output">${JSON.stringify(this.record, null, 4)}</code></pre>`;
    }
}

customElements.define('kr-value-json', ValueJSON);
