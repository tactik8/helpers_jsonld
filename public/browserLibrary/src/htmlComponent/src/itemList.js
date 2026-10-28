import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';

export class ItemList extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    render() {
        // Skip render if already initialized
        let container = this.querySelector('kr-container');
        if (container && container.dataset.id == this.record_id) {
            return;
        }

        //
        this.innerHTML = `

            <header> 

                <div>
                    <kr-dropdown-menu data-id="${this.record_id}" />    
                </div>
            </header>

            <body>
            <kr-container class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6" data-id="${this.record_id}">
                <template>
                <kr-card></kr-card>
                <kr-dowpdown-menu></kr-dropdown-menu>
                </template>
            </kr-container>
            </body>
        `;
    }
}

customElements.define('kr-itemlist', ItemList);
