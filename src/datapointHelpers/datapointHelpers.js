
import * as dp_methods from './src/methods/dataPointMethods.js'
import { DataPoint } from './src/classes/dataPointClass.js'
import { DataPointDB } from './src/db/dataPointDBClass.js'
import { Metadata } from './src/classes/metadataClass.js'
import * as datapointAnalysis from './src/classes/dataPointAnalysis.js'

let COUNTER = 0

export const datapointHelpers = { ...dp_methods, DataPoint, DataPointDB, Metadata, analysis: datapointAnalysis }

export default datapointHelpers