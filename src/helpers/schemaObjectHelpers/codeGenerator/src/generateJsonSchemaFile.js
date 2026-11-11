import { schemaOrg} from '../../schemaOrg/schemaOrg.js'


import { diskHelpers} from '../../../diskHelpers/diskHelpers.js'




/**
 * 
 * @param {*} record 
 */
export async function generateJsonSchemaFile(name){


    

    let content = schemaOrg.getJsonSchema(name)
    content = JSON.stringify(content, null, 4)


    let filepath = 'src/helpers/schemaObjectHelpers/src/' + name + '/src' 
    let filename = 'jsonSchema.json'

    let r = await diskHelpers.save(filepath, filename,  content)
}

