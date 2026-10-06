

import { dataHelpers} from '../../../dataHelpers/dataHelpers.js'

import { jsonldBase as h} from '../../../jsonldBase/jsonldBase.js'



/**
 * Returns a htmlPropertyValue where htmlValue contains the string representation and className the formating classes.
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} baseUrl 
 * @returns 
 */
export function getHtmlPropertyValue(record, propertyID, baseUrl) {



  let pv = getPropertyValueObject(record, propertyID);

  pv = formatPropertyValueObject(record, pv, baseUrl);


  return pv;
}

function formatPropertyValueObject(record, pv, baseUrl) {
  //
  if (pv?.value === undefined) {
    return pv;
  }

  //
  let datatype = dataHelpers.getDataType(pv.value);

  let k = pv.propertyID.split('.')[pv.propertyID.split('.').length -1 ]


  // if @id, set value as record url
  if (k == "@id") {
    return formatPropertyRecordId(record, pv, baseUrl);
  }
 if (k == "@type") {
    return formatPropertyRecordType(record, pv, baseUrl);
  }
  

  // If url
  if (datatype == "URL") {
    return formatUrl(record, pv, baseUrl);
  }

  // DateTime
  if (datatype == "DateTime") {
    return formatDateTime(record, pv, baseUrl);
  }

    // Duration
  if (datatype == "Duration") {
    return formatDuration(record, pv, baseUrl);
  }

  // number
  if (datatype == "Number") {
    return formatNumber(record, pv, baseUrl);
  }

  // array
  if (datatype == "Array") {
    return formatArray(record, pv, baseUrl);
  }

  // thing
  if (datatype == "Thing") {
    // MonetaryAmount
    if (h.record_type(pv.value) == "MonetaryAmount") {
      return formatMonetaryAmount(record, pv, baseUrl);
    }

    // Other
    return formatThing(record, pv, baseUrl);
  }

  // Text
  if (datatype == "Text") {
    return formatText(record, pv, baseUrl);
  }

  return pv
}



// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------


function formatPropertyRecordId(record, pv, baseUrl) {
  let url = h.getRecordUrl({"@id": pv.value}, baseUrl);
  pv.htmlValue = `<a title="${pv?.value}" href="${url}">${pv.value}</a>`;
  pv.table.className = "max-w-2xs truncate"
  return pv;
}
function formatPropertyRecordType(record, pv, baseUrl) {
  let url = dataHelpers.url.getUrl(baseUrl, pv.value);
  pv.htmlValue = `<a class="h-min" title="${pv?.value}" href="${url}">${pv.value}</a>`;
  pv.table.className = "max-w-2xs truncate"
  return pv;
}


function formatRecordId(record, pv, baseUrl) {
  let url = h.getRecordUrl(pv.value, baseUrl);
  pv.htmlValue = `<a href="${url}">${pv.value}</a>`;
  pv.table.className = "truncate"
  return pv;
}

function formatArray(record, pv, baseUrl) {
  pv.table.className = "w-min text-center";
  pv.htmlValue = pv.value.length > 0 ? `(${pv.value.length})` : "";
  return pv;
}

function formatUrl(record, pv, baseUrl) {
  pv.htmlValue = `<a title="${pv?.value}" href="${pv.value}" target="_blank" rel="noopener noreferrer">${pv.value}</a>`;
  pv.table.className = "max-w-2xs truncate"

  return pv;
}

function formatDateTime(record, pv, baseUrl) {
  pv.value = h.toDate(pv.value);
  pv.htmlValue = dataHelpers.date.format(pv.value);
  pv.table.className = "h-min truncate";
  return pv;
}

function formatDuration(record, pv, baseUrl) {
  pv.htmlValue = dataHelpers.duration.format(pv.value);
  pv.table.className = "h-min truncate";

  return pv;
}

function formatNumber(record, pv, baseUrl) {
  let nbOfDecimals = pv.propertyID == "position" ? 0 : 2;
  pv.value = h.toNumber(pv.value);
  pv.table.className = "h-min text-right font-mono";
  pv.htmlValue = dataHelpers.number.format(pv.value, nbOfDecimals);
  return pv;
}

function formatText(record, pv, baseUrl) {
  //pv.htmlValue = pv?.value ?? "";
  pv.htmlValue = `<div title="${pv?.value}" class="min-w-md line-clamp-4">${pv?.value ?? ""}</div>`
  pv.table.className = ""
  return pv;
}

function formatThing(record, pv, baseUrl) {
  
  
  let url = h.getRecordUrl(pv.value, baseUrl);


  pv.htmlValue = `<a title="${h.record_id(pv.value)}" href="${url}">${h.getValue(pv.value, 'name') || h.record_id(pv.value)}</a>`;
  
  pv.table.className = "max-w-xs truncate"


  return pv;
}

function formatMonetaryAmount(record, pv, baseUrl) {
  //
  let v = dataHelpers.toNumber(h.getValue(pv.value, "value"));
  if (v === undefined) {
    return pv;
  }

  // Ensure number
  let fv = dataHelpers.number.format(v, 2);

  // Retireve and format currency
  let currency = h.getValue(record, "currency");
  currency = (currency || "").toUpperCase();

  // Set html value
  pv.htmlValue = currency + " " + "$" + fv;
  if (currency == "USD") {
    pv.htmlValue = currency + " " + "$" + fv;
  }
  if (currency == "CAD") {
    pv.htmlValue = currency + " " + "$" + fv;
  }
  if (currency == "EUR") {
    pv.htmlValue = currency + " " + fv + " " + "€";
  }
  if (currency == "GBP") {
    pv.htmlValue = currency + " " + fv + " " + "£";
  }

  // Set alignment
  pv.table.className = "text-right font-mono";
  pv.record.className = "text-right font-mono";

  return pv;
}

function getPropertyValueObject(record, propertyID) {

  let value = h.getValues(record, propertyID);
  value = h.isArray(value) && value.length == 1 ? value[0] : value;

  let pv = {
    "@type": "HtmlPropertyValue",
    "@id": record?.["@id"] + propertyID + "#propertyvalue",
    propertyID: propertyID,
    value: value,
    table: {},
    record: {}
  };

  return pv;
}
