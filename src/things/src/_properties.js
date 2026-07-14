


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
    },
     "ProductGroup": {
        "parent": "Product",
        "properties": ["hasVariant", "productGroupID", "variesBy"]
    },
    "Product": {
        "parent": "Thing",
        "properties": [
            "additionalType",
            "aggregateRating",
            "amazonAsin",
            "asin",
            "audience",
            "award",
            "brand",
            "category",
            "color",
            "countryOfAssembly",
            "countryOfOrigin",
            "countryOfLastProcessing",
            "depth",
            "description",
            "disambiguatingDescription",
            "funding",
            "gsin",
            "gtin",
            "gtin12",
            "gtin13",
            "gtin14",
            "gtin8",
            "hasAdultConsideration",
            "hasCertification",
            "hasEnergyConsumptionDetails",
            "hasMeasurement",
            "hasMerchantReturnPolicy",
            "height",
            "identifier",
            "image",
            "isAccessoryOrSparePartFor",
            "isConsumableFor",
            "isRelatedTo",
            "isSimilarTo",
            "isVariantOf",
            "itemCondition",
            "keywords",
            "logo",
            "mainEntityOfPage",
            "manufacturer",
            "material",
            "model",
            "mpn",
            "name",
            "nsn",
            "offers",
            "pattern",
            "patterned",
            "productID",
            "productionDate",
            "purchaseDate",
            "releaseDate",
            "review",
            "reviews",
            "sameAs",
            "scannable",
            "size",
            "sku",
            "slogan",
            "subjectOf",
            "url",
            "useByDate",
            "weight",
            "width"
        ]
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
