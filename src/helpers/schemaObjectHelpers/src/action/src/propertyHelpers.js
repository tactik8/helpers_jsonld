
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for Action and its parents.
 * @returns {String[]} - The properties for Action.
 */
export function getProperties() {
    return ["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Action and its parents.
 * @returns {String[]} - The properties for Action.
 */
export function getPropertiesAll() {
    return ["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Action without parent properties.
 * @returns {String[]} - The properties for Action.
 */
export function getPropertiesMain() {
    return ["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]
}

/**
 * Returns list of common properties for Action.
 * @returns {String[]} - The common properties for Action.
 */
export function getPropertiesShort() {
    return ["actionProcess","actionStatus","agent","endTime","error","instrument","location","object","participant","provider","result","startTime","target"]        
}

    
    
/**
 * Returns property definitions for Action.
 * @returns {Object} - Property definitions for Action.
 */
export const properties = {
    "actionProcess": {
        "@type": "Property",
        "$id": "https://schema.org/actionProcess",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "actionProcess",
        "description": "Description of the process by which the action was performed.",
        "type": [
            "HowTo"
        ],
        "classes": [
            "Action"
        ]
    },
    "actionStatus": {
        "@type": "Property",
        "$id": "https://schema.org/actionStatus",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "actionStatus",
        "description": "Indicates the current disposition of the Action.",
        "type": [
            "ActionStatusType"
        ],
        "classes": [
            "Action"
        ],
        "enum": [
            "ActiveActionStatus",
            "CompletedActionStatus",
            "FailedActionStatus",
            "PotentialActionStatus"
        ]
    },
    "agent": {
        "@type": "Property",
        "$id": "https://schema.org/agent",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "agent",
        "description": "The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Action"
        ]
    },
    "endTime": {
        "@type": "Property",
        "$id": "https://schema.org/endTime",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "endTime",
        "description": "The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\\n\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.",
        "type": [
            "DateTime",
            "Time"
        ],
        "classes": [
            "Action",
            "FoodEstablishmentReservation",
            "InteractionCounter",
            "MediaObject",
            "Schedule"
        ]
    },
    "error": {
        "@type": "Property",
        "$id": "https://schema.org/error",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "error",
        "description": "For failed actions, more information on the cause of the failure. Consider using the Error type.",
        "type": [
            "Thing"
        ],
        "classes": [
            "Action"
        ]
    },
    "instrument": {
        "@type": "Property",
        "$id": "https://schema.org/instrument",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "instrument",
        "description": "The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.",
        "type": [
            "Thing"
        ],
        "classes": [
            "Action"
        ]
    },
    "location": {
        "@type": "Property",
        "$id": "https://schema.org/location",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "location",
        "description": "The location of, for example, where an event is happening, where an organization is located, or where an action takes place.",
        "type": [
            "Place",
            "PostalAddress",
            "Text",
            "VirtualLocation"
        ],
        "classes": [
            "Action",
            "Event",
            "InteractionCounter",
            "Organization"
        ]
    },
    "object": {
        "@type": "Property",
        "$id": "https://schema.org/object",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "object",
        "description": "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.",
        "type": [
            "Thing"
        ],
        "classes": [
            "Action"
        ]
    },
    "participant": {
        "@type": "Property",
        "$id": "https://schema.org/participant",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "participant",
        "description": "Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Action"
        ]
    },
    "provider": {
        "@type": "Property",
        "$id": "https://schema.org/provider",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "provider",
        "description": "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Action",
            "CreativeWork",
            "EducationalOccupationalProgram",
            "FinancialIncentive",
            "Invoice",
            "OfferShippingDetails",
            "ParcelDelivery",
            "Reservation",
            "Service",
            "Trip"
        ]
    },
    "result": {
        "@type": "Property",
        "$id": "https://schema.org/result",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "result",
        "description": "The result produced in the action. E.g. John wrote *a book*.",
        "type": [
            "Thing"
        ],
        "classes": [
            "Action"
        ]
    },
    "startTime": {
        "@type": "Property",
        "$id": "https://schema.org/startTime",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "startTime",
        "description": "The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\\n\\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.",
        "type": [
            "DateTime",
            "Time"
        ],
        "classes": [
            "Action",
            "FoodEstablishmentReservation",
            "InteractionCounter",
            "MediaObject",
            "Schedule"
        ]
    },
    "target": {
        "@type": "Property",
        "$id": "https://schema.org/target",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "target",
        "description": "Indicates a target EntryPoint, or url, for an Action.",
        "type": [
            "EntryPoint",
            "URL"
        ],
        "classes": [
            "Action"
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
// Property: actionProcess
// ----------------------------------------------------------------------

/**
 * Description of the process by which the action was performed.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {HowTo} - The 1st value of the actionProcess property.
 */
export function actionProcess(record) {
    return h.getValue(record, 'actionProcess');
}

/**
 * Description of the process by which the action was performed.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {HowTo} - The 1st value of the actionProcess property.
 */
export function getActionProcess(record) {
    return h.getValue(record, 'actionProcess');
}

/**
 * Description of the process by which the action was performed.
 * @param {Action} record - The record to retrieve the value from.
 * @param {HowTo} value - The value to set on record actionProcess property.
 * @returns {Action} - The record with updated value.
 */
export function setActionProcess(record, value) {
    return h.setValue(record, 'actionProcess', value);
}

/**
 * Description of the process by which the action was performed.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {HowTo[]} - All values of the actionProcess property.
 */
export function actionProcesss(record) {
    return h.getValues(record, 'actionProcess');
}

/**
 * Description of the process by which the action was performed.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {HowTo[]} - All values of the actionProcess property.
 */
export function getActionProcesss(record) {
    return h.getValues(record, 'actionProcess');
}

/**
 * Description of the process by which the action was performed.
 * @param {Action} record - The record to retrieve the value from.
 * @param {HowTo[]} value - The value to set on record actionProcess property.
 * @returns {Action} - The record with updated value.
 */
export function setActionProcesss(record, value) {
    return h.setValues(record, 'actionProcess', value);
}

        

/**
 * Returns the list of choices (enum) for property actionProcess.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumActionProcess(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: actionStatus
// ----------------------------------------------------------------------

/**
 * Indicates the current disposition of the Action.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {ActionStatusType} - The 1st value of the actionStatus property.
 */
export function actionStatus(record) {
    return h.getValue(record, 'actionStatus');
}

/**
 * Indicates the current disposition of the Action.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {ActionStatusType} - The 1st value of the actionStatus property.
 */
export function getActionStatus(record) {
    return h.getValue(record, 'actionStatus');
}

/**
 * Indicates the current disposition of the Action.
 * @param {Action} record - The record to retrieve the value from.
 * @param {ActionStatusType} value - The value to set on record actionStatus property.
 * @returns {Action} - The record with updated value.
 */
export function setActionStatus(record, value) {
    return h.setValue(record, 'actionStatus', value);
}

/**
 * Indicates the current disposition of the Action.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {ActionStatusType[]} - All values of the actionStatus property.
 */
export function actionStatuss(record) {
    return h.getValues(record, 'actionStatus');
}

/**
 * Indicates the current disposition of the Action.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {ActionStatusType[]} - All values of the actionStatus property.
 */
export function getActionStatuss(record) {
    return h.getValues(record, 'actionStatus');
}

/**
 * Indicates the current disposition of the Action.
 * @param {Action} record - The record to retrieve the value from.
 * @param {ActionStatusType[]} value - The value to set on record actionStatus property.
 * @returns {Action} - The record with updated value.
 */
export function setActionStatuss(record, value) {
    return h.setValues(record, 'actionStatus', value);
}

        

/**
 * Returns the list of choices (enum) for property actionStatus.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumActionStatus(){
    
    return ["ActiveActionStatus","CompletedActionStatus","FailedActionStatus","PotentialActionStatus"]
}
    

        
// ----------------------------------------------------------------------
// Property: agent
// ----------------------------------------------------------------------

/**
 * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the agent property.
 */
export function agent(record) {
    return h.getValue(record, 'agent');
}

/**
 * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the agent property.
 */
export function getAgent(record) {
    return h.getValue(record, 'agent');
}

/**
 * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record agent property.
 * @returns {Action} - The record with updated value.
 */
export function setAgent(record, value) {
    return h.setValue(record, 'agent', value);
}

/**
 * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the agent property.
 */
export function agents(record) {
    return h.getValues(record, 'agent');
}

/**
 * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the agent property.
 */
export function getAgents(record) {
    return h.getValues(record, 'agent');
}

/**
 * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record agent property.
 * @returns {Action} - The record with updated value.
 */
export function setAgents(record, value) {
    return h.setValues(record, 'agent', value);
}

        

/**
 * Returns the list of choices (enum) for property agent.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAgent(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: endTime
// ----------------------------------------------------------------------

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @returns {DateTime | Time} - The 1st value of the endTime property.
 */
export function endTime(record) {
    return h.getValue(record, 'endTime');
}

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @returns {DateTime | Time} - The 1st value of the endTime property.
 */
export function getEndTime(record) {
    return h.getValue(record, 'endTime');
}

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @param {DateTime | Time} value - The value to set on record endTime property.
 * @returns {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} - The record with updated value.
 */
export function setEndTime(record, value) {
    return h.setValue(record, 'endTime', value);
}

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the values from.
 * @returns {DateTime[] | Time[]} - All values of the endTime property.
 */
export function endTimes(record) {
    return h.getValues(record, 'endTime');
}

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the values from.
 * @returns {DateTime[] | Time[]} - All values of the endTime property.
 */
export function getEndTimes(record) {
    return h.getValues(record, 'endTime');
}

/**
 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @param {DateTime[] | Time[]} value - The value to set on record endTime property.
 * @returns {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} - The record with updated value.
 */
export function setEndTimes(record, value) {
    return h.setValues(record, 'endTime', value);
}

        

/**
 * Returns the list of choices (enum) for property endTime.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEndTime(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: error
// ----------------------------------------------------------------------

/**
 * For failed actions, more information on the cause of the failure. Consider using the Error type.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the error property.
 */
export function error(record) {
    return h.getValue(record, 'error');
}

/**
 * For failed actions, more information on the cause of the failure. Consider using the Error type.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the error property.
 */
export function getError(record) {
    return h.getValue(record, 'error');
}

/**
 * For failed actions, more information on the cause of the failure. Consider using the Error type.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record error property.
 * @returns {Action} - The record with updated value.
 */
export function setError(record, value) {
    return h.setValue(record, 'error', value);
}

/**
 * For failed actions, more information on the cause of the failure. Consider using the Error type.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the error property.
 */
export function errors(record) {
    return h.getValues(record, 'error');
}

/**
 * For failed actions, more information on the cause of the failure. Consider using the Error type.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the error property.
 */
export function getErrors(record) {
    return h.getValues(record, 'error');
}

/**
 * For failed actions, more information on the cause of the failure. Consider using the Error type.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record error property.
 * @returns {Action} - The record with updated value.
 */
export function setErrors(record, value) {
    return h.setValues(record, 'error', value);
}

        

/**
 * Returns the list of choices (enum) for property error.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumError(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: instrument
// ----------------------------------------------------------------------

/**
 * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the instrument property.
 */
export function instrument(record) {
    return h.getValue(record, 'instrument');
}

/**
 * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the instrument property.
 */
export function getInstrument(record) {
    return h.getValue(record, 'instrument');
}

/**
 * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record instrument property.
 * @returns {Action} - The record with updated value.
 */
export function setInstrument(record, value) {
    return h.setValue(record, 'instrument', value);
}

/**
 * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the instrument property.
 */
export function instruments(record) {
    return h.getValues(record, 'instrument');
}

/**
 * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the instrument property.
 */
export function getInstruments(record) {
    return h.getValues(record, 'instrument');
}

/**
 * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record instrument property.
 * @returns {Action} - The record with updated value.
 */
export function setInstruments(record, value) {
    return h.setValues(record, 'instrument', value);
}

        

/**
 * Returns the list of choices (enum) for property instrument.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumInstrument(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: location
// ----------------------------------------------------------------------

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 * @param {Action | Event | InteractionCounter | Organization} record - The record to retrieve the value from.
 * @returns {Place | PostalAddress | Text | VirtualLocation} - The 1st value of the location property.
 */
export function location(record) {
    return h.getValue(record, 'location');
}

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 * @param {Action | Event | InteractionCounter | Organization} record - The record to retrieve the value from.
 * @returns {Place | PostalAddress | Text | VirtualLocation} - The 1st value of the location property.
 */
export function getLocation(record) {
    return h.getValue(record, 'location');
}

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 * @param {Action | Event | InteractionCounter | Organization} record - The record to retrieve the value from.
 * @param {Place | PostalAddress | Text | VirtualLocation} value - The value to set on record location property.
 * @returns {Action | Event | InteractionCounter | Organization} - The record with updated value.
 */
export function setLocation(record, value) {
    return h.setValue(record, 'location', value);
}

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 * @param {Action | Event | InteractionCounter | Organization} record - The record to retrieve the values from.
 * @returns {Place[] | PostalAddress[] | Text[] | VirtualLocation[]} - All values of the location property.
 */
export function locations(record) {
    return h.getValues(record, 'location');
}

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 * @param {Action | Event | InteractionCounter | Organization} record - The record to retrieve the values from.
 * @returns {Place[] | PostalAddress[] | Text[] | VirtualLocation[]} - All values of the location property.
 */
export function getLocations(record) {
    return h.getValues(record, 'location');
}

/**
 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 * @param {Action | Event | InteractionCounter | Organization} record - The record to retrieve the value from.
 * @param {Place[] | PostalAddress[] | Text[] | VirtualLocation[]} value - The value to set on record location property.
 * @returns {Action | Event | InteractionCounter | Organization} - The record with updated value.
 */
export function setLocations(record, value) {
    return h.setValues(record, 'location', value);
}

        

/**
 * Returns the list of choices (enum) for property location.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLocation(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: object
// ----------------------------------------------------------------------

/**
 * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the object property.
 */
export function object(record) {
    return h.getValue(record, 'object');
}

/**
 * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the object property.
 */
export function getObject(record) {
    return h.getValue(record, 'object');
}

/**
 * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record object property.
 * @returns {Action} - The record with updated value.
 */
export function setObject(record, value) {
    return h.setValue(record, 'object', value);
}

/**
 * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the object property.
 */
export function objects(record) {
    return h.getValues(record, 'object');
}

/**
 * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the object property.
 */
export function getObjects(record) {
    return h.getValues(record, 'object');
}

/**
 * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record object property.
 * @returns {Action} - The record with updated value.
 */
export function setObjects(record, value) {
    return h.setValues(record, 'object', value);
}

        

/**
 * Returns the list of choices (enum) for property object.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumObject(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: participant
// ----------------------------------------------------------------------

/**
 * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the participant property.
 */
export function participant(record) {
    return h.getValue(record, 'participant');
}

/**
 * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the participant property.
 */
export function getParticipant(record) {
    return h.getValue(record, 'participant');
}

/**
 * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record participant property.
 * @returns {Action} - The record with updated value.
 */
export function setParticipant(record, value) {
    return h.setValue(record, 'participant', value);
}

/**
 * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the participant property.
 */
export function participants(record) {
    return h.getValues(record, 'participant');
}

/**
 * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the participant property.
 */
export function getParticipants(record) {
    return h.getValues(record, 'participant');
}

/**
 * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record participant property.
 * @returns {Action} - The record with updated value.
 */
export function setParticipants(record, value) {
    return h.setValues(record, 'participant', value);
}

        

/**
 * Returns the list of choices (enum) for property participant.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumParticipant(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: provider
// ----------------------------------------------------------------------

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 * @param {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the provider property.
 */
export function provider(record) {
    return h.getValue(record, 'provider');
}

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 * @param {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the provider property.
 */
export function getProvider(record) {
    return h.getValue(record, 'provider');
}

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 * @param {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record provider property.
 * @returns {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} - The record with updated value.
 */
export function setProvider(record, value) {
    return h.setValue(record, 'provider', value);
}

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 * @param {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the provider property.
 */
export function providers(record) {
    return h.getValues(record, 'provider');
}

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 * @param {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the provider property.
 */
export function getProviders(record) {
    return h.getValues(record, 'provider');
}

/**
 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 * @param {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record provider property.
 * @returns {Action | CreativeWork | EducationalOccupationalProgram | FinancialIncentive | Invoice | OfferShippingDetails | ParcelDelivery | Reservation | Service | Trip} - The record with updated value.
 */
export function setProviders(record, value) {
    return h.setValues(record, 'provider', value);
}

        

/**
 * Returns the list of choices (enum) for property provider.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumProvider(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: result
// ----------------------------------------------------------------------

/**
 * The result produced in the action. E.g. John wrote *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the result property.
 */
export function result(record) {
    return h.getValue(record, 'result');
}

/**
 * The result produced in the action. E.g. John wrote *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the result property.
 */
export function getResult(record) {
    return h.getValue(record, 'result');
}

/**
 * The result produced in the action. E.g. John wrote *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record result property.
 * @returns {Action} - The record with updated value.
 */
export function setResult(record, value) {
    return h.setValue(record, 'result', value);
}

/**
 * The result produced in the action. E.g. John wrote *a book*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the result property.
 */
export function results(record) {
    return h.getValues(record, 'result');
}

/**
 * The result produced in the action. E.g. John wrote *a book*.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the result property.
 */
export function getResults(record) {
    return h.getValues(record, 'result');
}

/**
 * The result produced in the action. E.g. John wrote *a book*.
 * @param {Action} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record result property.
 * @returns {Action} - The record with updated value.
 */
export function setResults(record, value) {
    return h.setValues(record, 'result', value);
}

        

/**
 * Returns the list of choices (enum) for property result.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumResult(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: startTime
// ----------------------------------------------------------------------

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @returns {DateTime | Time} - The 1st value of the startTime property.
 */
export function startTime(record) {
    return h.getValue(record, 'startTime');
}

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @returns {DateTime | Time} - The 1st value of the startTime property.
 */
export function getStartTime(record) {
    return h.getValue(record, 'startTime');
}

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @param {DateTime | Time} value - The value to set on record startTime property.
 * @returns {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} - The record with updated value.
 */
export function setStartTime(record, value) {
    return h.setValue(record, 'startTime', value);
}

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the values from.
 * @returns {DateTime[] | Time[]} - All values of the startTime property.
 */
export function startTimes(record) {
    return h.getValues(record, 'startTime');
}

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the values from.
 * @returns {DateTime[] | Time[]} - All values of the startTime property.
 */
export function getStartTimes(record) {
    return h.getValues(record, 'startTime');
}

/**
 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 * @param {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} record - The record to retrieve the value from.
 * @param {DateTime[] | Time[]} value - The value to set on record startTime property.
 * @returns {Action | FoodEstablishmentReservation | InteractionCounter | MediaObject | Schedule} - The record with updated value.
 */
export function setStartTimes(record, value) {
    return h.setValues(record, 'startTime', value);
}

        

/**
 * Returns the list of choices (enum) for property startTime.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumStartTime(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: target
// ----------------------------------------------------------------------

/**
 * Indicates a target EntryPoint, or url, for an Action.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {EntryPoint | URL} - The 1st value of the target property.
 */
export function target(record) {
    return h.getValue(record, 'target');
}

/**
 * Indicates a target EntryPoint, or url, for an Action.
 * @param {Action} record - The record to retrieve the value from.
 * @returns {EntryPoint | URL} - The 1st value of the target property.
 */
export function getTarget(record) {
    return h.getValue(record, 'target');
}

/**
 * Indicates a target EntryPoint, or url, for an Action.
 * @param {Action} record - The record to retrieve the value from.
 * @param {EntryPoint | URL} value - The value to set on record target property.
 * @returns {Action} - The record with updated value.
 */
export function setTarget(record, value) {
    return h.setValue(record, 'target', value);
}

/**
 * Indicates a target EntryPoint, or url, for an Action.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {EntryPoint[] | URL[]} - All values of the target property.
 */
export function targets(record) {
    return h.getValues(record, 'target');
}

/**
 * Indicates a target EntryPoint, or url, for an Action.
 * @param {Action} record - The record to retrieve the values from.
 * @returns {EntryPoint[] | URL[]} - All values of the target property.
 */
export function getTargets(record) {
    return h.getValues(record, 'target');
}

/**
 * Indicates a target EntryPoint, or url, for an Action.
 * @param {Action} record - The record to retrieve the value from.
 * @param {EntryPoint[] | URL[]} value - The value to set on record target property.
 * @returns {Action} - The record with updated value.
 */
export function setTargets(record, value) {
    return h.setValues(record, 'target', value);
}

        

/**
 * Returns the list of choices (enum) for property target.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumTarget(){
    
    return []
}
    
