



import {jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'







/**
 * Cponvert list of records into json schema classes, with properties embededed
 * @param {*} jsonldRecords 
 * @returns 
 */
export function jsonldConvert(jsonldRecords){

    // Get properties and convert 
        let jsonSchemaProperties = getProperties(jsonldRecords)
        jsonSchemaProperties = jsonSchemaProperties.map(x => convertJsonldPropertyToJsonSchema(x, jsonldRecords))
    
        // Get classes and convert (direct properties)
        let jsonSchemaClasses = getClasses(jsonldRecords)
        jsonSchemaClasses = jsonSchemaClasses.map(x => convertJsonldClassToJsonSchema(x, jsonSchemaProperties))
    
        // Add parent properties to class
        jsonSchemaClasses = jsonSchemaClasses.map(x => addPropertiesFromParentClasses(x, jsonSchemaClasses, jsonSchemaProperties))
          

        return jsonSchemaClasses

}



/**
 * 
 * @param {*} records 
 * @returns 
 */
 function getProperties(records){

    let properties = records.filter(x => h.getValues(x, '@type').includes('rdf:Property'))
    return properties
}


 function getClasses(records){

    let properties = records.filter(x => h.getValues(x, '@type').includes('rdfs:Class'))
    return properties
}




/**
 * Converts jsonld rdf:property records to json schema.
 * @param {*} record 
 * @param {*} records 
 * @returns 
 */
export function convertJsonldPropertyToJsonSchema(record, records){

    let title = h.record_id(record).replace('schema:', '')
    let description = h.getValue(record, 'rdfs:comment')
    let parent = h.getValue(record, 'rdfs:subClassOf')
    
    // Get data types possible for this property
    let types = h.getValues(record, 'schema:rangeIncludes')
    types = types.map(x => h.record_id(x).replace('schema:', ''))

    // Get classes having this property
    let classes = h.getValues(record, 'schema:domainIncludes')
    classes = classes.map(x => h.record_id(x).replace('schema:', ''))

   


     let jsonSchema = {
        "@type": "Property",
            "$id": "https://schema.org/" + title,
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": title,
            'description': description,
            "type": types,
            "classes": classes,
           

        }

        for(let t of types){


                let enums = records.filter(x => h.getValues(x, '@type').includes('schema:' + t))

                enums = enums.map(x => x?.['@id'].replace('schema:', ''))

                if(enums.length > 0){
                    jsonSchema.enum = jsonSchema?.enum || []
                    jsonSchema.enum = jsonSchema.enum.concat(enums)
                }
            
            
        }


       

        return jsonSchema


}

/**
 * COnvnerts rdfs:class jsonld records to json schema.
 * @param {*} record 
 * @param {*} properties 
 * @returns 
 */
export function convertJsonldClassToJsonSchema(record, properties){

    let title = h.record_id(record).replace('schema:', '')
    let description = h.getValue(record, 'rdfs:comment')
    let parent = (h.record_id(h.getValue(record, 'rdfs:subClassOf')) || '').replace('schema:', '')
    

    let classProperties = properties.filter(x => x.classes.includes(title))


    let jsonSchema = {
        "@type": "Class",
        "$id": "https://schema.org/" + title,
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": title,
        "type": "object",
        "description": description,
        "parent": parent,
        "properties": {},
        'propertiesAll': {}
        }

    classProperties.forEach(x => jsonSchema.properties[x.title] = x)
    return jsonSchema
}


/**
 * Add properties from parent classes to json schema class record
 * @param {*} jsonSchema 
 * @param {*} classes 
 * @param {*} properties 
 * @returns 
 */
export function addPropertiesFromParentClasses(jsonSchema, classes, properties){


    let className = jsonSchema.title

    while (className){

    
        let classProperties = properties.filter(x => x.classes.includes(className))
        classProperties.forEach(x => jsonSchema.propertiesAll[x.title] = x)

        // Get parent
        let currentClass = classes.find(x => x.title == className)
        let parentClassName = currentClass?.parent

        className = parentClassName
    }

    return jsonSchema

}
