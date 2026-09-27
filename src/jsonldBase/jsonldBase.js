
import {dotHelpers} from '../dotHelpers/dotHelpers.js'

import * as comparisonHelpers from './src/comparisonHelpers.js'
import * as conditionHelpers from './src/conditionHelpers.js'
import * as expansionHelpers from './src/expansionHelpers.js'
import * as idHelpers from './src/idHelpers.js'
import * as memoryDb from './src/memoryDb.js'
import * as objectHelpers from './src/objectHelpers.js'
import * as propertyHelpers from './src/propertyHelpers.js'
import * as utilitiesHelpers from './src/utilitiesHelpers.js'
import * as listHelpers from './src/listHelpers.js'
import * as toStringHelpers from './src/toStringHelpers.js'
import * as databaseHelpers from './src/databaseHelpers.js'

/**
 * @fileoverview Helpers methods to work with JSON-LD records
 * @module jsonldBase
 */


export const jsonldBase = { 
  dot: dotHelpers, 
  ...comparisonHelpers, 
  ...conditionHelpers, 
  ...expansionHelpers, 
  ...idHelpers, 
  ...memoryDb, 
  ...objectHelpers, 
  ...propertyHelpers,
  ...utilitiesHelpers,
  ...listHelpers,
  ...toStringHelpers,
  ...databaseHelpers
}



