import { jsonldBase as h } from '../jsonldBase.js';

/**
 * Execute sequentially, using the value from the previous step as starting point.
 * If hasPart, assumes only a container and executes sub actions sequentially, returning result from last action
 * @param {*} action 
 * @returns 
 */
export function execute(action) {

   
    // Handle array
    if (h.isArray(action)) {

        let db = new h.DB()
        db.set(action)
        let newActions = []
        for(let a of action){
            a = db.get(a)
            let newA = execute(a)
            newActions.push(newA)
            db.set(h.getResults(newA))
        }
       
        return newActions
        
    }

    // Handle subparts
    let parts = h.getValues(action, 'hasPart')

    if(parts.length > 0){

        // handle itemLists
        let itemLists = parts.map(x => h.list.toItemList(x))

        // if itemList
        let db = new h.DB()
        db.set(itemLists)
        let newItemLists = []
        
        // Iterate itemLists
        let lastAction
        let isFailed = false
        for(let i of itemLists){

            let listItems = h.list.getItemListElement(i)

            // Iterate items
            for(let li of listItems){

                let a = h.getItem(li)
                a = db.get(a)

                // skip if previous step failed
                if(isFailed == true){
                    a = h.setFailed(a, 'Previous step failed')
                    i = h.list.replaceItem(i, li, lastAction)
                }

                if(isFailed == false){
                    lastAction = execute(a)
                    isFailed = h.isFailed(lastAction)
                    i = h.list.replaceItem(i, li, lastAction)
                    db.set(h.getResults(lastAction))
                }
            }

            newItemLists.push(i)
        }
       
        action = h.setValues(action, 'hasPart', newItemLists)

        let resultsFromLastAction = h.getResults(lastAction)
        // Set results from last action as result from this action
        action = h.setCompleted(action, resultsFromLastAction )
        return action
    }




    //
    let record_type = h.record_type(action);

    // Record
    if (record_type == 'UpsertAction') {
        return upsertAction(action);
    }

    // Properties
    if (record_type == 'ReplaceAction') {
        return replaceAction(action);
    }
    if (record_type == 'UpdateAction') {
        return updateAction(action);
    }
    


    // ItemList
    if (record_type == 'InsertAction') {
        return insertAction(action);
    }
    if (record_type == 'InsertBeforeAction') {
        return insertBeforeAction(action);
    }
    if (record_type == 'InsertAfterAction') {
        return insertAfterAction(action);
    }

    if (record_type == 'MoveUpAction') {
        return moveUpAction(action);
    }
    if (record_type == 'MoveDownAction') {
        return moveDownAction(action);
    }
    if (record_type == 'AppendAction') {
        return appendAction(action);
    }
    if (record_type == 'PrependAction') {
        return prependAction(action);
    }
    if (record_type == 'ReplaceAction') {
        return replaceAction(action);
    }
    if (record_type == 'DuplicateAction') {
        return duplicateAction(action);
    }
    if (record_type == 'DeleteAction') {
        return deleteAction(action);
    }
}

// --------------------------------------------------------------
// Record property actions
// --------------------------------------------------------------

/**
 * Update a record (targetCollection) with the values in object
 * @param {*} action
 * @param {*} recordsDB
 * @returns
 */
function updateAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }


    for (let t of targets) {
        for (let o of objects) {
            // merge values
            let propertyID = h.getValue(o, 'propertyID')
            let value = h.getValue(o, 'value')
            t = h.setValues(t, propertyID, value )
        }

        // Add to result
        action = h.addValue(action, 'result', t);
    }


    // if no targets, return objects as results
    if(targets.length == 0){
        action = h.addValues(action, 'result', objects);
    }

    // set action completed
    action = h.setCompleted(action);

    //
    return action;
}


function upsertAction(action){

    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }


    // Add to itemList if t is defined
    for (let t of targets) {
        t = h.list.upsert(t, objects)
        action = h.addValue(action, 'result', t);
    }

    // Simply return objects in result if no targets
    if(targets.length == 0){
        action = h.addValues(action, 'result', objects);
    }

    // set action completed
    action = h.setCompleted(action);

    return action


}




// --------------------------------------------------------------
// ItemList Actions
// --------------------------------------------------------------



export function insertAction(action){


    let objects = h.getObjects(action);
    let toLocation = h.getValue(action, 'toLocation')
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.insert(t, o, toLocation);
        }
        action = h.addValue(action, 'result', t);
    }

    // Simply return objects in result if no targets
    if(targets.length == 0){
        action = h.addValues(action, 'result', objects);
    }



    action = h.setCompleted(action);

    return action;

}

export function insertBeforeAction(action){

    let objects = h.getObjects(action);
    let toLocation = h.getValue(action, 'toLocation')
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.insertBefore(t, o, toLocation);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;

}

export function insertAfterAction(action){

    let objects = h.getObjects(action);
    let toLocation = h.getValue(action, 'toLocation')
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.insertAfter(t, o, toLocation);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;

}

export function prependAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.prepend(t, o);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;
}

export function appendAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.append(t, o);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;
}

export function moveUpAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.moveUp(t, o);
        }
        action = h.addValue(action, 'result', t);
    }

    action = h.setCompleted(action);

    return action;
}

export function moveDownAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.moveDown(t, o);
        }
        action = h.addValue(action, 'result', t);
    }
    
    action = h.setCompleted(action);

    return action;
}

export function replaceAction(action) {
    let target = h.targetCollection(action);
    let replacer = h.getValue(action, 'replacer');
    let replacee = h.getValue(action, 'replacee');

    if(replacee.length ==0){
        action = h.setFailed(action, 'No replacee provided in action')
        return action
    }

    target = h.list.replace(target, replacer, replacee);
    action = h.addValue(action, 'result', target);

    action = h.setCompleted(action);

    return action;
}

export function duplicateAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.duplicate(t, o);
        }
        action = h.addValue(action, 'result', t);

    }
    
    action = h.setCompleted(action);

    return action;
}

export function deleteAction(action) {
    let objects = h.getObjects(action);
    let targets = h.targetCollections(action);

    if(objects.length ==0){
        action = h.setFailed(action, 'No object provided in action')
        return action
    }

    for (let t of targets) {
        for (let o of objects) {
            t = h.list.remove(t, o);
        }
        action = h.addValue(action, 'result', t);
    }
    

    action = h.setCompleted(action);

    return action;
}

export  function searchAction(action){

    let queries = h.getValues(action, 'query')
    let targets = h.targetCollections(action);

     for (let t of targets) {
        let items = h.list.getItemListElement(t)
        for (let q of queries) {
             items = h.list.filter(items, q);
        }
        let newT = h.list.toItemList(items)
        action = h.addValue(action, 'result', newT);
    }

    action = h.setCompleted(action);

    return action;

}