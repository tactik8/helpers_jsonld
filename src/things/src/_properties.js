


const PROPERTIES_DB = {

    "Thing": {
        "parent": "",
        "properties": ["additionalType", "alternateName", "description", "disambiguatingDescription", "identifier", "image", "mainEntityOfPage", "name", "owner", "potentialAction", "sameAs", "subjectOf", "url"]
    },
     "CreativeWork": {
        "parent": "Thing",
        "properties": ["about", "accessMode", "accessModeSufficient", "accessibilityAPI", "accessibilityControl", "accessibilityFeature", "accessibilityHazard", "accessibilitySummary", "accountablePerson", "acquireLicensePage", "aggregateRating", "alternativeHeadline", "archivedAt", "assesses", "associatedMedia", "audience"]
    },
    "Action": {
        "parent": "Thing",
        "properties": ["actionProcess", "actionStatus", "agent", "endTime", "error", "instrument", "location", "object", "participant", "provider", "result", "startTime", "target"]
    },
    "UpdateAction": {
        "parent": "Action",
        "properties": ["targetCollection"]
    },
    "AddAction": {
        "parent": "UpdateAction",
        "properties": []
    },
    "InsertAction": {
        "parent": "AddAction",
        "properties": ["toLocation"]
    },
    "AppendAction": {
        "parent": "InsertAction",
        "properties": []
    },
    "PrependAction": {
        "parent": "InsertAction",
        "properties": []
    },
    "DeleteAction": {
        "parent": "UpdateAction",
        "properties": []
    },
    "ReplaceAction": {
        "parent": "UpdateAction",
        "properties": ["replacer", "replacee"]
    }


}



export function getProperties(record_type) {


    let properties = []

    properties = properties.concat(PROPERTIES_DB?.[record_type]?.properties || [])

    if (PROPERTIES_DB?.[record_type]?.parent) {
        properties = properties.concat(getProperties(PROPERTIES_DB[record_type].parent))
    }

    return properties

}
