

import * as arrayHelpers from './src/datapointArrayHelpers.js'
import * as comparisonHelpers from './src/datapointComparisonHelpers.js'
import * as conversionHelpers from './src/datapointConversionHelpers.js'
import * as objectHelpers from './src/datapointObjectHelpers.js'
import * as propertyHelpers from './src/datapointPropertyHelpers.js'
import * as propertyShortcuts from './src/datapointPropertyShortcuts.js'
import * as datapointDB from './src/datapointDB.js'
import * as metadataHelpers from './src/datapointMetadata.js'

export const datapointHelpers = {
    ...arrayHelpers,
    ...comparisonHelpers,
    ...conversionHelpers,
    ...objectHelpers,
    ...propertyHelpers,
    ...propertyShortcuts,
    ...metadataHelpers,
    ...datapointDB

}

export default datapointHelpers