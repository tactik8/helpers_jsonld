
const randomUUID = globalThis.crypto.randomUUID


import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'

import { Thing } from './thing.js'
import { getItemList } from '../../records/src/itemList.js'
import { helpers } from '../../index.js'


export class ItemList extends Thing {
    constructor(records) {
        super()
        this.record_type = "ItemList"
        if (records) {
            this.add(records)
        }
    }

    toString() {
        let content = `ItemList ${this.name || this.record_id} (${this.length()})`
        return content
    }


    get itemListElement() {
        let itemListElements = h.getValues(this.record, "itemListElement")
        itemListElements = itemListElements || []
        itemListElements = itemListElements.filter(x => x)
        itemListElements.sort((a, b) => getPosition(a, 0) - getPosition(b, 0))
        return itemListElements
    }

    set itemListElement(value) {
        value = value || []
        this.record = Thing.setValues(this.record, 'itemListElement', value)
    }

    length() {
        return this.itemListElement.length
    }

    prepend(item) {
        this.record = insertItem(this.record, item, 0)
    }
    append(item) {
        this.record = insertItem(this.record, item, getLength(this.record))
    }
    add(item) {
        this.record = insertItem(this.record, item, getLength(this.record))
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

    static clean(record){
        return clean(record)
    }

    static length(record){
        return getLength(record)
    }

    static prepend(record, item) {
        return insertItem(record, item, 0)
    }
    static append(record, item) {
        return insertItem(record, item, getLength(record))
    }
    static add(record, item) {
        return insertItem(record, item, getLength(record))
    }
    static insert(record, item, position) {
        return insertItem(record, item, position)
    }
    static delete(record, id_or_position) {
        return removeItem(record, id_or_position)
    }
    static replace(record, replacer, replacee) {
        return replaceItem(record, replacer, replacee)
    }

    static move(record, item, position) {
        return moveItem(record, item, position)
    }

    static moveUp(record, item) {
        return moveItemUp(record, item)
    }

    static moveDown(record, item) {
        return moveItemDown(record, item)
    }

    static duplicate(record, item){
        return duplicateItem(record, item)
    }
}





/**
 * Return length of itemListElements
 */
export function getLength(itemList) {

    if (!itemList) {
        return 0
    }

    let itemListElements = h.getValues(itemList, 'itemListElement')

    let result = itemListElements.length

    return result
}

/**
 * Returns position value as a number from listItem record
 * @param {*} listItem 
 */
export function getPosition(listItem, defaultValue) {

    if (!listItem) {
        return defaultValue
    }

    let p = h.getValue(listItem, 'position')

    if (p === undefined) {
        return defaultValue
    }

    p = Number(p)

    if (isNaN(p)) {
        return defaultValue
    }

    return p

}

/**
 * Sort itemListElements of an itemList record
 * @param {*} value 
 */
export function sort(itemList) {

    let itemListElements = h.getValues(itemList, 'itemListElement')

    itemListElements.sort((a, b) => getPosition(a, 0) - getPosition(b, 0))

    itemList = h.setValues(itemList, 'itemListElement', itemListElements)

    return itemList

}

/**
 * Ensure itemListElements are listItems
 * @param {*} itemList 
 */
export function ensureListItems(itemList) {

    let itemListElements = h.getValues(itemList,'itemListElement')

    // Convert items to listItems
    itemListElements = itemListElements.map(x => toListItem(x))

    itemList = helpers.setValues(itemList, 'itemListElement', itemListElements)

    return itemList

}


/**
 * Ensure all items have a position
 * @param {*} itemList 
 */
export function fixPositions(itemList) {

    let itemListElements = h.getValues(itemList, 'itemListElement')

    let runnignPositions = []

    // Set value to current position if not exist
    for (let i = 0; i < itemListElements.length; i++) {
        let p = getPosition(itemListElements[i])
        if (p === undefined) {
            itemListElements[i] = h.setValue(itemListElements[i], 'position', i)
        }
    }

    // Temp sort
    itemListElements.sort((a, b) => getPosition(a, 0) - getPosition(b, 0))

    // Reset position from 0
    for (let i = 0; i < itemListElements.length; i++) {
        itemListElements[i] = h.setValue(itemListElements[i], 'position', i)
    }

    // 
    itemList = h.setValues(itemList, 'itemListElement', itemListElements)

    return itemList

}

/**
 * Fix previous and next items from itemListElements. Assumes already sorted
 * @param {*} itemList 
 */
export function fixPreviousNextItems(itemList) {

    let itemListElements = h.getValues(itemList, 'itemListElement')

    for (let i = 0; i < itemListElements.length; i++) {
        itemListElements[i] = h.setValue(itemListElements[i], 'previousItem', h.ref(itemListElements?.[i - 1]))
        itemListElements[i] = h.setValue(itemListElements[i], 'nextItem', h.ref(itemListElements?.[i + 1]))
    }

    // 
    itemList = h.setValues(itemList, 'itemListElement', itemListElements)

    return itemList

}


/**
 * Clean itemlist record
 * @param {*} itemList 
 * @returns 
 */
function clean(itemList) {

    // Ensure itemListElements are listItems
    itemList = ensureListItems(itemList)

    // Fix positions
    itemList = fixPositions(itemList)

    // Fix previous next items
    itemList = fixPreviousNextItems(itemList)

    // Set 
    itemList = h.setValue(itemList, 'numberOfItems', getLength(itemList))

    return itemList

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

    let listItems = h.getValues(value, 'itemListElement')

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

    let listItems = h.getValues(value, 'itemListElement')

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

    if (h.record_type(value) != "ListItem") {
        value = {
            "@type": "ListItem",
            "@id": globalThis.crypto.randomUUID(),
            "item": value
        }
    }
    return value
}

function insertItem(itemList, item, position) {


    if (!itemList || !item || position === undefined) {
        return itemList
    }

    if (isNaN(position)) {
        return itemList
    }

    itemList = clean(itemList)

    let itemListElements = h.getValues(itemList, 'itemListElement')


    if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
            itemList = insertItem(itemList, item[i], position)
            position += 1
        }
        return itemList
    }


    // Ensure item is listItem
    item = toListItem(item)
    item = h.setValue(item, 'position', position)

    // Increment positions
    for (let i = 0; i < itemListElements.length; i++) {
        let p = getPosition(itemListElements[i])
        if (p >= position) {
            itemListElements[i] = h.setValue(itemListElements[i], 'position', p + 1)
        }
    }

    // insert item
    itemListElements.splice(position, 0, item)


    //
    itemList = h.setValues(itemList, 'itemListElement', itemListElements)

    itemList = clean(itemList)


    return itemList

}

function removeItem(itemList, position_or_item) {

    if (!itemList || position_or_item === undefined) {
        return itemList
    }

    itemList = clean(itemList)

    let itemListElements = h.getValues(itemList, 'itemListElement')

    let item = getItem(itemList, position_or_item)

    if (!item) {
        return itemList
    }

    // Remove item
    itemListElements = itemListElements.filter(x => h.record_id(x) != h.record_id(item))

    itemList = h.setValues(itemList, 'itemListElement', itemListElements)

    itemList = clean(itemList)

    return itemList

}


/**
 * Replace an item by another item
 * @param {*} itemList 
 * @param {*} replacer 
 * @param {*} replacee 
 * @returns 
 */
function replaceItem(itemList, replacer, replacee) {

    replacee = getItem(itemList, replacee)

    if(!replacee){
        return itemList
    }

    let position = getPosition(replacee)

    // Remove current record
    itemList = removeItem(itemList, replacee)

    // Add new record
    itemList = insertItem(itemList, replacer, position)

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

    let position = getPosition(item, 0) -1

    return moveItem(itemList, item, position)

}

function moveItemDown(itemList, item) {

    item = getItem(itemList, item)

    let position = getPosition(item, 0) + 1

    return moveItem(itemList, item, position)

}

export function duplicateItem(itemList, item) {
    item = getItem(itemList, item)
    if(!item){
        return itemList
    }
    let position = getPosition(item) + 1
    return insertItem(itemList, item, position)

}


/**
 * Search for a specific listItem by listItem id, item id or position
 * @param {*} itemList 
 * @param {*} item 
 * @returns 
 */
function getItem(itemList, itemToSearch) {

    if (!itemList || itemToSearch === undefined) {
        return undefined
    }

    let listItems = h.getValues(itemList, 'itemListElement')

    // Case 0. itemToSearch is a number, search by position
    let p = Number(itemToSearch)
    if(!isNaN(p)){
        let result = listItems.find(x => getPosition(x) == p)
        return result
    }


    // Case 1. itemToSearch is a string, an id to search
    if (typeof itemToSearch == "string") {
        let result = listItems.find(x => h.record_id(x) == itemToSearch)
        if (!result) {
            result = listItems.find(x => h.record_id(h.getValue(x, 'item')) == itemToSearch)
        }
        return result
    }

    // Case 2. itemToSearch is an itemList record
    let r = h.record_type(itemToSearch)
    if (r == "ListItem") {
        return listItems.find(x => h.record_id(x) == h.record_id(itemToSearch))
    }

    // Case 3. search in item
    return listItems.find(x => h.record_id(h.getValue(x, 'item')) == h.record_id(itemToSearch))

}

export function getItemByPosition(itemList, position) {

    if (position === undefined) {
        return undefined
    }



}