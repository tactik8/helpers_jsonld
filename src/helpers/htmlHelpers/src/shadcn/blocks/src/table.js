import { jsonldBase as h } from '../../../../../jsonldBase/jsonldBase.js';

import { components } from '../../components/components.js';
import { things } from '../../../../../things/things.js';

import { Media } from './media.js';

import { dataHelpers } from '../../../../../dataHelpers/dataHelpers.js';

export function Table(record, baseUrl, properties, headers, showThumbnail, showPosition) {
    
    let records = record
    properties = properties || getPropertiesFromRecords(records);

    headers = headers || getHeadersFromProperties(properties);

    let columnTypes = [];

    if (showThumbnail == true) {
        headers = ['Thumbnail'].concat(headers);
        properties = ['item'].concat(properties);
        columnTypes = ['thumbnail'].concat(columnTypes);
    }

    if (showPosition == true) {
        headers = ['#'].concat(headers);
        properties = ['position'].concat(properties);
        columnTypes = ['position'].concat(columnTypes);
    }

    // let data = getTableRecords(records, properties);

    return components.Table(
        TableHeader(records, properties, headers, columnTypes) +
        TableBody(records, properties, baseUrl, columnTypes)
    );
}

export function TableHeader(records, properties, headers, columnTypes) {
    properties = properties || getPropertiesFromRecords(records);

    headers = headers || getHeadersFromProperties(properties);

    columnTypes = columnTypes || [];

    properties = properties || getPropertiesFromRecords(records);

    return components.TableHeader(
        headers.map((x, i) => {
            switch (columnTypes?.[i]) {
                case 'number':
                    return components.TableColumnHeaderRight(x);
                    break;
                default:
                    return components.TableColumnHeader(x);
            }
        }).join(' '),
    );
}

export function TableBody(records, properties, baseUrl, columnTypes) {

    properties = properties || getPropertiesFromRecords(records);

    columnTypes = columnTypes || [];

    let data = h.getValues(
        (new things.ItemList(records)),
        'itemListElement',
    );

    return components.TableBody(
        data.map((x) => TableRow(x, properties, baseUrl, columnTypes)).join(' ')
    );
}

export function TableRow(record, properties, baseUrl, columnTypes) {
    
    let records = record

    properties = properties || getPropertiesFromRecords(records);

    columnTypes = columnTypes || [];

    let c = components.TableRow(
        properties.map((k, i) => (
                TableCell(
                    record,
                    h.getValues(record, k),
                    k,
                    baseUrl,
                    columnTypes,
                    i,
                )
        )).join(' '),
        h.record_id(record),
        undefined,
        'kr-listitem',
    );

    return c
}

export function TableCell(record, value, propertyID, baseUrl, columnTypes, i2) {
    let values = value;
    let k = propertyID;
    let x = record;


    values = h.isArray(values) && values.length == 0 ? '' : values;
    values = h.isArray(values) && values.length == 1 ? values[0] : values;

    if ((k || '').endsWith('@type')) {
        let url = dataHelpers.url.getUrl(baseUrl || "", '/' + values);
        return components.TableCellLink(url, values);
    }
    if ((k || '').endsWith('@id')) {
        let url = h.getRecordUrl(x, baseUrl);
        return components.TableCellLink(url, values);
    }

    switch (columnTypes?.[i2] || getDataType(values)) {
        case 'array':
            return components.TableCellCenter(`(${values.length})`);
        case 'text':
            return components.TableCellText(values);
        case 'number':
            return components.TableCellNumber(values, 2);
        case 'link':
            return components.TableCellLink(values, values);
        case 'thumbnail':
            return components.TableCell(Media({ record: values }));
        case 'position':
            return components.TableCellNumber(values, 0);
        case 'object':
            return components.TableCellLink(
                h.getRecordUrl(values, baseUrl),
                h.record_id(values),
            );
        default:
            return components.TableCellText(values);
    }
}

export function getPropertiesFromRecords(itemList) {
    let listItems = h.getValues(itemList, 'itemListElement');
    let items = listItems.map((x) => h.getValue(x, 'item'));

    let properties = [...new Set(items.flatMap(Object.keys))];
    properties = properties.filter((x) => x.startsWith('@') === false);
    properties = properties.map((x) => 'item.' + x);
    properties = ['item.@type', 'item.@id'].concat(properties);

    return properties;
}

export function getHeadersFromProperties(properties) {
    // Define titles from records if not provided
    properties = properties || [];
    let headers = properties.map((x) => x.split('.')?.[1] || x);

    headers = headers.map((x) => (x == 'position' ? 'No' : x));

    headers = headers.map((x) => ({
        htmlValue: x,
        table: { className: 'capitalize' },
    }));

    return headers;
}

export function getDataType(value) {
    value = h.isArray(value) && value.length == 0 ? undefined : value;
    value = h.isArray(value) && value.length == 1 ? value[0] : value;

    if (!value) {
        return 'text';
    }

    if (dataHelpers.isNumber(value)) {
        return 'number';
    }

    if (dataHelpers.isUrl(value)) {
        return 'link';
    }

    if (dataHelpers.isDate(value)) {
        return 'date';
    }

    if (dataHelpers.isArray(value)) {
        return 'array';
    }

    if (dataHelpers.isObject(value)) {
        return 'object';
    }

    return 'text';
}
