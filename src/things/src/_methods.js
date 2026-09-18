import { _h as h } from '../../index.js'






export function mergeThings(thing1, thing2) {


    // Error handling
    if (thing1 && !thing2) {
        return thing1
    }

    if(h.isArray(thing2)){
        for(let t of thing2){
            thing1 = mergeThings(thing1, t) 
        }
        return thing1
    }


    if (isThingInstance(thing1) == false || isThingInstance(thing2) == false) {
        throw new Error("One of the things is not a Thing class object");
    }

    // Combine callbacks
    thing1._callbacks = { ...thing1._callbacks, ...thing2._callbacks}

    // Combine propertyValues
    thing1.record = { ...thing1._record, ...thing2._record }

    
    return thing1

}


/**
 * Returns true if value is an instance of a Thing or related class
 * @param {} thing 
 * @returns 
 */
export function isThing(value){
    return value?._isThingClass == true
}
