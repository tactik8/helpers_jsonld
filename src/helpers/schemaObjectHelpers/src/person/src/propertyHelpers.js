
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for Person and its parents.
 * @returns {String[]} - The properties for Person.
 */
export function getProperties() {
    return ["additionalName","address","affiliation","agentInteractionStatistic","alumniOf","award","awards","birthDate","birthPlace","brand","callSign","children","colleague","colleagues","contactPoint","contactPoints","deathDate","deathPlace","duns","email","familyName","faxNumber","follows","funder","funding","gender","givenName","globalLocationNumber","hasCertification","hasCredential","hasOccupation","hasOfferCatalog","hasPOS","height","homeLocation","honorificPrefix","honorificSuffix","interactionStatistic","isicV4","jobTitle","knows","knowsAbout","knowsLanguage","lifeEvent","makesOffer","memberOf","naics","nationality","netWorth","owns","parent","parents","performerIn","pronouns","publishingPrinciples","relatedTo","seeks","sibling","siblings","skills","sponsor","spouse","taxID","telephone","vatID","weight","workLocation","worksFor","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Person and its parents.
 * @returns {String[]} - The properties for Person.
 */
export function getPropertiesAll() {
    return ["additionalName","address","affiliation","agentInteractionStatistic","alumniOf","award","awards","birthDate","birthPlace","brand","callSign","children","colleague","colleagues","contactPoint","contactPoints","deathDate","deathPlace","duns","email","familyName","faxNumber","follows","funder","funding","gender","givenName","globalLocationNumber","hasCertification","hasCredential","hasOccupation","hasOfferCatalog","hasPOS","height","homeLocation","honorificPrefix","honorificSuffix","interactionStatistic","isicV4","jobTitle","knows","knowsAbout","knowsLanguage","lifeEvent","makesOffer","memberOf","naics","nationality","netWorth","owns","parent","parents","performerIn","pronouns","publishingPrinciples","relatedTo","seeks","sibling","siblings","skills","sponsor","spouse","taxID","telephone","vatID","weight","workLocation","worksFor","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Person without parent properties.
 * @returns {String[]} - The properties for Person.
 */
export function getPropertiesMain() {
    return ["additionalName","address","affiliation","agentInteractionStatistic","alumniOf","award","awards","birthDate","birthPlace","brand","callSign","children","colleague","colleagues","contactPoint","contactPoints","deathDate","deathPlace","duns","email","familyName","faxNumber","follows","funder","funding","gender","givenName","globalLocationNumber","hasCertification","hasCredential","hasOccupation","hasOfferCatalog","hasPOS","height","homeLocation","honorificPrefix","honorificSuffix","interactionStatistic","isicV4","jobTitle","knows","knowsAbout","knowsLanguage","lifeEvent","makesOffer","memberOf","naics","nationality","netWorth","owns","parent","parents","performerIn","pronouns","publishingPrinciples","relatedTo","seeks","sibling","siblings","skills","sponsor","spouse","taxID","telephone","vatID","weight","workLocation","worksFor"]
}

/**
 * Returns list of common properties for Person.
 * @returns {String[]} - The common properties for Person.
 */
export function getPropertiesShort() {
    return ["additionalName","address","affiliation","agentInteractionStatistic","alumniOf","award","awards","birthDate","birthPlace","brand","callSign","children","colleague","colleagues","contactPoint","contactPoints","deathDate","deathPlace","duns","email","familyName","faxNumber","follows","funder","funding","gender","givenName","globalLocationNumber","hasCertification","hasCredential","hasOccupation","hasOfferCatalog","hasPOS","height","homeLocation","honorificPrefix","honorificSuffix","interactionStatistic","isicV4","jobTitle","knows","knowsAbout","knowsLanguage","lifeEvent","makesOffer","memberOf","naics","nationality","netWorth","owns","parent","parents","performerIn","pronouns","publishingPrinciples","relatedTo","seeks","sibling","siblings","skills","sponsor","spouse","taxID","telephone","vatID","weight","workLocation","worksFor"]        
}

    
    
/**
 * Returns property definitions for Person.
 * @returns {Object} - Property definitions for Person.
 */
export const properties = {
    "additionalName": {
        "@type": "Property",
        "$id": "https://schema.org/additionalName",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "additionalName",
        "description": "An additional name for a Person, can be used for a middle name.",
        "type": [
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "address": {
        "@type": "Property",
        "$id": "https://schema.org/address",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "address",
        "description": "Physical address of the item.",
        "type": [
            "PostalAddress",
            "Text"
        ],
        "classes": [
            "GeoCoordinates",
            "GeoShape",
            "Organization",
            "Person",
            "Place"
        ]
    },
    "affiliation": {
        "@type": "Property",
        "$id": "https://schema.org/affiliation",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "affiliation",
        "description": "An organization that this person is affiliated with. For example, a school/university, a club, or a team.",
        "type": [
            "Organization"
        ],
        "classes": [
            "Person"
        ]
    },
    "agentInteractionStatistic": {
        "@type": "Property",
        "$id": "https://schema.org/agentInteractionStatistic",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "agentInteractionStatistic",
        "description": "The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).",
        "type": [
            "InteractionCounter"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "alumniOf": {
        "@type": "Property",
        "$id": "https://schema.org/alumniOf",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "alumniOf",
        "description": "An organization that the person is an alumni of.",
        "type": [
            "EducationalOrganization",
            "Organization"
        ],
        "classes": [
            "Person"
        ]
    },
    "award": {
        "@type": "Property",
        "$id": "https://schema.org/award",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "award",
        "description": "An award won by or for this item.",
        "type": [
            "Text"
        ],
        "classes": [
            "CreativeWork",
            "Organization",
            "Person",
            "Product",
            "Service"
        ]
    },
    "awards": {
        "@type": "Property",
        "$id": "https://schema.org/awards",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "awards",
        "description": "Awards won by or for this item.",
        "type": [
            "Text"
        ],
        "classes": [
            "CreativeWork",
            "Organization",
            "Person",
            "Product"
        ]
    },
    "birthDate": {
        "@type": "Property",
        "$id": "https://schema.org/birthDate",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "birthDate",
        "description": "Date of birth.",
        "type": [
            "Date"
        ],
        "classes": [
            "Person"
        ]
    },
    "birthPlace": {
        "@type": "Property",
        "$id": "https://schema.org/birthPlace",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "birthPlace",
        "description": "The place where the person was born.",
        "type": [
            "Place"
        ],
        "classes": [
            "Person"
        ]
    },
    "brand": {
        "@type": "Property",
        "$id": "https://schema.org/brand",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "brand",
        "description": "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.",
        "type": [
            "Brand",
            "Organization"
        ],
        "classes": [
            "Organization",
            "Person",
            "Product",
            "Service"
        ]
    },
    "callSign": {
        "@type": "Property",
        "$id": "https://schema.org/callSign",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "callSign",
        "description": "A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.",
        "type": [
            "Text"
        ],
        "classes": [
            "BroadcastService",
            "Person",
            "Vehicle"
        ]
    },
    "children": {
        "@type": "Property",
        "$id": "https://schema.org/children",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "children",
        "description": "A child of the person.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "colleague": {
        "@type": "Property",
        "$id": "https://schema.org/colleague",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "colleague",
        "description": "A colleague of the person.",
        "type": [
            "Person",
            "URL"
        ],
        "classes": [
            "Person"
        ]
    },
    "colleagues": {
        "@type": "Property",
        "$id": "https://schema.org/colleagues",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "colleagues",
        "description": "A colleague of the person.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "contactPoint": {
        "@type": "Property",
        "$id": "https://schema.org/contactPoint",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "contactPoint",
        "description": "A contact point for a person or organization.",
        "type": [
            "ContactPoint"
        ],
        "classes": [
            "HealthInsurancePlan",
            "Organization",
            "Person"
        ]
    },
    "contactPoints": {
        "@type": "Property",
        "$id": "https://schema.org/contactPoints",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "contactPoints",
        "description": "A contact point for a person or organization.",
        "type": [
            "ContactPoint"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "deathDate": {
        "@type": "Property",
        "$id": "https://schema.org/deathDate",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "deathDate",
        "description": "Date of death.",
        "type": [
            "Date"
        ],
        "classes": [
            "Person"
        ]
    },
    "deathPlace": {
        "@type": "Property",
        "$id": "https://schema.org/deathPlace",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "deathPlace",
        "description": "The place where the person died.",
        "type": [
            "Place"
        ],
        "classes": [
            "Person"
        ]
    },
    "duns": {
        "@type": "Property",
        "$id": "https://schema.org/duns",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "duns",
        "description": "The Dun & Bradstreet DUNS number for identifying an organization or business person.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "email": {
        "@type": "Property",
        "$id": "https://schema.org/email",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "email",
        "description": "Email address.",
        "type": [
            "Text"
        ],
        "classes": [
            "ContactPoint",
            "Organization",
            "Person"
        ]
    },
    "familyName": {
        "@type": "Property",
        "$id": "https://schema.org/familyName",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "familyName",
        "description": "Family name. In the U.S., the last name of a Person.",
        "type": [
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "faxNumber": {
        "@type": "Property",
        "$id": "https://schema.org/faxNumber",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "faxNumber",
        "description": "The fax number.",
        "type": [
            "Text"
        ],
        "classes": [
            "ContactPoint",
            "Organization",
            "Person",
            "Place"
        ]
    },
    "follows": {
        "@type": "Property",
        "$id": "https://schema.org/follows",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "follows",
        "description": "The most generic uni-directional social relation.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "funder": {
        "@type": "Property",
        "$id": "https://schema.org/funder",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "funder",
        "description": "A person or organization that supports (sponsors) something through some kind of financial contribution.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "CreativeWork",
            "Event",
            "Grant",
            "MonetaryGrant",
            "Organization",
            "Person"
        ]
    },
    "funding": {
        "@type": "Property",
        "$id": "https://schema.org/funding",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "funding",
        "description": "A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].",
        "type": [
            "Grant"
        ],
        "classes": [
            "BioChemEntity",
            "CreativeWork",
            "Event",
            "MedicalEntity",
            "Organization",
            "Person",
            "Product"
        ]
    },
    "gender": {
        "@type": "Property",
        "$id": "https://schema.org/gender",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "gender",
        "description": "Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of \"Mixed\".",
        "type": [
            "GenderType",
            "Text"
        ],
        "classes": [
            "Person",
            "SportsTeam"
        ],
        "enum": [
            "Female",
            "Male"
        ]
    },
    "givenName": {
        "@type": "Property",
        "$id": "https://schema.org/givenName",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "givenName",
        "description": "Given name. In the U.S., the first name of a Person.",
        "type": [
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "globalLocationNumber": {
        "@type": "Property",
        "$id": "https://schema.org/globalLocationNumber",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "globalLocationNumber",
        "description": "The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization",
            "Person",
            "Place"
        ]
    },
    "hasCertification": {
        "@type": "Property",
        "$id": "https://schema.org/hasCertification",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasCertification",
        "description": "Certification information about a product, organization, service, place, or person.",
        "type": [
            "Certification"
        ],
        "classes": [
            "Organization",
            "Person",
            "Place",
            "Product",
            "Service"
        ]
    },
    "hasCredential": {
        "@type": "Property",
        "$id": "https://schema.org/hasCredential",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasCredential",
        "description": "A credential awarded to the Person or Organization.",
        "type": [
            "Credential"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "hasOccupation": {
        "@type": "Property",
        "$id": "https://schema.org/hasOccupation",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasOccupation",
        "description": "The Person's occupation. For past professions, use Role for expressing dates.",
        "type": [
            "Occupation"
        ],
        "classes": [
            "Person"
        ]
    },
    "hasOfferCatalog": {
        "@type": "Property",
        "$id": "https://schema.org/hasOfferCatalog",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasOfferCatalog",
        "description": "Indicates an OfferCatalog listing for this Organization, Person, or Service.",
        "type": [
            "OfferCatalog"
        ],
        "classes": [
            "Organization",
            "Person",
            "Service"
        ]
    },
    "hasPOS": {
        "@type": "Property",
        "$id": "https://schema.org/hasPOS",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasPOS",
        "description": "Points-of-Sales operated by the organization or person.",
        "type": [
            "Place"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "height": {
        "@type": "Property",
        "$id": "https://schema.org/height",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "height",
        "description": "The height of the item.",
        "type": [
            "Distance",
            "QuantitativeValue"
        ],
        "classes": [
            "MediaObject",
            "OfferShippingDetails",
            "Person",
            "Product",
            "ShippingConditions",
            "VisualArtwork"
        ]
    },
    "homeLocation": {
        "@type": "Property",
        "$id": "https://schema.org/homeLocation",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "homeLocation",
        "description": "A contact location for a person's residence.",
        "type": [
            "ContactPoint",
            "Place"
        ],
        "classes": [
            "Person"
        ]
    },
    "honorificPrefix": {
        "@type": "Property",
        "$id": "https://schema.org/honorificPrefix",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "honorificPrefix",
        "description": "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.",
        "type": [
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "honorificSuffix": {
        "@type": "Property",
        "$id": "https://schema.org/honorificSuffix",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "honorificSuffix",
        "description": "An honorific suffix following a Person's name such as M.D./PhD/MSCSW.",
        "type": [
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "interactionStatistic": {
        "@type": "Property",
        "$id": "https://schema.org/interactionStatistic",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "interactionStatistic",
        "description": "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.",
        "type": [
            "InteractionCounter"
        ],
        "classes": [
            "CreativeWork",
            "Organization",
            "Person"
        ]
    },
    "isicV4": {
        "@type": "Property",
        "$id": "https://schema.org/isicV4",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "isicV4",
        "description": "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization",
            "Person",
            "Place"
        ]
    },
    "jobTitle": {
        "@type": "Property",
        "$id": "https://schema.org/jobTitle",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "jobTitle",
        "description": "The job title of the person (for example, Financial Manager).",
        "type": [
            "DefinedTerm",
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "knows": {
        "@type": "Property",
        "$id": "https://schema.org/knows",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "knows",
        "description": "The most generic bi-directional social/work relation.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "knowsAbout": {
        "@type": "Property",
        "$id": "https://schema.org/knowsAbout",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "knowsAbout",
        "description": "Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.",
        "type": [
            "Text",
            "Thing",
            "URL"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "knowsLanguage": {
        "@type": "Property",
        "$id": "https://schema.org/knowsLanguage",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "knowsLanguage",
        "description": "Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).",
        "type": [
            "Language",
            "Text"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "lifeEvent": {
        "@type": "Property",
        "$id": "https://schema.org/lifeEvent",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "lifeEvent",
        "description": "A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....",
        "type": [
            "Event"
        ],
        "classes": [
            "Person"
        ]
    },
    "makesOffer": {
        "@type": "Property",
        "$id": "https://schema.org/makesOffer",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "makesOffer",
        "description": "A pointer to products or services offered by the organization or person.",
        "type": [
            "Offer"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "memberOf": {
        "@type": "Property",
        "$id": "https://schema.org/memberOf",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "memberOf",
        "description": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
        "type": [
            "MemberProgramTier",
            "Organization",
            "ProgramMembership"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "naics": {
        "@type": "Property",
        "$id": "https://schema.org/naics",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "naics",
        "description": "The North American Industry Classification System (NAICS) code for a particular organization or business person.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "nationality": {
        "@type": "Property",
        "$id": "https://schema.org/nationality",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "nationality",
        "description": "Nationality of the person.",
        "type": [
            "Country"
        ],
        "classes": [
            "Person"
        ]
    },
    "netWorth": {
        "@type": "Property",
        "$id": "https://schema.org/netWorth",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "netWorth",
        "description": "The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.",
        "type": [
            "MonetaryAmount",
            "PriceSpecification"
        ],
        "classes": [
            "Person"
        ]
    },
    "owns": {
        "@type": "Property",
        "$id": "https://schema.org/owns",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "owns",
        "description": "Things owned by the organization or person.",
        "type": [
            "Thing"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "parent": {
        "@type": "Property",
        "$id": "https://schema.org/parent",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "parent",
        "description": "A parent of this person.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "parents": {
        "@type": "Property",
        "$id": "https://schema.org/parents",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "parents",
        "description": "A parents of the person.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "performerIn": {
        "@type": "Property",
        "$id": "https://schema.org/performerIn",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "performerIn",
        "description": "Event that this person is a performer or participant in.",
        "type": [
            "Event"
        ],
        "classes": [
            "Person"
        ]
    },
    "pronouns": {
        "@type": "Property",
        "$id": "https://schema.org/pronouns",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "pronouns",
        "description": "A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.\n\nIn English, formulations such as \"they/them\", \"she/her\", and \"he/him\" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.\n",
        "type": [
            "DefinedTerm",
            "StructuredValue",
            "Text"
        ],
        "classes": [
            "Person"
        ]
    },
    "publishingPrinciples": {
        "@type": "Property",
        "$id": "https://schema.org/publishingPrinciples",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "publishingPrinciples",
        "description": "The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].\n\nWhile such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.\n",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "CreativeWork",
            "Organization",
            "Person"
        ]
    },
    "relatedTo": {
        "@type": "Property",
        "$id": "https://schema.org/relatedTo",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "relatedTo",
        "description": "The most generic familial relation.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "seeks": {
        "@type": "Property",
        "$id": "https://schema.org/seeks",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "seeks",
        "description": "A pointer to products or services sought by the organization or person (demand).",
        "type": [
            "Demand"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "sibling": {
        "@type": "Property",
        "$id": "https://schema.org/sibling",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "sibling",
        "description": "A sibling of the person.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "siblings": {
        "@type": "Property",
        "$id": "https://schema.org/siblings",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "siblings",
        "description": "A sibling of the person.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "skills": {
        "@type": "Property",
        "$id": "https://schema.org/skills",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "skills",
        "description": "A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.",
        "type": [
            "DefinedTerm",
            "Text"
        ],
        "classes": [
            "JobPosting",
            "Occupation",
            "Organization",
            "Person"
        ]
    },
    "sponsor": {
        "@type": "Property",
        "$id": "https://schema.org/sponsor",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "sponsor",
        "description": "A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "CreativeWork",
            "Event",
            "Grant",
            "MedicalStudy",
            "Organization",
            "Person"
        ]
    },
    "spouse": {
        "@type": "Property",
        "$id": "https://schema.org/spouse",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "spouse",
        "description": "The person's spouse.",
        "type": [
            "Person"
        ],
        "classes": [
            "Person"
        ]
    },
    "taxID": {
        "@type": "Property",
        "$id": "https://schema.org/taxID",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "taxID",
        "description": "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "telephone": {
        "@type": "Property",
        "$id": "https://schema.org/telephone",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "telephone",
        "description": "The telephone number.",
        "type": [
            "Text"
        ],
        "classes": [
            "ContactPoint",
            "Organization",
            "Person",
            "Place"
        ]
    },
    "vatID": {
        "@type": "Property",
        "$id": "https://schema.org/vatID",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "vatID",
        "description": "The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization",
            "Person"
        ]
    },
    "weight": {
        "@type": "Property",
        "$id": "https://schema.org/weight",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "weight",
        "description": "The weight of the product or person.",
        "type": [
            "Mass",
            "QuantitativeValue"
        ],
        "classes": [
            "OfferShippingDetails",
            "Person",
            "Product",
            "ShippingConditions",
            "VisualArtwork"
        ]
    },
    "workLocation": {
        "@type": "Property",
        "$id": "https://schema.org/workLocation",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "workLocation",
        "description": "A contact location for a person's place of work.",
        "type": [
            "ContactPoint",
            "Place"
        ],
        "classes": [
            "Person"
        ]
    },
    "worksFor": {
        "@type": "Property",
        "$id": "https://schema.org/worksFor",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "worksFor",
        "description": "Organizations that the person works for.",
        "type": [
            "Organization"
        ],
        "classes": [
            "Person"
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
// Property: additionalName
// ----------------------------------------------------------------------

/**
 * An additional name for a Person, can be used for a middle name.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the additionalName property.
 */
export function additionalName(record) {
    return h.getValue(record, 'additionalName');
}

/**
 * An additional name for a Person, can be used for a middle name.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the additionalName property.
 */
export function getAdditionalName(record) {
    return h.getValue(record, 'additionalName');
}

/**
 * An additional name for a Person, can be used for a middle name.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record additionalName property.
 * @returns {Person} - The record with updated value.
 */
export function setAdditionalName(record, value) {
    return h.setValue(record, 'additionalName', value);
}

/**
 * An additional name for a Person, can be used for a middle name.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the additionalName property.
 */
export function additionalNames(record) {
    return h.getValues(record, 'additionalName');
}

/**
 * An additional name for a Person, can be used for a middle name.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the additionalName property.
 */
export function getAdditionalNames(record) {
    return h.getValues(record, 'additionalName');
}

/**
 * An additional name for a Person, can be used for a middle name.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record additionalName property.
 * @returns {Person} - The record with updated value.
 */
export function setAdditionalNames(record, value) {
    return h.setValues(record, 'additionalName', value);
}

        

/**
 * Returns the list of choices (enum) for property additionalName.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAdditionalName(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: address
// ----------------------------------------------------------------------

/**
 * Physical address of the item.
 * @param {GeoCoordinates | GeoShape | Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {PostalAddress | Text} - The 1st value of the address property.
 */
export function address(record) {
    return h.getValue(record, 'address');
}

/**
 * Physical address of the item.
 * @param {GeoCoordinates | GeoShape | Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {PostalAddress | Text} - The 1st value of the address property.
 */
export function getAddress(record) {
    return h.getValue(record, 'address');
}

/**
 * Physical address of the item.
 * @param {GeoCoordinates | GeoShape | Organization | Person | Place} record - The record to retrieve the value from.
 * @param {PostalAddress | Text} value - The value to set on record address property.
 * @returns {GeoCoordinates | GeoShape | Organization | Person | Place} - The record with updated value.
 */
export function setAddress(record, value) {
    return h.setValue(record, 'address', value);
}

/**
 * Physical address of the item.
 * @param {GeoCoordinates | GeoShape | Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {PostalAddress[] | Text[]} - All values of the address property.
 */
export function addresss(record) {
    return h.getValues(record, 'address');
}

/**
 * Physical address of the item.
 * @param {GeoCoordinates | GeoShape | Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {PostalAddress[] | Text[]} - All values of the address property.
 */
export function getAddresss(record) {
    return h.getValues(record, 'address');
}

/**
 * Physical address of the item.
 * @param {GeoCoordinates | GeoShape | Organization | Person | Place} record - The record to retrieve the value from.
 * @param {PostalAddress[] | Text[]} value - The value to set on record address property.
 * @returns {GeoCoordinates | GeoShape | Organization | Person | Place} - The record with updated value.
 */
export function setAddresss(record, value) {
    return h.setValues(record, 'address', value);
}

        

/**
 * Returns the list of choices (enum) for property address.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAddress(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: affiliation
// ----------------------------------------------------------------------

/**
 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the affiliation property.
 */
export function affiliation(record) {
    return h.getValue(record, 'affiliation');
}

/**
 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the affiliation property.
 */
export function getAffiliation(record) {
    return h.getValue(record, 'affiliation');
}

/**
 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Organization} value - The value to set on record affiliation property.
 * @returns {Person} - The record with updated value.
 */
export function setAffiliation(record, value) {
    return h.setValue(record, 'affiliation', value);
}

/**
 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the affiliation property.
 */
export function affiliations(record) {
    return h.getValues(record, 'affiliation');
}

/**
 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the affiliation property.
 */
export function getAffiliations(record) {
    return h.getValues(record, 'affiliation');
}

/**
 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Organization[]} value - The value to set on record affiliation property.
 * @returns {Person} - The record with updated value.
 */
export function setAffiliations(record, value) {
    return h.setValues(record, 'affiliation', value);
}

        

/**
 * Returns the list of choices (enum) for property affiliation.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAffiliation(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: agentInteractionStatistic
// ----------------------------------------------------------------------

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {InteractionCounter} - The 1st value of the agentInteractionStatistic property.
 */
export function agentInteractionStatistic(record) {
    return h.getValue(record, 'agentInteractionStatistic');
}

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {InteractionCounter} - The 1st value of the agentInteractionStatistic property.
 */
export function getAgentInteractionStatistic(record) {
    return h.getValue(record, 'agentInteractionStatistic');
}

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {InteractionCounter} value - The value to set on record agentInteractionStatistic property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setAgentInteractionStatistic(record, value) {
    return h.setValue(record, 'agentInteractionStatistic', value);
}

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {InteractionCounter[]} - All values of the agentInteractionStatistic property.
 */
export function agentInteractionStatistics(record) {
    return h.getValues(record, 'agentInteractionStatistic');
}

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {InteractionCounter[]} - All values of the agentInteractionStatistic property.
 */
export function getAgentInteractionStatistics(record) {
    return h.getValues(record, 'agentInteractionStatistic');
}

/**
 * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {InteractionCounter[]} value - The value to set on record agentInteractionStatistic property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setAgentInteractionStatistics(record, value) {
    return h.setValues(record, 'agentInteractionStatistic', value);
}

        

/**
 * Returns the list of choices (enum) for property agentInteractionStatistic.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAgentInteractionStatistic(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: alumniOf
// ----------------------------------------------------------------------

/**
 * An organization that the person is an alumni of.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {EducationalOrganization | Organization} - The 1st value of the alumniOf property.
 */
export function alumniOf(record) {
    return h.getValue(record, 'alumniOf');
}

/**
 * An organization that the person is an alumni of.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {EducationalOrganization | Organization} - The 1st value of the alumniOf property.
 */
export function getAlumniOf(record) {
    return h.getValue(record, 'alumniOf');
}

/**
 * An organization that the person is an alumni of.
 * @param {Person} record - The record to retrieve the value from.
 * @param {EducationalOrganization | Organization} value - The value to set on record alumniOf property.
 * @returns {Person} - The record with updated value.
 */
export function setAlumniOf(record, value) {
    return h.setValue(record, 'alumniOf', value);
}

/**
 * An organization that the person is an alumni of.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {EducationalOrganization[] | Organization[]} - All values of the alumniOf property.
 */
export function alumniOfs(record) {
    return h.getValues(record, 'alumniOf');
}

/**
 * An organization that the person is an alumni of.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {EducationalOrganization[] | Organization[]} - All values of the alumniOf property.
 */
export function getAlumniOfs(record) {
    return h.getValues(record, 'alumniOf');
}

/**
 * An organization that the person is an alumni of.
 * @param {Person} record - The record to retrieve the value from.
 * @param {EducationalOrganization[] | Organization[]} value - The value to set on record alumniOf property.
 * @returns {Person} - The record with updated value.
 */
export function setAlumniOfs(record, value) {
    return h.setValues(record, 'alumniOf', value);
}

        

/**
 * Returns the list of choices (enum) for property alumniOf.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAlumniOf(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: award
// ----------------------------------------------------------------------

/**
 * An award won by or for this item.
 * @param {CreativeWork | Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the award property.
 */
export function award(record) {
    return h.getValue(record, 'award');
}

/**
 * An award won by or for this item.
 * @param {CreativeWork | Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the award property.
 */
export function getAward(record) {
    return h.getValue(record, 'award');
}

/**
 * An award won by or for this item.
 * @param {CreativeWork | Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record award property.
 * @returns {CreativeWork | Organization | Person | Product | Service} - The record with updated value.
 */
export function setAward(record, value) {
    return h.setValue(record, 'award', value);
}

/**
 * An award won by or for this item.
 * @param {CreativeWork | Organization | Person | Product | Service} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the award property.
 */
export function awards(record) {
    return h.getValues(record, 'award');
}

/**
 * An award won by or for this item.
 * @param {CreativeWork | Organization | Person | Product | Service} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the award property.
 */
export function getAwards(record) {
    return h.getValues(record, 'award');
}

/**
 * An award won by or for this item.
 * @param {CreativeWork | Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record award property.
 * @returns {CreativeWork | Organization | Person | Product | Service} - The record with updated value.
 */
export function setAwards(record, value) {
    return h.setValues(record, 'award', value);
}

        

/**
 * Returns the list of choices (enum) for property award.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAward(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: awards
// ----------------------------------------------------------------------

/**
 * Awards won by or for this item.
 * @param {CreativeWork | Organization | Person | Product} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the awards property.
 */
export function awards(record) {
    return h.getValue(record, 'awards');
}

/**
 * Awards won by or for this item.
 * @param {CreativeWork | Organization | Person | Product} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the awards property.
 */
export function getAwards(record) {
    return h.getValue(record, 'awards');
}

/**
 * Awards won by or for this item.
 * @param {CreativeWork | Organization | Person | Product} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record awards property.
 * @returns {CreativeWork | Organization | Person | Product} - The record with updated value.
 */
export function setAwards(record, value) {
    return h.setValue(record, 'awards', value);
}

/**
 * Awards won by or for this item.
 * @param {CreativeWork | Organization | Person | Product} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the awards property.
 */
export function awardss(record) {
    return h.getValues(record, 'awards');
}

/**
 * Awards won by or for this item.
 * @param {CreativeWork | Organization | Person | Product} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the awards property.
 */
export function getAwardss(record) {
    return h.getValues(record, 'awards');
}

/**
 * Awards won by or for this item.
 * @param {CreativeWork | Organization | Person | Product} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record awards property.
 * @returns {CreativeWork | Organization | Person | Product} - The record with updated value.
 */
export function setAwardss(record, value) {
    return h.setValues(record, 'awards', value);
}

        

/**
 * Returns the list of choices (enum) for property awards.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAwards(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: birthDate
// ----------------------------------------------------------------------

/**
 * Date of birth.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the birthDate property.
 */
export function birthDate(record) {
    return h.getValue(record, 'birthDate');
}

/**
 * Date of birth.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the birthDate property.
 */
export function getBirthDate(record) {
    return h.getValue(record, 'birthDate');
}

/**
 * Date of birth.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Date} value - The value to set on record birthDate property.
 * @returns {Person} - The record with updated value.
 */
export function setBirthDate(record, value) {
    return h.setValue(record, 'birthDate', value);
}

/**
 * Date of birth.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the birthDate property.
 */
export function birthDates(record) {
    return h.getValues(record, 'birthDate');
}

/**
 * Date of birth.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the birthDate property.
 */
export function getBirthDates(record) {
    return h.getValues(record, 'birthDate');
}

/**
 * Date of birth.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Date[]} value - The value to set on record birthDate property.
 * @returns {Person} - The record with updated value.
 */
export function setBirthDates(record, value) {
    return h.setValues(record, 'birthDate', value);
}

        

/**
 * Returns the list of choices (enum) for property birthDate.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumBirthDate(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: birthPlace
// ----------------------------------------------------------------------

/**
 * The place where the person was born.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the birthPlace property.
 */
export function birthPlace(record) {
    return h.getValue(record, 'birthPlace');
}

/**
 * The place where the person was born.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the birthPlace property.
 */
export function getBirthPlace(record) {
    return h.getValue(record, 'birthPlace');
}

/**
 * The place where the person was born.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Place} value - The value to set on record birthPlace property.
 * @returns {Person} - The record with updated value.
 */
export function setBirthPlace(record, value) {
    return h.setValue(record, 'birthPlace', value);
}

/**
 * The place where the person was born.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the birthPlace property.
 */
export function birthPlaces(record) {
    return h.getValues(record, 'birthPlace');
}

/**
 * The place where the person was born.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the birthPlace property.
 */
export function getBirthPlaces(record) {
    return h.getValues(record, 'birthPlace');
}

/**
 * The place where the person was born.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Place[]} value - The value to set on record birthPlace property.
 * @returns {Person} - The record with updated value.
 */
export function setBirthPlaces(record, value) {
    return h.setValues(record, 'birthPlace', value);
}

        

/**
 * Returns the list of choices (enum) for property birthPlace.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumBirthPlace(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: brand
// ----------------------------------------------------------------------

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 * @param {Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @returns {Brand | Organization} - The 1st value of the brand property.
 */
export function brand(record) {
    return h.getValue(record, 'brand');
}

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 * @param {Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @returns {Brand | Organization} - The 1st value of the brand property.
 */
export function getBrand(record) {
    return h.getValue(record, 'brand');
}

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 * @param {Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @param {Brand | Organization} value - The value to set on record brand property.
 * @returns {Organization | Person | Product | Service} - The record with updated value.
 */
export function setBrand(record, value) {
    return h.setValue(record, 'brand', value);
}

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 * @param {Organization | Person | Product | Service} record - The record to retrieve the values from.
 * @returns {Brand[] | Organization[]} - All values of the brand property.
 */
export function brands(record) {
    return h.getValues(record, 'brand');
}

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 * @param {Organization | Person | Product | Service} record - The record to retrieve the values from.
 * @returns {Brand[] | Organization[]} - All values of the brand property.
 */
export function getBrands(record) {
    return h.getValues(record, 'brand');
}

/**
 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 * @param {Organization | Person | Product | Service} record - The record to retrieve the value from.
 * @param {Brand[] | Organization[]} value - The value to set on record brand property.
 * @returns {Organization | Person | Product | Service} - The record with updated value.
 */
export function setBrands(record, value) {
    return h.setValues(record, 'brand', value);
}

        

/**
 * Returns the list of choices (enum) for property brand.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumBrand(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: callSign
// ----------------------------------------------------------------------

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 * @param {BroadcastService | Person | Vehicle} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the callSign property.
 */
export function callSign(record) {
    return h.getValue(record, 'callSign');
}

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 * @param {BroadcastService | Person | Vehicle} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the callSign property.
 */
export function getCallSign(record) {
    return h.getValue(record, 'callSign');
}

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 * @param {BroadcastService | Person | Vehicle} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record callSign property.
 * @returns {BroadcastService | Person | Vehicle} - The record with updated value.
 */
export function setCallSign(record, value) {
    return h.setValue(record, 'callSign', value);
}

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 * @param {BroadcastService | Person | Vehicle} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the callSign property.
 */
export function callSigns(record) {
    return h.getValues(record, 'callSign');
}

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 * @param {BroadcastService | Person | Vehicle} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the callSign property.
 */
export function getCallSigns(record) {
    return h.getValues(record, 'callSign');
}

/**
 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 * @param {BroadcastService | Person | Vehicle} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record callSign property.
 * @returns {BroadcastService | Person | Vehicle} - The record with updated value.
 */
export function setCallSigns(record, value) {
    return h.setValues(record, 'callSign', value);
}

        

/**
 * Returns the list of choices (enum) for property callSign.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumCallSign(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: children
// ----------------------------------------------------------------------

/**
 * A child of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the children property.
 */
export function children(record) {
    return h.getValue(record, 'children');
}

/**
 * A child of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the children property.
 */
export function getChildren(record) {
    return h.getValue(record, 'children');
}

/**
 * A child of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record children property.
 * @returns {Person} - The record with updated value.
 */
export function setChildren(record, value) {
    return h.setValue(record, 'children', value);
}

/**
 * A child of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the children property.
 */
export function childrens(record) {
    return h.getValues(record, 'children');
}

/**
 * A child of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the children property.
 */
export function getChildrens(record) {
    return h.getValues(record, 'children');
}

/**
 * A child of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record children property.
 * @returns {Person} - The record with updated value.
 */
export function setChildrens(record, value) {
    return h.setValues(record, 'children', value);
}

        

/**
 * Returns the list of choices (enum) for property children.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumChildren(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: colleague
// ----------------------------------------------------------------------

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person | URL} - The 1st value of the colleague property.
 */
export function colleague(record) {
    return h.getValue(record, 'colleague');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person | URL} - The 1st value of the colleague property.
 */
export function getColleague(record) {
    return h.getValue(record, 'colleague');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person | URL} value - The value to set on record colleague property.
 * @returns {Person} - The record with updated value.
 */
export function setColleague(record, value) {
    return h.setValue(record, 'colleague', value);
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[] | URL[]} - All values of the colleague property.
 */
export function colleagues(record) {
    return h.getValues(record, 'colleague');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[] | URL[]} - All values of the colleague property.
 */
export function getColleagues(record) {
    return h.getValues(record, 'colleague');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[] | URL[]} value - The value to set on record colleague property.
 * @returns {Person} - The record with updated value.
 */
export function setColleagues(record, value) {
    return h.setValues(record, 'colleague', value);
}

        

/**
 * Returns the list of choices (enum) for property colleague.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumColleague(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: colleagues
// ----------------------------------------------------------------------

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the colleagues property.
 */
export function colleagues(record) {
    return h.getValue(record, 'colleagues');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the colleagues property.
 */
export function getColleagues(record) {
    return h.getValue(record, 'colleagues');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record colleagues property.
 * @returns {Person} - The record with updated value.
 */
export function setColleagues(record, value) {
    return h.setValue(record, 'colleagues', value);
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the colleagues property.
 */
export function colleaguess(record) {
    return h.getValues(record, 'colleagues');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the colleagues property.
 */
export function getColleaguess(record) {
    return h.getValues(record, 'colleagues');
}

/**
 * A colleague of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record colleagues property.
 * @returns {Person} - The record with updated value.
 */
export function setColleaguess(record, value) {
    return h.setValues(record, 'colleagues', value);
}

        

/**
 * Returns the list of choices (enum) for property colleagues.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumColleagues(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: contactPoint
// ----------------------------------------------------------------------

/**
 * A contact point for a person or organization.
 * @param {HealthInsurancePlan | Organization | Person} record - The record to retrieve the value from.
 * @returns {ContactPoint} - The 1st value of the contactPoint property.
 */
export function contactPoint(record) {
    return h.getValue(record, 'contactPoint');
}

/**
 * A contact point for a person or organization.
 * @param {HealthInsurancePlan | Organization | Person} record - The record to retrieve the value from.
 * @returns {ContactPoint} - The 1st value of the contactPoint property.
 */
export function getContactPoint(record) {
    return h.getValue(record, 'contactPoint');
}

/**
 * A contact point for a person or organization.
 * @param {HealthInsurancePlan | Organization | Person} record - The record to retrieve the value from.
 * @param {ContactPoint} value - The value to set on record contactPoint property.
 * @returns {HealthInsurancePlan | Organization | Person} - The record with updated value.
 */
export function setContactPoint(record, value) {
    return h.setValue(record, 'contactPoint', value);
}

/**
 * A contact point for a person or organization.
 * @param {HealthInsurancePlan | Organization | Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[]} - All values of the contactPoint property.
 */
export function contactPoints(record) {
    return h.getValues(record, 'contactPoint');
}

/**
 * A contact point for a person or organization.
 * @param {HealthInsurancePlan | Organization | Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[]} - All values of the contactPoint property.
 */
export function getContactPoints(record) {
    return h.getValues(record, 'contactPoint');
}

/**
 * A contact point for a person or organization.
 * @param {HealthInsurancePlan | Organization | Person} record - The record to retrieve the value from.
 * @param {ContactPoint[]} value - The value to set on record contactPoint property.
 * @returns {HealthInsurancePlan | Organization | Person} - The record with updated value.
 */
export function setContactPoints(record, value) {
    return h.setValues(record, 'contactPoint', value);
}

        

/**
 * Returns the list of choices (enum) for property contactPoint.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumContactPoint(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: contactPoints
// ----------------------------------------------------------------------

/**
 * A contact point for a person or organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {ContactPoint} - The 1st value of the contactPoints property.
 */
export function contactPoints(record) {
    return h.getValue(record, 'contactPoints');
}

/**
 * A contact point for a person or organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {ContactPoint} - The 1st value of the contactPoints property.
 */
export function getContactPoints(record) {
    return h.getValue(record, 'contactPoints');
}

/**
 * A contact point for a person or organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {ContactPoint} value - The value to set on record contactPoints property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setContactPoints(record, value) {
    return h.setValue(record, 'contactPoints', value);
}

/**
 * A contact point for a person or organization.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[]} - All values of the contactPoints property.
 */
export function contactPointss(record) {
    return h.getValues(record, 'contactPoints');
}

/**
 * A contact point for a person or organization.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[]} - All values of the contactPoints property.
 */
export function getContactPointss(record) {
    return h.getValues(record, 'contactPoints');
}

/**
 * A contact point for a person or organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {ContactPoint[]} value - The value to set on record contactPoints property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setContactPointss(record, value) {
    return h.setValues(record, 'contactPoints', value);
}

        

/**
 * Returns the list of choices (enum) for property contactPoints.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumContactPoints(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: deathDate
// ----------------------------------------------------------------------

/**
 * Date of death.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the deathDate property.
 */
export function deathDate(record) {
    return h.getValue(record, 'deathDate');
}

/**
 * Date of death.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the deathDate property.
 */
export function getDeathDate(record) {
    return h.getValue(record, 'deathDate');
}

/**
 * Date of death.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Date} value - The value to set on record deathDate property.
 * @returns {Person} - The record with updated value.
 */
export function setDeathDate(record, value) {
    return h.setValue(record, 'deathDate', value);
}

/**
 * Date of death.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the deathDate property.
 */
export function deathDates(record) {
    return h.getValues(record, 'deathDate');
}

/**
 * Date of death.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the deathDate property.
 */
export function getDeathDates(record) {
    return h.getValues(record, 'deathDate');
}

/**
 * Date of death.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Date[]} value - The value to set on record deathDate property.
 * @returns {Person} - The record with updated value.
 */
export function setDeathDates(record, value) {
    return h.setValues(record, 'deathDate', value);
}

        

/**
 * Returns the list of choices (enum) for property deathDate.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDeathDate(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: deathPlace
// ----------------------------------------------------------------------

/**
 * The place where the person died.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the deathPlace property.
 */
export function deathPlace(record) {
    return h.getValue(record, 'deathPlace');
}

/**
 * The place where the person died.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the deathPlace property.
 */
export function getDeathPlace(record) {
    return h.getValue(record, 'deathPlace');
}

/**
 * The place where the person died.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Place} value - The value to set on record deathPlace property.
 * @returns {Person} - The record with updated value.
 */
export function setDeathPlace(record, value) {
    return h.setValue(record, 'deathPlace', value);
}

/**
 * The place where the person died.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the deathPlace property.
 */
export function deathPlaces(record) {
    return h.getValues(record, 'deathPlace');
}

/**
 * The place where the person died.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the deathPlace property.
 */
export function getDeathPlaces(record) {
    return h.getValues(record, 'deathPlace');
}

/**
 * The place where the person died.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Place[]} value - The value to set on record deathPlace property.
 * @returns {Person} - The record with updated value.
 */
export function setDeathPlaces(record, value) {
    return h.setValues(record, 'deathPlace', value);
}

        

/**
 * Returns the list of choices (enum) for property deathPlace.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDeathPlace(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: duns
// ----------------------------------------------------------------------

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the duns property.
 */
export function duns(record) {
    return h.getValue(record, 'duns');
}

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the duns property.
 */
export function getDuns(record) {
    return h.getValue(record, 'duns');
}

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record duns property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setDuns(record, value) {
    return h.setValue(record, 'duns', value);
}

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the duns property.
 */
export function dunss(record) {
    return h.getValues(record, 'duns');
}

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the duns property.
 */
export function getDunss(record) {
    return h.getValues(record, 'duns');
}

/**
 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record duns property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setDunss(record, value) {
    return h.setValues(record, 'duns', value);
}

        

/**
 * Returns the list of choices (enum) for property duns.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDuns(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: email
// ----------------------------------------------------------------------

/**
 * Email address.
 * @param {ContactPoint | Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the email property.
 */
export function email(record) {
    return h.getValue(record, 'email');
}

/**
 * Email address.
 * @param {ContactPoint | Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the email property.
 */
export function getEmail(record) {
    return h.getValue(record, 'email');
}

/**
 * Email address.
 * @param {ContactPoint | Organization | Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record email property.
 * @returns {ContactPoint | Organization | Person} - The record with updated value.
 */
export function setEmail(record, value) {
    return h.setValue(record, 'email', value);
}

/**
 * Email address.
 * @param {ContactPoint | Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the email property.
 */
export function emails(record) {
    return h.getValues(record, 'email');
}

/**
 * Email address.
 * @param {ContactPoint | Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the email property.
 */
export function getEmails(record) {
    return h.getValues(record, 'email');
}

/**
 * Email address.
 * @param {ContactPoint | Organization | Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record email property.
 * @returns {ContactPoint | Organization | Person} - The record with updated value.
 */
export function setEmails(record, value) {
    return h.setValues(record, 'email', value);
}

        

/**
 * Returns the list of choices (enum) for property email.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEmail(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: familyName
// ----------------------------------------------------------------------

/**
 * Family name. In the U.S., the last name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the familyName property.
 */
export function familyName(record) {
    return h.getValue(record, 'familyName');
}

/**
 * Family name. In the U.S., the last name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the familyName property.
 */
export function getFamilyName(record) {
    return h.getValue(record, 'familyName');
}

/**
 * Family name. In the U.S., the last name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record familyName property.
 * @returns {Person} - The record with updated value.
 */
export function setFamilyName(record, value) {
    return h.setValue(record, 'familyName', value);
}

/**
 * Family name. In the U.S., the last name of a Person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the familyName property.
 */
export function familyNames(record) {
    return h.getValues(record, 'familyName');
}

/**
 * Family name. In the U.S., the last name of a Person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the familyName property.
 */
export function getFamilyNames(record) {
    return h.getValues(record, 'familyName');
}

/**
 * Family name. In the U.S., the last name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record familyName property.
 * @returns {Person} - The record with updated value.
 */
export function setFamilyNames(record, value) {
    return h.setValues(record, 'familyName', value);
}

        

/**
 * Returns the list of choices (enum) for property familyName.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFamilyName(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: faxNumber
// ----------------------------------------------------------------------

/**
 * The fax number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the faxNumber property.
 */
export function faxNumber(record) {
    return h.getValue(record, 'faxNumber');
}

/**
 * The fax number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the faxNumber property.
 */
export function getFaxNumber(record) {
    return h.getValue(record, 'faxNumber');
}

/**
 * The fax number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record faxNumber property.
 * @returns {ContactPoint | Organization | Person | Place} - The record with updated value.
 */
export function setFaxNumber(record, value) {
    return h.setValue(record, 'faxNumber', value);
}

/**
 * The fax number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the faxNumber property.
 */
export function faxNumbers(record) {
    return h.getValues(record, 'faxNumber');
}

/**
 * The fax number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the faxNumber property.
 */
export function getFaxNumbers(record) {
    return h.getValues(record, 'faxNumber');
}

/**
 * The fax number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record faxNumber property.
 * @returns {ContactPoint | Organization | Person | Place} - The record with updated value.
 */
export function setFaxNumbers(record, value) {
    return h.setValues(record, 'faxNumber', value);
}

        

/**
 * Returns the list of choices (enum) for property faxNumber.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFaxNumber(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: follows
// ----------------------------------------------------------------------

/**
 * The most generic uni-directional social relation.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the follows property.
 */
export function follows(record) {
    return h.getValue(record, 'follows');
}

/**
 * The most generic uni-directional social relation.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the follows property.
 */
export function getFollows(record) {
    return h.getValue(record, 'follows');
}

/**
 * The most generic uni-directional social relation.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record follows property.
 * @returns {Person} - The record with updated value.
 */
export function setFollows(record, value) {
    return h.setValue(record, 'follows', value);
}

/**
 * The most generic uni-directional social relation.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the follows property.
 */
export function followss(record) {
    return h.getValues(record, 'follows');
}

/**
 * The most generic uni-directional social relation.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the follows property.
 */
export function getFollowss(record) {
    return h.getValues(record, 'follows');
}

/**
 * The most generic uni-directional social relation.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record follows property.
 * @returns {Person} - The record with updated value.
 */
export function setFollowss(record, value) {
    return h.setValues(record, 'follows', value);
}

        

/**
 * Returns the list of choices (enum) for property follows.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFollows(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: funder
// ----------------------------------------------------------------------

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 * @param {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the funder property.
 */
export function funder(record) {
    return h.getValue(record, 'funder');
}

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 * @param {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the funder property.
 */
export function getFunder(record) {
    return h.getValue(record, 'funder');
}

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 * @param {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record funder property.
 * @returns {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} - The record with updated value.
 */
export function setFunder(record, value) {
    return h.setValue(record, 'funder', value);
}

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 * @param {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the funder property.
 */
export function funders(record) {
    return h.getValues(record, 'funder');
}

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 * @param {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the funder property.
 */
export function getFunders(record) {
    return h.getValues(record, 'funder');
}

/**
 * A person or organization that supports (sponsors) something through some kind of financial contribution.
 * @param {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record funder property.
 * @returns {CreativeWork | Event | Grant | MonetaryGrant | Organization | Person} - The record with updated value.
 */
export function setFunders(record, value) {
    return h.setValues(record, 'funder', value);
}

        

/**
 * Returns the list of choices (enum) for property funder.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFunder(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: funding
// ----------------------------------------------------------------------

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 * @param {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} record - The record to retrieve the value from.
 * @returns {Grant} - The 1st value of the funding property.
 */
export function funding(record) {
    return h.getValue(record, 'funding');
}

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 * @param {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} record - The record to retrieve the value from.
 * @returns {Grant} - The 1st value of the funding property.
 */
export function getFunding(record) {
    return h.getValue(record, 'funding');
}

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 * @param {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} record - The record to retrieve the value from.
 * @param {Grant} value - The value to set on record funding property.
 * @returns {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} - The record with updated value.
 */
export function setFunding(record, value) {
    return h.setValue(record, 'funding', value);
}

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 * @param {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} record - The record to retrieve the values from.
 * @returns {Grant[]} - All values of the funding property.
 */
export function fundings(record) {
    return h.getValues(record, 'funding');
}

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 * @param {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} record - The record to retrieve the values from.
 * @returns {Grant[]} - All values of the funding property.
 */
export function getFundings(record) {
    return h.getValues(record, 'funding');
}

/**
 * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
 * @param {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} record - The record to retrieve the value from.
 * @param {Grant[]} value - The value to set on record funding property.
 * @returns {BioChemEntity | CreativeWork | Event | MedicalEntity | Organization | Person | Product} - The record with updated value.
 */
export function setFundings(record, value) {
    return h.setValues(record, 'funding', value);
}

        

/**
 * Returns the list of choices (enum) for property funding.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFunding(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: gender
// ----------------------------------------------------------------------

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 * @param {Person | SportsTeam} record - The record to retrieve the value from.
 * @returns {GenderType | Text} - The 1st value of the gender property.
 */
export function gender(record) {
    return h.getValue(record, 'gender');
}

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 * @param {Person | SportsTeam} record - The record to retrieve the value from.
 * @returns {GenderType | Text} - The 1st value of the gender property.
 */
export function getGender(record) {
    return h.getValue(record, 'gender');
}

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 * @param {Person | SportsTeam} record - The record to retrieve the value from.
 * @param {GenderType | Text} value - The value to set on record gender property.
 * @returns {Person | SportsTeam} - The record with updated value.
 */
export function setGender(record, value) {
    return h.setValue(record, 'gender', value);
}

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 * @param {Person | SportsTeam} record - The record to retrieve the values from.
 * @returns {GenderType[] | Text[]} - All values of the gender property.
 */
export function genders(record) {
    return h.getValues(record, 'gender');
}

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 * @param {Person | SportsTeam} record - The record to retrieve the values from.
 * @returns {GenderType[] | Text[]} - All values of the gender property.
 */
export function getGenders(record) {
    return h.getValues(record, 'gender');
}

/**
 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 * @param {Person | SportsTeam} record - The record to retrieve the value from.
 * @param {GenderType[] | Text[]} value - The value to set on record gender property.
 * @returns {Person | SportsTeam} - The record with updated value.
 */
export function setGenders(record, value) {
    return h.setValues(record, 'gender', value);
}

        

/**
 * Returns the list of choices (enum) for property gender.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumGender(){
    
    return ["Female","Male"]
}
    

        
// ----------------------------------------------------------------------
// Property: givenName
// ----------------------------------------------------------------------

/**
 * Given name. In the U.S., the first name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the givenName property.
 */
export function givenName(record) {
    return h.getValue(record, 'givenName');
}

/**
 * Given name. In the U.S., the first name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the givenName property.
 */
export function getGivenName(record) {
    return h.getValue(record, 'givenName');
}

/**
 * Given name. In the U.S., the first name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record givenName property.
 * @returns {Person} - The record with updated value.
 */
export function setGivenName(record, value) {
    return h.setValue(record, 'givenName', value);
}

/**
 * Given name. In the U.S., the first name of a Person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the givenName property.
 */
export function givenNames(record) {
    return h.getValues(record, 'givenName');
}

/**
 * Given name. In the U.S., the first name of a Person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the givenName property.
 */
export function getGivenNames(record) {
    return h.getValues(record, 'givenName');
}

/**
 * Given name. In the U.S., the first name of a Person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record givenName property.
 * @returns {Person} - The record with updated value.
 */
export function setGivenNames(record, value) {
    return h.setValues(record, 'givenName', value);
}

        

/**
 * Returns the list of choices (enum) for property givenName.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumGivenName(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: globalLocationNumber
// ----------------------------------------------------------------------

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the globalLocationNumber property.
 */
export function globalLocationNumber(record) {
    return h.getValue(record, 'globalLocationNumber');
}

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the globalLocationNumber property.
 */
export function getGlobalLocationNumber(record) {
    return h.getValue(record, 'globalLocationNumber');
}

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record globalLocationNumber property.
 * @returns {Organization | Person | Place} - The record with updated value.
 */
export function setGlobalLocationNumber(record, value) {
    return h.setValue(record, 'globalLocationNumber', value);
}

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 * @param {Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the globalLocationNumber property.
 */
export function globalLocationNumbers(record) {
    return h.getValues(record, 'globalLocationNumber');
}

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 * @param {Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the globalLocationNumber property.
 */
export function getGlobalLocationNumbers(record) {
    return h.getValues(record, 'globalLocationNumber');
}

/**
 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record globalLocationNumber property.
 * @returns {Organization | Person | Place} - The record with updated value.
 */
export function setGlobalLocationNumbers(record, value) {
    return h.setValues(record, 'globalLocationNumber', value);
}

        

/**
 * Returns the list of choices (enum) for property globalLocationNumber.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumGlobalLocationNumber(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasCertification
// ----------------------------------------------------------------------

/**
 * Certification information about a product, organization, service, place, or person.
 * @param {Organization | Person | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {Certification} - The 1st value of the hasCertification property.
 */
export function hasCertification(record) {
    return h.getValue(record, 'hasCertification');
}

/**
 * Certification information about a product, organization, service, place, or person.
 * @param {Organization | Person | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {Certification} - The 1st value of the hasCertification property.
 */
export function getHasCertification(record) {
    return h.getValue(record, 'hasCertification');
}

/**
 * Certification information about a product, organization, service, place, or person.
 * @param {Organization | Person | Place | Product | Service} record - The record to retrieve the value from.
 * @param {Certification} value - The value to set on record hasCertification property.
 * @returns {Organization | Person | Place | Product | Service} - The record with updated value.
 */
export function setHasCertification(record, value) {
    return h.setValue(record, 'hasCertification', value);
}

/**
 * Certification information about a product, organization, service, place, or person.
 * @param {Organization | Person | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {Certification[]} - All values of the hasCertification property.
 */
export function hasCertifications(record) {
    return h.getValues(record, 'hasCertification');
}

/**
 * Certification information about a product, organization, service, place, or person.
 * @param {Organization | Person | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {Certification[]} - All values of the hasCertification property.
 */
export function getHasCertifications(record) {
    return h.getValues(record, 'hasCertification');
}

/**
 * Certification information about a product, organization, service, place, or person.
 * @param {Organization | Person | Place | Product | Service} record - The record to retrieve the value from.
 * @param {Certification[]} value - The value to set on record hasCertification property.
 * @returns {Organization | Person | Place | Product | Service} - The record with updated value.
 */
export function setHasCertifications(record, value) {
    return h.setValues(record, 'hasCertification', value);
}

        

/**
 * Returns the list of choices (enum) for property hasCertification.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasCertification(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasCredential
// ----------------------------------------------------------------------

/**
 * A credential awarded to the Person or Organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Credential} - The 1st value of the hasCredential property.
 */
export function hasCredential(record) {
    return h.getValue(record, 'hasCredential');
}

/**
 * A credential awarded to the Person or Organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Credential} - The 1st value of the hasCredential property.
 */
export function getHasCredential(record) {
    return h.getValue(record, 'hasCredential');
}

/**
 * A credential awarded to the Person or Organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Credential} value - The value to set on record hasCredential property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setHasCredential(record, value) {
    return h.setValue(record, 'hasCredential', value);
}

/**
 * A credential awarded to the Person or Organization.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Credential[]} - All values of the hasCredential property.
 */
export function hasCredentials(record) {
    return h.getValues(record, 'hasCredential');
}

/**
 * A credential awarded to the Person or Organization.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Credential[]} - All values of the hasCredential property.
 */
export function getHasCredentials(record) {
    return h.getValues(record, 'hasCredential');
}

/**
 * A credential awarded to the Person or Organization.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Credential[]} value - The value to set on record hasCredential property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setHasCredentials(record, value) {
    return h.setValues(record, 'hasCredential', value);
}

        

/**
 * Returns the list of choices (enum) for property hasCredential.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasCredential(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasOccupation
// ----------------------------------------------------------------------

/**
 * The Person's occupation. For past professions, use Role for expressing dates.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Occupation} - The 1st value of the hasOccupation property.
 */
export function hasOccupation(record) {
    return h.getValue(record, 'hasOccupation');
}

/**
 * The Person's occupation. For past professions, use Role for expressing dates.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Occupation} - The 1st value of the hasOccupation property.
 */
export function getHasOccupation(record) {
    return h.getValue(record, 'hasOccupation');
}

/**
 * The Person's occupation. For past professions, use Role for expressing dates.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Occupation} value - The value to set on record hasOccupation property.
 * @returns {Person} - The record with updated value.
 */
export function setHasOccupation(record, value) {
    return h.setValue(record, 'hasOccupation', value);
}

/**
 * The Person's occupation. For past professions, use Role for expressing dates.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Occupation[]} - All values of the hasOccupation property.
 */
export function hasOccupations(record) {
    return h.getValues(record, 'hasOccupation');
}

/**
 * The Person's occupation. For past professions, use Role for expressing dates.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Occupation[]} - All values of the hasOccupation property.
 */
export function getHasOccupations(record) {
    return h.getValues(record, 'hasOccupation');
}

/**
 * The Person's occupation. For past professions, use Role for expressing dates.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Occupation[]} value - The value to set on record hasOccupation property.
 * @returns {Person} - The record with updated value.
 */
export function setHasOccupations(record, value) {
    return h.setValues(record, 'hasOccupation', value);
}

        

/**
 * Returns the list of choices (enum) for property hasOccupation.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasOccupation(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasOfferCatalog
// ----------------------------------------------------------------------

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 * @param {Organization | Person | Service} record - The record to retrieve the value from.
 * @returns {OfferCatalog} - The 1st value of the hasOfferCatalog property.
 */
export function hasOfferCatalog(record) {
    return h.getValue(record, 'hasOfferCatalog');
}

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 * @param {Organization | Person | Service} record - The record to retrieve the value from.
 * @returns {OfferCatalog} - The 1st value of the hasOfferCatalog property.
 */
export function getHasOfferCatalog(record) {
    return h.getValue(record, 'hasOfferCatalog');
}

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 * @param {Organization | Person | Service} record - The record to retrieve the value from.
 * @param {OfferCatalog} value - The value to set on record hasOfferCatalog property.
 * @returns {Organization | Person | Service} - The record with updated value.
 */
export function setHasOfferCatalog(record, value) {
    return h.setValue(record, 'hasOfferCatalog', value);
}

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 * @param {Organization | Person | Service} record - The record to retrieve the values from.
 * @returns {OfferCatalog[]} - All values of the hasOfferCatalog property.
 */
export function hasOfferCatalogs(record) {
    return h.getValues(record, 'hasOfferCatalog');
}

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 * @param {Organization | Person | Service} record - The record to retrieve the values from.
 * @returns {OfferCatalog[]} - All values of the hasOfferCatalog property.
 */
export function getHasOfferCatalogs(record) {
    return h.getValues(record, 'hasOfferCatalog');
}

/**
 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
 * @param {Organization | Person | Service} record - The record to retrieve the value from.
 * @param {OfferCatalog[]} value - The value to set on record hasOfferCatalog property.
 * @returns {Organization | Person | Service} - The record with updated value.
 */
export function setHasOfferCatalogs(record, value) {
    return h.setValues(record, 'hasOfferCatalog', value);
}

        

/**
 * Returns the list of choices (enum) for property hasOfferCatalog.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasOfferCatalog(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasPOS
// ----------------------------------------------------------------------

/**
 * Points-of-Sales operated by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the hasPOS property.
 */
export function hasPOS(record) {
    return h.getValue(record, 'hasPOS');
}

/**
 * Points-of-Sales operated by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the hasPOS property.
 */
export function getHasPOS(record) {
    return h.getValue(record, 'hasPOS');
}

/**
 * Points-of-Sales operated by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Place} value - The value to set on record hasPOS property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setHasPOS(record, value) {
    return h.setValue(record, 'hasPOS', value);
}

/**
 * Points-of-Sales operated by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the hasPOS property.
 */
export function hasPOSs(record) {
    return h.getValues(record, 'hasPOS');
}

/**
 * Points-of-Sales operated by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the hasPOS property.
 */
export function getHasPOSs(record) {
    return h.getValues(record, 'hasPOS');
}

/**
 * Points-of-Sales operated by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Place[]} value - The value to set on record hasPOS property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setHasPOSs(record, value) {
    return h.setValues(record, 'hasPOS', value);
}

        

/**
 * Returns the list of choices (enum) for property hasPOS.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasPOS(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: height
// ----------------------------------------------------------------------

/**
 * The height of the item.
 * @param {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @returns {Distance | QuantitativeValue} - The 1st value of the height property.
 */
export function height(record) {
    return h.getValue(record, 'height');
}

/**
 * The height of the item.
 * @param {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @returns {Distance | QuantitativeValue} - The 1st value of the height property.
 */
export function getHeight(record) {
    return h.getValue(record, 'height');
}

/**
 * The height of the item.
 * @param {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @param {Distance | QuantitativeValue} value - The value to set on record height property.
 * @returns {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} - The record with updated value.
 */
export function setHeight(record, value) {
    return h.setValue(record, 'height', value);
}

/**
 * The height of the item.
 * @param {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the values from.
 * @returns {Distance[] | QuantitativeValue[]} - All values of the height property.
 */
export function heights(record) {
    return h.getValues(record, 'height');
}

/**
 * The height of the item.
 * @param {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the values from.
 * @returns {Distance[] | QuantitativeValue[]} - All values of the height property.
 */
export function getHeights(record) {
    return h.getValues(record, 'height');
}

/**
 * The height of the item.
 * @param {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @param {Distance[] | QuantitativeValue[]} value - The value to set on record height property.
 * @returns {MediaObject | OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} - The record with updated value.
 */
export function setHeights(record, value) {
    return h.setValues(record, 'height', value);
}

        

/**
 * Returns the list of choices (enum) for property height.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHeight(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: homeLocation
// ----------------------------------------------------------------------

/**
 * A contact location for a person's residence.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {ContactPoint | Place} - The 1st value of the homeLocation property.
 */
export function homeLocation(record) {
    return h.getValue(record, 'homeLocation');
}

/**
 * A contact location for a person's residence.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {ContactPoint | Place} - The 1st value of the homeLocation property.
 */
export function getHomeLocation(record) {
    return h.getValue(record, 'homeLocation');
}

/**
 * A contact location for a person's residence.
 * @param {Person} record - The record to retrieve the value from.
 * @param {ContactPoint | Place} value - The value to set on record homeLocation property.
 * @returns {Person} - The record with updated value.
 */
export function setHomeLocation(record, value) {
    return h.setValue(record, 'homeLocation', value);
}

/**
 * A contact location for a person's residence.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Place[]} - All values of the homeLocation property.
 */
export function homeLocations(record) {
    return h.getValues(record, 'homeLocation');
}

/**
 * A contact location for a person's residence.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Place[]} - All values of the homeLocation property.
 */
export function getHomeLocations(record) {
    return h.getValues(record, 'homeLocation');
}

/**
 * A contact location for a person's residence.
 * @param {Person} record - The record to retrieve the value from.
 * @param {ContactPoint[] | Place[]} value - The value to set on record homeLocation property.
 * @returns {Person} - The record with updated value.
 */
export function setHomeLocations(record, value) {
    return h.setValues(record, 'homeLocation', value);
}

        

/**
 * Returns the list of choices (enum) for property homeLocation.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHomeLocation(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: honorificPrefix
// ----------------------------------------------------------------------

/**
 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the honorificPrefix property.
 */
export function honorificPrefix(record) {
    return h.getValue(record, 'honorificPrefix');
}

/**
 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the honorificPrefix property.
 */
export function getHonorificPrefix(record) {
    return h.getValue(record, 'honorificPrefix');
}

/**
 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record honorificPrefix property.
 * @returns {Person} - The record with updated value.
 */
export function setHonorificPrefix(record, value) {
    return h.setValue(record, 'honorificPrefix', value);
}

/**
 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the honorificPrefix property.
 */
export function honorificPrefixs(record) {
    return h.getValues(record, 'honorificPrefix');
}

/**
 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the honorificPrefix property.
 */
export function getHonorificPrefixs(record) {
    return h.getValues(record, 'honorificPrefix');
}

/**
 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record honorificPrefix property.
 * @returns {Person} - The record with updated value.
 */
export function setHonorificPrefixs(record, value) {
    return h.setValues(record, 'honorificPrefix', value);
}

        

/**
 * Returns the list of choices (enum) for property honorificPrefix.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHonorificPrefix(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: honorificSuffix
// ----------------------------------------------------------------------

/**
 * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the honorificSuffix property.
 */
export function honorificSuffix(record) {
    return h.getValue(record, 'honorificSuffix');
}

/**
 * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the honorificSuffix property.
 */
export function getHonorificSuffix(record) {
    return h.getValue(record, 'honorificSuffix');
}

/**
 * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record honorificSuffix property.
 * @returns {Person} - The record with updated value.
 */
export function setHonorificSuffix(record, value) {
    return h.setValue(record, 'honorificSuffix', value);
}

/**
 * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the honorificSuffix property.
 */
export function honorificSuffixs(record) {
    return h.getValues(record, 'honorificSuffix');
}

/**
 * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the honorificSuffix property.
 */
export function getHonorificSuffixs(record) {
    return h.getValues(record, 'honorificSuffix');
}

/**
 * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record honorificSuffix property.
 * @returns {Person} - The record with updated value.
 */
export function setHonorificSuffixs(record, value) {
    return h.setValues(record, 'honorificSuffix', value);
}

        

/**
 * Returns the list of choices (enum) for property honorificSuffix.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHonorificSuffix(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: interactionStatistic
// ----------------------------------------------------------------------

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @returns {InteractionCounter} - The 1st value of the interactionStatistic property.
 */
export function interactionStatistic(record) {
    return h.getValue(record, 'interactionStatistic');
}

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @returns {InteractionCounter} - The 1st value of the interactionStatistic property.
 */
export function getInteractionStatistic(record) {
    return h.getValue(record, 'interactionStatistic');
}

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @param {InteractionCounter} value - The value to set on record interactionStatistic property.
 * @returns {CreativeWork | Organization | Person} - The record with updated value.
 */
export function setInteractionStatistic(record, value) {
    return h.setValue(record, 'interactionStatistic', value);
}

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 * @param {CreativeWork | Organization | Person} record - The record to retrieve the values from.
 * @returns {InteractionCounter[]} - All values of the interactionStatistic property.
 */
export function interactionStatistics(record) {
    return h.getValues(record, 'interactionStatistic');
}

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 * @param {CreativeWork | Organization | Person} record - The record to retrieve the values from.
 * @returns {InteractionCounter[]} - All values of the interactionStatistic property.
 */
export function getInteractionStatistics(record) {
    return h.getValues(record, 'interactionStatistic');
}

/**
 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @param {InteractionCounter[]} value - The value to set on record interactionStatistic property.
 * @returns {CreativeWork | Organization | Person} - The record with updated value.
 */
export function setInteractionStatistics(record, value) {
    return h.setValues(record, 'interactionStatistic', value);
}

        

/**
 * Returns the list of choices (enum) for property interactionStatistic.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumInteractionStatistic(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: isicV4
// ----------------------------------------------------------------------

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the isicV4 property.
 */
export function isicV4(record) {
    return h.getValue(record, 'isicV4');
}

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the isicV4 property.
 */
export function getIsicV4(record) {
    return h.getValue(record, 'isicV4');
}

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record isicV4 property.
 * @returns {Organization | Person | Place} - The record with updated value.
 */
export function setIsicV4(record, value) {
    return h.setValue(record, 'isicV4', value);
}

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * @param {Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the isicV4 property.
 */
export function isicV4s(record) {
    return h.getValues(record, 'isicV4');
}

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * @param {Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the isicV4 property.
 */
export function getIsicV4s(record) {
    return h.getValues(record, 'isicV4');
}

/**
 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * @param {Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record isicV4 property.
 * @returns {Organization | Person | Place} - The record with updated value.
 */
export function setIsicV4s(record, value) {
    return h.setValues(record, 'isicV4', value);
}

        

/**
 * Returns the list of choices (enum) for property isicV4.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumIsicV4(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: jobTitle
// ----------------------------------------------------------------------

/**
 * The job title of the person (for example, Financial Manager).
 * @param {Person} record - The record to retrieve the value from.
 * @returns {DefinedTerm | Text} - The 1st value of the jobTitle property.
 */
export function jobTitle(record) {
    return h.getValue(record, 'jobTitle');
}

/**
 * The job title of the person (for example, Financial Manager).
 * @param {Person} record - The record to retrieve the value from.
 * @returns {DefinedTerm | Text} - The 1st value of the jobTitle property.
 */
export function getJobTitle(record) {
    return h.getValue(record, 'jobTitle');
}

/**
 * The job title of the person (for example, Financial Manager).
 * @param {Person} record - The record to retrieve the value from.
 * @param {DefinedTerm | Text} value - The value to set on record jobTitle property.
 * @returns {Person} - The record with updated value.
 */
export function setJobTitle(record, value) {
    return h.setValue(record, 'jobTitle', value);
}

/**
 * The job title of the person (for example, Financial Manager).
 * @param {Person} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | Text[]} - All values of the jobTitle property.
 */
export function jobTitles(record) {
    return h.getValues(record, 'jobTitle');
}

/**
 * The job title of the person (for example, Financial Manager).
 * @param {Person} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | Text[]} - All values of the jobTitle property.
 */
export function getJobTitles(record) {
    return h.getValues(record, 'jobTitle');
}

/**
 * The job title of the person (for example, Financial Manager).
 * @param {Person} record - The record to retrieve the value from.
 * @param {DefinedTerm[] | Text[]} value - The value to set on record jobTitle property.
 * @returns {Person} - The record with updated value.
 */
export function setJobTitles(record, value) {
    return h.setValues(record, 'jobTitle', value);
}

        

/**
 * Returns the list of choices (enum) for property jobTitle.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumJobTitle(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: knows
// ----------------------------------------------------------------------

/**
 * The most generic bi-directional social/work relation.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the knows property.
 */
export function knows(record) {
    return h.getValue(record, 'knows');
}

/**
 * The most generic bi-directional social/work relation.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the knows property.
 */
export function getKnows(record) {
    return h.getValue(record, 'knows');
}

/**
 * The most generic bi-directional social/work relation.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record knows property.
 * @returns {Person} - The record with updated value.
 */
export function setKnows(record, value) {
    return h.setValue(record, 'knows', value);
}

/**
 * The most generic bi-directional social/work relation.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the knows property.
 */
export function knowss(record) {
    return h.getValues(record, 'knows');
}

/**
 * The most generic bi-directional social/work relation.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the knows property.
 */
export function getKnowss(record) {
    return h.getValues(record, 'knows');
}

/**
 * The most generic bi-directional social/work relation.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record knows property.
 * @returns {Person} - The record with updated value.
 */
export function setKnowss(record, value) {
    return h.setValues(record, 'knows', value);
}

        

/**
 * Returns the list of choices (enum) for property knows.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumKnows(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: knowsAbout
// ----------------------------------------------------------------------

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text | Thing | URL} - The 1st value of the knowsAbout property.
 */
export function knowsAbout(record) {
    return h.getValue(record, 'knowsAbout');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text | Thing | URL} - The 1st value of the knowsAbout property.
 */
export function getKnowsAbout(record) {
    return h.getValue(record, 'knowsAbout');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text | Thing | URL} value - The value to set on record knowsAbout property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setKnowsAbout(record, value) {
    return h.setValue(record, 'knowsAbout', value);
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[] | Thing[] | URL[]} - All values of the knowsAbout property.
 */
export function knowsAbouts(record) {
    return h.getValues(record, 'knowsAbout');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[] | Thing[] | URL[]} - All values of the knowsAbout property.
 */
export function getKnowsAbouts(record) {
    return h.getValues(record, 'knowsAbout');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text[] | Thing[] | URL[]} value - The value to set on record knowsAbout property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setKnowsAbouts(record, value) {
    return h.setValues(record, 'knowsAbout', value);
}

        

/**
 * Returns the list of choices (enum) for property knowsAbout.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumKnowsAbout(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: knowsLanguage
// ----------------------------------------------------------------------

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Language | Text} - The 1st value of the knowsLanguage property.
 */
export function knowsLanguage(record) {
    return h.getValue(record, 'knowsLanguage');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Language | Text} - The 1st value of the knowsLanguage property.
 */
export function getKnowsLanguage(record) {
    return h.getValue(record, 'knowsLanguage');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Language | Text} value - The value to set on record knowsLanguage property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setKnowsLanguage(record, value) {
    return h.setValue(record, 'knowsLanguage', value);
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Language[] | Text[]} - All values of the knowsLanguage property.
 */
export function knowsLanguages(record) {
    return h.getValues(record, 'knowsLanguage');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Language[] | Text[]} - All values of the knowsLanguage property.
 */
export function getKnowsLanguages(record) {
    return h.getValues(record, 'knowsLanguage');
}

/**
 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Language[] | Text[]} value - The value to set on record knowsLanguage property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setKnowsLanguages(record, value) {
    return h.setValues(record, 'knowsLanguage', value);
}

        

/**
 * Returns the list of choices (enum) for property knowsLanguage.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumKnowsLanguage(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: lifeEvent
// ----------------------------------------------------------------------

/**
 * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the lifeEvent property.
 */
export function lifeEvent(record) {
    return h.getValue(record, 'lifeEvent');
}

/**
 * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the lifeEvent property.
 */
export function getLifeEvent(record) {
    return h.getValue(record, 'lifeEvent');
}

/**
 * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
 * @param {Person} record - The record to retrieve the value from.
 * @param {Event} value - The value to set on record lifeEvent property.
 * @returns {Person} - The record with updated value.
 */
export function setLifeEvent(record, value) {
    return h.setValue(record, 'lifeEvent', value);
}

/**
 * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the lifeEvent property.
 */
export function lifeEvents(record) {
    return h.getValues(record, 'lifeEvent');
}

/**
 * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the lifeEvent property.
 */
export function getLifeEvents(record) {
    return h.getValues(record, 'lifeEvent');
}

/**
 * A life event like baptism, communions, Bar Mitzvahs, Aqiqah, Namakarana, Miyamairi, burial, ....
 * @param {Person} record - The record to retrieve the value from.
 * @param {Event[]} value - The value to set on record lifeEvent property.
 * @returns {Person} - The record with updated value.
 */
export function setLifeEvents(record, value) {
    return h.setValues(record, 'lifeEvent', value);
}

        

/**
 * Returns the list of choices (enum) for property lifeEvent.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLifeEvent(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: makesOffer
// ----------------------------------------------------------------------

/**
 * A pointer to products or services offered by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Offer} - The 1st value of the makesOffer property.
 */
export function makesOffer(record) {
    return h.getValue(record, 'makesOffer');
}

/**
 * A pointer to products or services offered by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Offer} - The 1st value of the makesOffer property.
 */
export function getMakesOffer(record) {
    return h.getValue(record, 'makesOffer');
}

/**
 * A pointer to products or services offered by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Offer} value - The value to set on record makesOffer property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setMakesOffer(record, value) {
    return h.setValue(record, 'makesOffer', value);
}

/**
 * A pointer to products or services offered by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Offer[]} - All values of the makesOffer property.
 */
export function makesOffers(record) {
    return h.getValues(record, 'makesOffer');
}

/**
 * A pointer to products or services offered by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Offer[]} - All values of the makesOffer property.
 */
export function getMakesOffers(record) {
    return h.getValues(record, 'makesOffer');
}

/**
 * A pointer to products or services offered by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Offer[]} value - The value to set on record makesOffer property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setMakesOffers(record, value) {
    return h.setValues(record, 'makesOffer', value);
}

        

/**
 * Returns the list of choices (enum) for property makesOffer.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumMakesOffer(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: memberOf
// ----------------------------------------------------------------------

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {MemberProgramTier | Organization | ProgramMembership} - The 1st value of the memberOf property.
 */
export function memberOf(record) {
    return h.getValue(record, 'memberOf');
}

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {MemberProgramTier | Organization | ProgramMembership} - The 1st value of the memberOf property.
 */
export function getMemberOf(record) {
    return h.getValue(record, 'memberOf');
}

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {MemberProgramTier | Organization | ProgramMembership} value - The value to set on record memberOf property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setMemberOf(record, value) {
    return h.setValue(record, 'memberOf', value);
}

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {MemberProgramTier[] | Organization[] | ProgramMembership[]} - All values of the memberOf property.
 */
export function memberOfs(record) {
    return h.getValues(record, 'memberOf');
}

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {MemberProgramTier[] | Organization[] | ProgramMembership[]} - All values of the memberOf property.
 */
export function getMemberOfs(record) {
    return h.getValues(record, 'memberOf');
}

/**
 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {MemberProgramTier[] | Organization[] | ProgramMembership[]} value - The value to set on record memberOf property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setMemberOfs(record, value) {
    return h.setValues(record, 'memberOf', value);
}

        

/**
 * Returns the list of choices (enum) for property memberOf.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumMemberOf(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: naics
// ----------------------------------------------------------------------

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the naics property.
 */
export function naics(record) {
    return h.getValue(record, 'naics');
}

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the naics property.
 */
export function getNaics(record) {
    return h.getValue(record, 'naics');
}

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record naics property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setNaics(record, value) {
    return h.setValue(record, 'naics', value);
}

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the naics property.
 */
export function naicss(record) {
    return h.getValues(record, 'naics');
}

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the naics property.
 */
export function getNaicss(record) {
    return h.getValues(record, 'naics');
}

/**
 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record naics property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setNaicss(record, value) {
    return h.setValues(record, 'naics', value);
}

        

/**
 * Returns the list of choices (enum) for property naics.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNaics(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: nationality
// ----------------------------------------------------------------------

/**
 * Nationality of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Country} - The 1st value of the nationality property.
 */
export function nationality(record) {
    return h.getValue(record, 'nationality');
}

/**
 * Nationality of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Country} - The 1st value of the nationality property.
 */
export function getNationality(record) {
    return h.getValue(record, 'nationality');
}

/**
 * Nationality of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Country} value - The value to set on record nationality property.
 * @returns {Person} - The record with updated value.
 */
export function setNationality(record, value) {
    return h.setValue(record, 'nationality', value);
}

/**
 * Nationality of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Country[]} - All values of the nationality property.
 */
export function nationalitys(record) {
    return h.getValues(record, 'nationality');
}

/**
 * Nationality of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Country[]} - All values of the nationality property.
 */
export function getNationalitys(record) {
    return h.getValues(record, 'nationality');
}

/**
 * Nationality of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Country[]} value - The value to set on record nationality property.
 * @returns {Person} - The record with updated value.
 */
export function setNationalitys(record, value) {
    return h.setValues(record, 'nationality', value);
}

        

/**
 * Returns the list of choices (enum) for property nationality.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNationality(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: netWorth
// ----------------------------------------------------------------------

/**
 * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {MonetaryAmount | PriceSpecification} - The 1st value of the netWorth property.
 */
export function netWorth(record) {
    return h.getValue(record, 'netWorth');
}

/**
 * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {MonetaryAmount | PriceSpecification} - The 1st value of the netWorth property.
 */
export function getNetWorth(record) {
    return h.getValue(record, 'netWorth');
}

/**
 * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
 * @param {Person} record - The record to retrieve the value from.
 * @param {MonetaryAmount | PriceSpecification} value - The value to set on record netWorth property.
 * @returns {Person} - The record with updated value.
 */
export function setNetWorth(record, value) {
    return h.setValue(record, 'netWorth', value);
}

/**
 * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {MonetaryAmount[] | PriceSpecification[]} - All values of the netWorth property.
 */
export function netWorths(record) {
    return h.getValues(record, 'netWorth');
}

/**
 * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {MonetaryAmount[] | PriceSpecification[]} - All values of the netWorth property.
 */
export function getNetWorths(record) {
    return h.getValues(record, 'netWorth');
}

/**
 * The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.
 * @param {Person} record - The record to retrieve the value from.
 * @param {MonetaryAmount[] | PriceSpecification[]} value - The value to set on record netWorth property.
 * @returns {Person} - The record with updated value.
 */
export function setNetWorths(record, value) {
    return h.setValues(record, 'netWorth', value);
}

        

/**
 * Returns the list of choices (enum) for property netWorth.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNetWorth(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: owns
// ----------------------------------------------------------------------

/**
 * Things owned by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the owns property.
 */
export function owns(record) {
    return h.getValue(record, 'owns');
}

/**
 * Things owned by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Thing} - The 1st value of the owns property.
 */
export function getOwns(record) {
    return h.getValue(record, 'owns');
}

/**
 * Things owned by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Thing} value - The value to set on record owns property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setOwns(record, value) {
    return h.setValue(record, 'owns', value);
}

/**
 * Things owned by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the owns property.
 */
export function ownss(record) {
    return h.getValues(record, 'owns');
}

/**
 * Things owned by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Thing[]} - All values of the owns property.
 */
export function getOwnss(record) {
    return h.getValues(record, 'owns');
}

/**
 * Things owned by the organization or person.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Thing[]} value - The value to set on record owns property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setOwnss(record, value) {
    return h.setValues(record, 'owns', value);
}

        

/**
 * Returns the list of choices (enum) for property owns.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumOwns(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: parent
// ----------------------------------------------------------------------

/**
 * A parent of this person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the parent property.
 */
export function parent(record) {
    return h.getValue(record, 'parent');
}

/**
 * A parent of this person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the parent property.
 */
export function getParent(record) {
    return h.getValue(record, 'parent');
}

/**
 * A parent of this person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record parent property.
 * @returns {Person} - The record with updated value.
 */
export function setParent(record, value) {
    return h.setValue(record, 'parent', value);
}

/**
 * A parent of this person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the parent property.
 */
export function parents(record) {
    return h.getValues(record, 'parent');
}

/**
 * A parent of this person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the parent property.
 */
export function getParents(record) {
    return h.getValues(record, 'parent');
}

/**
 * A parent of this person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record parent property.
 * @returns {Person} - The record with updated value.
 */
export function setParents(record, value) {
    return h.setValues(record, 'parent', value);
}

        

/**
 * Returns the list of choices (enum) for property parent.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumParent(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: parents
// ----------------------------------------------------------------------

/**
 * A parents of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the parents property.
 */
export function parents(record) {
    return h.getValue(record, 'parents');
}

/**
 * A parents of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the parents property.
 */
export function getParents(record) {
    return h.getValue(record, 'parents');
}

/**
 * A parents of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record parents property.
 * @returns {Person} - The record with updated value.
 */
export function setParents(record, value) {
    return h.setValue(record, 'parents', value);
}

/**
 * A parents of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the parents property.
 */
export function parentss(record) {
    return h.getValues(record, 'parents');
}

/**
 * A parents of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the parents property.
 */
export function getParentss(record) {
    return h.getValues(record, 'parents');
}

/**
 * A parents of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record parents property.
 * @returns {Person} - The record with updated value.
 */
export function setParentss(record, value) {
    return h.setValues(record, 'parents', value);
}

        

/**
 * Returns the list of choices (enum) for property parents.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumParents(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: performerIn
// ----------------------------------------------------------------------

/**
 * Event that this person is a performer or participant in.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the performerIn property.
 */
export function performerIn(record) {
    return h.getValue(record, 'performerIn');
}

/**
 * Event that this person is a performer or participant in.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the performerIn property.
 */
export function getPerformerIn(record) {
    return h.getValue(record, 'performerIn');
}

/**
 * Event that this person is a performer or participant in.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Event} value - The value to set on record performerIn property.
 * @returns {Person} - The record with updated value.
 */
export function setPerformerIn(record, value) {
    return h.setValue(record, 'performerIn', value);
}

/**
 * Event that this person is a performer or participant in.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the performerIn property.
 */
export function performerIns(record) {
    return h.getValues(record, 'performerIn');
}

/**
 * Event that this person is a performer or participant in.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the performerIn property.
 */
export function getPerformerIns(record) {
    return h.getValues(record, 'performerIn');
}

/**
 * Event that this person is a performer or participant in.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Event[]} value - The value to set on record performerIn property.
 * @returns {Person} - The record with updated value.
 */
export function setPerformerIns(record, value) {
    return h.setValues(record, 'performerIn', value);
}

        

/**
 * Returns the list of choices (enum) for property performerIn.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumPerformerIn(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: pronouns
// ----------------------------------------------------------------------

/**
 * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.

In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.

 * @param {Person} record - The record to retrieve the value from.
 * @returns {DefinedTerm | StructuredValue | Text} - The 1st value of the pronouns property.
 */
export function pronouns(record) {
    return h.getValue(record, 'pronouns');
}

/**
 * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.

In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.

 * @param {Person} record - The record to retrieve the value from.
 * @returns {DefinedTerm | StructuredValue | Text} - The 1st value of the pronouns property.
 */
export function getPronouns(record) {
    return h.getValue(record, 'pronouns');
}

/**
 * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.

In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.

 * @param {Person} record - The record to retrieve the value from.
 * @param {DefinedTerm | StructuredValue | Text} value - The value to set on record pronouns property.
 * @returns {Person} - The record with updated value.
 */
export function setPronouns(record, value) {
    return h.setValue(record, 'pronouns', value);
}

/**
 * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.

In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.

 * @param {Person} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | StructuredValue[] | Text[]} - All values of the pronouns property.
 */
export function pronounss(record) {
    return h.getValues(record, 'pronouns');
}

/**
 * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.

In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.

 * @param {Person} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | StructuredValue[] | Text[]} - All values of the pronouns property.
 */
export function getPronounss(record) {
    return h.getValues(record, 'pronouns');
}

/**
 * A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.

In English, formulations such as "they/them", "she/her", and "he/him" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.

 * @param {Person} record - The record to retrieve the value from.
 * @param {DefinedTerm[] | StructuredValue[] | Text[]} value - The value to set on record pronouns property.
 * @returns {Person} - The record with updated value.
 */
export function setPronounss(record, value) {
    return h.setValues(record, 'pronouns', value);
}

        

/**
 * Returns the list of choices (enum) for property pronouns.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumPronouns(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: publishingPrinciples
// ----------------------------------------------------------------------

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the publishingPrinciples property.
 */
export function publishingPrinciples(record) {
    return h.getValue(record, 'publishingPrinciples');
}

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the publishingPrinciples property.
 */
export function getPublishingPrinciples(record) {
    return h.getValue(record, 'publishingPrinciples');
}

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record publishingPrinciples property.
 * @returns {CreativeWork | Organization | Person} - The record with updated value.
 */
export function setPublishingPrinciples(record, value) {
    return h.setValue(record, 'publishingPrinciples', value);
}

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

 * @param {CreativeWork | Organization | Person} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the publishingPrinciples property.
 */
export function publishingPrincipless(record) {
    return h.getValues(record, 'publishingPrinciples');
}

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

 * @param {CreativeWork | Organization | Person} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the publishingPrinciples property.
 */
export function getPublishingPrincipless(record) {
    return h.getValues(record, 'publishingPrinciples');
}

/**
 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

 * @param {CreativeWork | Organization | Person} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record publishingPrinciples property.
 * @returns {CreativeWork | Organization | Person} - The record with updated value.
 */
export function setPublishingPrincipless(record, value) {
    return h.setValues(record, 'publishingPrinciples', value);
}

        

/**
 * Returns the list of choices (enum) for property publishingPrinciples.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumPublishingPrinciples(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: relatedTo
// ----------------------------------------------------------------------

/**
 * The most generic familial relation.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the relatedTo property.
 */
export function relatedTo(record) {
    return h.getValue(record, 'relatedTo');
}

/**
 * The most generic familial relation.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the relatedTo property.
 */
export function getRelatedTo(record) {
    return h.getValue(record, 'relatedTo');
}

/**
 * The most generic familial relation.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record relatedTo property.
 * @returns {Person} - The record with updated value.
 */
export function setRelatedTo(record, value) {
    return h.setValue(record, 'relatedTo', value);
}

/**
 * The most generic familial relation.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the relatedTo property.
 */
export function relatedTos(record) {
    return h.getValues(record, 'relatedTo');
}

/**
 * The most generic familial relation.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the relatedTo property.
 */
export function getRelatedTos(record) {
    return h.getValues(record, 'relatedTo');
}

/**
 * The most generic familial relation.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record relatedTo property.
 * @returns {Person} - The record with updated value.
 */
export function setRelatedTos(record, value) {
    return h.setValues(record, 'relatedTo', value);
}

        

/**
 * Returns the list of choices (enum) for property relatedTo.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumRelatedTo(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: seeks
// ----------------------------------------------------------------------

/**
 * A pointer to products or services sought by the organization or person (demand).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Demand} - The 1st value of the seeks property.
 */
export function seeks(record) {
    return h.getValue(record, 'seeks');
}

/**
 * A pointer to products or services sought by the organization or person (demand).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Demand} - The 1st value of the seeks property.
 */
export function getSeeks(record) {
    return h.getValue(record, 'seeks');
}

/**
 * A pointer to products or services sought by the organization or person (demand).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Demand} value - The value to set on record seeks property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setSeeks(record, value) {
    return h.setValue(record, 'seeks', value);
}

/**
 * A pointer to products or services sought by the organization or person (demand).
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Demand[]} - All values of the seeks property.
 */
export function seekss(record) {
    return h.getValues(record, 'seeks');
}

/**
 * A pointer to products or services sought by the organization or person (demand).
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Demand[]} - All values of the seeks property.
 */
export function getSeekss(record) {
    return h.getValues(record, 'seeks');
}

/**
 * A pointer to products or services sought by the organization or person (demand).
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Demand[]} value - The value to set on record seeks property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setSeekss(record, value) {
    return h.setValues(record, 'seeks', value);
}

        

/**
 * Returns the list of choices (enum) for property seeks.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSeeks(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: sibling
// ----------------------------------------------------------------------

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the sibling property.
 */
export function sibling(record) {
    return h.getValue(record, 'sibling');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the sibling property.
 */
export function getSibling(record) {
    return h.getValue(record, 'sibling');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record sibling property.
 * @returns {Person} - The record with updated value.
 */
export function setSibling(record, value) {
    return h.setValue(record, 'sibling', value);
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the sibling property.
 */
export function siblings(record) {
    return h.getValues(record, 'sibling');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the sibling property.
 */
export function getSiblings(record) {
    return h.getValues(record, 'sibling');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record sibling property.
 * @returns {Person} - The record with updated value.
 */
export function setSiblings(record, value) {
    return h.setValues(record, 'sibling', value);
}

        

/**
 * Returns the list of choices (enum) for property sibling.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSibling(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: siblings
// ----------------------------------------------------------------------

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the siblings property.
 */
export function siblings(record) {
    return h.getValue(record, 'siblings');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the siblings property.
 */
export function getSiblings(record) {
    return h.getValue(record, 'siblings');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record siblings property.
 * @returns {Person} - The record with updated value.
 */
export function setSiblings(record, value) {
    return h.setValue(record, 'siblings', value);
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the siblings property.
 */
export function siblingss(record) {
    return h.getValues(record, 'siblings');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the siblings property.
 */
export function getSiblingss(record) {
    return h.getValues(record, 'siblings');
}

/**
 * A sibling of the person.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record siblings property.
 * @returns {Person} - The record with updated value.
 */
export function setSiblingss(record, value) {
    return h.setValues(record, 'siblings', value);
}

        

/**
 * Returns the list of choices (enum) for property siblings.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSiblings(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: skills
// ----------------------------------------------------------------------

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 * @param {JobPosting | Occupation | Organization | Person} record - The record to retrieve the value from.
 * @returns {DefinedTerm | Text} - The 1st value of the skills property.
 */
export function skills(record) {
    return h.getValue(record, 'skills');
}

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 * @param {JobPosting | Occupation | Organization | Person} record - The record to retrieve the value from.
 * @returns {DefinedTerm | Text} - The 1st value of the skills property.
 */
export function getSkills(record) {
    return h.getValue(record, 'skills');
}

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 * @param {JobPosting | Occupation | Organization | Person} record - The record to retrieve the value from.
 * @param {DefinedTerm | Text} value - The value to set on record skills property.
 * @returns {JobPosting | Occupation | Organization | Person} - The record with updated value.
 */
export function setSkills(record, value) {
    return h.setValue(record, 'skills', value);
}

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 * @param {JobPosting | Occupation | Organization | Person} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | Text[]} - All values of the skills property.
 */
export function skillss(record) {
    return h.getValues(record, 'skills');
}

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 * @param {JobPosting | Occupation | Organization | Person} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | Text[]} - All values of the skills property.
 */
export function getSkillss(record) {
    return h.getValues(record, 'skills');
}

/**
 * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
 * @param {JobPosting | Occupation | Organization | Person} record - The record to retrieve the value from.
 * @param {DefinedTerm[] | Text[]} value - The value to set on record skills property.
 * @returns {JobPosting | Occupation | Organization | Person} - The record with updated value.
 */
export function setSkillss(record, value) {
    return h.setValues(record, 'skills', value);
}

        

/**
 * Returns the list of choices (enum) for property skills.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSkills(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: sponsor
// ----------------------------------------------------------------------

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 * @param {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the sponsor property.
 */
export function sponsor(record) {
    return h.getValue(record, 'sponsor');
}

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 * @param {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the sponsor property.
 */
export function getSponsor(record) {
    return h.getValue(record, 'sponsor');
}

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 * @param {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record sponsor property.
 * @returns {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} - The record with updated value.
 */
export function setSponsor(record, value) {
    return h.setValue(record, 'sponsor', value);
}

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 * @param {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the sponsor property.
 */
export function sponsors(record) {
    return h.getValues(record, 'sponsor');
}

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 * @param {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the sponsor property.
 */
export function getSponsors(record) {
    return h.getValues(record, 'sponsor');
}

/**
 * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 * @param {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record sponsor property.
 * @returns {CreativeWork | Event | Grant | MedicalStudy | Organization | Person} - The record with updated value.
 */
export function setSponsors(record, value) {
    return h.setValues(record, 'sponsor', value);
}

        

/**
 * Returns the list of choices (enum) for property sponsor.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSponsor(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: spouse
// ----------------------------------------------------------------------

/**
 * The person's spouse.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the spouse property.
 */
export function spouse(record) {
    return h.getValue(record, 'spouse');
}

/**
 * The person's spouse.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the spouse property.
 */
export function getSpouse(record) {
    return h.getValue(record, 'spouse');
}

/**
 * The person's spouse.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record spouse property.
 * @returns {Person} - The record with updated value.
 */
export function setSpouse(record, value) {
    return h.setValue(record, 'spouse', value);
}

/**
 * The person's spouse.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the spouse property.
 */
export function spouses(record) {
    return h.getValues(record, 'spouse');
}

/**
 * The person's spouse.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the spouse property.
 */
export function getSpouses(record) {
    return h.getValues(record, 'spouse');
}

/**
 * The person's spouse.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record spouse property.
 * @returns {Person} - The record with updated value.
 */
export function setSpouses(record, value) {
    return h.setValues(record, 'spouse', value);
}

        

/**
 * Returns the list of choices (enum) for property spouse.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSpouse(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: taxID
// ----------------------------------------------------------------------

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the taxID property.
 */
export function taxID(record) {
    return h.getValue(record, 'taxID');
}

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the taxID property.
 */
export function getTaxID(record) {
    return h.getValue(record, 'taxID');
}

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record taxID property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setTaxID(record, value) {
    return h.setValue(record, 'taxID', value);
}

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the taxID property.
 */
export function taxIDs(record) {
    return h.getValues(record, 'taxID');
}

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the taxID property.
 */
export function getTaxIDs(record) {
    return h.getValues(record, 'taxID');
}

/**
 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record taxID property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setTaxIDs(record, value) {
    return h.setValues(record, 'taxID', value);
}

        

/**
 * Returns the list of choices (enum) for property taxID.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumTaxID(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: telephone
// ----------------------------------------------------------------------

/**
 * The telephone number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the telephone property.
 */
export function telephone(record) {
    return h.getValue(record, 'telephone');
}

/**
 * The telephone number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the telephone property.
 */
export function getTelephone(record) {
    return h.getValue(record, 'telephone');
}

/**
 * The telephone number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record telephone property.
 * @returns {ContactPoint | Organization | Person | Place} - The record with updated value.
 */
export function setTelephone(record, value) {
    return h.setValue(record, 'telephone', value);
}

/**
 * The telephone number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the telephone property.
 */
export function telephones(record) {
    return h.getValues(record, 'telephone');
}

/**
 * The telephone number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the telephone property.
 */
export function getTelephones(record) {
    return h.getValues(record, 'telephone');
}

/**
 * The telephone number.
 * @param {ContactPoint | Organization | Person | Place} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record telephone property.
 * @returns {ContactPoint | Organization | Person | Place} - The record with updated value.
 */
export function setTelephones(record, value) {
    return h.setValues(record, 'telephone', value);
}

        

/**
 * Returns the list of choices (enum) for property telephone.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumTelephone(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: vatID
// ----------------------------------------------------------------------

/**
 * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the vatID property.
 */
export function vatID(record) {
    return h.getValue(record, 'vatID');
}

/**
 * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the vatID property.
 */
export function getVatID(record) {
    return h.getValue(record, 'vatID');
}

/**
 * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record vatID property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setVatID(record, value) {
    return h.setValue(record, 'vatID', value);
}

/**
 * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the vatID property.
 */
export function vatIDs(record) {
    return h.getValues(record, 'vatID');
}

/**
 * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
 * @param {Organization | Person} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the vatID property.
 */
export function getVatIDs(record) {
    return h.getValues(record, 'vatID');
}

/**
 * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
 * @param {Organization | Person} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record vatID property.
 * @returns {Organization | Person} - The record with updated value.
 */
export function setVatIDs(record, value) {
    return h.setValues(record, 'vatID', value);
}

        

/**
 * Returns the list of choices (enum) for property vatID.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumVatID(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: weight
// ----------------------------------------------------------------------

/**
 * The weight of the product or person.
 * @param {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @returns {Mass | QuantitativeValue} - The 1st value of the weight property.
 */
export function weight(record) {
    return h.getValue(record, 'weight');
}

/**
 * The weight of the product or person.
 * @param {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @returns {Mass | QuantitativeValue} - The 1st value of the weight property.
 */
export function getWeight(record) {
    return h.getValue(record, 'weight');
}

/**
 * The weight of the product or person.
 * @param {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @param {Mass | QuantitativeValue} value - The value to set on record weight property.
 * @returns {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} - The record with updated value.
 */
export function setWeight(record, value) {
    return h.setValue(record, 'weight', value);
}

/**
 * The weight of the product or person.
 * @param {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the values from.
 * @returns {Mass[] | QuantitativeValue[]} - All values of the weight property.
 */
export function weights(record) {
    return h.getValues(record, 'weight');
}

/**
 * The weight of the product or person.
 * @param {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the values from.
 * @returns {Mass[] | QuantitativeValue[]} - All values of the weight property.
 */
export function getWeights(record) {
    return h.getValues(record, 'weight');
}

/**
 * The weight of the product or person.
 * @param {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} record - The record to retrieve the value from.
 * @param {Mass[] | QuantitativeValue[]} value - The value to set on record weight property.
 * @returns {OfferShippingDetails | Person | Product | ShippingConditions | VisualArtwork} - The record with updated value.
 */
export function setWeights(record, value) {
    return h.setValues(record, 'weight', value);
}

        

/**
 * Returns the list of choices (enum) for property weight.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumWeight(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: workLocation
// ----------------------------------------------------------------------

/**
 * A contact location for a person's place of work.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {ContactPoint | Place} - The 1st value of the workLocation property.
 */
export function workLocation(record) {
    return h.getValue(record, 'workLocation');
}

/**
 * A contact location for a person's place of work.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {ContactPoint | Place} - The 1st value of the workLocation property.
 */
export function getWorkLocation(record) {
    return h.getValue(record, 'workLocation');
}

/**
 * A contact location for a person's place of work.
 * @param {Person} record - The record to retrieve the value from.
 * @param {ContactPoint | Place} value - The value to set on record workLocation property.
 * @returns {Person} - The record with updated value.
 */
export function setWorkLocation(record, value) {
    return h.setValue(record, 'workLocation', value);
}

/**
 * A contact location for a person's place of work.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Place[]} - All values of the workLocation property.
 */
export function workLocations(record) {
    return h.getValues(record, 'workLocation');
}

/**
 * A contact location for a person's place of work.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Place[]} - All values of the workLocation property.
 */
export function getWorkLocations(record) {
    return h.getValues(record, 'workLocation');
}

/**
 * A contact location for a person's place of work.
 * @param {Person} record - The record to retrieve the value from.
 * @param {ContactPoint[] | Place[]} value - The value to set on record workLocation property.
 * @returns {Person} - The record with updated value.
 */
export function setWorkLocations(record, value) {
    return h.setValues(record, 'workLocation', value);
}

        

/**
 * Returns the list of choices (enum) for property workLocation.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumWorkLocation(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: worksFor
// ----------------------------------------------------------------------

/**
 * Organizations that the person works for.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the worksFor property.
 */
export function worksFor(record) {
    return h.getValue(record, 'worksFor');
}

/**
 * Organizations that the person works for.
 * @param {Person} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the worksFor property.
 */
export function getWorksFor(record) {
    return h.getValue(record, 'worksFor');
}

/**
 * Organizations that the person works for.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Organization} value - The value to set on record worksFor property.
 * @returns {Person} - The record with updated value.
 */
export function setWorksFor(record, value) {
    return h.setValue(record, 'worksFor', value);
}

/**
 * Organizations that the person works for.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the worksFor property.
 */
export function worksFors(record) {
    return h.getValues(record, 'worksFor');
}

/**
 * Organizations that the person works for.
 * @param {Person} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the worksFor property.
 */
export function getWorksFors(record) {
    return h.getValues(record, 'worksFor');
}

/**
 * Organizations that the person works for.
 * @param {Person} record - The record to retrieve the value from.
 * @param {Organization[]} value - The value to set on record worksFor property.
 * @returns {Person} - The record with updated value.
 */
export function setWorksFors(record, value) {
    return h.setValues(record, 'worksFor', value);
}

        

/**
 * Returns the list of choices (enum) for property worksFor.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumWorksFor(){
    
    return []
}
    
