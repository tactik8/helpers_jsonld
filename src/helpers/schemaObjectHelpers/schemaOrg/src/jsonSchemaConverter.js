

import * as ch from './classHelpers.js'
import * as ph from './propertyHelpers.js'

// -------------------------------------------------------------
// JSON Schema
// -------------------------------------------------------------


export function getJsonSchema(name){

    let record = getJsonSchemaClass(name, 0)

    // Add $defs
    record['$defs'] = getDefs(name)
    
    return record

}

 function getDefs(name){

    let classes = getSubClasses(name)

    let defs = {}

    for(let c of classes){
        defs[c] = getJsonSchemaClass(c, 0, 1)
    }

    return defs

 }
function getSubClasses(name, depth=1, currentDepth=0){


    let datatypes = ["Boolean", "Date", "DateTime", "Number", "Quantity", "Text", "Time", "URL"]

    let properties = ph.getPropertiesAll(name)

    if(properties.length ==0){
        return []
    }

    let types = []
    for(let p of properties){
        types = types.concat(ph.getTypes(p))
    }

    types = [ ...new Set(types)]
    types = types.filter(x => !datatypes.includes(x))

    if(currentDepth < depth){
        let newTypes = [ ...types]
        for(let t of types){
            newTypes = newTypes.concat(getSubClasses(t, depth, currentDepth+1))
            newTypes = [ ... new Set(newTypes)]
        }
        types = [ ...newTypes]
        types = types.filter(x => !datatypes.includes(x))
    }

    types.sort()
    return types
}


function getJsonSchemaClass(name){

    let jsonSchema = {
        "$id": "https://schema.org/" + name,
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": name,
        "type": "object",
        "description": ch.getDefinition(name),
        "properties": {},
        }

    let properties = ph.getPropertiesAll(name)

    properties.forEach(x => jsonSchema.properties[x] = getJsonSchemaProperty(x))
    
    return jsonSchema

   

}

 
function getJsonSchemaProperty(name){


    let types = ph.getTypes(name)
    
    for(let i=0; i< types.length; i++){
        let t = types[i]


        if(t == "Boolean"){
                types[i] = {"type": 'boolean'}
            }
            else if(t == "Date"){
                types[i] = {"type": 'string'}
            }
            else if(t == "DateTime"){
                types[i] = {"type": 'string'}
            }
            else if(t == "Integer"){
                types[i] = {"type": 'number'}
            }
            else if(t == "Number"){
                types[i] = {"type": 'number'}
            }
            else if(t == "Quantity"){
                types[i] = {"type": 'number'}
            }
            if(t == "Text"){
                types[i] = {"type": 'string'}
            }
            else if(t == "Time"){
                types[i] = {"type": 'string'}
            } 
            if(t == "URL"){
                types[i] = {"type": 'string', 'format': 'URI'}
            }
            else {
                 types[i] = {"$ref": "#/$defs/" + t}
            }
    }
    

      let jsonSchema = {
            "$id": "https://schema.org/" + name,
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": name,
            'description': ph.getPropertyDefinition(name),
            "type": "array",
            "items": {
                "anyOf": types
            }
        
        }
        return jsonSchema   
    
}
