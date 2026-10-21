import { BaseElement } from './_base.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';

export class MainSelector extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    /**
     * Returns the id of checked
     */

    get itemSelectors() {
        let selectors = [...document.getElementsByTagName('kr-itemselector')];
        selectors.filter((x) => x.controllerID == this.controllerID);
        return selectors;
    }

    get checkboxID() {
        return this.id + '-checkbox';
    }

    get checkbox() {
        return document.getElementById(this.checkboxID);
    }

    get checked() {
        return this.checkbox.checked;
    }

    set checked(value) {
        this.checkbox.checked = value;
    }

    setChecked() {
        this.checkbox.checked = true;
    }

    setUnchecked() {
        this.checkbox.checked = false;
    }

    /**
     * Return refs of checked items
     * @returns
     */
    getChecked() {
        let selectors = this.itemSelectors.filter((x) => x.isChecked == true);
        return selectors.map((x) => x.ref);
    }

    checkAll() {
        return this.itemSelectors.forEach((x) => x.setChecked());
    }

    uncheckAll() {
        return this.itemSelectors.forEach((x) => x.setUnchecked());
    }

    render() {
        let html = `

           <!-- 1. Checkbox Selector -->
            <input type="checkbox" id="${this.checkboxID}" class="w-5 h-5 accent-blue-500 bg-white border border-slate-700 rounded-md focus:ring-0 cursor-pointer transition-all">
                    
    `;
        this.innerHTML = html;
        this.addEventListener()
    }

    addEventListener() {
        let main = this
        this.checkbox.addEventListener('change', function () {
            if (main.checked) {
                main.checkAll();
            } else {
                main.uncheckAll();
            }
        });
    }
}

customElements.define('kr-mainselector', MainSelector);

export class ItemSelector extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    get checked() {
        return this.checkbox.checked;
    }

    set checked(value) {
        this.checkbox.checked = value;
    }

    setChecked() {
        this.checkbox.checked = true;
    }

    setUnchecked() {
        this.checkbox.checked = false;
    }

    get checkboxID() {
        return this.id + '-checkbox';
    }

    get checkbox() {
        return document.getElementById(this.checkboxID);
    }

    render() {
        let html = `
          
            <!-- 1. Checkbox Selector -->
            <input type="checkbox" id="${this.checkboxID}" class="w-5 h-5 accent-blue-500 bg-white border border-slate-700 rounded-md focus:ring-0 cursor-pointer transition-all">
                      
    `;
        this.innerHTML = html;
    }
}

customElements.define('kr-itemselector', ItemSelector);
