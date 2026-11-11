
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for Thing and its parents.
 * @returns {String[]} - The properties for Thing.
 */
export function getProperties() {
    return ["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Thing and its parents.
 * @returns {String[]} - The properties for Thing.
 */
export function getPropertiesAll() {
    return ["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Thing without parent properties.
 * @returns {String[]} - The properties for Thing.
 */
export function getPropertiesMain() {
    return ["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of common properties for Thing.
 * @returns {String[]} - The common properties for Thing.
 */
export function getPropertiesShort() {
    return ["additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]        
}

    
    
/**
 * Returns property definitions for Thing.
 * @returns {Object} - Property definitions for Thing.
 */
export const properties = {
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
// Property: additionalType
// ----------------------------------------------------------------------

/**
 * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text | URL} - The 1st value of the additionalType property.
 */
export function additionalType(record) {
    return h.getValue(record, 'additionalType');
}

/**
 * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text | URL} - The 1st value of the additionalType property.
 */
export function getAdditionalType(record) {
    return h.getValue(record, 'additionalType');
}

/**
 * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text | URL} value - The value to set on record additionalType property.
 * @returns {Thing} - The record with updated value.
 */
export function setAdditionalType(record, value) {
    return h.setValue(record, 'additionalType', value);
}

/**
 * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[] | URL[]} - All values of the additionalType property.
 */
export function additionalTypes(record) {
    return h.getValues(record, 'additionalType');
}

/**
 * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[] | URL[]} - All values of the additionalType property.
 */
export function getAdditionalTypes(record) {
    return h.getValues(record, 'additionalType');
}

/**
 * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text[] | URL[]} value - The value to set on record additionalType property.
 * @returns {Thing} - The record with updated value.
 */
export function setAdditionalTypes(record, value) {
    return h.setValues(record, 'additionalType', value);
}

        

/**
 * Returns the list of choices (enum) for property additionalType.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAdditionalType(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: alternateName
// ----------------------------------------------------------------------

/**
 * An alias for the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the alternateName property.
 */
export function alternateName(record) {
    return h.getValue(record, 'alternateName');
}

/**
 * An alias for the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the alternateName property.
 */
export function getAlternateName(record) {
    return h.getValue(record, 'alternateName');
}

/**
 * An alias for the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record alternateName property.
 * @returns {Thing} - The record with updated value.
 */
export function setAlternateName(record, value) {
    return h.setValue(record, 'alternateName', value);
}

/**
 * An alias for the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the alternateName property.
 */
export function alternateNames(record) {
    return h.getValues(record, 'alternateName');
}

/**
 * An alias for the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the alternateName property.
 */
export function getAlternateNames(record) {
    return h.getValues(record, 'alternateName');
}

/**
 * An alias for the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record alternateName property.
 * @returns {Thing} - The record with updated value.
 */
export function setAlternateNames(record, value) {
    return h.setValues(record, 'alternateName', value);
}

        

/**
 * Returns the list of choices (enum) for property alternateName.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAlternateName(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: description
// ----------------------------------------------------------------------

/**
 * A description of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text | TextObject} - The 1st value of the description property.
 */
export function description(record) {
    return h.getValue(record, 'description');
}

/**
 * A description of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text | TextObject} - The 1st value of the description property.
 */
export function getDescription(record) {
    return h.getValue(record, 'description');
}

/**
 * A description of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text | TextObject} value - The value to set on record description property.
 * @returns {Thing} - The record with updated value.
 */
export function setDescription(record, value) {
    return h.setValue(record, 'description', value);
}

/**
 * A description of the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[] | TextObject[]} - All values of the description property.
 */
export function descriptions(record) {
    return h.getValues(record, 'description');
}

/**
 * A description of the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[] | TextObject[]} - All values of the description property.
 */
export function getDescriptions(record) {
    return h.getValues(record, 'description');
}

/**
 * A description of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text[] | TextObject[]} value - The value to set on record description property.
 * @returns {Thing} - The record with updated value.
 */
export function setDescriptions(record, value) {
    return h.setValues(record, 'description', value);
}

        

/**
 * Returns the list of choices (enum) for property description.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDescription(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: disambiguatingDescription
// ----------------------------------------------------------------------

/**
 * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the disambiguatingDescription property.
 */
export function disambiguatingDescription(record) {
    return h.getValue(record, 'disambiguatingDescription');
}

/**
 * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the disambiguatingDescription property.
 */
export function getDisambiguatingDescription(record) {
    return h.getValue(record, 'disambiguatingDescription');
}

/**
 * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record disambiguatingDescription property.
 * @returns {Thing} - The record with updated value.
 */
export function setDisambiguatingDescription(record, value) {
    return h.setValue(record, 'disambiguatingDescription', value);
}

/**
 * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the disambiguatingDescription property.
 */
export function disambiguatingDescriptions(record) {
    return h.getValues(record, 'disambiguatingDescription');
}

/**
 * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the disambiguatingDescription property.
 */
export function getDisambiguatingDescriptions(record) {
    return h.getValues(record, 'disambiguatingDescription');
}

/**
 * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record disambiguatingDescription property.
 * @returns {Thing} - The record with updated value.
 */
export function setDisambiguatingDescriptions(record, value) {
    return h.setValues(record, 'disambiguatingDescription', value);
}

        

/**
 * Returns the list of choices (enum) for property disambiguatingDescription.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDisambiguatingDescription(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: identifier
// ----------------------------------------------------------------------

/**
 * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {PropertyValue | Text | URL} - The 1st value of the identifier property.
 */
export function identifier(record) {
    return h.getValue(record, 'identifier');
}

/**
 * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {PropertyValue | Text | URL} - The 1st value of the identifier property.
 */
export function getIdentifier(record) {
    return h.getValue(record, 'identifier');
}

/**
 * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        
 * @param {Thing} record - The record to retrieve the value from.
 * @param {PropertyValue | Text | URL} value - The value to set on record identifier property.
 * @returns {Thing} - The record with updated value.
 */
export function setIdentifier(record, value) {
    return h.setValue(record, 'identifier', value);
}

/**
 * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {PropertyValue[] | Text[] | URL[]} - All values of the identifier property.
 */
export function identifiers(record) {
    return h.getValues(record, 'identifier');
}

/**
 * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {PropertyValue[] | Text[] | URL[]} - All values of the identifier property.
 */
export function getIdentifiers(record) {
    return h.getValues(record, 'identifier');
}

/**
 * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
        
 * @param {Thing} record - The record to retrieve the value from.
 * @param {PropertyValue[] | Text[] | URL[]} value - The value to set on record identifier property.
 * @returns {Thing} - The record with updated value.
 */
export function setIdentifiers(record, value) {
    return h.setValues(record, 'identifier', value);
}

        

/**
 * Returns the list of choices (enum) for property identifier.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumIdentifier(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: image
// ----------------------------------------------------------------------

/**
 * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {ImageObject | URL} - The 1st value of the image property.
 */
export function image(record) {
    return h.getValue(record, 'image');
}

/**
 * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {ImageObject | URL} - The 1st value of the image property.
 */
export function getImage(record) {
    return h.getValue(record, 'image');
}

/**
 * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 * @param {Thing} record - The record to retrieve the value from.
 * @param {ImageObject | URL} value - The value to set on record image property.
 * @returns {Thing} - The record with updated value.
 */
export function setImage(record, value) {
    return h.setValue(record, 'image', value);
}

/**
 * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {ImageObject[] | URL[]} - All values of the image property.
 */
export function images(record) {
    return h.getValues(record, 'image');
}

/**
 * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {ImageObject[] | URL[]} - All values of the image property.
 */
export function getImages(record) {
    return h.getValues(record, 'image');
}

/**
 * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 * @param {Thing} record - The record to retrieve the value from.
 * @param {ImageObject[] | URL[]} value - The value to set on record image property.
 * @returns {Thing} - The record with updated value.
 */
export function setImages(record, value) {
    return h.setValues(record, 'image', value);
}

        

/**
 * Returns the list of choices (enum) for property image.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumImage(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: mainEntityOfPage
// ----------------------------------------------------------------------

/**
 * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the mainEntityOfPage property.
 */
export function mainEntityOfPage(record) {
    return h.getValue(record, 'mainEntityOfPage');
}

/**
 * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the mainEntityOfPage property.
 */
export function getMainEntityOfPage(record) {
    return h.getValue(record, 'mainEntityOfPage');
}

/**
 * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record mainEntityOfPage property.
 * @returns {Thing} - The record with updated value.
 */
export function setMainEntityOfPage(record, value) {
    return h.setValue(record, 'mainEntityOfPage', value);
}

/**
 * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the mainEntityOfPage property.
 */
export function mainEntityOfPages(record) {
    return h.getValues(record, 'mainEntityOfPage');
}

/**
 * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the mainEntityOfPage property.
 */
export function getMainEntityOfPages(record) {
    return h.getValues(record, 'mainEntityOfPage');
}

/**
 * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record mainEntityOfPage property.
 * @returns {Thing} - The record with updated value.
 */
export function setMainEntityOfPages(record, value) {
    return h.setValues(record, 'mainEntityOfPage', value);
}

        

/**
 * Returns the list of choices (enum) for property mainEntityOfPage.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumMainEntityOfPage(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: name
// ----------------------------------------------------------------------

/**
 * The name of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the name property.
 */
export function name(record) {
    return h.getValue(record, 'name');
}

/**
 * The name of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the name property.
 */
export function getName(record) {
    return h.getValue(record, 'name');
}

/**
 * The name of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record name property.
 * @returns {Thing} - The record with updated value.
 */
export function setName(record, value) {
    return h.setValue(record, 'name', value);
}

/**
 * The name of the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the name property.
 */
export function names(record) {
    return h.getValues(record, 'name');
}

/**
 * The name of the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the name property.
 */
export function getNames(record) {
    return h.getValues(record, 'name');
}

/**
 * The name of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record name property.
 * @returns {Thing} - The record with updated value.
 */
export function setNames(record, value) {
    return h.setValues(record, 'name', value);
}

        

/**
 * Returns the list of choices (enum) for property name.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumName(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: owner
// ----------------------------------------------------------------------

/**
 * A person or organization who owns this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the owner property.
 */
export function owner(record) {
    return h.getValue(record, 'owner');
}

/**
 * A person or organization who owns this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the owner property.
 */
export function getOwner(record) {
    return h.getValue(record, 'owner');
}

/**
 * A person or organization who owns this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record owner property.
 * @returns {Thing} - The record with updated value.
 */
export function setOwner(record, value) {
    return h.setValue(record, 'owner', value);
}

/**
 * A person or organization who owns this Thing.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the owner property.
 */
export function owners(record) {
    return h.getValues(record, 'owner');
}

/**
 * A person or organization who owns this Thing.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the owner property.
 */
export function getOwners(record) {
    return h.getValues(record, 'owner');
}

/**
 * A person or organization who owns this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record owner property.
 * @returns {Thing} - The record with updated value.
 */
export function setOwners(record, value) {
    return h.setValues(record, 'owner', value);
}

        

/**
 * Returns the list of choices (enum) for property owner.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumOwner(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: potentialAction
// ----------------------------------------------------------------------

/**
 * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Action} - The 1st value of the potentialAction property.
 */
export function potentialAction(record) {
    return h.getValue(record, 'potentialAction');
}

/**
 * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {Action} - The 1st value of the potentialAction property.
 */
export function getPotentialAction(record) {
    return h.getValue(record, 'potentialAction');
}

/**
 * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Action} value - The value to set on record potentialAction property.
 * @returns {Thing} - The record with updated value.
 */
export function setPotentialAction(record, value) {
    return h.setValue(record, 'potentialAction', value);
}

/**
 * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Action[]} - All values of the potentialAction property.
 */
export function potentialActions(record) {
    return h.getValues(record, 'potentialAction');
}

/**
 * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {Action[]} - All values of the potentialAction property.
 */
export function getPotentialActions(record) {
    return h.getValues(record, 'potentialAction');
}

/**
 * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {Action[]} value - The value to set on record potentialAction property.
 * @returns {Thing} - The record with updated value.
 */
export function setPotentialActions(record, value) {
    return h.setValues(record, 'potentialAction', value);
}

        

/**
 * Returns the list of choices (enum) for property potentialAction.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumPotentialAction(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: sameAs
// ----------------------------------------------------------------------

/**
 * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {URL} - The 1st value of the sameAs property.
 */
export function sameAs(record) {
    return h.getValue(record, 'sameAs');
}

/**
 * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {URL} - The 1st value of the sameAs property.
 */
export function getSameAs(record) {
    return h.getValue(record, 'sameAs');
}

/**
 * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {URL} value - The value to set on record sameAs property.
 * @returns {Thing} - The record with updated value.
 */
export function setSameAs(record, value) {
    return h.setValue(record, 'sameAs', value);
}

/**
 * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {URL[]} - All values of the sameAs property.
 */
export function sameAss(record) {
    return h.getValues(record, 'sameAs');
}

/**
 * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {URL[]} - All values of the sameAs property.
 */
export function getSameAss(record) {
    return h.getValues(record, 'sameAs');
}

/**
 * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {URL[]} value - The value to set on record sameAs property.
 * @returns {Thing} - The record with updated value.
 */
export function setSameAss(record, value) {
    return h.setValues(record, 'sameAs', value);
}

        

/**
 * Returns the list of choices (enum) for property sameAs.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSameAs(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: subjectOf
// ----------------------------------------------------------------------

/**
 * A CreativeWork or Event about this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {CreativeWork | Event} - The 1st value of the subjectOf property.
 */
export function subjectOf(record) {
    return h.getValue(record, 'subjectOf');
}

/**
 * A CreativeWork or Event about this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {CreativeWork | Event} - The 1st value of the subjectOf property.
 */
export function getSubjectOf(record) {
    return h.getValue(record, 'subjectOf');
}

/**
 * A CreativeWork or Event about this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {CreativeWork | Event} value - The value to set on record subjectOf property.
 * @returns {Thing} - The record with updated value.
 */
export function setSubjectOf(record, value) {
    return h.setValue(record, 'subjectOf', value);
}

/**
 * A CreativeWork or Event about this Thing.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | Event[]} - All values of the subjectOf property.
 */
export function subjectOfs(record) {
    return h.getValues(record, 'subjectOf');
}

/**
 * A CreativeWork or Event about this Thing.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | Event[]} - All values of the subjectOf property.
 */
export function getSubjectOfs(record) {
    return h.getValues(record, 'subjectOf');
}

/**
 * A CreativeWork or Event about this Thing.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {CreativeWork[] | Event[]} value - The value to set on record subjectOf property.
 * @returns {Thing} - The record with updated value.
 */
export function setSubjectOfs(record, value) {
    return h.setValues(record, 'subjectOf', value);
}

        

/**
 * Returns the list of choices (enum) for property subjectOf.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSubjectOf(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: url
// ----------------------------------------------------------------------

/**
 * URL of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {URL} - The 1st value of the url property.
 */
export function url(record) {
    return h.getValue(record, 'url');
}

/**
 * URL of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @returns {URL} - The 1st value of the url property.
 */
export function getUrl(record) {
    return h.getValue(record, 'url');
}

/**
 * URL of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {URL} value - The value to set on record url property.
 * @returns {Thing} - The record with updated value.
 */
export function setUrl(record, value) {
    return h.setValue(record, 'url', value);
}

/**
 * URL of the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {URL[]} - All values of the url property.
 */
export function urls(record) {
    return h.getValues(record, 'url');
}

/**
 * URL of the item.
 * @param {Thing} record - The record to retrieve the values from.
 * @returns {URL[]} - All values of the url property.
 */
export function getUrls(record) {
    return h.getValues(record, 'url');
}

/**
 * URL of the item.
 * @param {Thing} record - The record to retrieve the value from.
 * @param {URL[]} value - The value to set on record url property.
 * @returns {Thing} - The record with updated value.
 */
export function setUrls(record, value) {
    return h.setValues(record, 'url', value);
}

        

/**
 * Returns the list of choices (enum) for property url.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumUrl(){
    
    return []
}
    
