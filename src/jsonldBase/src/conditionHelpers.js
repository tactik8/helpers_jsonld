
import { dotHelpers as dot } from '../../dotHelpers/dotHelpers.js'


import { jsonldBase as h} from '../jsonldBase.js'




//
export function evaluate(record, condition) {

    let conditions = []

    for (let k of Object.keys(condition)) {

        let propertyID = k
        let values = condition?.[k]
        values = h.toArray(values) 
        // handle and & or
        if (propertyID == "$and") {
            return values.every(x => evaluate(record, x))
        }
        if (propertyID == "$or") {
            return values.some(x => evaluate(record, x))
        }

        // Extract conditions

        for (let v of values) {
            let c = _extractCondition(record, propertyID, v)
            conditions.push(c)
        }



    }
    // test conditions
    let result = conditions.every(x => testCondition(x.r, x.p, x.o, x.v))

    return result
}


function testCondition(record, propertyID, operator, value) {

   
    try {
        let recordValue = dot.get(record, propertyID)

        if(typeof recordValue == 'string'){
            recordValue = recordValue.trim()
        }
        if(typeof value == 'string'){
            value = value.trim()
        }
        recordValue = isNaN(Number(recordValue)) ? recordValue : Number(recordValue)
        value = isNaN(Number(value)) ? value : Number(value)


        if (operator == "$equal") {
            return recordValue == value
        }
        if (operator == "$lt") {
            return recordValue < value
        }
        if (operator == "$gt") {
            return recordValue > value
        }
        if (operator == "$le") {
            return recordValue <= value
        }
        if (operator == "$ge") {
            return recordValue >= value
        }
        if (operator == "$same") {
            return recordValue?.['@id'] && recordValue?.['@id'] === value?.['@id']
        }
        if (operator == "$includes") {
            return recordValue.includes(value)
        }

    } catch (error) {
        console.log('err', error)
        return false
    }

}


function _extractCondition(record, propertyID, value) {

    let c = {
        r: record,
        p: propertyID,
        o: null,
        v: null
    }

    if (typeof value == "string") {
        if (value.startsWith('$')) {
            c = {
                r: record,
                p: propertyID,
                o: value.split(' ')[0],
                v: value.split(' ').slice(1).join(' ')
            }
        } else {
            c = {
                r: record,
                p: propertyID,
                o: "$equal",
                v: value
            }
        }
    }

    if (typeof value == "object") {
        c = {
            r: record,
            p: propertyID,
            o: Object.keys(value)?.[0],
            v: value?.[Object.keys(value)?.[0]]
        }
    }

    return c
}

