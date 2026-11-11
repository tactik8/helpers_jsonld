

import { getDB} from './initHelpers.js'


// -------------------------------------------------------------
// Classes
// -------------------------------------------------------------


/**
 * Returns the class record of a class.
 * @param {*} name 
 * @returns 
 */
export function getClass(name){

    let db = getDB()
    return db.classDB?.[name]


}

/**
 * Returns definitionof class
 * @param {*} name 
 * @returns 
 */
export function getDefinition(name){

    let p = getClass(name)

     if(!p){
        return []
    }

    let result = p?.['rdfs:comment'] 

    return result

}


/**
 * Return the class record of the parent class of the given class
 * @param {*} name 
 * @returns {String} The simplified name of the parent class.
 */
export function getParent(name){

    let db = getDB()
    return db.parentDB?.[name]

}
    

/**
 * Returns all parent classes in a list
 * @param {*} className 
 * @returns {String[]} A list of simplified parent names. 
 */
export function getParents(name){
    let db = getDB()
    return db.parentsDB?.[name]
}


export function getChildren(name){

    return getChildrenAll(name)
}

export function getChildrenDirect(name){

    let db = getDB()
    return db.childrenDB?.[name] || []
}

export function getChildrenAll(name){

    let db = getDB()
    return db.childrenAllDB?.[name] || []
}

