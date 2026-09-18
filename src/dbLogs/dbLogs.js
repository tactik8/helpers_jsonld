import { diskHelpers } from '../diskHelpers/diskHelpers.js'

//import {jsonldBase as _h} from '../jsonldBase/jsonldBase.js'

import { _h } from '../index.js'

export class DbLogs {
    constructor(dbpath) {

        this._objectID = _h.randomUUID()
        this._isInit = false

        this.dbpath = dbpath || './testdata/dblogs'

        // indexDB 
        this.indexFilename = "indexdb.json"
        this.indexDB = []
        this.objectDB = {}

    }


    toString(){

        let content = _h.exportToString(this.indexDB)
        return content

    }


    async init() {

        if (this._isInit == true) {
            return
        }

        let indexDBContent = await diskHelpers.load(this.dbpath, this.indexFilename)
        indexDBContent = indexDBContent ?? []
        try {
            this.indexDB = JSON.parse(indexDBContent)
        } catch (err) {
            this.indexDB = []
        }

        this._isInit = true

    }

    async sync() {

        await this.init()

        let indexDBContent = JSON.stringify(this.indexDB, null, 4)
        let r = await diskHelpers.save(this.dbpath, this.indexFilename, indexDBContent)

    }

    async get(record_id) {


        await this.init()


        record_id = record_id?.record_id || record_id?.['@id'] || record_id

        // Check if action exists
        let indexAction = _h.find(this.indexDB, { "@id": record_id })

        if (!indexAction) {
            return undefined
        }

        let filename = urlToFilename(record_id)
        let actionContent = await diskHelpers.load(this.dbpath, filename)
        try {
            let actionRecord = JSON.parse(actionContent ?? {})
            let action = new _h.things.Action(actionRecord)
            return action
        } catch (err) {
            console.log('DbLogs Error get', record_id, actionContent, err)
        }

    }


    async set(action) {
        await this.init()


        // Convert to action object if not one
        if (!action?._isThingClass) {
            action = new _h.things.Action(action)
        }

        // Store to object instance db
        this.objectDB[_h.record_id(action)] = action

        // Set callback
        action.addListener(this.eventCallback.bind(this), this._objectID, true)


        // Get action currently in db
        let currentAction = this.objectDB?.[action.record_id]
        if(currentAction){
            console.log('Action found, removing listener')
            currentAction.removeListener(this._objectID)
        }


        // Remove current action
        this.indexDB = this.indexDB.filter(x => _h.record_id(action) != x?.["@id"])

        // Add new action
        this.indexDB.push(simplifiedAction(action))

        // Save action to disk
        let filename = urlToFilename(action.record_id)
        let content = JSON.stringify(action.record, null, 4)

        let r = await diskHelpers.save(this.dbpath, filename, content)
        let r2 = await this.sync()

        return
    }


    async search(filter) {

        // Search from indexDB for speed
        let summaryActions = _h.filter(this.indexDB, filter ?? {})

        // Retrieve actual records
        let actions = []
        for (let a of summaryActions) {
            let action = await this.get(a)
            actions.push(action)
        }

        return actions
    }


    async eventCallback(eventAction) {


        console.log('callback')
        let actionRecord = eventAction?.result[0] ?? eventAction?.result

        let actionID = _h.record_id(actionRecord)

        // Retrieve current action from db
        let action = this.objectDB?.[actionID] || new _h.things.Action()
        action.record = actionRecord

        console.log('cb', action)
        await this.set(action)


    }



    async post(record) {
        return await this.set(record)
    }

    get actions() {

    }

    get activeActions() {

    }
}



/**
 * Returns a subset of the action record to minimize memory footprint
 * @param {*} action 
 * @returns 
 */
function simplifiedAction(action) {

    action = action?.record || action

    action = _h.strip(action)

    return action
}





/**
 * Converts any URL or path string into a safe, valid filename.
 * @param {string} url - The URL or string to process.
 * @param {number} [maxLength=200] - Optional max character limit.
 * @returns {string} Safe filename string.
 */
function urlToFilename(url, maxLength = 200) {
    if (typeof url !== 'string' || !url.trim()) {
        return 'unnamed-file';
    }

    let result = url.trim();

    // 1. Remove literal "undefined" or "null" substrings created by prior operations
    result = result.replace(/(undefined|null)/gi, '');

    // 2. Strip protocol (http://, https://, file://, etc.)
    result = result.replace(/^[a-z]+:\/\//i, '');

    // 3. Remove accent diacritics
    result = result.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 4. Convert all non-alphanumeric chars (except dots and hyphens) to dashes
    result = result.replace(/[^a-zA-Z0-9.-]/g, '-');

    // 5. Clean up redundant, leading, and trailing characters
    result = result
        .replace(/--+/g, '-')       // Collapse multiple hyphens
        .replace(/\.\.+/g, '.')     // Collapse multiple dots
        .replace(/^[-.]+|[-.]+$|\.$/g, ''); // Strip leading/trailing dots and hyphens

    // 6. Handle edge cases
    if (!result) {
        return 'unnamed-file';
    }

    // 7. Enforce max length limit while preserving file extension if present
    if (result.length > maxLength) {
        const extIndex = result.lastIndexOf('.');
        if (extIndex > result.length - 10 && extIndex > 0) {
            const ext = result.slice(extIndex);
            result = result.slice(0, maxLength - ext.length) + ext;
        } else {
            result = result.slice(0, maxLength);
        }
    }

    result = result + '.json'
    return result;
}