import { dotHelpers as dot } from '../../dotHelpers/dotHelpers.js';
import { jsonldBase as h } from '../jsonldBase.js';

export class DB {
    constructor() {
        this._store = new Map();
        this._subscriptions = new Map();
    }

    *[Symbol.iterator]() {
        for (const item of this._store.values()) {
            yield item;
        }
    }

    toString() {
        return 'JSONLD Array items: ' + String(this.length());
    }

    toJSON() {
        return this.records;
    }


    // -------------------------------------------------------------
    // CRUD
    // -------------------------------------------------------------

    get(record_id, expand = true) {
        record_id = record_id?.["@id"] || record_id
        return getRecord(this._store, record_id, expand);
    }

    /**
     * get record or add it to db if doesn't exist
     * @param {*} record_id 
     * @param {*} expand 
     */
    getOrCreate(record_id, expand = true){
        let r = this.get(record_id, expand)
        if(!r || h.isRef(r)){
            this.set(record_id)
            r = this.get(record_id, expand)
        }
        return r
    }



    search(filter = {}, expand = true) {
        return getRecords(this._store, filter, expand);
    }

    set(value) {
        let newRecords = h.flatten(value);

        let currentRecords = newRecords.map((x) =>
            getRecord(this._store, h.record_id(x), false),
        );
        

        for (let r of newRecords) {

            this._store = postRecord(this._store, r);
           
        }
        this._broadcastIfChanged(currentRecords, newRecords);

        return value;
    }

    post(value) {
        return this.set(value);
    }

    patch(value, skipDuplicates = true) {
        let newRecords = h.flatten(value);

        let currentRecords = newRecords.map((x) =>
            getRecord(this._store, h.record_id(x), false),
        );

        for (let r of newRecords) {
            this._store = patchRecord(this._store, r, skipDuplicates);
        }
        this._broadcastIfChanged(currentRecords, newRecords);
        return value;
    }

    
    delete(record_id) {
        let oldRecords = [this.get(record_id)]
        this._store = h.deleteRecord(this._store, record_id);
        this._broadcastIfChanged(oldRecords, [{"@id": record_id}])
    }

    
    // -------------------------------------------------------------
    // Property
    // -------------------------------------------------------------
    
    getValue(record_id, propertyID, position, defaultValue) {
        let record = this.get(record_id);
        return h.getValue(record, propertyID, position, defaultValue);
    }
    getValues(record_id, propertyID, defaultValue) {
        let record = this.get(record_id);
        return h.getValues(record, propertyID, defaultValue);
    }

    setValue(record_id, propertyID, value) {
        let record = this.get(record_id);
        if (!record) {
            record = { '@id': record_id };
        }
        record = h.clone(record);
        record = h.setValue(record, propertyID, value);
        return this.set(record);
    }

    setValues(record_id, propertyID, value) {
        let record = this.get(record_id);
        if (!record) {
            record = { '@id': record_id };
        }
        record = h.clone(record);
        record = h.setValue(record, propertyID, value);
        return this.set(record);
    }

    addValue(record_id, propertyID, value) {
        let record = this.get(record_id);
        if (!record) {
            record = { '@id': record_id };
        }
        record = h.clone(record);
        record = h.addValue(record, propertyID, value);
        return this.set(record);
    }

    addValues(record_id, propertyID, value) {
        let record = this.get(record_id);
        if (!record) {
            record = { '@id': record_id };
        }
        record = h.clone(record);
        record = h.addValues(record, propertyID, value);
        return this.set(record);
    }

    length() {
        return this._store.size;
    }

    get records() {
        return getRecords(this._store);
    }

    getRecords(expand = false) {
        return getRecords(this._store, undefined, false);
    }

    get record_ids() {
        return getRecordIDs(this._store);
    }

    // -------------------------------------------------------------
    // ItemList elements
    // -------------------------------------------------------------

    get list() {
        return {
            insert: this._list_insert.bind(this),
            upsert: this._list_upsert.bind(this),
            prepend: this._list_prepend.bind(this),
            append: this._list_append.bind(this),
            remove: this._list_remove.bind(this),
            delete: this._list_remove.bind(this),
            insertBefore: this._list_insertBefore.bind(this),
            insertAfter: this._list_insertAfter.bind(this),
            moveUp: this._list_moveUp.bind(this),
            moveDown: this._list_moveDown.bind(this),
            moveBefore: this._list_moveBefore.bind(this),
            moveAfter: this._list_moveAfter.bind(this),
            replace: this._list_replace.bind(this),
            length: this._list_length.bind(this),
            getListItems: this._list_getListItems.bind(this),
            getItemListElement: this._list_getItemListElement.bind(this),
            getItems: this._list_getItems.bind(this),
        };
    }

    _list_insert(itemList, item, position) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        itemList = h.list.insert(itemList, item, position);
        this.set(itemList);
    }

    _list_upsert(itemList, item, position) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        itemList = h.list.upsert(itemList, item, position);
        this.set(itemList);
    }

    _list_prepend(itemList, item) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        itemList = h.list.prepend(itemList, item);
        this.set(itemList);
    }
    _list_append(itemList, item) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        itemList = h.list.append(itemList, item);
        this.set(itemList);
    }

    _list_insertBefore(itemList, item, reference) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        reference = this.getOrCreate(reference);
        itemList = h.list.insertBefore(itemList, item, reference);
        this.set(itemList);
    }

    _list_insertAfter(itemList, item, reference) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        itemList = h.list.insertAfter(itemList, item, reference);
        this.set(itemList);
    }

    _list_moveBefore(itemList, item, reference) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        reference = this.getOrCreate(reference);
        itemList = h.list.moveBefore(itemList, item, reference);
        this.set(itemList);
    }

    _list_moveAfter(itemList, item, reference) {
        itemList = this.getOrCreate(itemList);
        item = this.getOrCreate(item);
        itemList = h.list.moveAfter(itemList, item, reference);
        this.set(itemList);
    }

    _list_moveUp(itemList, reference) {
        itemList = this.getOrCreate(itemList);
        itemList = h.list.moveUp(itemList, reference);
        this.set(itemList);
    }

    _list_moveDown(itemList, reference) {
        itemList = this.getOrCreate(itemList);
        itemList = h.list.moveDown(itemList, reference);
        this.set(itemList);
    }

    _list_remove(itemList, reference) {
        itemList = this.getOrCreate(itemList);
        itemList = h.list.remove(itemList, reference);
        this.set(itemList);
    }

    _list_delete(itemList, reference) {
        itemList = this.getOrCreate(itemList);
        itemList = h.list.remove(itemList, reference);
        this.set(itemList);
    }

    _list_replace(itemList, replacer, replacee) {
        itemList = this.getOrCreate(itemList);
        replacer = this.getOrCreate(replacer);
        itemList = h.list.replace(itemList, replacer, replacee);
        this.set(itemList);
    }

    _list_length(itemList) {
        itemList = this.get(itemList);
        return this.list.length(itemList);
    }

    _list_getItems(itemList) {
        itemList = this.getOrCreate(itemList);
        return this.list.getItems(itemList);
    }

    _list_getListItems(itemList) {
        itemList = this.getOrCreate(itemList);
        return this.list.getItemListElement(itemList);
    }
    _list_getItemListElement(itemList) {
        itemList = this.getOrCreate(itemList);
        return this.list.getItemListElement(itemList);
    }

    // ------------------------------------------------------------
    // Specialized functions
    // ------------------------------------------------------------

    /**
     * Get record form db, returns defautValue is only a reference
     * @param {*} value
     * @param {*} defaultValue
     */
    getRecord(value, expand = true, defaultValue = undefined) {
        let record = this.get(value);

        if (!record || h.isRef(record)) {
            return defaultValue;
        }

        return record;
    }

    /**
     * Replaces each ref of a record by the value from database
     * @param {*} value
     */
    updateRefs(value) {
        function _updateRecord(value, listOfRecordIDsFetched = {}) {
            if (h.isArray(value)) {
                return value.map((x) =>
                    _updateRecord(value, listOfRecordIDsFetched),
                );
            }

            if (h.isObject(value)) {
                if (h.isRef(value)) {
                    // check if already in cache
                    if (listOfRecordIDsFetched?.[h.record_id(value)]) {
                        return listOfRecordIDsFetched[h.record_id(value)];
                    }

                    // get from database
                    value = getRecord(value, true, value);

                    // store in cache
                    listOfRecordIDsFetched[h.record_id(value)] = value;

                    // iterate keys
                    for (let k of Object.keys(value)) {
                        value[k] = _updateRecord(value, listOfRecordIDsFetched);
                    }
                }

                return value;
            }

            // handle
            return value;
        }

        return _updateRecord(value, {});
    }

    // ------------------------------------------------------------
    // Action execution
    // ------------------------------------------------------------

    /**
     * Executes an action on a record, repalceing the refs in the action by values from the database
     * @param {Action | Action[]} action - The action to execute
     * @returns {Action | Action[]} - The action with the values replaced
     */
    execute(action) {

        let actions = h.toArray(action)

        for(let action of actions){

            // Refresh values with ones from database
            action = this.updateRefs(action);

            action = h.execute(action);
        }

        // get results
        let results = []
        for(let actions of actions){
            results = results.concat(h.getResults(action))
        }

        this.set(results);

        return actions.length == 1 ? actions[0] : actions;
    }

    // ------------------------------------------------------------
    // callbacks
    // ------------------------------------------------------------

    /**
     * Register to receive notification when a record changes
     * @param {*} record_id
     * @param {*} callbackFn
     * @returns
     */
    subscribe(record_id, callbackFn) {
        if (!record_id || record_id == '*' || record_id == 'all') {
            record_id = 'all';
        }
        let ss = this._subscriptions.get(record_id) || [];
        if (!ss.includes(callbackFn)) {
            ss.push(callbackFn);
            this._subscriptions.set(record_id, ss);
        }
        return;
    }

    /**
     * Cancel subscription
     * @param {*} record_id
     * @param {*} callbackFn
     * @returns
     */
    unsubscribe(record_id, callbackFn) {
        if (!record_id || record_id == '*' || record_id == 'all') {
            record_id = 'all';
        }
        let ss = this._subscriptions.get(record_id) || [];
        ss = ss.filter((x) => x != callbackFn);
        this._subscriptions.set(record_id, ss);
        return;
    }

    async _broadcastIfChanged(oldRecords, newRecords) {
        let toBroadcast = [];

        for(let newRecord of newRecords){
            let oldRecord = oldRecords.find(x => h.record_id(x) == h.record_id(newRecord))
            if (!h.isEqual(oldRecord, newRecord)) {
                toBroadcast.push(h.record_id(newRecord));
            }
        }

        this.broadcast(toBroadcast)
    }

    broadcast(record_ids) {
        // To array and dedupe
        record_ids = h.toArray(record_ids);
        record_ids = h.toRecordID(record_ids)
        record_ids = [...new Set(record_ids)];

        for (let record_id of record_ids) {
            let record = this.get(record_id);

            // Get callbackFunctions specific to this record_id
            let callbackFunctions = this._subscriptions.get(record_id) || [];

            // Get callbackFunction that registered for all changes and combine
            callbackFunctions = callbackFunctions.concat(this._subscriptions.get('all') || []);
            callbackFunctions = [...new Set(callbackFunctions)];
            
            // Call callbackFunctions in async mode without waiting
            for(let callbackFunction of callbackFunctions){
                this._broadcastItem(callbackFunction, record)
            }
        }
        return;
    }

    async _broadcastItem(callbackFn, record){
         try {
            return callbackFn(record)
         } catch(err){}
    }


    // ------------------------------------------------------------
    // Static
    // ------------------------------------------------------------

    static randomUUID() {
        return h.randomUUID();
    }

    static clean(value, baseUrl) {
        return h.clean(value, baseUrl);
    }

    static flatten(value) {
        return h.flatten(value);
    }

    static getValue(record, propertyID, position, defaultValue) {
        return h.getValue(record, propertyID, position, defaultValue);
    }
    static getValues(record, propertyID, defaultValue) {
        return h.getValues(record, propertyID, defaultValue);
    }

    static setValue(record, propertyID, value, position) {
        return h.setValue(record, propertyID, value, position);
    }

    static setValues(record, propertyID, values) {
        return h.setValues(record, propertyID, values);
    }

    static addValue(record, propertyID, value) {
        return h.addValue(record, propertyID, value);
    }

    static addValues(record, propertyID, values) {
        return h.addValues(record, propertyID, values);
    }

    static strip(value) {
        return h.strip(value);
    }

    static get dot() {
        return dot;
    }

    static ref(record) {
        return h.ref(record);
    }

    static simplify(value) {
        return h.simplify(value);
    }

    static isJsonld(record) {
        return h.isJsonld(record);
    }

    static isValid(record) {
        return h.isValid(record);
    }

    static isArray(value) {
        return h.isArray(value);
    }
    static setAdditionalProperty(record, propertyID, value, unitText) {
        return h.setAdditionalProperty(record, propertyID, value, unitText);
    }
    static getAdditionalProperty(record, propertyID) {
        return h.getAdditionalProperty(record, propertyID);
    }
}

// -----------------------------------------------------------------------
// DB
// -----------------------------------------------------------------------

/**
 * Post a copy of the record to store
 * @param {*} store
 * @param {*} value
 * @returns
 */
export function postRecord(store, value) {
    if (!value) {
        return;
    }

    value = h.clone(value);

    // Assign Id. if missing or wrong
    value = h.assignId(value);

    // flatten
    value = h.flatten(value);

    // convert store to map
    let storeRecord = _storeToMap(store);

    // Add to store
    for (let v of value) {
        // Compare with existing value
        let storeValue = storeRecord.get(v?.['@id']);

        // Skip if value already exists and new value doesn't have properties
        // Prevents overwriting current record with simple link
        if (storeValue && h.isRef(v)) {
            continue;
        }

        // Store value
        storeRecord.set(v?.['@id'], v);
    }

    // Convert back to array if required
    store = h._storeToOriginal(storeRecord);

    return store;
}

/**
 *
 */
export function patchRecord(store, value, skipDuplicates = true) {
    value = h.clone(value);

    // Assign Id. if missing or wrong
    value = h.assignId(value);

    // flatten
    value = h.flatten(value);

    // convert store to map
    let storeRecord = _storeToMap(store);

    // Add to store
    for (let v of value) {
        // Compare with existing value
        let storeValue = storeRecord.get(h.record_id(v));

        // combine values
        v = h.patch(storeValue, v);

        // Store value
        storeRecord.set(h.record_id(v), v);
    }

    // Convert back to array if required
    store = h._storeToOriginal(storeRecord);

    return store;
}

/**
 * Retrieves a copy of the record from db
 * @param {*} store
 * @param {*} record_or_id
 * @param {*} expandFlag
 * @returns
 */
export function getRecord(store, record_or_id, expandFlag = true) {
    //
    if (h.isArray(record_or_id)) {
        return record_or_id.map((x) => getRecord(store, x, expandFlag));
    }

    //
    let record_id = h._utilGetId(record_or_id);

    // convert store to map
    let storeRecord = _storeToMap(store);

    // Retrieve record
    let record = storeRecord.get(record_id);

    // Expand record
    if (expandFlag == true) {
        record = h.expand(storeRecord, record);
    }

    // Copy record
    record = h.clone(record);

    // Return
    return record;
}

/**
 * Retrieves a copy of the records in db
 * @param {*} store
 * @param {*} filters
 * @param {*} expandFlag
 * @returns
 */
export function getRecords(store, filters, expandFlag = true) {
    // convert store to map
    let storeRecord = _storeToMap(store);

    let records = Array.from(storeRecord.values());

    if (filters) {
        records = records.filter((x) => h.evaluate(x, filters));
    }

    if (expandFlag == true) {
        records = h.expand(storeRecord, records);
    }

    // Clone record
    records = h.clone(records);

    return records;
}

function deleteRecord(store, record_or_id) {
    let record_id = h._utilGetId(record_or_id);

    let storeRecord = _storeToMap(store);

    record_id = Array.isArray(record_id) ? record_id : [record_id];

    record_id.map((x) => storeRecord.delete(x));

    return store;
}

function length(store) {
    let storeRecord = _storeToMap(store);
    return storeRecord.size;
}

/**
 * Get all record_ids from db
 * @param {*} store
 * @returns
 */
function getRecordIDs(store) {
    let records = getRecords(store);

    let recordIDs = records.map((x) => h.record_id(x));

    return recordIDs;
}

// ------------------------------------------------------------
// Map helper functions
// ------------------------------------------------------------

/**
 * Converts an array into a map (if required)
 * @param {object[] | Map} store List of objects or Map of objects
 * @returns {Map} The records in a Map object.
 * storeRecord:
 *      - store: the actual map
 *      - storeIsMapFlag: flag that identifies original format
 */
export function _storeToMap(store) {
    // Return storeRecord  if already a map
    if (
        store instanceof Map ||
        Object.prototype.toString.call(store) === '[object Map]'
    ) {
        return store;
    }

    // Assume is is an array
    store = h.toArray(store);

    // remove ref records
    store = store.filter((x) => h.isRef(x) === false);

    // Convert to map
    store = store || [];
    store = Array.isArray(store) ? store : [store];
    let newStore = new Map();

    // Store values, Handle duplicate records
    for (let x of store) {
        let record_id = h.record_id(x);
        if (!record_id) {
            continue;
        }

        // Merge if record is already there
        if (newStore.has(record_id)) {
            x = h.merge(newStore.get(record_id), x, true);
        }

        // Duplicate x
        newStore.set(record_id, x);
    }

    store = newStore;

    return store;
}

/**
 * Converts store to original array
 * @param {*} store
 */
export function _storeToOriginal(store) {
    //

    store = Array.from(store.values());
    return store;
}
