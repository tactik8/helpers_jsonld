
import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'

import * as dp from '../methods/dataPointMethods.js'
import { recordIdHelpers } from '../../../recordIdHelpers/recordIdHelpers.js'

export class Base {
    constructor(record, record_type) {

        this._record = {}
        this._baseRecordType = record_type


        if (record?.record) {
            this.record = record.record
        }
        if (record?.['@type']) {
            this.record = record
        }
        if (typeof record == 'string') {
            this.record_id = record
        }

        if (record_type) {
            this.record_type = record_type
        }

    }

    toString() {
        return `c: ${this.c} d: ${this.d} ${this.datafeed} ${this.datafeedItem}`
    }

    toJSON() {
        return this.record
    }


    init() {

        if(Object.keys(this._record).filter(x => x!="@type").length < 1){
            return 
        }

        // set record_id
        if (!this._record?.["@id"] || (this._record?.["@id"] || "").startsWith('_:')) {
            this._record["@id"] = recordIdHelpers.get(this._record)
        }
        // Set record_type
        this._record['@type'] = this._record?.['@type'] ?? this._baseRecordType

    }

    get record() {
        let record = {}
        Object.keys(this._record).forEach(x => record[x] = this._record[x]?.record ?? this._record[x])
        for (let k of Object.keys(record)) {
            if (record[k] === null || record[k] === undefined) {
                delete record[k]
            }
        }
        return record
    }

    set record(value) {
        this._record = {}
        value = value ?? {}
        Object.keys(value).forEach(x => this._record[x] = value[x]?.record ?? value[x])
        this.init()
    }

    getValue(propertyID) {
        this.init()
        let value = this._record?.[propertyID]
        value = h.toArray(value)?.[0]
        return value
    }

    setValue(propertyID, value) {
        this._record[propertyID] = value
        this.init()
    }

    get record_type() {
        return this.getValue('@type')
    }

    set record_type(value) {
        return this.setValue('@type', value)
    }

    get record_id() {
        return this.getValue('@id')
    }

    set record_id(value) {
        return this.setValue('@id', value)
    }

    get name() {
        return this.getValue('name')
    }

    set name(value) {
        return this.setValue('name', value)
    }

    get url() {
        return this.getValue('url')
    }

    set url(value) {
        return this.setValue('url', value)
    }

    get email() {
        return this.getValue('email')
    }

    set email(value) {
        return this.setValue('email', value)
    }
}