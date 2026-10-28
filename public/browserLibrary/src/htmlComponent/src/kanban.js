import { BaseElement } from './_baseElement.js';
import { h } from '/jsonldCore.js';
import { db } from '../../recordsDB/recordsDB.js';
import * as eh from '../../libraries/src/elementHelpers.js';
import { libraries } from '../../libraries/libraries.js';

let BASE_URL = 'http://localhost:3021/';

export class Kanban extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
    }


    get draggingRefs(){

        let elements = this.querySelectorAll('.dragging')
        elements = [ ...elements]

        return elements.map(x => eh.getRef(x))
    }



    render() {
        let propertyID = 'actionStatus';

        let propertyValues = [
            'PotentialActionStatus',
            'ActiveActionStatus',
            'CompletedActionStatus',
            'FailedActionStatus',
        ];

        let newHtml = h.html.shadcn.components.Kanban(
            h.html.shadcn.components.KanbanHeader(
                h.html.shadcn.components.KanbanTitle(
                    'Awesome Kanban',
                    'Fuck yeah',
                ),
            ) +
                h.html.shadcn.components.KanbanBody(

                    '<kr-workspace>'
                    + propertyValues
                        .map(
                            (pv) =>
                                `<kr-kanban-column 
                                    data-id="${h.record_id(this.record)}" 
                                    data-property-id="${propertyID}" 
                                    data-property-value="${pv}"
                                    >
                                    </kr-kanban-column>`,
                        )
                        .join(' ')
                    + '</kr-workspace>'
                ) +
                h.html.shadcn.components.KanbanFooter(''),
        );
        if (newHtml != this.innerHTML) {
            this.innerHTML = newHtml;
            libraries.draggable.initWorkspace(this);
            libraries.editable.initContainer(this)
        }
    }
}

customElements.define('kr-kanban', Kanban);

export class KanbanColumn extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.setEventListenerFlag = false;
    }

    render() {
        let newHtml = h.html.shadcn.components.KanbanColumn(
            h.html.shadcn.components.KanbanColumnHeader(this.propertyValue) +
                ` <kr-container 
                    class="grid grid-cols-1 p-3 gap-3" 
                    data-id="${this.record_id}"
                    data-property-id="item.${this.propertyID}"
                    data-property-value="${this.propertyValue}"
                >
                    <template>
                            <kr-kanban-card></kr-kanban-card>
                    </template>
                </kr-container>
            ` +
                h.html.shadcn.components.KanbanColumnFooter(),
        );
        if (newHtml != this.innerHTML) {
            this.innerHTML = newHtml;
        }

       this.initDropzone()
    }

    

    initDropzone(){
        if(this.setEventListenerFlag == true){
            return

        }
        this.setEventListenerFlag = true

        this.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        let dropzone = this
        this.addEventListener('drop', (e) => {
            e.preventDefault()

            console.log('kannban drop')

            let workspace = eh.closest(this, 'kr-workspace')
            console.log('w', workspace)

            let newRecords = []
            let newAttributes = {}
            newAttributes[this.propertyID] = this.propertyValue
            
            let listItems = [ ...workspace.querySelectorAll( '.dragging')] // eh.getDraggingElements(workspace)
            console.log('ll', listItems)
            let itemRefs = listItems.map(x => h.getItem(x)).map(x => h.ref(x))

            for(let d of itemRefs){
                newRecords.push({ ...d, ...newAttributes})
            }

            console.log('rr', newRecords)
            db.patch(newRecords)
           
            this.render()
        })

    }


}

customElements.define('kr-kanban-column', KanbanColumn);

export class KanbanCard extends BaseElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.setEventListenerFlag = false;
    }

    render() {
        let newHtml = h.html.shadcn.blocks.KanbanCard(this.record, BASE_URL);
        if (newHtml != this.innerHTML) {
            this.innerHTML = newHtml;
        }
    }
}

customElements.define('kr-kanban-card', KanbanCard);
