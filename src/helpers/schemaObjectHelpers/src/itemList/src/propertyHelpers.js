
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for ItemList and its parents.
 * @returns {String[]} - The properties for ItemList.
 */
export function getProperties() {
    return ["aggregateElement","itemListElement","itemListOrder","numberOfItems","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for ItemList and its parents.
 * @returns {String[]} - The properties for ItemList.
 */
export function getPropertiesAll() {
    return ["aggregateElement","itemListElement","itemListOrder","numberOfItems","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for ItemList without parent properties.
 * @returns {String[]} - The properties for ItemList.
 */
export function getPropertiesMain() {
    return ["aggregateElement","itemListElement","itemListOrder","numberOfItems"]
}

/**
 * Returns list of common properties for ItemList.
 * @returns {String[]} - The common properties for ItemList.
 */
export function getPropertiesShort() {
    return ["aggregateElement","itemListElement","itemListOrder","numberOfItems"]        
}

    
    
/**
 * Returns property definitions for ItemList.
 * @returns {Object} - Property definitions for ItemList.
 */
export const properties = {
    "aggregateElement": {
        "@type": "Property",
        "$id": "https://schema.org/aggregateElement",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "aggregateElement",
        "description": "Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).",
        "type": [
            "Thing"
        ],
        "classes": [
            "ItemList"
        ]
    },
    "itemListElement": {
        "@type": "Property",
        "$id": "https://schema.org/itemListElement",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "itemListElement",
        "description": "For itemListElement values, you can use simple strings (e.g. \"Peter\", \"Paul\", \"Mary\"), existing entities, or use ListItem.\\n\\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\\n\\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.",
        "type": [
            "ListItem",
            "Text",
            "Thing"
        ],
        "classes": [
            "ItemList"
        ]
    },
    "itemListOrder": {
        "@type": "Property",
        "$id": "https://schema.org/itemListOrder",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "itemListOrder",
        "description": "Type of ordering (e.g. Ascending, Descending, Unordered).",
        "type": [
            "ItemListOrderType",
            "Text"
        ],
        "classes": [
            "ItemList"
        ],
        "enum": [
            "ItemListOrderAscending",
            "ItemListOrderDescending",
            "ItemListUnordered"
        ]
    },
    "numberOfItems": {
        "@type": "Property",
        "$id": "https://schema.org/numberOfItems",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "numberOfItems",
        "description": "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.",
        "type": [
            "Integer"
        ],
        "classes": [
            "ItemList"
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
// Property: aggregateElement
// ----------------------------------------------------------------------

/**
 * Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the aggregateElement property.
 */
export function aggregateElement(record) {
    return h.getValue(record, 'aggregateElement');
}

/**
 * Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the aggregateElement property.
 */
export function getAggregateElement(record) {
    return h.getValue(record, 'aggregateElement');
}

/**
 * Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record aggregateElement property.
 * @returns {ItemList} - The record with updated value.
 */
export function setAggregateElement(record, value) {
    return h.setValue(record, 'aggregateElement', value);
}

/**
 * Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the aggregateElement property.
 */
export function aggregateElements(record) {
    return h.getValues(record, 'aggregateElement');
}

/**
 * Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the aggregateElement property.
 */
export function getAggregateElements(record) {
    return h.getValues(record, 'aggregateElement');
}

/**
 * Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record aggregateElement property.
 * @returns {ItemList} - The record with updated value.
 */
export function setAggregateElements(record, value) {
    return h.setValues(record, 'aggregateElement', value);
}

        

/**
 * Returns the list of choices (enum) for property aggregateElement.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAggregateElement(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: itemListElement
// ----------------------------------------------------------------------

/**
 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {ListItem | Text | Thing} - The 1st value of the itemListElement property.
 */
export function itemListElement(record) {
    return h.getValue(record, 'itemListElement');
}

/**
 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {ListItem | Text | Thing} - The 1st value of the itemListElement property.
 */
export function getItemListElement(record) {
    return h.getValue(record, 'itemListElement');
}

/**
 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {ListItem | Text | Thing} value - The value to set on record itemListElement property.
 * @returns {ItemList} - The record with updated value.
 */
export function setItemListElement(record, value) {
    return h.setValue(record, 'itemListElement', value);
}

/**
 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {ListItem[] | Text[] | Thing[]} - All values of the itemListElement property.
 */
export function itemListElements(record) {
    return h.getValues(record, 'itemListElement');
}

/**
 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {ListItem[] | Text[] | Thing[]} - All values of the itemListElement property.
 */
export function getItemListElements(record) {
    return h.getValues(record, 'itemListElement');
}

/**
 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {ListItem[] | Text[] | Thing[]} value - The value to set on record itemListElement property.
 * @returns {ItemList} - The record with updated value.
 */
export function setItemListElements(record, value) {
    return h.setValues(record, 'itemListElement', value);
}

        

/**
 * Returns the list of choices (enum) for property itemListElement.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumItemListElement(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: itemListOrder
// ----------------------------------------------------------------------

/**
 * Type of ordering (e.g. Ascending, Descending, Unordered).
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {ItemListOrderType | Text} - The 1st value of the itemListOrder property.
 */
export function itemListOrder(record) {
    return h.getValue(record, 'itemListOrder');
}

/**
 * Type of ordering (e.g. Ascending, Descending, Unordered).
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {ItemListOrderType | Text} - The 1st value of the itemListOrder property.
 */
export function getItemListOrder(record) {
    return h.getValue(record, 'itemListOrder');
}

/**
 * Type of ordering (e.g. Ascending, Descending, Unordered).
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {ItemListOrderType | Text} value - The value to set on record itemListOrder property.
 * @returns {ItemList} - The record with updated value.
 */
export function setItemListOrder(record, value) {
    return h.setValue(record, 'itemListOrder', value);
}

/**
 * Type of ordering (e.g. Ascending, Descending, Unordered).
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {ItemListOrderType[] | Text[]} - All values of the itemListOrder property.
 */
export function itemListOrders(record) {
    return h.getValues(record, 'itemListOrder');
}

/**
 * Type of ordering (e.g. Ascending, Descending, Unordered).
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {ItemListOrderType[] | Text[]} - All values of the itemListOrder property.
 */
export function getItemListOrders(record) {
    return h.getValues(record, 'itemListOrder');
}

/**
 * Type of ordering (e.g. Ascending, Descending, Unordered).
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {ItemListOrderType[] | Text[]} value - The value to set on record itemListOrder property.
 * @returns {ItemList} - The record with updated value.
 */
export function setItemListOrders(record, value) {
    return h.setValues(record, 'itemListOrder', value);
}

        

/**
 * Returns the list of choices (enum) for property itemListOrder.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumItemListOrder(){
    
    return ["ItemListOrderAscending","ItemListOrderDescending","ItemListUnordered"]
}
    

        
// ----------------------------------------------------------------------
// Property: numberOfItems
// ----------------------------------------------------------------------

/**
 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {Integer} - The 1st value of the numberOfItems property.
 */
export function numberOfItems(record) {
    return h.getValue(record, 'numberOfItems');
}

/**
 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 * @param {ItemList} record - The record to retrieve the value from.
 * @returns {Integer} - The 1st value of the numberOfItems property.
 */
export function getNumberOfItems(record) {
    return h.getValue(record, 'numberOfItems');
}

/**
 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {Integer} value - The value to set on record numberOfItems property.
 * @returns {ItemList} - The record with updated value.
 */
export function setNumberOfItems(record, value) {
    return h.setValue(record, 'numberOfItems', value);
}

/**
 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {Integer[]} - All values of the numberOfItems property.
 */
export function numberOfItemss(record) {
    return h.getValues(record, 'numberOfItems');
}

/**
 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 * @param {ItemList} record - The record to retrieve the values from.
 * @returns {Integer[]} - All values of the numberOfItems property.
 */
export function getNumberOfItemss(record) {
    return h.getValues(record, 'numberOfItems');
}

/**
 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 * @param {ItemList} record - The record to retrieve the value from.
 * @param {Integer[]} value - The value to set on record numberOfItems property.
 * @returns {ItemList} - The record with updated value.
 */
export function setNumberOfItemss(record, value) {
    return h.setValues(record, 'numberOfItems', value);
}

        

/**
 * Returns the list of choices (enum) for property numberOfItems.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNumberOfItems(){
    
    return []
}
    
