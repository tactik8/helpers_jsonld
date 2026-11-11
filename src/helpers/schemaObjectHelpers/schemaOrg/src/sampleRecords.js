
import { jsonldBase as h } from '../../../jsonldBase/jsonldBase.js'

import * as ph from './propertyHelpers.js'



export function getSampleRecord(name, minimal=true, depth=0, parents = []){


    

    depth = depth ?? 0

    let record = {
        "@type": name,
        "@id": h.randomUUID()
    }


    let properties = minimal ==true ? ph.getPropertiesMinimal(name) : ph.getPropertiesAll(name)


    for(let p of properties){

        let types = ph.getTypes(p)
        record[p] = []

        // Handle enum
        let enums = ph.getEnum(p)
        if(enums.length > 0){
            record[p] = enums
            continue
        }

        console.log('vv', p, types)
        for(let t of types){

            t = t.replace('schema:', '')

            if(t == "Boolean"){
                record[p].push(true)
            }
            else if(t == "Date"){
                record[p].push('2020-01-01')
            }
            else if(t == "DateTime"){
                record[p].push('2020-01-01T10:01:00Z')
            }
            else if(t == "Integer"){
                record[p].push(4)
            }
            else if(t == "Number"){
                record[p].push(3)
            }
            else if(t == "Quantity"){
                record[p].push(3)
            }
            else if(t == "Text"){
                record[p].push('Sample text for ' + p)
            }
            else if(t == "Time"){
                record[p].push('2020-01-01T10:01:00Z')
            }
            else if(t == "URL"){
                record[p].push('https://www.sampleurl.com')
            } else {
                if(depth < 3 && !parents.includes(t)){
                    record[p].push(getSampleRecord(t, minimal, depth + 1, parents.concat([name])))
                } else {
                    record[p].push( {"@id": "https://www.test.com/randomid#" + t, "@type": t} )
                }
            }


        }

    }

    return record

}


