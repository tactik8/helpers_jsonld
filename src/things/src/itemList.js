
import { v4 as uuidv4 } from 'uuid';


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'


export class ItemList extends Thing {
    constructor(records) {
        super()
        this.record_type = "ItemList"
        if (records) {
            this.add(records)
        }
    }

    toString() {
        let content = `ItemList ${this.name || this.record_id} (${this.length})`
        return content
    }


    get itemListElement() {
        let itemListElements = h.getValues(this.record, "itemListElement")
        itemListElements = itemListElements || []
        itemListElements = itemListElements.filter(x => x)
        itemListElements.sort((a, b) => h.getValue(a, "position") < h.getValue(b, 'position'))
        return itemListElements
    }

    set itemListElement(value) {
        value = value || []
        this.record = h.setValues(this.record, 'itemListElement', value)
    }

    length() {
        return this.itemListElement.length()
    }

    prepend(item) {
        this.record = insertItem(this.record, item, 0)
    }
    append(item) {
        this.record = insertItem(this.record, item, this.itemListElement.length)
    }
    add(item) {
        this.record = insertItem(this.record, item, this.itemListElement.length)
    }
    insert(item, position) {
        this.record = insertItem(this.record, item, position)
    }
    delete(position) {
        this.record = removeItem(this.record, position)
    }
    replace(replacer, replacee) {
        this.record = replaceItem(this.record, replacer, replacee)
    }
    move(item, position) {
        this.record = moveItem(this.record, item, position)
    }

    moveUp(item) {
        this.record = moveItemUp(this.record, item)
    }

    moveDown(item) {
        this.record = moveItemDown(this.record, item)
    }

    // static
    static prepend(record, item) {
        return insertItem(record, item, 0)
    }
    static append(record, item) {
        returninsertItem(record, item, itemlistElements.length)
    }
    static add(record, item) {
        returninsertItem(record, item, itemlistElements.length)
    }
    static insert(record, item, position) {
        return insertItem(record, item, position)
    }
    static delete(record, position) {
        return removeItem(record, position)
    }
    static replace(record, replacer, replacee) {
        this.record = replaceItem(record, replacer, replacee)
    }

    static move(record, item, position) {
        this.record = moveItem(record, item, position)
    }

    static moveUp(record, item) {
        this.record = moveItemUp(record, item)
    }

    static moveDown(record, item) {
        this.record = moveItemDown(record, item)
    }
}



function clean(value) {

    value.itemListElement = value.itemListElement || []
    value.itemListElement = Array.isArray(value?.itemListElement) ? value.itemListElement : [value.itemListElement]

    // Convert items to listItems
    value.itemListElement = value.itemListElement.map(x => toListItem(x))

    // 


}


function getFirstItem(value) {


    let result

    let items = h.getValues(value, 'itemListElement')

    if (items.length == 0) {
        return undefined
    }


    // ---------------------------------
    // Strategy1. Based on position
    // ---------------------------------

    // filter non empty position
    result = getFirstItemByPosition(value)
    if (result) {
        return result
    }

    // ---------------------------------
    // Strategy 2. Based on previousItem
    // ---------------------------------

    // find item with previousItem empty or not in list
    result = getFirstItemBypreviousItem(value)
    if (result) {
        return result
    }

    // ---------------------------------
    // Strategy 2. Based on previousItem
    // ---------------------------------



}


function getFirstItemByPosition(value) {

    let listItems = h.getValues(itemList, 'itemListElement')

    // filter non empty position
    let t = listItems.filter(x => h.getValue(x, 'position') && h.getValue(x, 'position') != 0)

    // sort and return first one
    if (t.length > 0) {
        t.sort((a, b) => h.getValue(a, 'position') < h.getValue(b, 'position'))
        return t[0]
    }


    return undefined

}


function getFirstItemBypreviousItem(value) {

    let listItems = h.getValues(itemList, 'itemListElement')

    // find item with previousItem empty or not in list
    let record_ids = listItems.map(x => x?.["@id"])
    record_ids = record_ids.filter(x => x)

    let orphans = listItems.filter(x => record_ids.includes(h.getValue(x, 'previousItem')?.["@id"]) == false)

    if (orphans.length == 1) {
        return orphans[0]
    }

    return undefined

}


function toListItem(value) {

    if (h.getValue(value, '@type') != "ListItem") {
        value = {
            "@type": "ListItem",
            "@id": uuidv4(),
            "item": value
        }
    }
    return value
}

function insertItem(itemList, item, position) {


    if (Array.isArray(item)) {
        for (let i = 0; i < item.lemgth; i++) {
            itemList = insertItem(itemList, item[i], position)
            position += 1
        }
        return itemList
    }


    let listItems = h.getValues(itemList, 'itemListElement')
    listItems = Array.isArray(listItems) ? listItems : [listItems]
    listItems = listItems.filter(x => x)

    item = toListItem(item)

    if (!position && position != 0) {
        position = listItems.length
    }

    let previousItem = listItems.find(x => h.getValue(x, "position") == position - 1)
    let nextItem = listItems.find(x => h.getValue(x, "position") == position)


    // Increment positions
    listItems.filter(x => h.getValue(x, "position") >= position).forEach(x => h.setValue(x, "position", (h.getValue(x, "position") || 0) + 1))

    // Set previous, next items
    item = h.setValue(item, 'position', position)
    console.log('p', position, h.getValue(item.position))

    item.previousItem = null
    item.nextItem = null
    if (previousItem) {
        previousItem.nextItem = { "@id": item?.['@id'] }
        item.previousItem = { "@id": previousItem?.["@id"] }
    }
    if (nextItem) {
        nextItem.previousItem = { "@id": item?.['@id'] }
        item.nextItem = { "@id": nextItem?.["@id"] }
    }

    // Add item
    listItems.push(item)

    // Sort items
    listItems.sort((a, b) => h.getValue(a, "position") < h.getValue(b, "position"))

    //
    itemList = h.setValues(itemList, 'itemListElement', listItems)
    itemList = h.setValue(itemList, 'numberOfItems', listItems.length)
    return itemList

}

function removeItem(itemList, position) {

    let listItems = h.getValues(itemList, 'itemListElement')
    listItems = listItems.filter(x => x)

    let item = listItems.find(x => h.getValue(x, "position") == position)
    let previousItem = listItems.find(x => h.getValue(x, "position") == position - 1)
    let nextItem = listItems.find(x => h.getValue(x, "position") == position + 1)



    // Remove item
    listItems = listItems.filter(x => h.getValue(x, "position") != position)

    // Decrement positions
    listItems.filter(x => h.getValue(x, "position") > position).forEach(x => h.setValue(x, "position", h.getValue(x, "position") - 1))

    // Set previous, next items

    if (previousItem) {
        previousItem.nextItem = null
        if (nextItem) {
            previousItem.nextItem = { "@id": nextItem?.['@id'] }
        }
    }
    if (nextItem) {
        nextItem.previousItem = null
        if (previousItem) {
            nextItem.previousItem = { "@id": previousItem?.['@id'] }
        }
    }

    // Sort items
    listItems.sort((a, b) => h.getValue(a, "position") < h.getValue(b, "position"))

    //
    itemList = h.setValues(itemList, 'itemListElement', listItems)
    itemList = h.setValue(itemList, 'numberOfItems', listItems.length)
    return itemList

}



function replaceItem(itemList, replacer, replacee) {

    let r = h.record_type(replacee)

    replacee = getItem(itemList, replacee)

    // Remove current record
    itemList = removeItem(itemList, replacee)

    // Add new record
    itemList = insertItem(itemList, replacer, replacee?.position)

    return itemList
}


function moveItem(itemList, item, position) {

    item = getItem(item)

    itemList = removeItem(itemList, item)

    itemList = insertItem(itemList, item, position)

    return itemList
}

function moveItemUp(itemList, item) {

    item = getItem(itemList, item)

    let position = item?.position > 0 ? item.position - 1 : 0

    return moveItem(itemList, item, position)

}

function moveItemDown(itemList, item) {

    item = getItem(itemList, item)

    let position = (item.position || 0) + 1

    return moveItem(itemList, item, position)

}

function duplicateItem(itemlist, item) {
    item = getItem(itemList, item)
    let position = (item.position || 0) + 1
    return insertItem(itemList, item, position)

}



function getItem(itemList, item) {


    let listItems = h.getValues(itemList, 'itemListElement')
    listItems = listItems.filter(x => x)


    let r = h.record_type(item)

    if (r != "ListItem") {
        return listItems.find(x => x?.item?.['@id'] == item?.["@id"])
    } else {
        return listItems.find(x => x?.['@id'] == item?.["@id"])
    }






}