/**
 * @fileoverview Module for working with JSON-LD records
 * @author [Your Name]
 * @date [Today's Date]
 */

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
 * @module jsonldBase
 * @description Module for working with JSON-LD records
 */
export const jsonldBase = { 
  /**
   * @namespace dot
   * @description Dot notation helpers
   * @see module:dotHelpers
   */
  dot: dotHelpers, 
  /**
   * @namespace comparisonHelpers
   * @description Comparison helpers
   * @see module:comparisonHelpers
   */
  ...comparisonHelpers, 
  /**
   * @namespace conditionHelpers
   * @description Condition helpers
   * @see module:conditionHelpers
   */
  ...conditionHelpers, 
  /**
   * @namespace expansionHelpers
   * @description Expansion helpers
   * @see module:expansionHelpers
   */
  ...expansionHelpers, 
  /**
   * @namespace idHelpers
   * @description ID helpers
   * @see module:idHelpers
   */
  ...idHelpers, 
  /**
   * @namespace memoryDb
   * @description Memory database helpers
   * @see module:memoryDb
   */
  ...memoryDb, 
  /**
   * @namespace objectHelpers
   * @description Object helpers
   * @see module:objectHelpers
   */
  ...objectHelpers, 
  /**
   * @namespace propertyHelpers
   * @description Property helpers
   * @see module:propertyHelpers
   */
  ...propertyHelpers,
  /**
   * @namespace utilitiesHelpers
   * @description Utilities helpers
   * @see module:utilitiesHelpers
   */
  ...utilitiesHelpers,
  /**
   * @namespace listHelpers
   * @description List helpers
   * @see module:listHelpers
   */
  ...listHelpers,
  /**
   * @namespace toStringHelpers
   * @description String conversion helpers
   * @see module:toStringHelpers
   */
  ...toStringHelpers,
  /**
   * @namespace databaseHelpers
   * @description Database interface helpers
   * @see module:databaseHelpers
   */
  ...databaseHelpers
}
