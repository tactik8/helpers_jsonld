

import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'

import { getDB} from './initHelpers.js'

// -------------------------------------------------------------
// Properties
// -------------------------------------------------------------




/**
 * Returns direct properties for given class
 * @param {String} name 
 * @param {Boolean} includeParents - Default true returns properties for parent class as well. 
 * @returns {String[]}
 */
export function getProperties(name, includeParents=true){

    if(includeParents==true){
    return getPropertiesAll(name)
    } else {
        return getProperties(name)
    }

}

export function getPropertiesMinimal(name){

    let db = getDB()
    return db.propertiesMinimalAllDB?.[name] || []

}


/**
 * Returns direct properties for given class
 * @param {String} name 
 * @returns {String[]}
 */
export function getPropertiesDirect(name){

    let db = getDB()

    return db.propertiesDB?.[name] || []

}

/**
 * Returns all properties for given class
 * @param {String} name 
 * @returns {String[]}
 */
export function getPropertiesAll(name){

    let db = getDB()
    return db.propertiesAllDB?.[name] || []

}





/**
 * Returns the class record of a class.
 * @param {*} className 
 * @returns 
 */
export function getProperty(name){

    let db = getDB()
    return db.propertyDB?.[name]

}


export function getPropertyDescription(name){


    let p = getProperty(name)

     if(!p){
        return []
    }

    let result = p?.['rdfs:comment'] 

    return result

}
export function getPropertyDefinition(name){


    return getPropertyDescription(name)

}

/**
 * Returns list of classes with given property (domainIncludes).
 * @param {*} name 
 * @returns 
 */
export function getClasses(name){

  
    let p = getProperty(name)

     if(!p){
        return []
    }

    let classes = p?.['schema:domainIncludes']
    classes = h.toArray(classes)
    classes = classes.map(x => x?.['@id'])
    classes = classes.map(x => x.replace('schema:', ''))
    classes = classes.map(x => x)
    return classes

}


/**
 * Return list of allowed types for given property (content of rangeIncludes).
 * @param {*} name 
 * @returns 
 */
export function getTypes(name){

    let db = getDB()
    return h.toArray(db.typesDB?.[name])
}

/**
 * Return list of allowed types for given property (content of rangeIncludes).
 * @param {*} name 
 * @returns 
 */
export function getDatatypes(name){

    return getTypes(name)
}

/**
 * Returns enum for a given property
 * @param {*} name 
 */
export function getEnum(name){

    let db = getDB()
    return db.enumDB?.[name] || []
}

