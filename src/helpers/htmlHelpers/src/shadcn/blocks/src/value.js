import { dataHelpers} from '../../../../../dataHelpers/dataHelpers.js'
import { jsonldBase as h} from '../../../../../jsonldBase/jsonldBase.js'

export function Value(value, propertyID, baseUrl ) {
 

  if(h.isArray(value)){
    return ValueArray(value, propertyID, baseUrl)
  }

  if(propertyID == "@type"){
    return ValueRecordType(value, propertyID, baseUrl)
  }

  if(propertyID == "@id"){
    return ValueRecordId(value, propertyID, baseUrl)
  }

  if(h.isObject(value)){
    return ValueThing(value, propertyID, baseUrl)
  }

  if(h.isNumber(value)){
    return ValueNumber(value, propertyID, baseUrl)
  }

  if(h.isDate(value)){
    return ValueDateTime(value, propertyID, baseUrl)
  }

  if(dataHelpers.isUrl(value)){
    return ValueUrl(value, propertyID, baseUrl)
  }

  return ValueText(value, propertyID, baseUrl)

}



export function ValueRecordId(value, propertyID, baseUrl) {
    let url = h.getRecordUrl({ '@id': value }, baseUrl);
    let pv = `<a title="${value}" href="${url}">${value}</a>`;
    return wrapValue(pv, propertyID);

   
}

export function ValueRecordType(value, propertyID, baseUrl) {
    let url = dataHelpers.url.getUrl(baseUrl, value);
    let pv = `<a class="h-min" title="${value}" href="${url}">${value}</a>`;
    return wrapValue(pv, propertyID);

   
}

export function ValueArray(value, propertyID, baseUrl) {
    let pv = value.length > 0 ? `(${value.length})` : '';
    return wrapValue(pv, propertyID);

}

export function ValueUrl(value, propertyID, baseUrl) {
    let pv = `<a title="${value}" href="${value}" target="_blank" rel="noopener noreferrer">${value}</a>`;
    return wrapValue(pv, propertyID);
}


export function ValueDateTime(value, propertyID, baseUrl) {
    value = h.toDate(value);
    let pv = dataHelpers.date.format(value);
    return wrapValue(pv, propertyID);
}
   


export function ValueDuration(value, propertyID, baseUrl) {
    return dataHelpers.duration.format(pv.value);

}

export function ValueNumber(value, propertyID, baseUrl) {
    let nbOfDecimals = propertyID == 'position' ? 0 : 2;
    value = h.toNumber(value);
    value = dataHelpers.number.format(value, nbOfDecimals);
    return wrapValue(value, propertyID);
}


export function ValueText(value, propertyID, baseUrl) {
    return wrapValue(value, propertyID);
}

export function ValueThing(value, propertyID, baseUrl) {
    let url = h.getRecordUrl(value, baseUrl);

    let title = h.getName(value) || h.record_id(value)
    if(h.record_type(value) == "ListItem"){
      title = `ListItem ${h.getPosition(value)} - ${h.getValue(value, 'item.name') || h.getValue(value, '@id')}`
    }

    let pv = `<a title="${title}" href="${url}">${title}</a>`;
    return wrapValue(pv, propertyID);

}

export function ValueMonetaryAmount(value, propertyID, baseUrl) {
    //
    let v = dataHelpers.toNumber(h.getValue(pv.value, 'value'));
    if (v === undefined) {
        return pv;
    }

    // Ensure number
    let fv = dataHelpers.number.format(v, 2);

    // Retireve and format currency
    let currency = h.getValue(record, 'currency');
    currency = (currency || '').toUpperCase();

    // Set html value
    pv.htmlValue = currency + ' ' + '$' + fv;
    if (currency == 'USD') {
        pv.htmlValue = currency + ' ' + '$' + fv;
    }
    if (currency == 'CAD') {
        pv.htmlValue = currency + ' ' + '$' + fv;
    }
    if (currency == 'EUR') {
        pv.htmlValue = currency + ' ' + fv + ' ' + '€';
    }
    if (currency == 'GBP') {
        pv.htmlValue = currency + ' ' + fv + ' ' + '£';
    }

    // Set alignment
    pv.table.className = 'text-right font-mono';
    pv.record.className = 'text-right font-mono';

    return wrapValue(pv, propertyID);
}


/**
 * Wraps value in a span element. Adds propertyID
 * @param {*} value 
 * @param {*} propertyID 
 */
function wrapValue(value, propertyID){

    return `
      <span class="kr-value" data-property-id="${propertyID}">${value}</span>
    `;

}