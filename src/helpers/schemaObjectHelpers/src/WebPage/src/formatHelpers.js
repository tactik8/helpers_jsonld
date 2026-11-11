

import { jsonldBase as h} from '../../../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../../../dataHelpers/dataHelpers.js'



export function toString(value){

    return getTitle1(value)

}

export function getTitle1(value){


    return `${h.getName(value) || h.getUrl(value) || h.record_id(value) || ""}`
    
}
