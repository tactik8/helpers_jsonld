import { jsonldBase as h } from '../jsonldBase.js';






export function toString(value){


    if(isItemList(value)){
        return toStringItemList(value)
    }
    return toStringListItem(value)

}
export function toStringItemList(value){

    let content = [`ItemList ${h.getValue(value, 'name') || h.record_id(value)}`]

    let items = getItemListElement(value)

    content = content.concat(items.map(x => toStringListItem(x)))
    

    return content.join('\n')

}
export function toStringListItem(value){

    return `${getPosition(value)} - ${h.getValue(value, 'item.name') || h.record_id(value)}`

}


export function isItemList(value) {
    return h.record_type(value) === 'ItemList';
}

/**
 * Enure or converts a value to itemList
 * @param {*} value
 */
export function toItemList(itemList) {

    // If list of values
    if (isItemList(itemList) == false) {
        let items = h.toArray(itemList);
        itemList = {
            '@type': 'ItemList',
            '@id': h.randomUUID(),
            itemListElement: items.map((x, i) => toListItem(x, i)),
        };
        return clean(itemList) 
    }

    return clean(itemList)


}


/**
 * Cleans itemList
 * @param {*} itemList 
 */
export function clean(itemList){

    // Ensure @id
    itemList = h.setValueIfNull(itemList, '@id', h.randomUUID())


    // Clean items
    let items = getItemListElement(itemList)    
    items = items.map(x => toListItem(x))
    items = ensurePositions(items)
    items = ensurePreviousNextItem(items)

    itemList = setItemListElement(itemList, items)


    // Set nb of items
    itemList = h.setValue(itemList, 'numberOfItems', items.length)


    return itemList

}


/**
 * Return no of items
 * @param {*} itemList 
 * @returns 
 */
export function length(itemList){
    return getItemListElement(itemList).length
}


/**
 * Returns array with itemListElement
 * @param {*} itemList
 * @returns {ListItem[]}
 */
export function getItemListElement(itemList) {
    let result = h.getValues(itemList, 'itemListElement');
    return result || []
}

/**
 * Returns array with itemListElement
 * @param {*} itemList
 * @returns {ListItem[]}
 */
export function getILE(itemList){
    return getItemListElement(itemList)
}


/**
 * Set itemListElement
 * @param {*} itemList 
 * @param {*} values 
 * @returns {ItemList}
 */
export function setItemListElement(itemList, values) {

    values = h.toArray(values);

    values = values.map((x, i) => toListItem(x));

    values = ensurePositions(values)
    values = ensurePreviousNextItem(values)

    itemList =  h.setValues(itemList, 'itemListElement', values);
    itemList = h.setValue(itemList, 'numberOfItems', values.length)

    return itemList
}


// crud
/**
 * Insert an item at a given position. Removes the listItem first to ensure no duplicates. 
 * @param {*} itemList
 * @param {*} item
 * @param {*} position
 * @returns {ItemList} The itemlist with item inserted
 */
export function insert(itemList, item, position) {

    // 
    itemList = ensurePositions(itemList)


    // Deal with array
    if(h.isArray(item)){
        let p = position
        for(let i of item){
            itemList = insert(itemList, i, p)
            if(p || p === 0){ p +=1 }
        }
        return itemList
    }

    // Format item
    item = toListItem(item, position);


    // Remove item (in case it was in the list already)
    itemList = remove(itemList, item)


    // Get items
    let items = getItemListElement(itemList);


    // Ensure position variable is set
    position = position ?? getMaxPosition(items)
    position = position ?? items.length
    position = position <= 0 ? position : 0;


    // Increment positions
    items = incrementPositions(items, position);

    // Sort items
    items = sort(items);

    // Splice in new item
    items.push(item)

    // Return new list
    itemList = setItemListElement(itemList, items);


    //
    return itemList;
}

/**
 * Adds an item before a reference item
 * @param {ItemList} itemList 
 * @param {ListItem | Thing} item 
 * @param {number | ListItem | Thing} referenceItem 
 * @returns {ItemList} The modified ItemList
 */
export function insertBefore(itemList, item, referenceItem){

    // Handle arrays
    if(h.isArray(item)){
        for(let i of item){
            itemList = insertBefore(itemList, i, referenceItem)
        }
        return itemList
    }

    //
    let refItem = find(itemList, referenceItem)
    if(!refItem){
        return insert(itemList, item)
    }
    let position = getPosition(refItem)
    return insert(itemList, item, position)
}

/**
 * Adds an item after a reference item
 * @param {ItemList} itemList 
 * @param {ListItem | Thing} item 
 * @param {number | ListItem | Thing} referenceItem 
 * @returns {ItemList} The modified ItemList
 */
export function insertAfter(itemList, item, referenceItem){

     // Handle arrays
    if(h.isArray(item)){
        for(let i of item){
            itemList = insertAfter(itemList, i, referenceItem)
        }
        return itemList
    }

    //

    let refItem = find(itemList, referenceItem)
    if(!refItem){
        return insert(itemList, item)
    }
    let position = getPosition(refItem)
    return insert(itemList, item, position + 1)
}


/**
 * Insert an item at the beginning
 * @param {ItemList} itemList 
 * @param {ListItem | Thing} item 
 * @returns {ItemList} The modified ItemList
 */
export function prepend(itemList, item){

     // Handle arrays
    if(h.isArray(item)){
        for(let i = item.length -1; i >= 0; i-- ){
            itemList = prepend(itemList, item?.[i], referenceItem)
        }
        return itemList
    }

    //
    
    return insert(itemList, item, 0 )
}

/**
 * Insert an item at the end
 * @param {ItemList} itemList 
 * @param {ListItem | Thing} item 
 * @returns {ItemList} The modified ItemList
 */
export function append(itemList, item){

     // Handle arrays
    if(h.isArray(item)){
        for(let i of item){
            itemList = append(itemList, i, referenceItem)
        }
        return itemList
    }

    //

    let items = getItemListElement(itemList)

    if(items.length == 0){
        return insert(itemList, item, 0 )
    }

    let maxPosition = getMaxPosition(itemList) 

    if(maxPosition || maxPosition === 0){
        return insert(itemList, item, maxPosition + 1 )
    }

    return insert(itemList, item, items.length )

}

/**
 * Insert an item at the end
 * @param {ItemList} itemList 
 * @param {ListItem | Thing} item 
 * @returns {ItemList} The modified ItemList
 */
export function add(itemList, item){
    return append(itemList, item)

}

/**
 * Move an item to a new position
 * @param {*} itemList 
 * @param {*} item 
 * @param {*} position 
 * @returns {ItemList} The modified ItemList
 */
export function move(itemList, item, position){
    return insert(itemList, item, position )
}


/**
 * Move up an item
 * @param {*} itemList 
 * @param {*} reference 
 * @returns {ItemList} The modified ItemList
 */
export function moveUp(itemList, reference){

    let item = find(itemList, reference)
    let position = getPosition(item)

    if(position == 0){
        return itemList
    }
    return insert(itemList, item, position -1)

}

/**
 * Move down an item
 * @param {*} itemList 
 * @param {*} reference 
 * @returns {ItemList} The modified ItemList
 */
export function moveDown(itemList, reference){

    let item = find(itemList, reference)
    let position = getPosition(item)
    let maxPosition = getMaxPosition(itemList)
    
    if(position == maxPosition){
        return itemList
    }

    return insert(itemList, item, position +1)

}

/**
 * Move an item before the reference Item
 * @param {*} record 
 * @param {*} itemToMove 
 * @param {*} item 
 * @returns {ItemList} The modified ItemList
 */
export function moveBefore(itemList, itemToMove, referenceItem){
    return insertBefore(itemList, itemToMove, referenceItem)
}

/**
 * Move an item after a reference item
 * @param {*} itemList 
 * @param {*} itemToMove 
 * @param {*} referenceItem 
 * @returns {ItemList} The modified ItemList
 */
export function moveAfter(itemList, itemToMove, referenceItem){
    return insertAfter(itemList, itemToMove, referenceItem)

}

/**
 * Replaces all same items in the list with the new item
 * @param {*} itemList 
 * @param {*} item 
 * @returns {ItemList} The modified ItemList
 */
export function replace(itemList, replacer, replacee){

    let listItems = getItemListElement(itemList)

    let newItems = []
    for(let i of listItems){
        let item = getItem(i)
        if(h.isSame(item, replacee)){
            item = setItem(i, replacer)
        }
        newItems.push(i)
    }
    return setItemListElement(itemList, newItems)
}

/**
 * Add an item if not already there or replace
 * @param {*} itemList 
 * @param {*} item 
 * @returns {ItemList} The modified ItemList
 */
export function upsert(itemList, item){
    let currentItem = find(itemList, item)

    if(!currentItem){
        return append(itemList, item)
    }
    return replace(itemList, item, h.ref(item))
    
}

/**
 * Creates a copy with same item
 * @param {*} itemList 
 * @param {*} item 
 * @returns {ItemList} The modified ItemList
 */
export function duplicate(itemList, item){

    if(isListItem(item)){
        let listItem = find(item)
        item = getItem(listItem)
    }

    return append(itemList, item)

}



/**
 *
 * @param {ItemList} itemList
 * @param {number | ListItem | Thing} itemToRemove Position or ListItem or item to remove
 * @returns {ItemList} The modified ItemList
 */
export function remove(itemList, itemToRemove) {
    

    if(h.isArray(itemToRemove)){
        for(let i of itemToRemove){
            itemList = remove(itemList, i)
        }
        return itemList
    }

    // Ensure positions 
    itemList = ensurePositions(itemList)
    
    // Get items
    let items = getItemListElement(itemList);

    // Find item to remove
    let item = find(items, itemToRemove)

    // 
    let p = getPosition(item)

    // Remove item from list 
    items = items.filter(x => h.isSame(x, item) == false)

    // Decrement items
    items = decrementPositions(items, p);

    // Return new list
    itemList = setItemListElement(itemList, items);


    return itemList

}

/**
 * Returns array of listItems that meets filter
 * @param {ItemList} itemList 
 * @param {object} filter - The filter to apply on item
 * @returns {ListItem[]} An array of listitems that meet filter
 */
export function filter(itemList, filter){

    
    let listItems = h.getItemListElement(itemList)

    if(filter){
        listItems = h.filter(listItems, filter)
    }


    return listItems

}




// -------------------------------------------------------------
// ListItems
// -------------------------------------------------------------

/**
 * Returns true if listItem
 * @param {*} value
 * @returns {boolean} True if ListItem, false
 */
export function isListItem(value) {
    return h.record_type(value) === 'ListItem';
}

/**
 * Ensure or converts a value to a listItem record
 * @param {ListItem | Thing} value
 * @returns {ListItem} ListItem record
 */
export function toListItem(value, position) {
    // If item, format as ListItem
    if (isListItem(value) == false) {
        value = {
            '@type': 'ListItem',
            '@id': h.randomUUID(),
            item: value,
        };
    }

    // Ensure @id
    value = h.setIfNull(value, '@id', h.randomUUID());

    // Ensure position if provided
    if (position || position === 0) {
        value = h.setValue(value, 'position', position);
    }

    return value;
}

/**
 * Returns true if position of a < position of b
 * @param {*} a
 * @param {*} b
 * @returns {boolean} True if position is lt, false
 */
export function lt(a, b) {
    let aPosition = getPosition(a) ?? undefined;
    let bPosition = getPosition(b) ?? undefined;

    if (aPosition === undefined && bPosition === undefined) {
        return false;
    }

    if (aPosition === undefined) {
        return true;
    }
    if (bPosition === undefined) {
        return false;
    }

    return aPosition < bPosition;
}

/**
 * Returns true if position of a < position of b
 * @param {ListItem} a
 * @param {ListItem} b
 * @returns
 */
export function gt(a, b) {
    let aPosition = getPosition(a) ?? undefined;
    let bPosition = getPosition(b) ?? undefined;

    if (aPosition === undefined && bPosition === undefined) {
        return false;
    }

    if (aPosition === undefined) {
        return false;
    }
    if (bPosition === undefined) {
        return true;
    }

    return aPosition > bPosition;
}

/**
 *
 * @param {ListItem[] | ItemList} listItems
 * @returns {ListItem[] | ItemList}
 */
export function sort(listItems) {
    if (isItemList(listItems)) {
        let itemList = listItems;
        let items = getItemListElement(itemList);
        let newItems = sort(items);
        return setItemListElement(itemList, newItems);
    }

    function sortFn(a, b) {
        if (lt(a, b) == true) {
            return -1;
        }
        if (gt(a, b) == true) {
            return 1;
        }
        return 0;
    }

    listItems.sort((a, b) => sortFn(a, b));

    return listItems;
}

/**
 * Finds first listItem based on a position, ListItem or Item record
 * @param {ItemList | ListItem[]} items
 * @param {number | ListItem | Thing} itemToFind
 */
export function find(items, itemToFind) {
    if (h.isNull(itemToFind)) {
        return undefined;
    }

    if (h.isNumber(itemToFind)) {
        return findByPosition(items, itemToFind);
    }

    if (isListItem(itemToFind)) {
        return findByListItem(items, itemToFind);
    }

    if(!h.record_type(itemToFind)){
        return findByItem(items, itemToFind) || findByListItem(items, itemToFind)
    }

    return findByItem(items, itemToFind) 
}

/**
 * Find s an item by its position
 * @param {ItemList | ListItems[]} items
 * @param {number} position
 * @returns
 */
export function findByPosition(items, position) {
    if (isItemList(items)) {
        items = getItemListElement(items);
    }

    items = h.toArray(items);

    if (items.length == 0) {
        return undefined;
    }

    for (let i of items) {
        if (getPosition(i) == position) {
            return i;
        }
    }

    return undefined;
}

/**
 * Find s an item by its position
 * @param {ItemList | ListItems[]} items
 * @param {*} listItemToFind - The ref or record of listItem to find
 * @returns
 */
export function findByListItem(items, listItemToFind) {
    if (isItemList(items)) {
        items = getItemListElement(items);
    }

    items = h.toArray(items);

    if (items.length == 0) {
        return undefined;
    }

    for (let i of items) {
        if (h.isSame(i, listItemToFind)) {
            return i;
        }
    }

    return undefined;
}

/**
 * Find s an item by its position
 * @param {ItemList | ListItems[]} items
 * @param {*} itemToFind
 * @returns
 */
export function findByItem(items, itemToFind) {
    if (isItemList(items)) {
        items = getItemListElement(items);
    }

    items = h.toArray(items);

    if (items.length == 0) {
        return undefined;
    }

    for (let i of items) {
        let item = getItem(i)
        if (h.isSame(item, itemToFind)) {
            return i;
        }
    }

    return undefined;
}

/**
 * Returns the position in number of listItem
 * @param {ListItem} listItem
 */
export function getPosition(listItem) {
    let position = h.getValue(listItem, 'position');
    position = Number(position);

    position = isNaN(position) ? undefined : position;

    return position;
}
/**
 * Returns the position in number of listItem
 * @param {ListItem} listItem
 */
export function setPosition(listItem, value) {
    value = Number(value);

    value = isNaN(value) ? undefined : value;

    value = value < 0 ? 0 : value;

    let currentPosition = getPosition(listItem);

    // Skip if same
    if (currentPosition == value) {
        return listItem;
    }

    listItem = h.setValue(listItem, 'position', value);

    return listItem;
}

/**
 * Increment position starting (inclusive) of fromPosition
 * @param {*} itemList
 * @param {*} fromPosition
 */
export function incrementPositions(items, fromPosition) {
    fromPosition = fromPosition ?? 0;

    if (isItemList(items)) {
        let itemList = items;
        items = getItemListElement(itemList);
        let newItems = incrementPositions(items, fromPosition);
        return setItemListElement(itemList, newItems);
    }

    let newItems = [];
    for (let i of items) {
        let position = getPosition(i);

        if (position >= fromPosition) {
            i = setPosition(i, position + 1);
        }
        newItems.push(i);
    }

    return newItems;
}

/**
 * Increment position starting (inclusive) of fromPosition
 * @param {*} itemList
 * @param {*} fromPosition
 */
export function decrementPositions(items, fromPosition) {
    fromPosition = fromPosition ?? 0;

    if (isItemList(items)) {
        let itemList = items;
        items = getItemListElement(itemList);
        let newItems = decrementPositions(items, fromPosition);
        return setItemListElement(itemList, newItems);
    }

    let newItems = [];
    for (let i of items) {
        let position = getPosition(i);

        if (position != 0 && position >= fromPosition) {
            i = setPosition(i, position - 1);
        }
        newItems.push(i);
    }

    return newItems;
}

/**
 * Ensures all items have a position. Starts at the lowest position found.
 * @param {*} items
 * @param {number | undefined} startPosition override
 */
export function ensurePositions(items, startPosition) {
    if (isItemList(items)) {
        let itemList = items;
        items = getItemListElement(itemList);
        let newItems = ensurePositions(items);
        return setItemListElement(itemList, newItems);
    }

    items = h.toArray(items)
    if(items.length ==0){
        return items
    }

    // Sort tiems base don existing positions (if any)
    // Will keep original order if no positions found
    items = sort(items)

    let currentPosition = startPosition ?? getMinPosition(items) ?? 0

    let newItems = []
    for(let i of items){
        i = setPosition(i, currentPosition)
        currentPosition += 1
        newItems.push(i)
    }
    
    return newItems;

}

/**
 * Returns lowest position
 * @param {*} items
 * @returns
 */
export function getMinPosition(items) {
    if (isItemList(items)) {
        let itemList = items;
        let items = getItemListElement(itemList);
        return getMinPosition(items);
    }

    items = h.toArray(items)
    let positions = items.map((x) => getPosition(x));

    positions = positions.filter((x) => isNaN(x) == false);

     if(positions.length == 0){
        return undefined
    }

    let smallest = Math.min(...positions);

    return smallest;
}

/**
 * Returns highest position
 * @param {*} items
 * @returns
 */
export function getMaxPosition(items) {
    if (isItemList(items)) {
        let itemList = items;
        items = getItemListElement(itemList);
        return getMaxPosition(items);
    }

    items = h.toArray(items)
    let positions = items.map((x) => getPosition(x));
    positions = positions.filter((x) => isNaN(x) == false);

     if(positions.length == 0){
        return undefined
    }

    let highest = Math.max(...positions);

    return highest;
}



export function ensurePreviousNextItem(items){
     if (isItemList(items)) {
        let itemList = items;
        items = getItemListElement(itemList);
        let newItems = ensurePreviousNextItem(items);
        return setItemListElement(itemList, newItems);
    }


    items = h.toArray(items)

    items = sort(items)

    let newItems = []
    for(let i of items){

        let p = getPosition(i)
        
        let previousItem = find(items, p - 1)
        let previousRef = previousItem ? h.ref(previousItem) : undefined
        i = h.setValue(i, 'previousItem', previousRef)

        let nextItem = find(items, p + 1)
        let nextRef = nextItem ? h.ref(nextItem) : undefined
        i = h.setValue(i, 'nextItem', nextRef)

        newItems.push(i)
    }
    
    return newItems
}



/**
 * Get list of all items
 * @param {ListItem[]|ItemList} listItems 
 */
export function getItems(listItems){
     if (isItemList(listItems)) {
        let itemList = listItems;
        let items = getItemListElement(itemList);
        let newItems = getItems(items);
        return newItems
    }

    let items = listItems.map(x => getItem(x))
    return items
}

/**
 * Set items (or add)
 * @param {*} items 
 * @param {*} itemsToAdd 
 * @returns 
 */
export function setItems(items, itemsToAdd){
    if (isItemList(items)) {
        let itemList = items;
        items = getItemListElement(itemList);
        let newItems = setItems(items);
        return setItemListElement(itemList, newItems);
    }

    items = h.toArray(items)

    itemsToAdd = h.toArray(itemsToAdd)

    itemsToAdd = itemsToAdd.map(x => toListItem(x))

    let results = items.concat(itemsToAdd)

    return results
}



/**
 * Get item value
 * @param {*} listItem
 * @returns
 */
export function getItem(listItem) {
    return h.getValue(listItem, 'item');
}



/**
 * Set item value
 * @param {*} listItem
 * @param {*} value
 * @returns
 */
export function setItem(listItem, value) {
    return h.setValue(listItem, 'item', value);
}
