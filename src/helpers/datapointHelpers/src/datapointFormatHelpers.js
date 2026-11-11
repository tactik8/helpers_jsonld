
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import * as arrayHelpers from './datapointArrayHelpers.js'
import * as comparisonHelpers from './datapointComparisonHelpers.js'
import * as conversionHelpers from './datapointConversionHelpers.js'
import * as objectHelpers from'./datapointObjectHelpers.js'
import * as propertyHelpers from './datapointPropertyHelpers.js'
import * as propertyShortcut from './datapointPropertyShortcuts.js'

import { dataHelpers} from '../../dataHelpers/dataHelpers.js'

const dph = {

    ...arrayHelpers,
    ...comparisonHelpers,
    ...conversionHelpers,
    ...objectHelpers,
    ...propertyHelpers,
    ...propertyShortcut

}



export  function toString(datapoints){


    datapoints = h.toArray(datapoints)

    

    let content = ''


    content += `Datapoints (${datapoints.length})\n`
    content += `-----------------\n`


    let record_ids = [ ...new Set(datapoints.map(x => dph.getObjectID(x)))]
    record_ids.sort()


    let spacerRecord = '  '
    let spacerProperty = spacerRecord + '    '
    let spacerValue = spacerProperty + '  '




    for(let record_id of record_ids){

        // Init content
        content += spacerRecord + `- ${record_id}:\n`

        // Filter dps
        let dps = datapoints.filter(x => dph.getObjectID(x) == record_id)

        // Get propertyIDs
        let propertyIDs = [ ...new Set(dps.map(x => dph.getPropertyID(x)))]
        propertyIDs.sort()


        for(let p of propertyIDs){

            // Filter and sort dps
            let dps2 = dps.filter(x => dph.getPropertyID(x) == p)
            dps2 = dph.sort(dps2)

            let compiledDPS2 = dph.compile(dps2)

           
           

                


            //content += spacerProperty + `${p} (${dps2.length}):\n`
            
            for(let i=0; i < dps2.length; i++){


                let overriddenby = []
                for(let ii=0; ii< dps2.length; ii++){
                    if(dph.evaluateOverwrite(dps2[ii], dps2[i]) == true){
                        overriddenby.push(String(ii))
                    }
                }


                let overridden = overriddenby.length ==0 ? '' : `(overridden by ${overriddenby.join(', ')})`

                content += spacerValue + ` - (${i}) ${datapointUniqueToString(dps2[i], false, true)} ${overridden}\n`
            }
            
        }
        content += '\n'

    }

    return content


}



function datapointUniqueToString(dp, includeRecordID=true, includePropertyID=true){







    let contentItems = []
    let c


    // record_id
    if(includeRecordID == true){
        
        c = formatLength(dph.getObjectID(dp), 15)
        contentItems.push(c)
    }

    // PropertyID
    if(includePropertyID == true){
        c = formatLength(dph.getPropertyID(dp), 15)
        contentItems.push(c)
    }

    // Operation
    c = formatLength(dph.getOperation(dp), 8)
    contentItems.push(c)


    // Confidence
    c = 'c: ' + formatLengthStart(dph.getConfidence(dp), 4)
    contentItems.push(c)


    // date
    c = 'd: ' + formatLength(dataHelpers.date.format(dph.getLatestDate(dp), true), 20)
    contentItems.push(c)


    // value
    let value = dph.getPropertyValue(dp)

    if(value===null || value === undefined){
        value = '(na)'
    }

    if(h.isObject(value)){
        value = `{"@id": ${h.record_id(value)}}`
    }
    c = 'v: ' + formatLength(value, 20)
    contentItems.push(c)


   
    let content = contentItems.join (' ')


    return content

}


function formatLength(str, length){

    str = str || ''

    str = String(str)

    str = truncateText(str, length)

    str = str.padEnd(length, ' ')

    return str

}


function formatLengthStart(str, length){

    str = str || ''

    str = String(str)

    str = truncateText(str, length)

    str = str.padEnd(length, ' ')

    return str

}

function truncateText(str, maxLength) {
  // If the text is already shorter than the limit, return it as-is
  if (str.length <= maxLength) return str;
  
  // Truncate and add ellipsis (subtracting 3 ensures the total length equals maxLength)
  return str.slice(0, maxLength - 3) + '...';
}