import { jsonldBase } from './jsonldBase/jsonldBase.js';
import * as dot from './dotHelpers/dotHelpers.js';
import * as things from './things/things.js';
import * as rdf from './rdfHelpers/rdfHelpers.js';
import * as recordIDHelpers from './recordIdHelpers/recordIdHelpers.js';
import * as transformHelpers from './transformHelpers/transformHelpers.js';
import { dataHelpers } from './dataHelpers/dataHelpers.js';
import { diskHelpers } from './diskHelpers/diskHelpers.js';
import { htmlHelpers } from './htmlHelpers/htmlHelpers.js';
import { formatHelpers } from './formatHelpers/formatHelpers.js';
import { records } from './sampleRecords/records.js';
import { datapointHelpers } from './datapointHelpers/datapointHelpers.js';
import { potentialActionHelpers } from './potentialActionHelpers/potentialActionHelpers.js';
export { records } from './sampleRecords/records.js';
export { transformHelpers } from './transformHelpers/transformHelpers.js';

/**
 * Define an intersection type that explicitly merges all the spread modules
 * with the explicitly assigned helper properties.
 *
 * @typedef {typeof jsonldBase & typeof things & typeof apiClient & typeof rdf & typeof recordIDHelpers & typeof transformHelpers & HelperProperties} JsonLdHelpers
 *
 * @typedef {object} HelperProperties
 * @property {typeof dataHelpers} dataHelpers
 * @property {typeof records} records - Sample jsonld records
 * @property {typeof diskHelpers} disk - Helpers for disk operations
 * @property {typeof DbLogs} DbLogs
 * @property {typeof datapointHelpers} datapointHelpers
 * @property {typeof formatHelpers} format
 * @property {typeof htmlHelpers} html - HTML Templates for jsonld records
 * @property {typeof potentialActionHelpers} potentialAction - Adds potential actions to record and execute
 * @property {typeof DbDisk} DbDisk
 */

/**
 * Helper functions, methods, and tools for jsonld
 * @type {JsonLdHelpers}
 */
export const _h = {
    ...jsonldBase, // Base jsonld helpers
    ...things, // jsonld schema.org class objects
    ...rdf,
    ...recordIDHelpers,
    dataHelpers,
    ...transformHelpers,
    records, // Sample jsonld records
    disk: diskHelpers, // Helpers for disk operations
    datapointHelpers: datapointHelpers,
    format: formatHelpers,
    html: htmlHelpers, // HTML Templates for jsonld records
    potentialAction: potentialActionHelpers, // Adds potential actions to record and execute
};

export const helpers = _h;

export default _h;
