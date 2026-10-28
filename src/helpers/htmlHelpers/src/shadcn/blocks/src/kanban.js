import { jsonldBase as h } from '../../../../../jsonldBase/jsonldBase.js';

import * as htmlValue from '../../../formating/htmlValue.js';

import { components } from '../../components/components.js';

import { blocks} from '../blocks.js'

/**
 *
 * @param {ItemList} record
 * @param {*} propertyID - The property to make collumns with
 * @param {*} propertyvalues - The values for the columns (in order)
 */
export function Kanban(record, propertyID) {
    let items = h.getItems(record);

    return components.Kanban(
        components.KanbanHeader(
            components.KanbanTitle('Awesome Kanban', 'Fuck yeah'),
        ) +
            components.KanbanBody(
                propertyValues
                    .map((pv) => KanbanColumn(record, propertyID, pv))
                    .join(' '),
            ) +
            components.KanbanFooter(''),
    );
}

export function KanbanColumn(record, propertyID, propertyValue) {
    let items = h.getItems(record);
    items = items.filter((x) => h.getValue(x, propertyID) == propertyValue);

    return components.KanbanColumn(
        components.KanbanColumnHeader(propertyValue) +
        components.KanbanColumnBody(
                items.map((x) => KanbanCard(x)).join(' '),
            ) +
        components.KanbanColumnFooter(),
    );
}

export function KanbanCard(record) {
    return components.KanbanCard(
        components.KanbanCardHeader('xx') +
            components.KanbanCardBody(blocks.Value(h.getName(record), 'name')) +
            components.KanbanCardFooter(blocks.Value(h.getActionStatus(record), 'actionStatus')),
    );
}
