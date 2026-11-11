

import * as lh from '../action.js'
import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';



export function lt(action1, action2){


    let startTime1 = lh.getStartTime(action1)
    let startTime2 = lh.getStartTime(action2)

    if(startTime1 && startTime2){
        return startTime1 < startTime2
    }
    if(startTime1 && !startTime2){
        return true
    }
     if(!startTime1 && startTime2){
        return false
    }

    let endTime1 = lh.getEndTime(action1)
    let endTime2 = lh.getEndTime(action2)

    if(endTime1 && endTime2){
        return endTime1 < endTime2
    }
    if(endTime1 && !endTime2){
        return true
    }
     if(!endTime1 && endTime2){
        return false
    }


    let name1 = h.getValue(action1, 'name')
    let name2 = h.getValue(action2, 'name')

    if(name1 && name2){
        return name1 < name2
    }
    if(name1 && !name2){
        return true
    }
     if(!name1 && name2){
        return false
    }


    return h.record_id(action1) < h.record_id(action2)

}

export function gt(action1, action2){


    let startTime1 = lh.getStartTime(action1)
    let startTime2 = lh.getStartTime(action2)

    if(startTime1 && startTime2){
        return startTime1 > startTime2
    }
    if(startTime1 && !startTime2){
        return true
    }
     if(!startTime1 && startTime2){
        return false
    }

    let endTime1 = lh.getEndTime(action1)
    let endTime2 = lh.getEndTime(action2)

    if(endTime1 && endTime2){
        return endTime1 > endTime2
    }
    if(endTime1 && !endTime2){
        return true
    }
     if(!endTime1 && endTime2){
        return false
    }


    let name1 = h.getValue(action1, 'name')
    let name2 = h.getValue(action2, 'name')

    if(name1 && name2){
        return name1 > name2
    }
    if(name1 && !name2){
        return true
    }
     if(!name1 && name2){
        return false
    }


    return h.record_id(action1) > h.record_id(action2)

}