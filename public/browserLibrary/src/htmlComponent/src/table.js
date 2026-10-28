import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
let BASE_URL = 'http://localhost:3021/';

export class Table extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }


    get properties(){
        return h.html.shadcn.blocks.getPropertiesFromRecords(this.record)
    }
    
    get headers(){
        return h.html.shadcn.blocks.getHeadersFromProperties(this.properties)
    }
    render() {

        return


       // let newHtml2 = h.html.shadcn.blocks.Table(this.record, BASE_URL)
        let newHtml = h.html.shadcn.components.Table(

            h.html.shadcn.blocks.TableHeader(this.record)

            + h.html.shadcn.components.TableBody(
                `
                <kr-container class="" data-id="${this.record_id}">
                    <template>
                        <kr-table-row></kr-table-row>
                    </template>
                </kr-container>
                `
            )

        )

        if (newHtml != this.innerHTML) {
            this.innerHTML = newHtml;
        }
    }
}

customElements.define('kr-table', Table);



export class TableRow extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    
    render() {

        return


        let table = this.closest('kr-table')
        let containerItem = this.closest('kr-container-item')


        let newHtml = h.html.shadcn.blocks.TableRow(containerItem.record, table.properties, BASE_URL)

           

        if (newHtml != this.innerHTML) {
            this.innerHTML = newHtml;
        }
    }
}

customElements.define('kr-table-row', TableRow);
