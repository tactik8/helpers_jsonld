
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for Rating and its parents.
 * @returns {String[]} - The properties for Rating.
 */
export function getProperties() {
    return ["author","bestRating","ratingExplanation","ratingValue","reviewAspect","worstRating","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Rating and its parents.
 * @returns {String[]} - The properties for Rating.
 */
export function getPropertiesAll() {
    return ["author","bestRating","ratingExplanation","ratingValue","reviewAspect","worstRating","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Rating without parent properties.
 * @returns {String[]} - The properties for Rating.
 */
export function getPropertiesMain() {
    return ["author","bestRating","ratingExplanation","ratingValue","reviewAspect","worstRating"]
}

/**
 * Returns list of common properties for Rating.
 * @returns {String[]} - The common properties for Rating.
 */
export function getPropertiesShort() {
    return ["author","bestRating","ratingExplanation","ratingValue","reviewAspect","worstRating"]        
}

    
    
/**
 * Returns property definitions for Rating.
 * @returns {Object} - Property definitions for Rating.
 */
export const properties = {
    "author": {
        "@type": "Property",
        "$id": "https://schema.org/author",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "author",
        "description": "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "CreativeWork",
            "Rating"
        ]
    },
    "bestRating": {
        "@type": "Property",
        "$id": "https://schema.org/bestRating",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "bestRating",
        "description": "The highest value allowed in this rating system.",
        "type": [
            "Number",
            "Text"
        ],
        "classes": [
            "Rating"
        ]
    },
    "ratingExplanation": {
        "@type": "Property",
        "$id": "https://schema.org/ratingExplanation",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "ratingExplanation",
        "description": "A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with \"fact check\" markup using [[ClaimReview]].",
        "type": [
            "Text"
        ],
        "classes": [
            "Rating"
        ]
    },
    "ratingValue": {
        "@type": "Property",
        "$id": "https://schema.org/ratingValue",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "ratingValue",
        "description": "The rating for the content.\\n\\nUsage guidelines:\\n\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.",
        "type": [
            "Number",
            "Text"
        ],
        "classes": [
            "Rating"
        ]
    },
    "reviewAspect": {
        "@type": "Property",
        "$id": "https://schema.org/reviewAspect",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "reviewAspect",
        "description": "This Review or Rating is relevant to this part or facet of the itemReviewed.",
        "type": [
            "StructuredValue",
            "Text"
        ],
        "classes": [
            "Guide",
            "Rating",
            "Review"
        ]
    },
    "worstRating": {
        "@type": "Property",
        "$id": "https://schema.org/worstRating",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "worstRating",
        "description": "The lowest value allowed in this rating system.",
        "type": [
            "Number",
            "Text"
        ],
        "classes": [
            "Rating"
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
// Property: author
// ----------------------------------------------------------------------

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * @param {CreativeWork | Rating} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the author property.
 */
export function author(record) {
    return h.getValue(record, 'author');
}

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * @param {CreativeWork | Rating} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the author property.
 */
export function getAuthor(record) {
    return h.getValue(record, 'author');
}

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * @param {CreativeWork | Rating} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record author property.
 * @returns {CreativeWork | Rating} - The record with updated value.
 */
export function setAuthor(record, value) {
    return h.setValue(record, 'author', value);
}

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * @param {CreativeWork | Rating} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the author property.
 */
export function authors(record) {
    return h.getValues(record, 'author');
}

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * @param {CreativeWork | Rating} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the author property.
 */
export function getAuthors(record) {
    return h.getValues(record, 'author');
}

/**
 * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 * @param {CreativeWork | Rating} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record author property.
 * @returns {CreativeWork | Rating} - The record with updated value.
 */
export function setAuthors(record, value) {
    return h.setValues(record, 'author', value);
}

        

/**
 * Returns the list of choices (enum) for property author.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAuthor(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: bestRating
// ----------------------------------------------------------------------

/**
 * The highest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Number | Text} - The 1st value of the bestRating property.
 */
export function bestRating(record) {
    return h.getValue(record, 'bestRating');
}

/**
 * The highest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Number | Text} - The 1st value of the bestRating property.
 */
export function getBestRating(record) {
    return h.getValue(record, 'bestRating');
}

/**
 * The highest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Number | Text} value - The value to set on record bestRating property.
 * @returns {Rating} - The record with updated value.
 */
export function setBestRating(record, value) {
    return h.setValue(record, 'bestRating', value);
}

/**
 * The highest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Number[] | Text[]} - All values of the bestRating property.
 */
export function bestRatings(record) {
    return h.getValues(record, 'bestRating');
}

/**
 * The highest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Number[] | Text[]} - All values of the bestRating property.
 */
export function getBestRatings(record) {
    return h.getValues(record, 'bestRating');
}

/**
 * The highest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Number[] | Text[]} value - The value to set on record bestRating property.
 * @returns {Rating} - The record with updated value.
 */
export function setBestRatings(record, value) {
    return h.setValues(record, 'bestRating', value);
}

        

/**
 * Returns the list of choices (enum) for property bestRating.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumBestRating(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: ratingExplanation
// ----------------------------------------------------------------------

/**
 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the ratingExplanation property.
 */
export function ratingExplanation(record) {
    return h.getValue(record, 'ratingExplanation');
}

/**
 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the ratingExplanation property.
 */
export function getRatingExplanation(record) {
    return h.getValue(record, 'ratingExplanation');
}

/**
 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record ratingExplanation property.
 * @returns {Rating} - The record with updated value.
 */
export function setRatingExplanation(record, value) {
    return h.setValue(record, 'ratingExplanation', value);
}

/**
 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the ratingExplanation property.
 */
export function ratingExplanations(record) {
    return h.getValues(record, 'ratingExplanation');
}

/**
 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the ratingExplanation property.
 */
export function getRatingExplanations(record) {
    return h.getValues(record, 'ratingExplanation');
}

/**
 * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record ratingExplanation property.
 * @returns {Rating} - The record with updated value.
 */
export function setRatingExplanations(record, value) {
    return h.setValues(record, 'ratingExplanation', value);
}

        

/**
 * Returns the list of choices (enum) for property ratingExplanation.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumRatingExplanation(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: ratingValue
// ----------------------------------------------------------------------

/**
 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Number | Text} - The 1st value of the ratingValue property.
 */
export function ratingValue(record) {
    return h.getValue(record, 'ratingValue');
}

/**
 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Number | Text} - The 1st value of the ratingValue property.
 */
export function getRatingValue(record) {
    return h.getValue(record, 'ratingValue');
}

/**
 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Number | Text} value - The value to set on record ratingValue property.
 * @returns {Rating} - The record with updated value.
 */
export function setRatingValue(record, value) {
    return h.setValue(record, 'ratingValue', value);
}

/**
 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Number[] | Text[]} - All values of the ratingValue property.
 */
export function ratingValues(record) {
    return h.getValues(record, 'ratingValue');
}

/**
 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Number[] | Text[]} - All values of the ratingValue property.
 */
export function getRatingValues(record) {
    return h.getValues(record, 'ratingValue');
}

/**
 * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Number[] | Text[]} value - The value to set on record ratingValue property.
 * @returns {Rating} - The record with updated value.
 */
export function setRatingValues(record, value) {
    return h.setValues(record, 'ratingValue', value);
}

        

/**
 * Returns the list of choices (enum) for property ratingValue.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumRatingValue(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: reviewAspect
// ----------------------------------------------------------------------

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 * @param {Guide | Rating | Review} record - The record to retrieve the value from.
 * @returns {StructuredValue | Text} - The 1st value of the reviewAspect property.
 */
export function reviewAspect(record) {
    return h.getValue(record, 'reviewAspect');
}

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 * @param {Guide | Rating | Review} record - The record to retrieve the value from.
 * @returns {StructuredValue | Text} - The 1st value of the reviewAspect property.
 */
export function getReviewAspect(record) {
    return h.getValue(record, 'reviewAspect');
}

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 * @param {Guide | Rating | Review} record - The record to retrieve the value from.
 * @param {StructuredValue | Text} value - The value to set on record reviewAspect property.
 * @returns {Guide | Rating | Review} - The record with updated value.
 */
export function setReviewAspect(record, value) {
    return h.setValue(record, 'reviewAspect', value);
}

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 * @param {Guide | Rating | Review} record - The record to retrieve the values from.
 * @returns {StructuredValue[] | Text[]} - All values of the reviewAspect property.
 */
export function reviewAspects(record) {
    return h.getValues(record, 'reviewAspect');
}

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 * @param {Guide | Rating | Review} record - The record to retrieve the values from.
 * @returns {StructuredValue[] | Text[]} - All values of the reviewAspect property.
 */
export function getReviewAspects(record) {
    return h.getValues(record, 'reviewAspect');
}

/**
 * This Review or Rating is relevant to this part or facet of the itemReviewed.
 * @param {Guide | Rating | Review} record - The record to retrieve the value from.
 * @param {StructuredValue[] | Text[]} value - The value to set on record reviewAspect property.
 * @returns {Guide | Rating | Review} - The record with updated value.
 */
export function setReviewAspects(record, value) {
    return h.setValues(record, 'reviewAspect', value);
}

        

/**
 * Returns the list of choices (enum) for property reviewAspect.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumReviewAspect(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: worstRating
// ----------------------------------------------------------------------

/**
 * The lowest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Number | Text} - The 1st value of the worstRating property.
 */
export function worstRating(record) {
    return h.getValue(record, 'worstRating');
}

/**
 * The lowest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @returns {Number | Text} - The 1st value of the worstRating property.
 */
export function getWorstRating(record) {
    return h.getValue(record, 'worstRating');
}

/**
 * The lowest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Number | Text} value - The value to set on record worstRating property.
 * @returns {Rating} - The record with updated value.
 */
export function setWorstRating(record, value) {
    return h.setValue(record, 'worstRating', value);
}

/**
 * The lowest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Number[] | Text[]} - All values of the worstRating property.
 */
export function worstRatings(record) {
    return h.getValues(record, 'worstRating');
}

/**
 * The lowest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the values from.
 * @returns {Number[] | Text[]} - All values of the worstRating property.
 */
export function getWorstRatings(record) {
    return h.getValues(record, 'worstRating');
}

/**
 * The lowest value allowed in this rating system.
 * @param {Rating} record - The record to retrieve the value from.
 * @param {Number[] | Text[]} value - The value to set on record worstRating property.
 * @returns {Rating} - The record with updated value.
 */
export function setWorstRatings(record, value) {
    return h.setValues(record, 'worstRating', value);
}

        

/**
 * Returns the list of choices (enum) for property worstRating.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumWorstRating(){
    
    return []
}
    
