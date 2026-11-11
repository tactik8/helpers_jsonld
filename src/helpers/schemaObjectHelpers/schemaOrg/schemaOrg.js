

import * as classHelpers from './src/classHelpers.js'
import * as propertyHelpers from './src/propertyHelpers.js'
import * as sampleRecords from './src/sampleRecords.js'
import * as jsonSchemaConverter from './src/jsonSchemaConverter.js'
import * as validationHelpers from './src/validationHelpers.js'


export const schemaOrg = {

    ...classHelpers,
    ...propertyHelpers,
    ...sampleRecords,
    ...jsonSchemaConverter,
    ...validationHelpers

}









function test(){

    


    let r = schemaOrg.getSampleRecord('Product')
    console.log('r', JSON.stringify(r, null, 5))
    //r.other = "l"

    let v = schemaOrg.validate(r)
    let isValid = schemaOrg.isValid(r)

   // console.log('vv', JSON.stringify(v, null, 4))
    console.log('valid', isValid)


}
test()