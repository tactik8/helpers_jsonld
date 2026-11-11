

import { diskHelpers} from '../../../diskHelpers/diskHelpers.js'



/**
 * 
 * @param {*} record 
 */
export async function generateSchemaJsonldFile(record){



    let filepath = 'src/helpers/schemaObjectHelpers/data'
    let filename = 'schemaJsonldDefinitions.json'

    let content = JSON.stringify(record, null, 4)



    await diskHelpers.save(filepath, filename,  content)
}

