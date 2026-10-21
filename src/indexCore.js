import { jsonldBase } from './helpers/jsonldBase/jsonldBase.js';
import * as things from './helpers/things/things.js';
import { htmlHelpers } from './helpers/htmlHelpers/htmlHelpers.js';


/**
 * Define an intersection type that explicitly merges all the spread modules
 * with the explicitly assigned helper properties.
 *
 * @typedef {typeof jsonldBase & typeof things & typeof apiClient & typeof rdf & typeof recordIDHelpers & typeof transformHelpers & HelperProperties} JsonLdHelpers
 * @property {typeof htmlHelpers} html - HTML Templates for jsonld records

 */

/**
 * Helper functions, methods, and tools for jsonld
 * @type {JsonLdHelpers}
 */
export const _h = {
    ...jsonldBase, // Base jsonld helpers
    ...things, // jsonld schema.org class objects
    html: htmlHelpers // HTML Templates for jsonld records
   
};

export const h = _h

export const helpers = _h;

export default _h;
