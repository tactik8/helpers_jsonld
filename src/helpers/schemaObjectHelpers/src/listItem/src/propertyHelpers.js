
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for ListItem and its parents.
 * @returns {String[]} - The properties for ListItem.
 */
export function getProperties() {
    return ["item","nextItem","position","previousItem","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for ListItem and its parents.
 * @returns {String[]} - The properties for ListItem.
 */
export function getPropertiesAll() {
    return ["item","nextItem","position","previousItem","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for ListItem without parent properties.
 * @returns {String[]} - The properties for ListItem.
 */
export function getPropertiesMain() {
    return ["item","nextItem","position","previousItem"]
}

/**
 * Returns list of common properties for ListItem.
 * @returns {String[]} - The common properties for ListItem.
 */
export function getPropertiesShort() {
    return ["item","nextItem","position","previousItem"]        
}

    
    
/**
 * Returns property definitions for ListItem.
 * @returns {Object} - Property definitions for ListItem.
 */
export const properties = {
    "item": {
        "@type": "Property",
        "$id": "https://schema.org/item",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "item",
        "description": "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').",
        "type": [
            "Thing"
        ],
        "classes": [
            "DataFeedItem",
            "ListItem"
        ]
    },
    "nextItem": {
        "@type": "Property",
        "$id": "https://schema.org/nextItem",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "nextItem",
        "description": "A link to the ListItem that follows the current one.",
        "type": [
            "ListItem"
        ],
        "classes": [
            "ListItem"
        ]
    },
    "position": {
        "@type": "Property",
        "$id": "https://schema.org/position",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "position",
        "description": "The position of an item in a series or sequence of items.",
        "type": [
            "Integer",
            "Text"
        ],
        "classes": [
            "CreativeWork",
            "ListItem"
        ]
    },
    "previousItem": {
        "@type": "Property",
        "$id": "https://schema.org/previousItem",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "previousItem",
        "description": "A link to the ListItem that precedes the current one.",
        "type": [
            "ListItem"
        ],
        "classes": [
            "ListItem"
        ]
    },
    "additionalType": {
        "@type": "Property",
        "$id": "https://schema.org/additionalType",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "additionalType",
        "description": "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the\n    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href=\"https://schema.org/docs/styleguide.html\">style guide</a>.",
        "type": [
            "Text",
            "URL"
        ],
        "classes": [
            "Thing"
        ]
    },
    "alternateName": {
        "@type": "Property",
        "$id": "https://schema.org/alternateName",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "alternateName",
        "description": "An alias for the item.",
        "type": [
            "Text"
        ],
        "classes": [
            "Thing"
        ]
    },
    "description": {
        "@type": "Property",
        "$id": "https://schema.org/description",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "description",
        "description": "A description of the item.",
        "type": [
            "Text",
            "TextObject"
        ],
        "classes": [
            "Thing"
        ]
    },
    "disambiguatingDescription": {
        "@type": "Property",
        "$id": "https://schema.org/disambiguatingDescription",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "disambiguatingDescription",
        "description": "A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.",
        "type": [
            "Text"
        ],
        "classes": [
            "Thing"
        ]
    },
    "identifier": {
        "@type": "Property",
        "$id": "https://schema.org/identifier",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "identifier",
        "description": "The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.\n        ",
        "type": [
            "PropertyValue",
            "Text",
            "URL"
        ],
        "classes": [
            "Thing"
        ]
    },
    "image": {
        "@type": "Property",
        "$id": "https://schema.org/image",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "image",
        "description": "An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].",
        "type": [
            "ImageObject",
            "URL"
        ],
        "classes": [
            "Thing"
        ]
    },
    "mainEntityOfPage": {
        "@type": "Property",
        "$id": "https://schema.org/mainEntityOfPage",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "mainEntityOfPage",
        "description": "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "Thing"
        ]
    },
    "name": {
        "@type": "Property",
        "$id": "https://schema.org/name",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "name",
        "description": "The name of the item.",
        "type": [
            "Text"
        ],
        "classes": [
            "Thing"
        ]
    },
    "owner": {
        "@type": "Property",
        "$id": "https://schema.org/owner",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "owner",
        "description": "A person or organization who owns this Thing.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Thing"
        ]
    },
    "potentialAction": {
        "@type": "Property",
        "$id": "https://schema.org/potentialAction",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "potentialAction",
        "description": "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.",
        "type": [
            "Action"
        ],
        "classes": [
            "Thing"
        ]
    },
    "sameAs": {
        "@type": "Property",
        "$id": "https://schema.org/sameAs",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "sameAs",
        "description": "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.",
        "type": [
            "URL"
        ],
        "classes": [
            "Thing"
        ]
    },
    "subjectOf": {
        "@type": "Property",
        "$id": "https://schema.org/subjectOf",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "subjectOf",
        "description": "A CreativeWork or Event about this Thing.",
        "type": [
            "CreativeWork",
            "Event"
        ],
        "classes": [
            "Thing"
        ]
    },
    "url": {
        "@type": "Property",
        "$id": "https://schema.org/url",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "url",
        "description": "URL of the item.",
        "type": [
            "URL"
        ],
        "classes": [
            "Thing"
        ]
    }
}        

    
    
        
// ----------------------------------------------------------------------
// Property: item
// ----------------------------------------------------------------------

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 * @param {DataFeedItem | ListItem} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the item property.
 */
export function item(record) {
    return h.getValue(record, 'item');
}

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 * @param {DataFeedItem | ListItem} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the item property.
 */
export function getItem(record) {
    return h.getValue(record, 'item');
}

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 * @param {DataFeedItem | ListItem} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record item property.
 * @returns {DataFeedItem | ListItem} - The record with updated value.
 */
export function setItem(record, value) {
    return h.setValue(record, 'item', value);
}

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 * @param {DataFeedItem | ListItem} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the item property.
 */
export function items(record) {
    return h.getValues(record, 'item');
}

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 * @param {DataFeedItem | ListItem} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the item property.
 */
export function getItems(record) {
    return h.getValues(record, 'item');
}

/**
 * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
 * @param {DataFeedItem | ListItem} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record item property.
 * @returns {DataFeedItem | ListItem} - The record with updated value.
 */
export function setItems(record, value) {
    return h.setValues(record, 'item', value);
}

        

/**
 * Returns the list of choices (enum) for property item.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumItem(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: nextItem
// ----------------------------------------------------------------------

/**
 * A link to the ListItem that follows the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @returns {ListItem} - The 1st value of the nextItem property.
 */
export function nextItem(record) {
    return h.getValue(record, 'nextItem');
}

/**
 * A link to the ListItem that follows the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @returns {ListItem} - The 1st value of the nextItem property.
 */
export function getNextItem(record) {
    return h.getValue(record, 'nextItem');
}

/**
 * A link to the ListItem that follows the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @param {ListItem} value - The value to set on record nextItem property.
 * @returns {ListItem} - The record with updated value.
 */
export function setNextItem(record, value) {
    return h.setValue(record, 'nextItem', value);
}

/**
 * A link to the ListItem that follows the current one.
 * @param {ListItem} record - The record to retrieve the values from.
 * @returns {ListItem[]} - All values of the nextItem property.
 */
export function nextItems(record) {
    return h.getValues(record, 'nextItem');
}

/**
 * A link to the ListItem that follows the current one.
 * @param {ListItem} record - The record to retrieve the values from.
 * @returns {ListItem[]} - All values of the nextItem property.
 */
export function getNextItems(record) {
    return h.getValues(record, 'nextItem');
}

/**
 * A link to the ListItem that follows the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @param {ListItem[]} value - The value to set on record nextItem property.
 * @returns {ListItem} - The record with updated value.
 */
export function setNextItems(record, value) {
    return h.setValues(record, 'nextItem', value);
}

        

/**
 * Returns the list of choices (enum) for property nextItem.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNextItem(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: position
// ----------------------------------------------------------------------

/**
 * The position of an item in a series or sequence of items.
 * @param {CreativeWork | ListItem} record - The record to retrieve the value from.
 * @returns {Integer | Text} - The 1st value of the position property.
 */
export function position(record) {
    return h.getValue(record, 'position');
}

/**
 * The position of an item in a series or sequence of items.
 * @param {CreativeWork | ListItem} record - The record to retrieve the value from.
 * @returns {Integer | Text} - The 1st value of the position property.
 */
export function getPosition(record) {
    return h.getValue(record, 'position');
}

/**
 * The position of an item in a series or sequence of items.
 * @param {CreativeWork | ListItem} record - The record to retrieve the value from.
 * @param {Integer | Text} value - The value to set on record position property.
 * @returns {CreativeWork | ListItem} - The record with updated value.
 */
export function setPosition(record, value) {
    return h.setValue(record, 'position', value);
}

/**
 * The position of an item in a series or sequence of items.
 * @param {CreativeWork | ListItem} record - The record to retrieve the values from.
 * @returns {Integer[] | Text[]} - All values of the position property.
 */
export function positions(record) {
    return h.getValues(record, 'position');
}

/**
 * The position of an item in a series or sequence of items.
 * @param {CreativeWork | ListItem} record - The record to retrieve the values from.
 * @returns {Integer[] | Text[]} - All values of the position property.
 */
export function getPositions(record) {
    return h.getValues(record, 'position');
}

/**
 * The position of an item in a series or sequence of items.
 * @param {CreativeWork | ListItem} record - The record to retrieve the value from.
 * @param {Integer[] | Text[]} value - The value to set on record position property.
 * @returns {CreativeWork | ListItem} - The record with updated value.
 */
export function setPositions(record, value) {
    return h.setValues(record, 'position', value);
}

        

/**
 * Returns the list of choices (enum) for property position.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumPosition(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: previousItem
// ----------------------------------------------------------------------

/**
 * A link to the ListItem that precedes the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @returns {ListItem} - The 1st value of the previousItem property.
 */
export function previousItem(record) {
    return h.getValue(record, 'previousItem');
}

/**
 * A link to the ListItem that precedes the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @returns {ListItem} - The 1st value of the previousItem property.
 */
export function getPreviousItem(record) {
    return h.getValue(record, 'previousItem');
}

/**
 * A link to the ListItem that precedes the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @param {ListItem} value - The value to set on record previousItem property.
 * @returns {ListItem} - The record with updated value.
 */
export function setPreviousItem(record, value) {
    return h.setValue(record, 'previousItem', value);
}

/**
 * A link to the ListItem that precedes the current one.
 * @param {ListItem} record - The record to retrieve the values from.
 * @returns {ListItem[]} - All values of the previousItem property.
 */
export function previousItems(record) {
    return h.getValues(record, 'previousItem');
}

/**
 * A link to the ListItem that precedes the current one.
 * @param {ListItem} record - The record to retrieve the values from.
 * @returns {ListItem[]} - All values of the previousItem property.
 */
export function getPreviousItems(record) {
    return h.getValues(record, 'previousItem');
}

/**
 * A link to the ListItem that precedes the current one.
 * @param {ListItem} record - The record to retrieve the value from.
 * @param {ListItem[]} value - The value to set on record previousItem property.
 * @returns {ListItem} - The record with updated value.
 */
export function setPreviousItems(record, value) {
    return h.setValues(record, 'previousItem', value);
}

        

/**
 * Returns the list of choices (enum) for property previousItem.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumPreviousItem(){
    
    return []
}
    
