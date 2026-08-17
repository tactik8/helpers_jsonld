/**
 * BrandDesign custome record for w3c design token
 */


const randomUUID = globalThis.crypto.randomUUID

import { records } from '../../records/records.js'

import * as idhelper from '../../recordIdHelpers/recordIdHelpers.js'

import * as h from '../../jsonldBase/jsonldBase.js'
import { Thing } from './thing.js'

import { CreativeWork } from './creativeWork.js'
import { Message } from './message.js'
import { timeStamp } from 'console';


export class BrandDesign extends Thing {

    constructor(record) {
        super()
        this.record_type = "BrandDesign"
        if(record?.['@type'] == "BrandDesign"){
            this.record = record
        }
    }

    toString(){
        return toString(this.record)
    }


}



function toString(record){

    return `
    
    `

}


