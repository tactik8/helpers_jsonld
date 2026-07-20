import { _h } from '../../index.js'
import { getConversation } from '../../records/src/conversation.js'


export function getTitle1(record) {

    let headline

    if (!record) {
        return ""
    }
    let record_type = _h.record_type(record)
    let record_id = _h.record_id(record)
    let givenName = _h.getValue(record, 'givenName')
    let familyName = _h.getValue(record, 'familyName')
    let name = _h.getValue(record, 'name')


    // Person
    if (record_type == "Person") {
        let values = [givenName, familyName]
        values = values.filter(x => x !== undefined)
        if (values.length > 0) {
            return values.join(' ')
        }

    }

    // Other
    if (name) {
        return name
    }

    return record_id || ""

}



export function getTitle2(record) {

    let headline

    if (!record) {
        return ""
    }
    let record_type = _h.record_type(record)
    let record_id = _h.record_id(record)
    let email = _h.getValue(record, 'email')
    let description = _h.getValue(record, 'description')


    // Person
    if (record_type == "Person") {
        return email ?? ""
    }

    // Action
     if (record_type == "Action") {
        let status = _h.getValue('actionStatus')
        status = status || ""
        status = status.replace('ActionStatus', '')
        return status ?? ""
    }

    // Other
    if (description) {
        return description
    }

    return ""
}


export function getContent(record) {

    let headline

    if (!record) {
        return ""
    }
    let record_type = _h.record_type(record)
    let record_id = _h.record_id(record)
    let email = _h.getValue(record, 'email')


    let r

    // 
    r = _h.getValue(record, 'abstract')
    if (r && typeof r == 'string') { return r }

    // 
    r = _h.getValue(record, 'text')
    if (r && typeof r == 'string') { return r }

    // 
    r = _h.getValue(record, 'description')
    if (r && typeof r == 'string') { return r }

    //
    return ""
}



export function thumbnailUrl(record) {

    let record_type = _h.record_type(record)
    let record_id = _h.record_id(record)

    let result
    let r

    //
    r = _h.getValue(record, 'thumbnail.contentUrl')
    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'thumbnail')
    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'thumbnailUrl')
    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'image.contentUrl')
    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'image')
    if (r && typeof r == 'string') { return r }


    return ""

}



export function imageUrl(record) {

    let record_type = _h.record_type(record)
    let record_id = _h.record_id(record)

    let result
    let r

    //
    r = _h.getValue(record, 'contentUrl')
    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'image.contentUrl')
    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'image')
    if (r && typeof r == 'string') { return r }

    //
    if (r && typeof r == 'string') { return r }

    return ""

}

export function imageUrls(record) {

    let record_type = _h.record_type(record)
    let record_id = _h.record_id(record)

    let result
    let r

    //
    r = _h.getValues(record, 'image.contentUrl')
    r = r.filter(x => x && typeof x == "string")
    if (r.length > 0) { return r }

    //
    r = _h.getValues(record, 'image')

    if (r && typeof r == 'string') { return r }

    //
    r = _h.getValue(record, 'image')
    if (r && typeof r == 'string') { return r }

    //
    if (r && typeof r == 'string') { return r }

    return ""

}

/**
 * Returns the matching SVG icon string for a given Schema.org type.
 * Supports case-insensitive matching and handles optional "schema:" prefixes.
 * 
 * @param {object} record - The Schema.org record (e.g., 'Person', 'PostalAddress')
 * @returns {string|null} The SVG string, or null if the type isn't supported
 */
export function getIcon(record) {

    let record_type = _h.record_type(record)

    record_type = record_type || "Thing"

    // Normalize input: remove "schema:" prefix if present, strip spaces, and lowercase
    const normalizedType = record_type
        .replace(/^schema:/i, '')
        .replace(/\s+/g, '')
        .toLowerCase();

    switch (normalizedType) {
        case 'thing':
            return ICON_THING;
        case 'action':
            return ICON_ACTION;
        case 'person':
            return ICON_PERSON;
        case 'organization':
            return ICON_ORGANIZATION;
        case 'itemlist':
            return ICON_ITEM_LIST;
        case 'listitem':
            return ICON_LIST_ITEM;
        case 'postaladdress':
            return ICON_POSTAL_ADDRESS;
        case 'product':
            return ICON_PRODUCT;
        case 'webapi':
            return ICON_WEB_API;
        case 'website':
            return ICON_WEB_SITE;
        case 'webpage':
            return ICON_WEB_PAGE;
        default:
            // Fallback to 'thing' for unmatched schema objects, or change to return null/empty string
            return ICON_THING;
    }
}

const ICON_THING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>`;

const ICON_ACTION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>`;

const ICON_PERSON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>`;

const ICON_ORGANIZATION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" /></svg>`;

const ICON_ITEM_LIST = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>`;

const ICON_LIST_ITEM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" /></svg>`;

const ICON_POSTAL_ADDRESS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>`;

const ICON_PRODUCT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>`;

const ICON_WEB_API = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>`;

const ICON_WEB_SITE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>`;

const ICON_WEB_PAGE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>`;

