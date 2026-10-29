import { jsonldBase as h } from '../jsonldBase.js';

import * as dot from '../../dotHelpers/dotHelpers.js';
import { getRecord } from './memoryDb.js';

let DEFAULT_LANGUAGE = 'en-CA';

/**
 * Returns first _type value found
 * @param {object} record - Record to get _type value form
 * @returns {string} The _type value
 */
export function record_type(record) {
    return getValue(record, '@type');
}
export function getRecord_type(record) {
    return getValue(record, '@type');
}
export function setRecord_type(record, value) {
    return  setValue(record, '@type', value);
}

export function recordType(record) {
    return getValue(record, '@type');
}
export function getRecordType(record) {
    return getValue(record, '@type');
}
export function setRecordType(record, value) {
    return  setValue(record, '@type', value);
}

export function Type(record) {
    return getValue(record, '@type');
}
export function getType(record) {
    return getValue(record, '@type');
}
export function setType(record, value) {
    return setValue(record, '@type', value);
}

/**
 * Returns @id.
 * @param {*} record
 * @returns
 */
export function record_id(record) {
    return getValue(record, '@id');
}
export function getRecord_id(record) {
    return getValue(record, '@id');
}
export function setRecord_id(record, value){
    return setValue(record, '@id', value)
}

export function recordId(record) {
    return getValue(record, '@id');
}
export function getRecordId(record) {
    return getValue(record, '@id');
}
export function setRecordId(record, value){
    return setValue(record, '@id', value)
}

export function recordID(record) {
    return getValue(record, '@id');
}
export function getRecordID(record) {
    return getValue(record, '@id');
}
export function setRecordID(record, value){
    return setValue(record, '@id', value)
}

export function ID(record) {
    return getValue(record, '@id');
}
export function getID(record) {
    return getValue(record, '@id');
}
export function setID(record, value){
    return setValue(record, '@id', value)
}

export function Id(record) {
    return getValue(record, '@id');
}
export function getId(record) {
    return getValue(record, '@id');
}
export function setId(record, value){
    return setValue(record, '@id', value)
}

/**
 * Returns record id
 * @param {Object | Object[] | String | String[]} record - the record ref or record_id string
 * @returns {String | String[]} The record_id
 */
export function toRecord_id(record) {

    if (h.isArray(record)) {
        return record.map(x => toRecord_id(x))
    }

    if (typeof record == 'string') {
        return record;
    }
    return record_id(record);
}

/**
 * Returns record id
 * @param {Object | Object[] | String | String[]} record - the record ref or record_id string
 * @returns {String | String[]} The record_id
 */
export function toRecord_ids(record) {
    return toRecord_id(record)
}

/**
 * Returns record id
 * @param {Object | Object[] | String | String[]} record - the record ref or record_id string
 * @returns {String | String[]} The record_id
 */
export function toRecordID(record) {
    return toRecord_id(record)
}

/**
 * Returns record id
 * @param {Object | Object[] | String | String[]} record - the record ref or record_id string
 * @returns {String | String[]} The record_id
 */
export function toRecordId(record) {
    return toRecord_id(record)
}


/**
 * Returns true if object is a ref (only @id as property)
 * @param {*} value
 * @returns {Boolean} True if ref record
 */
export function isRef(value) {
    if (!h.isObject(value)) {
        return false;
    }
    if (!value?.['@id']) {
        return false;
    }
    return !Object.keys(value).some((x) => x != '@id');
}

/**
 * Returns reference of a jsonld {"@id": ...}
 * @param {object | string} value - The record or string
 * @returns {object} The ref {"@id": ...}
 */
export function ref(value) {
    // Check if thing object
    if (value?._isThingClass == true) {
        return record.ref;
    }

    // Handle null
    if (!value) {
        return undefined;
    }
    let record_id = h._utilGetId(value);
    if (!record_id) {
        return undefined;
    }
    return { '@id': record_id };
}

/**
 * Converts objects or string to ref record ({"@id": ...})
 * @param {Object | Object[] | String | String[]} value 
 * @returns {Ref | Ref[]} Ref record 
 */
export function toRef(value){

    if(h.isArray(value)){
        return value.map(x => toRef(x))
    }

    return {
        "@id": toRecordID(value)
    }
    
}



/**
 * Returns list of properties (keys) for an object. If list of objects, returns all properties
 * @param {object | object[]} record - Object or list of object to get properties from
 * @returns {string[]} List of properties (keys)
 */
export function keys(record) {
    return properties(record);
}

/**
 * Returns list of properties (keys) for an object. If list of objects, returns all properties
 * @param {object | object[]} record - Object or list of object to get properties from
 * @returns {string[]} List of properties (keys)
 */
export function properties(record) {
    if (!record) {
        return [];
    }

    if (h.isArray(record)) {
        let k = [];
        for (let r of record) {
            k = k.concat(properties(r));
        }
        return [...new Set(k)];
    }

    let k = Object.keys(record?.record || record);

    return k;
}

/**
 * Return a value from record using dot notation. Returns position 0 if missing.
 * Handles @language and @value
 * @param {*} record
 * @param {*} propertyID
 * @param {*} position
 * @param {*} defaultValue
 * @param {*} language
 * @returns
 */
export function getValue(record, propertyID, position, defaultValue, language) {
    let values = getValues(record, propertyID, defaultValue, language);

    //
    position = Number(position);
    if (isNaN(position)) {
        position = 0;
    }

    let value = values?.[position];

    return value ?? defaultValue;
}

/**
 * Set value to a property. Creates path if missing. Handles dot notation.
 *
 * @param {*} record
 * @param {*} propertyID
 * @param {*} value
 * @param {*} position
 * @returns
 */
export function setValue(record, propertyID, value, position, language) {
    // If position specified, insert value in current values, creating missing values as null if required.
    if (position !== undefined) {
        let currentValues = h.getValues(record, propertyID);
        while (currentValues.length - 1 < position) {
            currentValues.push(null);
        }
        currentValues[position] = value;
        value = currentValues;
    }
    return setValues(record, propertyID, value, language);
}

/**
 * Set the value if current value is null / undefined
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} position 
 * @param {*} language 
 */
export function setValueIfNull(record, propertyID, value, position, language){

    let currentValue = getValue(record, propertyID, position)

    if(h.isNull(currentValue) == false){
        return record
    }

    return setValue(record, propertyID, value, position, language)

}

/**
 * Set the value if current value is null / undefined
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @param {*} position 
 * @param {*} language 
 */
export function setIfNull(record, propertyID, value, position, language){
    return setValueIfNull(record, propertyID, value, position, language)
}


/**
 * Add values to a property, combining with existing values.
 * @param {*} record - Record to update
 * @param {*} propertyID
 * @param {*} values
 * @returns {object} The record with updated value
 */
export function addValue(record, propertyID, value) {
    return addValues(record, propertyID, value);
}

/**
 * Add values to a property, combining with existing values.
 * @param {*} record - Record to update
 * @param {*} propertyID
 * @param {*} values
 * @returns {object} The record with updated values
 */
export function addValues(record, propertyID, values) {
    let currentValues = h.getValues(record, propertyID);

    values = currentValues.concat(values);

    return setValues(record, propertyID, values);
}

/**
 * Return the values of a dot notation property in a record
 * Handles @language and @value
 * @param {*} record
 * @param {*} propertyID
 * @param {*} defaultValue
 * @param {*} language
 * @returns {array} An array of values for propertyID
 */
export function getValues(record, propertyID, defaultValue, language) {
    // Error
    if (record === undefined) {
        return [];
    }

    // Error
    if (propertyID === undefined || propertyID === null || propertyID == '') {
        return [];
    }

    // Check if thing object
    record = record?.record || record;
    //if (record?._isThingClass == true) {
    //    return record.getValues(propertyID, defaultValue, language)
    //}

    // prepare propertyID
    let paths = propertyID.split('.');

    // Iterate until the last path item
    let runningValue = record;
    for (let i = 0; i < paths.length; i++) {
        let [propertyID, position] = getPathFragment(paths[i]);

        // Get value at path and position
        if (propertyID) {
            runningValue = runningValue?.[propertyID];
            runningValue = h.toArray(runningValue);
        }

        // Filter for language (if @language tag)
        runningValue = runningValue.filter(
            (x) =>
                x?.['@language'] == language ||
                x?.['@language'] == DEFAULT_LANGUAGE ||
                x?.['@lannguage'] === undefined,
        );

        // Deal with @value
        runningValue = runningValue.map((x) => x?.['@value'] ?? x);
        runningValue = h.toArray(runningValue);

        // Deal with language
        runningValue = runningValue.map(
            (x) => x?.[language] ?? x?.[DEFAULT_LANGUAGE] ?? x,
        );
        runningValue = h.toArray(runningValue);

        // Get value at position (except if last path element)
        if (i < paths.length - 1) {
            runningValue = runningValue?.[position];
        }
    }

    // Get final path property
    let values = h.toArray(runningValue);

    if (values.length == 0 && defaultValue !== undefined) {
        return defaultValue;
    }
    return values;
}

export function setValues(record, propertyID, value, language) {
    // Check if thing object
    record = record?.record || record;
    //if (record?._isThingClass == true) {
    //    return record.setValues(propertyID, value, language)
    // }

    //

    // prepare propertyID
    let paths = propertyID.split('.');

    // prepare propertyID
    // Iterate
    let runningValue = record || {};

    for (let i = 0; i < paths.length - 1; i++) {
        let [propertyID, position] = getPathFragment(paths[i]);

        // Deal with empty
        runningValue[propertyID] = runningValue?.[propertyID] || [];

        let newRunningValue;

        // Deal with language and ensure it is an array
        if (runningValue?.[propertyID]?.[language]) {
            runningValue[propertyID][language] = h.toArray(
                runningValue?.[propertyID]?.[language],
            );
            newRunningValue = runningValue[propertyID][language];
        } else if (runningValue?.[propertyID]?.[DEFAULT_LANGUAGE]) {
            runningValue[propertyID][DEFAULT_LANGUAGE] = h.toArray(
                runningValue?.[propertyID]?.[DEFAULT_LANGUAGE],
            );
            newRunningValue = runningValue[propertyID][DEFAULT_LANGUAGE];
        } else {
            runningValue[propertyID] =
                h.toArray(runningValue?.[propertyID]) || [];
            newRunningValue = runningValue[propertyID];
        }

        // Ensure it exists and with sufficient numbers
        while (newRunningValue.length - 1 < position) {
            newRunningValue.push({ '@type': 'Thing' });
        }

        // Get with correct position
        runningValue = newRunningValue?.[position];
    }

    // Assign value
    let [p, n] = getPathFragment(paths[paths.length - 1]);

    // Ensure array
    runningValue[p] = h.toArray(value);

    return record;
}

/**
 * Inserts a value if not already present
 * @param {*} record
 * @param {*} propertyID
 * @param {*} value
 */
export function insertValue(record, propertyID, value) {
    if (hasValue(record, propertyID, value) == true) {
        return record;
    }

    return addValue(record, propertyID, value);
}

/**
 * Return true if record contains provided value
 * @param {*} record
 * @param {*} propertyID
 * @param {*} value
 * @returns {boolean} True if contains value, false
 */
export function hasValue(record, propertyID, value) {
    let values = getValues(record, propertyID);

    if (values.length == 0) {
        return false;
    }

    for (let v of values) {
        if (h.isSame(v, value)) {
            return true;
        }
    }

    return false;
}

/**
 * Splits dot notation into propertyID and position
 * @param {*} pathFragment 
 * @returns {[string, string]} array of propertyID and position
 */
function getPathFragment(pathFragment) {
    if (pathFragment === undefined) {
        return (undefined, 0);
    }
    let propertyID = pathFragment.split('[')?.[0];
    let position = (pathFragment.split('[')?.[1] || '').split(']')?.[0];
    position = Number(position);
    position = isNaN(position) ? 0 : position;

    return [propertyID, position];
}

// -----------------------------------------------------------------------
// Additional property
// -----------------------------------------------------------------------

export function getAdditionalProperty(record, propertyID) {
    let pvs = h.getValues(record, 'additionalProperty');
    let pv = pvs.find((x) => h.getValue(x, 'propertyID') == propertyID);
    let value = h.getValue(pv, 'value');
    return value;
}

export function setAdditionalProperty(record, propertyID, value, unitText) {
    let pvs = h.getValues(record, 'additionalProperty');
    pvs = pvs.filter((x) => h.getValue(x, 'propertyID') != propertyID);

    let pv = {
        '@type': 'PropertyValue',
        '@id': h.randomUUID(),
        propertyID: propertyID,
        value: value,
    };
    record = h.addValue(record, 'additionalProperty', pv);
    return record;
}

// -----------------------------------------------------------------------
// Short cut properties
// -----------------------------------------------------------------------

export function getAtValue(record) {
    return h.getValues(record, '@value');
}

export function setAtValue(record, value) {
    return h.setValues(record, '@value', value);
}

// actionStatus
export function actionStatus(record) {
    return h.getValue(record, 'actionStatus');
}
export function getActionStatus(record) {
    return h.getValue(record, 'actionStatus');
}
export function setActionStatus(record, value) {
    return h.setValue(record, 'actionStatus', value);
}

// contentUrl
export function contentUrl(record) {
    return h.getValue(record, 'contentUrl');
}
export function getContentUrl(record) {
    return h.getValue(record, 'contentUrl');
}
export function setContentUrl(record, value) {
    return h.setValue(record, 'contentUrl', value);
}

// description
export function description(record) {
    return h.getValue(record, 'description');
}
export function getDescription(record) {
    return h.getValue(record, 'description');
}
export function setDescription(record, value) {
    return h.setValue(record, 'description', value);
}

//email
export function email(record) {
    return h.getValue(record, 'email');
}
export function getEmail(record) {
    return h.getValue(record, 'email');
}
export function setEmail(record, value) {
    return h.setValue(record, 'email', value);
}

// item
export function item(record) {
    return h.getValue(record, 'item');
}
export function getItem(record) {
    return h.getValue(record, 'item');
}
export function setItem(record, value) {
    return h.setValue(record, 'item', value);
}

// items
export function items(record){
    return h.list.getItems(record)
}
export function getItems(record){
    return h.list.getItems(record)
}
export function setItems(record, values){
    return h.list.setItems(record, values)
}

// itemListElement
export function itemListElement(record) {
    return h.list.getItemListElement(record)
}
export function getItemListElement(record) {
    return h.list.getItemListElement(record)
}
export function setItemListElement(record, value) {
    return h.list.setItemListElement(record, value)
}

// name
export function name(record) {
    return h.getValue(record, 'name');
}
export function getName(record) {
    return h.getValue(record, 'name');
}
export function setName(record, value) {
    return h.setValue(record, 'name', value);
}

// nomberOfItems
export function numberOfItems(record) {
    return h.getValue(record, 'numberOfItems');
}
export function getNumberOfItems(record) {
    return h.getValue(record, 'numberOfItems');
}
export function setNumberOfItems(record, value) {
    return h.setValue(record, 'numberOfItems', value);
}



// object
export function object(record) {
    return h.getValue(record, 'object')
}
export function getObject(record) {
    return h.getValue(record, 'object')
}
export function setObject(record, value) {
    return setValue(record, 'object', value)
}

// objects
export function objects(record) {
    return h.getValues(record, 'object')
}
export function getObjects(record) {
    return h.getValues(record, 'object')
}
export function setObjects(record, value) {
    return setValues(record, 'object', value)
}




// position
export function position(record) {
    return h.list.getPosition(record)
}
export function getPosition(record) {
    return h.list.getPosition(record)
}
export function setPosition(record, value) {
    return h.list.setPosition(record, value)
}

// potentialAction
export function potentialAction(record) {
    return h.getValues(record, 'potentialAction')
}
export function getPotentialAction(record) {
    return h.getValues(record, 'potentialAction')
}
export function setPotentialAction(record, value) {
    return h.setValues(record, 'potentialAction', value)
}

// potentialAction
export function potentialActions(record) {
    return h.getValues(record, 'potentialAction')
}
export function getPotentialActions(record) {
    return h.getValues(record, 'potentialAction')
}
export function setPotentialActions(record, value) {
    return h.setValues(record, 'potentialAction', value)
}



// result
export function result(record) {
    return h.getValue(record, 'result')
}
export function getResult(record) {
    return h.getValue(record, 'result')
}
export function setResult(record, value) {
    return setValue(record, 'result', value)
}


// results
export function results(record) {
    return h.getValues(record, 'result')
}
export function getResults(record) {
    return h.getValues(record, 'result')
}
export function setResults(record, value) {
    return setValues(record, 'result', value)
}


// targetCollection
export function targetCollection(record) {
    return h.getValue(record, 'targetCollection');
}
export function getTargetCollection(record) {
    return h.getValue(record, 'targetCollection');
}
export function setTargetCollection(record, value) {
    return h.setValue(record, 'targetCollection', value);
}

// targetCollections
export function targetCollections(record) {
    return h.getValues(record, 'targetCollection');
}
export function getTargetCollections(record) {
    return h.getValues(record, 'targetCollection');
}
export function setTargetCollections(record, value) {
    return h.setValues(record, 'targetCollection', value);
}


// text
export function text(record) {
    return h.getValue(record, 'text');
}
export function getText(record) {
    return h.getValue(record, 'text');
}
export function setText(record, value) {
    return h.setValue(record, 'text', value);
}

// url
export function url(record) {
    return h.getValue(record, 'url');
}
export function getUrl(record) {
    return h.getValue(record, 'url');
}
export function setUrl(record, value) {
    return h.setValue(record, 'url', value);
}




/**
 * Returns true if the actionStatus property is PotentialActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is PotentialActionStatus, false
 */
export function isPotential(record) {
    return h.getValue(record, 'actionStatus') == 'PotentialActionStatus';
}

/**
 * Returns true if the actionStatus property is ActiveActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is ActiveActionStatus, false
 */
export function isActive(record) {
    return h.getValue(record, 'actionStatus') == 'ActiveActionStatus';
}

/**
 * Returns true if the actionStatus property is CompletedActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is CompletedActionStatus, false
 */
export function isCompleted(record) {
    return h.getValue(record, 'actionStatus') == 'CompletedActionStatus';
}

/**
 * Returns true if the actionStatus property is FailedActionStatus
 * @param {*} record - The action to check
 * @returns {boolean} True if the actionStatus property is FailedActionStatus, false
 */
export function isFailed(record) {
    return h.getValue(record, 'actionStatus') == 'FailedActionStatus';
}

/**
 * Set action to PotentialActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setPotential(record) {
    record = h.setValue(record, 'actionStatus', 'PotentialActionStatus');
    record = h.setValue(record, 'startTime', undefined);
    record = h.setValue(record, 'endTime', undefined);
    record = h.setValue(record, 'error', undefined);
    record = h.setValue(record, 'result', undefined);
    return record;
}

/**
 * Set action to ActiveActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setActive(record) {
    record = h.setValue(record, 'actionStatus', 'ActiveActionStatus');
    record = h.setValue(
        record,
        'startTime',
        h.getValue(record, 'startTime') ?? new Date(),
    );
    record = h.setValue(record, 'endTime', undefined);
    record = h.setValue(record, 'error', undefined);
    record = h.setValue(record, 'result', undefined);
    return record;
}

/**
 * Set action to CompletedActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setCompleted(record, result) {
    record = h.setValue(record, 'actionStatus', 'CompletedActionStatus');
    record = h.setValue(
        record,
        'startTime',
        h.getValue(record, 'startTime') ?? new Date(),
    );
    record = h.setValue(
        record,
        'endTime',
        h.getValue(record, 'endTime') ?? new Date(),
    );
    record = h.setValue(record, 'error', undefined);
    record = h.setValue(
        record,
        'result',
        result ?? h.getValues(record, 'result'),
    );
    return record;
}

/**
 * Set action to FailedActionStatus
 * @param {object} record - The action to update
 * @returns {object} The updated action
 */
export function setFailed(record, error) {
    record = h.setValue(record, 'actionStatus', 'FailedActionStatus');
    record = h.setValue(
        record,
        'startTime',
        h.getValue(record, 'startTime') ?? new Date(),
    );
    record = h.setValue(
        record,
        'endTime',
        h.getValue(record, 'endTime') ?? new Date(),
    );
    record = h.setValue(record, 'error', String(error));
    record = h.setValue(record, 'result', undefined);
    return record;
}

// images

/**
 * Returns the image url associated with a record (base or within image nested record.)
 * @param {*} record - The record to extract the image url from
 * @returns {string} The url of the image associated with the record
 */
export function getImageUrl(record) {
    if (h.record_type(record) == 'ImageObject') {
        return h.getValue(record, 'contentUrl');
    }

    let imageUrl = h.getValue(record, 'image.contentUrl');

    imageUrl = imageUrl ?? h.getValue(record, 'image.url');

    imageUrl = imageUrl ?? h.getValue(record, 'image');

    imageUrl = typeof imageUrl == 'string' ? imageUrl : '';

    return imageUrl;
}

/**
 * Returns the image name associated with a record (base or withing image nested record.)
 * @param {*} record - The record to extract the image name from
 * @returns {string} The name of the image associated with the record
 */
export function getImageName(record) {
    let imageName = h.getValue(record, 'image.name');

    imageName = imageName ?? h.getValue(record, 'image.name');

    imageName = imageName ?? h.record_id(record);

    imageName = typeof imageName == 'string' ? imageName : '';

    return imageName;
}
