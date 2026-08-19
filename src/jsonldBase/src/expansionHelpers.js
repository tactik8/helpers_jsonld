

import { jsonldBase as h } from '../jsonldBase.js'




export function expand(store, record) {


    function _expand(store, record, cache) {

        let storeRecord = h._storeToMap(store)

        if (Array.isArray(record)) {
            return record.map(x => _expand(storeRecord, x, cache))
        }

        if (!record?.['@id']) {
            return record
        }

        let newRecord = cache.get(record?.['@id'])
        if (newRecord) {
            return { "@id": newRecord?.["@id"] }
        }


        newRecord = h.getRecord(storeRecord, record?.['@id'], false)
        record = newRecord || record

        cache.set(newRecord?.['@id'], newRecord)

        for (let k of Object.keys(record)) {
            if (k == "previousItem" || k == "nextItem") {
                continue
            }
            record[k] = _expand(storeRecord, record[k], cache)
        }


        return record

    }

    let cache = new Map()
    return _expand(store, record, cache)
}

/**
 * Reeplaces all children objects by @id
 * @param {*} record 
 * @returns 
 */
export function strip(record) {

    function _strip(record, maxLevel, currentLevel) {

        if (Array.isArray(record)) {
            return record.map(x => _strip(x, maxLevel, currentLevel))
        }

        if (record?.['@type'] || record?.['@id']) {

            if (currentLevel > maxLevel) {
                return { "@id": record?.['@id'] }
            } else {
                let newRecord = {}
                for (let k of Object.keys(record).sort()) {
                    newRecord[k] = _strip(record?.[k], maxLevel, currentLevel + 1)
                }
                return newRecord
            }

        }
        return record
    }

    return _strip(record, 0, 0)

}


export function flatten(record) {


    function _flatten(record) {

        let records = []

        if (Array.isArray(record)) {
            records = record.map(x => _flatten(x))
            records = records.flat()
            return records
        }

        if (!record?.['@id'] && !record?.['@type']) {
            return []
        }

        for (let k of Object.keys(record)) {
            if (k == "@id") {
                continue
            }
            if (k == "previousItem") {
                continue
            }
            if (k == "nextItem") {
                continue
            }

            let values = record[k]
            values = Array.isArray(values) ? values : [values]

            record[k] = []
            for (let v of values) {
                if (v?.["@id"]) {
                    record[k].push({ "@id": v?.['@id'] })
                } else {
                    record[k].push(v)
                }
                records.push(_flatten(v))
            }
        }
        records = [record].concat(records)
        records = records.flat()

        // Remove values with only @id
        // records = records.filter(x => Object.keys(x).some(k => k !== '@id'))

        return records
    }


    record = h.clone(record)

    return _flatten(record)

}







export function simplify(value) {


    function _simplify(value) {

        if(value === undefined ){  return undefined }

        if (Array.isArray(value)) {

            value = value.map(x => simplify(x))
            value = value.filter(x => x !== undefined)

            if (value.length == 1) {
                value = value[0]
                return value
            }
            if (value.length == 0) {
                return undefined
            }

            return value
        }

        if (value && typeof value == "object" && Object.keys(value).length > 0) {

            let newValue = {}
            for (let k of Object.keys(value)) {

                let r = simplify(value?.[k])

                if(r !== undefined){
                     newValue[k] = r
                }

               
            }
            return newValue

        }

        return value
    }

    value = h.clone(value)

    let result = _simplify(value)
    return result
}