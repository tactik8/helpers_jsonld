import data from '../data/schemaJsonldDefinitions.json' with { type: 'json' };
import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'





let minimalProperties = {

    "Thing": ['name', 'description', 'image', 'url'],
    "Organization": ['brand', 'email', 'logo'],
    "Product": ['model', 'mpn', 'offers', 'sku'],
    "Offer": ['category', 'price', 'priceCurrency', 'itemOffered', 'seller', 'review'],
    "Demand": ['category', 'price', 'priceCurrency', 'itemOffered', 'seller', 'review'],
    "ItemList": ['itemListElement', 'numberOfItems'],
    "ListItem": ['item', 'position'],
    "Person": ['email', 'title', 'address', 'worksFor'],
    "Action": ['object', 'actionStatus', 'startTime', 'endTime', 'result'],
    "CreativeWork": ['author', 'hasPart', 'headline', 'text', 'datPublished'],
    "Review": ['itemReviewed', 'reviewRating', 'reviewAspect', 'reviewBody'],
    "Rating": ['author', 'ratingValue', 'ratingExplanation'],
    "Event": ['eventStatus', 'startDate', 'endDate', 'location', 'offers', 'organizer', 'about'],
    "Place": ['address', 'review'],
    "MediaObject": ['contentUrl', 'duration', 'embedUrl']

}



let db 
let dbInitializedFlag = false

export function getDB(){
    if(dbInitializedFlag == true){
        return db
    }

    return init()
}


function init(){

    if(dbInitializedFlag == true){
        return db
    }
    dbInitializedFlag = true

    db = {}
    db.jsonldPropertyDB = initPropertyDB()
    db.jsonldClassDB = initClassDB()
    db.parentDB = initClassParentsDB(db.jsonldClassDB)
    db.childrenDB = initClassChildrenDB(db.parentDB)
    db.childrenAllDB = initClassChildrenAllDB(db.childrenDB)
    db.propertiesDB = initClassPropertiesDB()
    db.propertiesAllDB = initClassPropertiesAllDB(db.propertiesDB, db.jsonldClassDB, db.parentDB)

    db.propertiesMinimalDB = initClassPropertiesMinimalDB()
    db.propertiesMinimalAllDB = initClassPropertiesMinimalAllDB(db.propertiesMinimalDB, db.jsonldClassDB, db.parentDB)


    db.enumDB = initPropertyEnumDB()
    db.typesDB = initPropertyTypesDB()
    

    return db

}






// -------------------------------------------------------------
// Classes Init
// -------------------------------------------------------------

/**
 * Init database contianing property records
 */
function initPropertyDB(){


    let db = {}

    let properties = data.filter(x=> x?.["@type"] == 'rdf:Property')
    
    for(let p of properties){
        let name = p?.['@id']
        let shortName = name.replace('schema:', '')
        db[name] = p
        db[shortName] = p
    }

    return db
 }

/**
 * init database contianing class record
 */
 function initClassDB(){


    let db = {}
    let classes = data.filter(x=> x?.["@type"] == 'rdfs:Class')
    
    for(let c of classes){
        let name = c?.['@id']
        let shortName = name.replace('schema:', '')
        db[name] = c
        db[shortName] = c
    }

    return db
 }

function initClassParentsDB(classDB){


    let db = {}

    for (let k of Object.keys(classDB)){
    
        let loopname = k
        let parents = []


        while(loopname){
            let c = classDB[loopname]

            if(!c){ loopname = undefined; continue}

            loopname = c?.['@id']
            let loopShortName = loopname.replace('schema:', '')


            let parentClassName = c?.['rdfs:subClassOf']?.['@id'] 
            

            if(parentClassName){
                let parentClassShortName = parentClassName.replace('schema:', '')

                parents = [parentClassName].concat(parents)
                db[loopname] = parentClassShortName
                db[loopShortName] = parentClassShortName
                
            }
            loopname = parentClassName
        }

        db[k] = parents

    }
    return db
 }




function initClassChildrenDB(parentDB){

    let db = {}

    for(let k of Object.keys(parentDB)){

        let parent = parentDB[k]
        db[parent] = db[parent] || []
        db[parent].push(k)
    }


    return db

}

function initClassChildrenAllDB(childrenDB){


    function getChildren(name, childrenDB){

        let children = childrenDB?.[name] || []
        let newChildren = [ ...children]
        for(let c of children){
            newChildren = newChildren.concat(getChildren(c, childrenDB))
        }
        newChildren = [ ... new Set(newChildren)]
        return newChildren 
    }



    let db = {}

    for(let k of Object.keys(childrenDB)){

        db[k]  = getChildren(k, childrenDB)
       
    }


    return db

}

// -------------------------------------------------------------
// Init
// -------------------------------------------------------------


 /**
  * Init DB contianing property names for each class
  */
 function initClassPropertiesDB(){

    let db = {}

    let properties = data.filter(x=> x?.["@type"] == 'rdf:Property')

    for(let p of properties){

        let pName = p?.['@id']
        let pShortName = pName.replace('schema:', '')
 
        let classes = h.toArray(p?.['schema:domainIncludes'])
       
        for(let c of classes){

            let className = c?.['@id']
            db[className] = db?.[className] || []
            db[className].push(pShortName)

            let classShortName = className.replace('schema:', '')
            db[classShortName] = db?.[classShortName] || []
            db[classShortName].push(pShortName)

        }
    }
    return db
 }


 function initClassPropertiesAllDB(propertiesDB, classDB, parentDB){

    let db = {}

    for (let k of Object.keys(classDB)){

        let properties = propertiesDB?.[k] || []

        let parents = parentDB?.[k] || []

        for(let p of parents){

            properties = properties.concat(propertiesDB?.[p] || [])

        }
    
        properties.sort()

        db[k] = properties

    }

    return db


 }




 /**
  * Init DB contianing property names for each class
  */
 function initClassPropertiesMinimalDB(){

    let db = {}

    let properties = data.filter(x=> x?.["@type"] == 'rdf:Property')

    for(let p of properties){

        let pName = p?.['@id']
        let pShortName = pName.replace('schema:', '')




 
        let classes = h.toArray(p?.['schema:domainIncludes'])
       
        for(let c of classes){


            let className = c?.['@id']
            let classShortName = className.replace('schema:', '')

       


            // skip if defined

            if(minimalProperties?.[classShortName]){
                db[className] = minimalProperties?.[classShortName]
                db[classShortName] = minimalProperties?.[classShortName]
                continue
            }
            

            //

            db[className] = db?.[className] || []
            db[className].push(pShortName)


            db[classShortName] = db?.[classShortName] || []
            db[classShortName].push(pShortName)

        }
    }
    return db
 }


 function initClassPropertiesMinimalAllDB(propertiesDB, classDB, parentDB){

    let db = {}

    for (let k of Object.keys(classDB)){

        let properties = propertiesDB?.[k] || []

        let parents = parentDB?.[k] || []

        for(let p of parents){

            properties = properties.concat(propertiesDB?.[p] || [])

        }
    
        properties.sort()

        db[k] = properties

    }

    return db


 }


/**
 * Init database containing enums for each property
 */
 function initPropertyEnumDB(){

    let db = {}

    let properties = data.filter(x=> x?.["@type"] == 'rdf:Property')

    for(let p of properties){

        let propertyName = p?.['@id']
        let propertyShortName = propertyName.replace('schema:', '')

        let enums = []

        let types = h.toArray(p?.['schema:rangeIncludes'])
        types = types.map(x => x?.['@id'])

        if(types.length == 0){
            continue
        }

        for(let t of types){

            let e = data.filter(x => x?.['@type'] == t)
            e = e.map(x => x?.['@id'])
            enums = enums.concat(e)
            
        }

        if(enums.length > 0){
            enums = enums.map(x => x.replace('schema:', ''))
            db[propertyName] = enums
            db[propertyShortName] = enums

        }   
    }
    return db
 }

function initPropertyTypesDB(){

    let db = {}

    let properties = data.filter(x=> x?.["@type"] == 'rdf:Property')

    for(let p of properties){


        let propertyName = p?.['@id']
        let propertyShortName = propertyName.replace('schema:', '')


        let types = p?.['schema:rangeIncludes']

        types = h.toArray(types)

        types = types.map(x => x?.['@id'])

        types = types.map(x => x.replace('schema:', ''))

        types = types.filter(x => x)

        db[propertyName] = types
        db[propertyShortName] = types

    }
    return db


}


