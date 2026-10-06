import { jsonldBase as h } from "../../../jsonldBase/jsonldBase.js";
import { dataHelpers } from "../../../dataHelpers/dataHelpers.js";
import { isJsonld } from "../../../jsonldBase/src/objectHelpers.js";

/**
 * Returns a html formatted version of the value
 * @param {object | string} record_or_record_type
 * @param {string} propertyID
 * @param {*} value
 * @param {object} options
 * @param { string } baseUrl - the base url for the href link
 * @param { number } maxLength - the max length in characters for the title 
 * @param { number } nbDecimals - the max nb of decimals 
 */
export function get(record_or_record_type, propertyID, value, options, baseUrl, maxLength, nbDecimals) {

    let record = record_or_record_type?.['@id'] ? record_or_record_type : undefined
    let record_type = h.isString(record_or_record_type) ? record_or_record_type : undefined

  return formatValue({record, record_type, propertyID, value, options, baseUrl, maxLength, nbDecimals});
}



/**
 * Returns a a link to the record, with the record_id as the visible portion
 * @param {*} props 
 * @param {object | string} props.record_or_record_id - the jsonld record (or record_id string)
 * @param {object} props.options - the options generic object
 * @param { string } baseUrl - the base url for the href link
 * @param { string } title - the content of the a 
 * @param { number } maxLength - the max length in characters for the title 
 * @returns {string} - the html a string 
 */
export function getRecordLink({record, record_id, options, baseUrl, title, maxLength}){

    if(dataHelpers.isString(record_id)){
        record = {"@id": record_id}
    }

    options = options || {}
    options.baseUrl = options?.baseUrl || baseUrl
    options.charLength = maxLength ?? options?.charLength 

    return _getRecordRefUrl(record, title, options)

}




/**
 * Returns a html formatted version of the value
 * @param {*} record_or_record_type
 * @param {*} propertyID
 * @param {*} value
 * @param { object } options - the options
 * @param {number} maxLength - the max length in char of the title
 * @param { string } baseUrl - base url for the href link 
 */
export function formatValue({record, record_type, propertyID, value, options, maxLength, nbDecimals, baseUrl }) {
  //

    options = options || {}
    options.baseUrl = options?.baseUrl ?? baseUrl
    options.charLength = maxLength?? options?.charLength 
    options.decimalsLength = nbDecimals?? options?.decimalsLength 

    record_type = record_type ?? h.record_type(record);

  // @id
  if (propertyID == "@id") {
    return _getRecordRefUrl({ "@id": value }, undefined, options);
  }

  // Arrays
  if (h.isArray(value)) {
    // Array of 1
    if (h.isArray(value) && value.length == 1) {
      return `[${formatValue(record_type, propertyID, value[0], options)}]`;
    }
    // other
    return `[${value.length}]`;
  }

  // Object (jsonld)
  if (h.isJsonld(value)) {
    // Action
    if (h.record_type(value).endsWith("Action")) {
      let status = "";
      status = h.isPotential(value) ? "[ ]" : "";
      status = h.isActive(value) ? "[ ]" : "";
      status = h.isCompleted(value) ? "[x]" : status;
      status = h.isFailed(value) ? "[-]" : status;
      let title =
        value.name || value?.title || value?.headline || value?.["@id"];

      let subTasksContent = ``;
      let subTasks = h
        .getValues(value, "hasPart")
        .filter((x) => h.record_type(x).endsWith("Action"));
      let n = subTasks.length;
      if (n > 0) {
        let potential = subTasks.filter((x) => h.isPotential(x));
        let active = subTasks.filter((x) => h.isActive(x));
        let completed = subTasks.filter((x) => h.isCompleted(x));
        let failed = subTasks.filter((x) => h.isFailed(x));
        let percComplete = dataHelpers.number.formatDecimals(
          (active.length / n) * 100,
          0,
        );
        let errorMessage = failed.length > 0 ? `(${failed.length} errors)` : "";
        subTasksContent = `${percComplete}% complete ${errorMessage}`;
      }

      let name = `- ${status} ${title} ${subTasksContent}`;
      return _getRecordRefUrl(value, name, options);
    }

    // Webpage and website
    if (h.record_type(value) == "WebPage") {
      return _getRecordRefUrl(value, h.url(value), options);
    }

    if (h.record_type(value) == "WebSite") {
      return _getRecordRefUrl(value, h.url(value), options);
    }

    // postal address
    if (h.record_type(value) == "PostalAddress") {
      return `${h.getValue(value, "streetAddress")} <br>${h.getValue(value, "addressLocality")} ${h.getValue(value, "addressRegion")} ${h.getValue(value, "postalCode")}`;
    }

    // other
    let title = value.name || value?.title || value?.headline || value?.["@id"];
    return _getRecordRefUrl(value, title, options);
  }

  // url
  if (dataHelpers.url.isUrl(value)) {
    return _getUrl(value, value, options);
  }

  // date
  if (dataHelpers.date.isDate(dataHelpers.date.toDate(value))) {
    return dataHelpers.date.formatDate(value, false);
  }

  // number
  if (h.isNumber(value)) {
    return dataHelpers.number.formatDecimals(value, options?.decimalsLength);
  }

  // else
  return dataHelpers.string.maxLengthEnd(value, options?.charLength);
}

function _getUrl(url, name, options) {
  url = dataHelpers.url.getUrl(url);
  name = dataHelpers.string.maxLengthMiddle(name, options?.charLength);
  return `<a href="${url}">${name}</a>`;
}

function _getRecordRefUrl(record, name, options) {
  let urlPath = encodeURIComponent(h.record_id(record));

  let url = dataHelpers.url.getUrl(options?.baseUrl, urlPath);
  name = name ?? h.record_id(record);
  name = dataHelpers.string.maxLengthMiddle(name, options?.charLength);
  return `<a href="${url}">${name}</a>`;
}
