
import { BaseElement} from './_base.js'
import {h} from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js'

export class RecordsContainer extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    update(){

         let listItemElement = h.getValues(this.record, 'itemListElement')

        for (let l of listItemElement) {
            content += `
            
                <kr-listitem data-record-id="${h.record_id(l)}" data-controller-id="${this.id}">
                
                </kr-listitem> 

            `;
        }

    }
  


}

customElements.define('kr-recordscontainer', RecordsContainer);
