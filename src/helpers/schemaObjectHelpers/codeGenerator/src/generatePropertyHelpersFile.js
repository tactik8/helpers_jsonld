

import { diskHelpers} from '../../../diskHelpers/diskHelpers.js'

import { schemaOrg} from '../../schemaOrg/schemaOrg.js'

/**
 * Generate js file for property helpers
 * @param {*} record 
 */
export async function generatePropertyHelpersFile(name){


    let title = name
    let properties = schemaOrg.getPropertiesDirect(name)
    let propertiesAll = schemaOrg.getProperties(name)
   
    let content = ''

    console.log('pp', name, properties)

    // Generate property list getters
    content += generatePropertyListsGetters(name)

    // Add getters and setter for each property
    for(let k of properties.sort()){
        content += getGettersAndSetters(k)
        content += generatePropertyEnum(k)
    }

    // Save file
    let filepath = 'src/helpers/schemaObjectHelpers/src/' + title + '/src' 
    let filename = 'propertyHelpers.js'
    let r = await diskHelpers.save(filepath, filename,  content)

    return
}



function generateParentExports(record){


    let parent = record.parent

    let content = `
    
export * from '../${parent}/src/propertyHelpers.js';
 

    `

    return content

}




/**
 * Generate function to get list of properties for given class
 * @param {*} record 
 * @returns 
 */
function generatePropertyListsGetters(name){



    let title = name
    let properties = schemaOrg.getPropertiesDirect(name)
    let propertiesAll = schemaOrg.getProperties(name)
   



    let content = `
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for ${title} and its parents.
 * @returns {String[]} - The properties for ${title}.
 */
export function getProperties() {
    return ${JSON.stringify(propertiesAll)}
}

/**
 * Returns list of properties for ${title} and its parents.
 * @returns {String[]} - The properties for ${title}.
 */
export function getPropertiesAll() {
    return ${JSON.stringify(propertiesAll)}
}

/**
 * Returns list of properties for ${title} without parent properties.
 * @returns {String[]} - The properties for ${title}.
 */
export function getPropertiesMain() {
    return ${JSON.stringify(properties)}
}

/**
 * Returns list of common properties for ${title}.
 * @returns {String[]} - The common properties for ${title}.
 */
export function getPropertiesShort() {
    return ${JSON.stringify(properties)}        
}

    `

    return content

}





/**
 * Generate getters and setters for given property
 * @param {*} propertyJsonSchemaRecord 
 */
function getGettersAndSetters(name){



        function capitalizeFirstLetter(str) {
            if (!str) return str; // Handle empty strings, null, or undefined
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        let upperName = capitalizeFirstLetter(name)

        let description = schemaOrg.getPropertyDescription(name)

        let types = schemaOrg.getDatatypes(name)
        let typesMany = types.map(x => x + '[]')
        
        types = types.join(' | ')
        typesMany = typesMany.join(' | ')


        let classes = schemaOrg.getClasses(name)
        classes = classes.join(' | ')

        let content = `
        
// ----------------------------------------------------------------------
// Property: ${name}
// ----------------------------------------------------------------------

/**
 * ${description}
 * @param {${classes}} record - The record to retrieve the value from.
 * @returns {${types}} - The 1st value of the ${name} property.
 */
export function ${name}(record) {
    return h.getValue(record, '${name}');
}

/**
 * ${description}
 * @param {${classes}} record - The record to retrieve the value from.
 * @returns {${types}} - The 1st value of the ${name} property.
 */
export function get${upperName}(record) {
    return h.getValue(record, '${name}');
}

/**
 * ${description}
 * @param {${classes}} record - The record to retrieve the value from.
 * @param {${types}} value - The value to set on record ${name} property.
 * @returns {${classes}} - The record with updated value.
 */
export function set${upperName}(record, value) {
    return h.setValue(record, '${name}', value);
}

/**
 * ${description}
 * @param {${classes}} record - The record to retrieve the values from.
 * @returns {${typesMany}} - All values of the ${name} property.
 */
export function ${name}s(record) {
    return h.getValues(record, '${name}');
}

/**
 * ${description}
 * @param {${classes}} record - The record to retrieve the values from.
 * @returns {${typesMany}} - All values of the ${name} property.
 */
export function get${upperName}s(record) {
    return h.getValues(record, '${name}');
}

/**
 * ${description}
 * @param {${classes}} record - The record to retrieve the value from.
 * @param {${typesMany}} value - The value to set on record ${name} property.
 * @returns {${classes}} - The record with updated value.
 */
export function set${upperName}s(record, value) {
    return h.setValues(record, '${name}', value);
}

        `

        return content

}


/**
 * Generate function for getting enums
 * @param {*} record 
 */
function generatePropertyEnum(name){


    
    function capitalizeFirstLetter(str) {
            if (!str) return str; // Handle empty strings, null, or undefined
            return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let upperName = capitalizeFirstLetter(name)

    let enumRecord = schemaOrg.getEnum(name)
    enumRecord = JSON.stringify(enumRecord)


    let content = `

/**
 * Returns the list of choices (enum) for property ${name}.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnum${upperName}(){
    
    return ${enumRecord}
}
    
`

    return content
}
