import * as lh from '../action.js'
import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';


export function sort(values){


    function sortFn(a, b){

        if(lh.lt(a, b) == true){
            return -1
        }
        if(lh.gt(a, b) == true){
            return 1
        }
        return 0
        
    }

    values.sort(sortFn)
    return values

}


export function getPotential(items){
    items = h.toArray(items)
    return items.filter(x => lh.isPotential(x)) 

}

export function getActive(items){
    items = h.toArray(items)
    return items.filter(x => lh.isActive(x)) 
    
}

export function getCompleted(items){
    items = h.toArray(items)
    return items.filter(x => lh.isCompleted(x)) 
    
}

export function getFailed(items){
    
    items = h.toArray(items)
    return items.filter(x => lh.isFailed(x)) 
}