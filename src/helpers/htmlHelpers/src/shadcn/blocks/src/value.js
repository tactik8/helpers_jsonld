import * as hpv from "../../../formating/htmlPropertyValue.js";

import { jsonldBase as h} from '../../../../../jsonldBase/jsonldBase.js'

export function Value({ value, propertyID }) {
  let record = {};
  record[proeprtyID] = value;

  let hpvRecord = hpv.getHtmlPropertyValue({
    record,
    propertyID,
  });


  return hpv.htmlValue


}





function ValueRecordId(record, pv, baseUrl) {
    let url = h.getRecordUrl({ '@id': pv.value }, baseUrl);
    pv.htmlValue = `<a title="${pv?.value}" href="${url}">${pv.value}</a>`;
    pv.table.className = 'krpropertyrecordid max-w-2xs truncate';
    return pv;
}

function ValueyRecordType(record, pv, baseUrl) {
    let url = dataHelpers.url.getUrl(baseUrl, pv.value);
    pv.htmlValue = `<a class="h-min" title="${pv?.value}" href="${url}">${pv.value}</a>`;
    pv.table.className = 'krrecordtype max-w-2xs truncate';
    return pv;
}


function ValueArray(record, pv, baseUrl) {
    pv.table.className = 'krarray w-min text-center';
    pv.htmlValue = pv.value.length > 0 ? `(${pv.value.length})` : '';
    return pv;
}

function ValueUrl(record, pv, baseUrl) {
    pv.htmlValue = `<a title="${pv?.value}" href="${pv.value}" target="_blank" rel="noopener noreferrer">${pv.value}</a>`;
    pv.table.className = 'krurl max-w-2xs truncate';

    return pv;
}

function ValueDateTime(record, pv, baseUrl) {
    pv.value = h.toDate(pv.value);
    pv.htmlValue = dataHelpers.date.format(pv.value);
    pv.table.className = 'krdatetime h-min truncate';
    return pv;
}

function ValueDuration(record, pv, baseUrl) {
    pv.htmlValue = dataHelpers.duration.format(pv.value);
    pv.table.className = 'krduration h-min truncate';

    return pv;
}

function ValueNumber(record, pv, baseUrl) {
    let nbOfDecimals = pv.propertyID == 'position' ? 0 : 2;
    pv.value = h.toNumber(pv.value);
    pv.table.className = 'krnumber h-min text-right font-mono';
    pv.htmlValue = dataHelpers.number.format(pv.value, nbOfDecimals);
    return pv;
}

function ValueText(record, pv, baseUrl) {
    //pv.htmlValue = pv?.value ?? "";
    // pv.htmlValue = `<div title="${pv?.value}" class="min-w-md line-clamp-4">${pv?.value ?? ""}</div>`

    pv.htmlValue = `<div title="${pv?.value}" class=" line-clamp-4">${pv?.value ?? ''}</div>`;
    pv.table.className = 'krtext';
    return pv;
}

function ValueThing(record, pv, baseUrl) {
    let url = h.getRecordUrl(pv.value, baseUrl);

    pv.htmlValue = `<a title="${h.record_id(pv.value)}" href="${url}">${h.getValue(pv.value, 'name') || h.record_id(pv.value)}</a>`;

    pv.table.className = 'max-w-xs truncate';

    return pv;
}

function ValueMonetaryAmount(record, pv, baseUrl) {
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

    return pv;
}
