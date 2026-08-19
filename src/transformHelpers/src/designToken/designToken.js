/**
 * BrandDesign custome record for w3c design token
 */

import { _h as helpers}  from '../../../index.js'

import * as dot from '../../../dotHelpers/dotHelpers.js'
import designTokenSample from "./designTokenSample.json" with { type: "json" };

const DESIGN_TOKEN_PROPERTY_NAME = 'DesignToken'

export const designTokenHelpers = {

    css: {
        get: convertTokensToCss
    },
    get: getTokenFromSchema,
    set: setTokenToSchema,
    getValue: getTokenValueFromSchema,
    setValue: setTokenValueToSchema,
    sampleRecord: getSampleRecord
}


/**
 * Retrieves the Design Token record from additionalProperty
 * @param {*} record 
 * @returns 
 */
function getTokenFromSchema(record) {

    // Error handling
    if (!record) { return undefined }

    //
    let token = helpers.getAdditionalProperty(record, DESIGN_TOKEN_PROPERTY_NAME)
    token = token || {}

    return token

}

/**
 * Sets the Design Token record from additionalProperty
 * @param {*} record 
 * @returns 
 */
function setTokenToSchema(record, token) {

    // Error handling
    if (!record) { return undefined }
    token = token || {}

    // 
    record = helpers.setAdditionalProperty(record, DESIGN_TOKEN_PROPERTY_NAME, token)

    return record

}


/**
 * Get specific value from Design Token in additionalProperty
 * @param {*} record 
 * @param {*} propertyID 
 * @returns 
 */
function getTokenValueFromSchema(record, propertyID) {

    // Error handling
    if (!record) { return undefined }
    if (!propertyID) { return undefined }
    if (typeof propertyID != "string") { return undefined }

    // Fix propertyID
    propertyID = propertyID.endsWith('.$value') ? propertyID.replace('$value', '') : propertyID

    // Get token
    let token = getTokenFromSchema(record)

    // Get property
    let property = dot.get(token, propertyID)

    // Get value
    let v = dot.get(property, "$value")

    // 
    return v
}

/**
 * Update specific value from Design Token in additionalProperty
 * @param {*} record 
 * @param {*} propertyID 
 * @param {*} value 
 * @returns 
 */
function setTokenValueToSchema(record, propertyID, value) {

    // Error handling
    if (!record) { return record }
    if (!propertyID) { return record }
    if (typeof propertyID != "string") { return record }

    // Fix propertyID
    propertyID = propertyID.endsWith('.$value') ? propertyID.replace('$value', '') : propertyID

    // Get token
    let token = getTokenFromSchema()

    // Get property template record
    let sample = getSampleRecord()
    let property = dot.get(sample, propertyID)

    // Chenge tamplate value with real value
    property['$value'] = value

    // Update token and add back to record
    token = dot.set(token, propertyID, property)
    record = setTokenToSchema(record, token)

    // 
    return record
}


/**
 * Converts a record contianing a design token to css
 * @param {*} record 
 * @param {*} prefix 
 * @returns 
 */
function getCssfromSchema(record, prefix) {

    // error handling
    if (!record) { return undefined }

    //
    let token = getTokenFromSchema(record)
    if (!token) { return undefined }

    // 
    let css = convertTokensToCss(token, prefix)

    return css
}


/**
 * Converts a design token record to css
 * @param {*} tokenObj 
 * @param {*} prefix 
 * @returns 
 */
function convertTokensToCss(tokenObj, prefix = 'dt') {
    const cssVars = [];

    function traverse(obj, path = []) {
        for (const [key, val] of Object.entries(obj)) {
            if (val === null || val === undefined) continue;

            const currentPath = [...path, key];

            // Check if node is a W3C Design Token ({ value: ... })
            if (typeof val === 'object' && 'value' in val) {
                const varName = `--${currentPath.map(k => k.toLowerCase()).join('-')}`;
                const formattedVal = formatValue(val.value);
                cssVars.push(`  ${varName}: ${formattedVal};`);
            }
            // Handle plain object values or nested groups
            else if (typeof val === 'object' && !Array.isArray(val)) {
                traverse(val, currentPath);
            }
            // Handle direct primitive key-value pairs
            else {
                const varName = `--${currentPath.map(k => k.toLowerCase()).join('-')}`;
                const formattedVal = formatValue(val);
                cssVars.push(`  ${varName}: ${formattedVal};`);
            }
        }
    }

    function formatValue(value) {
        // Array values (e.g., box-shadows, font stacks)
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        // Convert unitless numbers for dimension-like values (defaults to px)
        if (typeof value === 'number') {
            return value === 0 ? '0' : `${value}px`;
        }
        // Standard string values, aliases ({colors.primary}), etc.
        return String(value).replace(/\{([^}]+)\}/g, 'var(--$1)').replace(/\./g, '-');
    }

    const initialPath = prefix ? [prefix] : [];
    traverse(tokenObj, initialPath);

    return `:root {\n${cssVars.join('\n')}\n}`;
}


function getSampleRecord() {

    return designTokenSample

}