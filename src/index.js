import { jsonldBase } from './helpers/jsonldBase/jsonldBase.js';
import * as dot from './helpers/dotHelpers/dotHelpers.js';
import * as things from './helpers/things/things.js';
import * as apiClient from './tools/apiClient/apiClient.js';
import * as rdf from './helpers/rdfHelpers/rdfHelpers.js';
import * as recordIDHelpers from './helpers/recordIdHelpers/recordIdHelpers.js';
import * as transformHelpers from './helpers/transformHelpers/transformHelpers.js';
import { dataHelpers } from './helpers/dataHelpers/dataHelpers.js';
import { diskHelpers } from './helpers/diskHelpers/diskHelpers.js';
import { htmlHelpers } from './helpers/htmlHelpers/htmlHelpers.js';
import { formatHelpers } from './helpers/formatHelpers/formatHelpers.js';
import { records } from './helpers/sampleRecords/records.js';
import { DbLogs } from './tools/dbLogs/dbLogs.js';
import { datapointHelpers } from './helpers/datapointHelpers/datapointHelpers.js';
import { DbDisk } from './tools/dbDisk/dbDisk.js';
import { potentialActionHelpers } from './helpers/potentialActionHelpers/potentialActionHelpers.js';

export { records } from './helpers/sampleRecords/records.js';
export { transformHelpers } from './helpers/transformHelpers/transformHelpers.js';

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
    ...apiClient,
    ...rdf,
    ...recordIDHelpers,
    dataHelpers,
    ...transformHelpers,
    records, // Sample jsonld records
    disk: diskHelpers, // Helpers for disk operations
    DbLogs: DbLogs,
    datapointHelpers: datapointHelpers,
    format: formatHelpers,
    html: htmlHelpers, // HTML Templates for jsonld records
    potentialAction: potentialActionHelpers, // Adds potential actions to record and execute
    DbDisk,
};

export const helpers = _h;

export default _h;
