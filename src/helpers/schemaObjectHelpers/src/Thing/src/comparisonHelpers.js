import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';



export function lt(a, b){

    let nameA = h.getValue(a, 'name') || h.record_id(a)
    let nameB = h.getValue(b, 'name') || h.record_id(b)

    return nameA < nameB

}


export function gt(a, b){

    let nameA = h.getValue(a, 'name') || h.record_id(a)
    let nameB = h.getValue(b, 'name') || h.record_id(b)

    return nameA > nameB

}