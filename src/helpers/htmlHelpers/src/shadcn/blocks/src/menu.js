

import { jsonldBase as h } from '../../../../../jsonldBase/jsonldBase.js';

import * as htmlValue from '../../../formating/htmlValue.js';

import { components } from '../../components/components.js';




export function Menu(actionRecords){

    actionRecords = h.toArray(actionRecords)

    if(!actionRecords || actionRecords.length == 0 ){ return '' }


    return components.DropdownMenu(components.DropdownMenuIcon(), actionRecords.map(x => components.MenuItemPost(h.getImageUrl(x), h.getName(x), h.getUrl(x))).join(' '))


}

export function DropdownMenu(actionRecords){



    actionRecords = h.toArray(actionRecords)

    if(!actionRecords || actionRecords.length == 0 ){ return '' }

    let lineItems = actionRecords.map(x => components.MenuItemPost(h.getImageUrl(x), h.getName(x), h.getUrl(x), h.ref(x))).join(' ')

    let content = components.DropdownMenu(components.DropdownMenuIcon(), lineItems)
    return content

}