

import { retrieveJsonldSchemas} from './src/retrieveJsonldSchemas.js'
import { generateSchemaJsonldFile} from './src/generateSchemaJsonldFile.js'
import { jsonldConvert} from './src/jsonldToJsonschemaConvertor.js'
import { generatePropertyHelpersFile} from './src/generatePropertyHelpersFile.js'
import { generateJsonSchemaFile} from './src/generateJsonSchemaFile.js'

export async function generate(){



    let classes = ['Message']



   

    // Generate files


    for(let c of classes){
        await generatePropertyHelpersFile(c)
        await generateJsonSchemaFile(c)
    }


}


generate()