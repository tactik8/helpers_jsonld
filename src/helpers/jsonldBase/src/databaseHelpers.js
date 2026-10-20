

/**
 * Database heleprs to help retrieve record and children for deep nested records. 
 * let dbHelper = new DatabaseHelper()
 * dbHelper.parent = xx_originalRecord
 * while(dbHelper.isActive){
 *      let record_ID_to_retrieve = dbHelper.next
 *      dbHelper.add(ADD_METHOD_OR_RECORD_FROM_DB)
 * }
 * let result = dbHelper.result
 * 
 */
import { jsonldBase as h } from '../jsonldBase.js'



export class DatabaseHelper {
    constructor(parentRecord) {


        this._parentRecord
        
        this.tempDB = new h.DB()

        this._toGet = []
        this._retrieved = []

        this.#_setParentRecord(parentRecord)
    }

    *[Symbol.iterator]() {
        yield this.next
    }



    get parent(){
        return this.parentRecord
    }

    set parent(value){
        this.#_setParentRecord(value)
    }

    /**
     * Returns the next id to retrieve from db
     */
    get next(){
        return this._toGet?.[0] || undefined
    }

    /**
     * Returns all next ids to retrieve
     */
    get allNext(){
        return this._toGet
    }

    /**
     * Returns true if another id needs to be retrieved
     */
    get isActive(){
        return this._toGet.length > 0
    }


    /**
     * Returns false if another id needs to be retrieved
     */
    get isCompleted(){
        return this._toGet.length == 0 
    }

    /** Add a record retrieved from database
     * 
     */
    add(value) {
        return this.#_addRecord(value)
    }

    /**
     * Returns the expanded parent record(s)
     */
    get result(){
        return this.#_getResult()
    }


    setCompleted(record_id){
        this.#_addToRetrieved(record_id)
        this.#_removeFromToGet(record_id)
    }


    // -------------------------------------------------------------------------
    // Methods
    // -------------------------------------------------------------------------
    
    #_getResult() {

        let parentRecords = h.toArray(this.parentRecord)

        let results = parentRecords.map(x => this.tempDB.get(x?.["@id"] || x))

        results = h.simplify(results)
        
        results = h.toArray(results)

        if (h.isArray(this.parentRecord)) {
            return results
        } else {
            return results?.[0] || undefined
        }

    }



    #_setParentRecord(value){


        let p = h.toArray(value)
        p = p.map(x => typeof x == 'string' ? {"@id": x} : x)

        if(h.isArray(value) == false){
            p = p?.[0]
        }

        let record = p

        this.parentRecord = record

        // Add record to to get
        this.#_addToToGet(record)

        // Get children records
        let children = h.getChildren(record)

        // Add children to to get
        this.#_addToToGet(children)


    }

    #_addRecord(value) {

        // Clean up
        let records = h.toArray(value)
        records = records.map(x => x?.record || x)
        records = records.filter(x => x)


        // Add to tempDB
        this.tempDB.set(records)

        // add to retrieved
        this.#_addToRetrieved(records)

        // Remove from toGet
        this.#_removeFromToGet(records)

        // Get children
        let childrens = h.getChildren(records)

        // Add childrens to toGet
        this.#_addToToGet(childrens)

        return
    }


    


    /**
     * Store records retrieved
     */
    #_addToRetrieved(value) {

        // Clean up
        let record_ids = h.toArray(value)
        record_ids = record_ids.map(x => x?.record || x)
        record_ids = record_ids.map(x => x?.["@id"] || x)
        record_ids = [...new Set(record_ids)]
        record_ids = record_ids.filter(x => x)

        // Combine and Dedupe
        let retrieved = h.toArray(this._retrieved)
        let allIDs = retrieved.concat(record_ids)
        allIDs = [...new Set(allIDs)]

        // Set new value
        this._retrieved = h.toArray(allIDs)

    }


    #_addToToGet(value) {

        // Clean up
        let record_ids = h.toArray(value)
        record_ids = record_ids.map(x => x?.record || x)
        record_ids = record_ids.map(x => x?.["@id"] || x)
        record_ids = [...new Set(record_ids)]
        record_ids = record_ids.filter(x => x)

        // Filter if already retrieved
        let retrieved = h.toArray(this._retrieved)
        record_ids = record_ids.filter(x => retrieved.includes(x) == false)

        // Merge and dedupe
        let toGet =  h.toArray(this._toGet)
        record_ids = toGet.concat(record_ids)
        record_ids = [...new Set(record_ids)]

        this._toGet = h.toArray(record_ids)

        return
    }


    #_removeFromToGet(value) {

        // Clean up
        let record_ids = h.toArray(value)
        record_ids = record_ids.map(x => x?.record || x)
        record_ids = record_ids.map(x => x?.["@id"] || x)
        record_ids = [...new Set(record_ids)]
        record_ids = record_ids.filter(x => x)


        // Remove
        let toGet = h.toArray(this._toGet)
        this._toGet = toGet.filter(x => record_ids.includes(x) == false) 

        return
    }


}


export function testDB(){

}

