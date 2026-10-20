import * as arrayHelpers from "./array/arrayHelpers.js";
import * as dateHelpers from "./date/dateHelpers.js";
import * as nullHelpers from "./null/nullHelpers.js";
import * as numberHelpers from "./number/numberHelpers.js";
import * as objectHelpers from "./object/objectHelpers.js";
import * as stringHelpers from "./string/stringHelpers.js";
import * as urlHelpers from "./url/urlHelpers.js";
import * as durationHelpers from "./duration/durationHelpers.js";

/**
 * @fileoverview Helpers to identify and convert dataTypes.
 * @module dataHelpers
 */

export const dataHelpers = {
  isNull: nullHelpers.isNull,
  isNotNull: nullHelpers.isNotNull,
  isArray: arrayHelpers.isArray,
  toArray: arrayHelpers.toArray,
  isDate: dateHelpers.isDate,
  toDate: dateHelpers.toDate,
  isDuration: durationHelpers.isDuration,
  toDuration: durationHelpers.toDuration,
  isObject: objectHelpers.isObject,
  isNumber: numberHelpers.isNumber,
  toNumber: numberHelpers.toNumber,
  isString: stringHelpers.isString,
  toString: stringHelpers.toString,
  isUrl: urlHelpers.isUrl,
  toUrl: urlHelpers.toUrl,

  array: arrayHelpers,
  date: dateHelpers,
  duration: durationHelpers,
  null: nullHelpers,
  number: numberHelpers,
  object: objectHelpers,
  string: stringHelpers,
  url: urlHelpers,
  getDataType: getDataType,
  getType: getDataType,
  getJsonSchema,
};

export default dataHelpers;

/**
 * Returns the datatype of the value
 * @param {*} value
 */
function getDataType(value) {
  // Check if undefined
  if (nullHelpers.isNull(value)) {
    return "undefined";
  }

  // Bool
  if (value === true || value === false) {
    return "Boolean";
  }

  // Array
  if (arrayHelpers.isArray(value)) {
    return "Array";
  }

  // Date
  if (dateHelpers.isDate(value)) {
    return "DateTime";
  }

  // Number
  if (!isNaN(value)) {
    return "Number";
  }

  //

  // String
  if (typeof value == "string") {


    // Case: url
    if (urlHelpers.isValid(value)) {
      return "URL";
    }

    // Case: date as string
    if (dateHelpers.clean(value)) {
      return "DateTime";
    }

    // Duration
    if (durationHelpers.isDuration(value)) {
      return "Duration";
    }

    // Case: number as string
    if (numberHelpers.clean(value) !== undefined) {
      return "Number";
    }

    // Case json as string
    if (value.includes("[") || value.includes("{") || value.includes('"')) {
      try {
        let r = JSON.parse(value);
        return "JSON";
      } catch {}
    }

    // Case: other string
    return "Text";
  }

  // Object
  if (value?.['@id'] || value?.['@type']) {
    // Case: other
    return "Thing";
  }

  return "undefined";
}

function getJsonSchema(value) {
  function _getJsonSchema(value, depth = 0) {
    // Init schema record
    let schema = {};

    // Add top level info
    if (depth == 0) {
      schema["$schema"] = "https://json-schema.org/draft/2020-12/schema";
      schema.title = value?.["@type"] || "";
    }

    // string
    if (dataHelpers.isString(value)) {
      schema["type"] = "string";
      return schema;
    }

    // Object
    if (dataHelpers.isObject(value)) {
      schema["type"] = "object";
      schema.properties = {};

      for (let k of Object.keys(value)) {
        schema.properties[k] = _getJsonSchema(value[k], depth + 1);
      }
      return schema;
    }

    // Number
    if (dataHelpers.isNumber(value)) {
      schema["type"] = "number";
      return schema;
    }

    // Array
    // todo: add support for varied data types
    if (dataHelpers.isArray(value)) {
      schema["type"] = "array";
      schema.items = _getJsonSchema(value?.[0], depth + 1);
      return schema;
    }
  }

  return _getJsonSchema(value, 0);
}
