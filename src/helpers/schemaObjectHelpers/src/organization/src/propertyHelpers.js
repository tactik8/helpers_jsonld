
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for Organization and its parents.
 * @returns {String[]} - The properties for Organization.
 */
export function getProperties() {
    return ["acceptedPaymentMethod","actionableFeedbackPolicy","address","agentInteractionStatistic","aggregateRating","alumni","areaServed","authorizedRepresentative","award","awards","brand","companyRegistration","contactPoint","contactPoints","correctionsPolicy","department","dissolutionDate","diversityPolicy","diversityStaffingReport","duns","email","employee","employees","ethicsPolicy","event","events","faxNumber","founder","founders","foundingDate","foundingLocation","funder","funding","globalLocationNumber","hasCertification","hasCredential","hasGS1DigitalLink","hasMemberProgram","hasMerchantReturnPolicy","hasOfferCatalog","hasPOS","hasProductReturnPolicy","hasShippingService","interactionStatistic","isicV4","iso6523Code","keywords","knowsAbout","knowsLanguage","legalAddress","legalName","legalRepresentative","leiCode","location","logo","makesOffer","member","memberOf","members","naics","nonprofitStatus","numberOfEmployees","ownershipFundingInfo","owns","parentOrganization","publishingPrinciples","review","reviews","seeks","serviceArea","skills","slogan","sponsor","subOrganization","taxID","telephone","unnamedSourcesPolicy","vatID","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Organization and its parents.
 * @returns {String[]} - The properties for Organization.
 */
export function getPropertiesAll() {
    return ["acceptedPaymentMethod","actionableFeedbackPolicy","address","agentInteractionStatistic","aggregateRating","alumni","areaServed","authorizedRepresentative","award","awards","brand","companyRegistration","contactPoint","contactPoints","correctionsPolicy","department","dissolutionDate","diversityPolicy","diversityStaffingReport","duns","email","employee","employees","ethicsPolicy","event","events","faxNumber","founder","founders","foundingDate","foundingLocation","funder","funding","globalLocationNumber","hasCertification","hasCredential","hasGS1DigitalLink","hasMemberProgram","hasMerchantReturnPolicy","hasOfferCatalog","hasPOS","hasProductReturnPolicy","hasShippingService","interactionStatistic","isicV4","iso6523Code","keywords","knowsAbout","knowsLanguage","legalAddress","legalName","legalRepresentative","leiCode","location","logo","makesOffer","member","memberOf","members","naics","nonprofitStatus","numberOfEmployees","ownershipFundingInfo","owns","parentOrganization","publishingPrinciples","review","reviews","seeks","serviceArea","skills","slogan","sponsor","subOrganization","taxID","telephone","unnamedSourcesPolicy","vatID","additionalType","alternateName","description","disambiguatingDescription","identifier","image","mainEntityOfPage","name","owner","potentialAction","sameAs","subjectOf","url"]
}

/**
 * Returns list of properties for Organization without parent properties.
 * @returns {String[]} - The properties for Organization.
 */
export function getPropertiesMain() {
    return ["acceptedPaymentMethod","actionableFeedbackPolicy","address","agentInteractionStatistic","aggregateRating","alumni","areaServed","authorizedRepresentative","award","awards","brand","companyRegistration","contactPoint","contactPoints","correctionsPolicy","department","dissolutionDate","diversityPolicy","diversityStaffingReport","duns","email","employee","employees","ethicsPolicy","event","events","faxNumber","founder","founders","foundingDate","foundingLocation","funder","funding","globalLocationNumber","hasCertification","hasCredential","hasGS1DigitalLink","hasMemberProgram","hasMerchantReturnPolicy","hasOfferCatalog","hasPOS","hasProductReturnPolicy","hasShippingService","interactionStatistic","isicV4","iso6523Code","keywords","knowsAbout","knowsLanguage","legalAddress","legalName","legalRepresentative","leiCode","location","logo","makesOffer","member","memberOf","members","naics","nonprofitStatus","numberOfEmployees","ownershipFundingInfo","owns","parentOrganization","publishingPrinciples","review","reviews","seeks","serviceArea","skills","slogan","sponsor","subOrganization","taxID","telephone","unnamedSourcesPolicy","vatID"]
}

/**
 * Returns list of common properties for Organization.
 * @returns {String[]} - The common properties for Organization.
 */
export function getPropertiesShort() {
    return ["acceptedPaymentMethod","actionableFeedbackPolicy","address","agentInteractionStatistic","aggregateRating","alumni","areaServed","authorizedRepresentative","award","awards","brand","companyRegistration","contactPoint","contactPoints","correctionsPolicy","department","dissolutionDate","diversityPolicy","diversityStaffingReport","duns","email","employee","employees","ethicsPolicy","event","events","faxNumber","founder","founders","foundingDate","foundingLocation","funder","funding","globalLocationNumber","hasCertification","hasCredential","hasGS1DigitalLink","hasMemberProgram","hasMerchantReturnPolicy","hasOfferCatalog","hasPOS","hasProductReturnPolicy","hasShippingService","interactionStatistic","isicV4","iso6523Code","keywords","knowsAbout","knowsLanguage","legalAddress","legalName","legalRepresentative","leiCode","location","logo","makesOffer","member","memberOf","members","naics","nonprofitStatus","numberOfEmployees","ownershipFundingInfo","owns","parentOrganization","publishingPrinciples","review","reviews","seeks","serviceArea","skills","slogan","sponsor","subOrganization","taxID","telephone","unnamedSourcesPolicy","vatID"]        
}

    
    
/**
 * Returns property definitions for Organization.
 * @returns {Object} - Property definitions for Organization.
 */
export const properties = {
    "acceptedPaymentMethod": {
        "@type": "Property",
        "$id": "https://schema.org/acceptedPaymentMethod",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "acceptedPaymentMethod",
        "description": "The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.",
        "type": [
            "LoanOrCredit",
            "PaymentMethod",
            "Text"
        ],
        "classes": [
            "Demand",
            "Offer",
            "Organization"
        ]
    },
    "actionableFeedbackPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/actionableFeedbackPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "actionableFeedbackPolicy",
        "description": "For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
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
    "aggregateRating": {
        "@type": "Property",
        "$id": "https://schema.org/aggregateRating",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "aggregateRating",
        "description": "The overall rating, based on a collection of reviews or ratings, of the item.",
        "type": [
            "AggregateRating"
        ],
        "classes": [
            "Brand",
            "CreativeWork",
            "Event",
            "Offer",
            "Organization",
            "Place",
            "Product",
            "Service"
        ]
    },
    "alumni": {
        "@type": "Property",
        "$id": "https://schema.org/alumni",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "alumni",
        "description": "Alumni of an organization.",
        "type": [
            "Person"
        ],
        "classes": [
            "EducationalOrganization",
            "Organization"
        ]
    },
    "areaServed": {
        "@type": "Property",
        "$id": "https://schema.org/areaServed",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "areaServed",
        "description": "The geographic area where a service or offered item is provided.",
        "type": [
            "AdministrativeArea",
            "GeoShape",
            "Place",
            "Text"
        ],
        "classes": [
            "ContactPoint",
            "DeliveryChargeSpecification",
            "Demand",
            "FinancialIncentive",
            "Offer",
            "Organization",
            "Service"
        ]
    },
    "authorizedRepresentative": {
        "@type": "Property",
        "$id": "https://schema.org/authorizedRepresentative",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "authorizedRepresentative",
        "description": "An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Organization",
            "Product"
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
    "companyRegistration": {
        "@type": "Property",
        "$id": "https://schema.org/companyRegistration",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "companyRegistration",
        "description": "The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.",
        "type": [
            "Certification"
        ],
        "classes": [
            "Organization"
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
    "correctionsPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/correctionsPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "correctionsPolicy",
        "description": "For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
        ]
    },
    "department": {
        "@type": "Property",
        "$id": "https://schema.org/department",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "department",
        "description": "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.",
        "type": [
            "Organization"
        ],
        "classes": [
            "Organization"
        ]
    },
    "dissolutionDate": {
        "@type": "Property",
        "$id": "https://schema.org/dissolutionDate",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "dissolutionDate",
        "description": "The date that this organization was dissolved.",
        "type": [
            "Date"
        ],
        "classes": [
            "Organization"
        ]
    },
    "diversityPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/diversityPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "diversityPolicy",
        "description": "Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
        ]
    },
    "diversityStaffingReport": {
        "@type": "Property",
        "$id": "https://schema.org/diversityStaffingReport",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "diversityStaffingReport",
        "description": "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.",
        "type": [
            "Article",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
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
    "employee": {
        "@type": "Property",
        "$id": "https://schema.org/employee",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "employee",
        "description": "Someone working for this organization.",
        "type": [
            "Person"
        ],
        "classes": [
            "Organization"
        ]
    },
    "employees": {
        "@type": "Property",
        "$id": "https://schema.org/employees",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "employees",
        "description": "People working for this organization.",
        "type": [
            "Person"
        ],
        "classes": [
            "Organization"
        ]
    },
    "ethicsPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/ethicsPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "ethicsPolicy",
        "description": "Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
        ]
    },
    "event": {
        "@type": "Property",
        "$id": "https://schema.org/event",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "event",
        "description": "Upcoming or past event associated with this place, organization, or action.",
        "type": [
            "Event"
        ],
        "classes": [
            "InformAction",
            "InviteAction",
            "JoinAction",
            "LeaveAction",
            "Organization",
            "Place",
            "PlayAction"
        ]
    },
    "events": {
        "@type": "Property",
        "$id": "https://schema.org/events",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "events",
        "description": "Upcoming or past events associated with this place or organization.",
        "type": [
            "Event"
        ],
        "classes": [
            "Organization",
            "Place"
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
    "founder": {
        "@type": "Property",
        "$id": "https://schema.org/founder",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "founder",
        "description": "A person or organization who founded this organization.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Organization"
        ]
    },
    "founders": {
        "@type": "Property",
        "$id": "https://schema.org/founders",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "founders",
        "description": "A person who founded this organization.",
        "type": [
            "Person"
        ],
        "classes": [
            "Organization"
        ]
    },
    "foundingDate": {
        "@type": "Property",
        "$id": "https://schema.org/foundingDate",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "foundingDate",
        "description": "The date that this organization was founded.",
        "type": [
            "Date"
        ],
        "classes": [
            "Organization"
        ]
    },
    "foundingLocation": {
        "@type": "Property",
        "$id": "https://schema.org/foundingLocation",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "foundingLocation",
        "description": "The place where the Organization was founded.",
        "type": [
            "Place"
        ],
        "classes": [
            "Organization"
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
    "hasGS1DigitalLink": {
        "@type": "Property",
        "$id": "https://schema.org/hasGS1DigitalLink",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasGS1DigitalLink",
        "description": "The <a href=\"https://www.gs1.org/standards/gs1-digital-link\">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.",
        "type": [
            "URL"
        ],
        "classes": [
            "Offer",
            "Organization",
            "Place",
            "Product"
        ]
    },
    "hasMemberProgram": {
        "@type": "Property",
        "$id": "https://schema.org/hasMemberProgram",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasMemberProgram",
        "description": "MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.",
        "type": [
            "MemberProgram"
        ],
        "classes": [
            "Organization"
        ]
    },
    "hasMerchantReturnPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/hasMerchantReturnPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasMerchantReturnPolicy",
        "description": "Specifies a MerchantReturnPolicy that may be applicable.",
        "type": [
            "MerchantReturnPolicy"
        ],
        "classes": [
            "Offer",
            "Organization",
            "Product"
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
    "hasProductReturnPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/hasProductReturnPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasProductReturnPolicy",
        "description": "Indicates a ProductReturnPolicy that may be applicable.",
        "type": [
            "ProductReturnPolicy"
        ],
        "classes": [
            "Organization",
            "Product"
        ]
    },
    "hasShippingService": {
        "@type": "Property",
        "$id": "https://schema.org/hasShippingService",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "hasShippingService",
        "description": "Specification of a shipping service offered by the organization.",
        "type": [
            "ShippingService"
        ],
        "classes": [
            "OfferShippingDetails",
            "Organization"
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
    "iso6523Code": {
        "@type": "Property",
        "$id": "https://schema.org/iso6523Code",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "iso6523Code",
        "description": "An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization"
        ]
    },
    "keywords": {
        "@type": "Property",
        "$id": "https://schema.org/keywords",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "keywords",
        "description": "Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.",
        "type": [
            "DefinedTerm",
            "Text",
            "URL"
        ],
        "classes": [
            "CreativeWork",
            "Event",
            "Organization",
            "Place",
            "Product"
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
    "legalAddress": {
        "@type": "Property",
        "$id": "https://schema.org/legalAddress",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "legalAddress",
        "description": "The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.",
        "type": [
            "PostalAddress"
        ],
        "classes": [
            "Organization"
        ]
    },
    "legalName": {
        "@type": "Property",
        "$id": "https://schema.org/legalName",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "legalName",
        "description": "The official name of the organization, e.g. the registered company name.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization"
        ]
    },
    "legalRepresentative": {
        "@type": "Property",
        "$id": "https://schema.org/legalRepresentative",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "legalRepresentative",
        "description": "One or multiple persons who represent this organization legally such as CEO or sole administrator.",
        "type": [
            "Person"
        ],
        "classes": [
            "Organization"
        ]
    },
    "leiCode": {
        "@type": "Property",
        "$id": "https://schema.org/leiCode",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "leiCode",
        "description": "An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.",
        "type": [
            "Text"
        ],
        "classes": [
            "Organization"
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
    "logo": {
        "@type": "Property",
        "$id": "https://schema.org/logo",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "logo",
        "description": "An associated logo.",
        "type": [
            "ImageObject",
            "URL"
        ],
        "classes": [
            "Brand",
            "Certification",
            "Organization",
            "Place",
            "Product",
            "Service"
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
    "member": {
        "@type": "Property",
        "$id": "https://schema.org/member",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "member",
        "description": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Organization",
            "ProgramMembership"
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
    "members": {
        "@type": "Property",
        "$id": "https://schema.org/members",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "members",
        "description": "A member of this organization.",
        "type": [
            "Organization",
            "Person"
        ],
        "classes": [
            "Organization",
            "ProgramMembership"
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
    "nonprofitStatus": {
        "@type": "Property",
        "$id": "https://schema.org/nonprofitStatus",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "nonprofitStatus",
        "description": "nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.",
        "type": [
            "NonprofitType"
        ],
        "classes": [
            "Organization"
        ]
    },
    "numberOfEmployees": {
        "@type": "Property",
        "$id": "https://schema.org/numberOfEmployees",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "numberOfEmployees",
        "description": "The number of employees in an organization, e.g. business.",
        "type": [
            "QuantitativeValue"
        ],
        "classes": [
            "BusinessAudience",
            "Organization"
        ]
    },
    "ownershipFundingInfo": {
        "@type": "Property",
        "$id": "https://schema.org/ownershipFundingInfo",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "ownershipFundingInfo",
        "description": "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.",
        "type": [
            "AboutPage",
            "CreativeWork",
            "Text",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
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
    "parentOrganization": {
        "@type": "Property",
        "$id": "https://schema.org/parentOrganization",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "parentOrganization",
        "description": "The larger organization that this organization is a [[subOrganization]] of, if any.",
        "type": [
            "Organization"
        ],
        "classes": [
            "Organization"
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
    "review": {
        "@type": "Property",
        "$id": "https://schema.org/review",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "review",
        "description": "A review of the item.",
        "type": [
            "Review"
        ],
        "classes": [
            "Brand",
            "CreativeWork",
            "Event",
            "Offer",
            "Organization",
            "Place",
            "Product",
            "Service"
        ]
    },
    "reviews": {
        "@type": "Property",
        "$id": "https://schema.org/reviews",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "reviews",
        "description": "Review of the item.",
        "type": [
            "Review"
        ],
        "classes": [
            "CreativeWork",
            "Offer",
            "Organization",
            "Place",
            "Product"
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
    "serviceArea": {
        "@type": "Property",
        "$id": "https://schema.org/serviceArea",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "serviceArea",
        "description": "The geographic area where the service is provided.",
        "type": [
            "AdministrativeArea",
            "GeoShape",
            "Place"
        ],
        "classes": [
            "ContactPoint",
            "Organization",
            "Service"
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
    "slogan": {
        "@type": "Property",
        "$id": "https://schema.org/slogan",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "slogan",
        "description": "A slogan or motto associated with the item.",
        "type": [
            "Text"
        ],
        "classes": [
            "Brand",
            "Organization",
            "Place",
            "Product",
            "Service"
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
    "subOrganization": {
        "@type": "Property",
        "$id": "https://schema.org/subOrganization",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "subOrganization",
        "description": "A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.",
        "type": [
            "Organization"
        ],
        "classes": [
            "Organization"
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
    "unnamedSourcesPolicy": {
        "@type": "Property",
        "$id": "https://schema.org/unnamedSourcesPolicy",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "unnamedSourcesPolicy",
        "description": "For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.",
        "type": [
            "CreativeWork",
            "URL"
        ],
        "classes": [
            "NewsMediaOrganization",
            "Organization"
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
// Property: acceptedPaymentMethod
// ----------------------------------------------------------------------

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 * @param {Demand | Offer | Organization} record - The record to retrieve the value from.
 * @returns {LoanOrCredit | PaymentMethod | Text} - The 1st value of the acceptedPaymentMethod property.
 */
export function acceptedPaymentMethod(record) {
    return h.getValue(record, 'acceptedPaymentMethod');
}

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 * @param {Demand | Offer | Organization} record - The record to retrieve the value from.
 * @returns {LoanOrCredit | PaymentMethod | Text} - The 1st value of the acceptedPaymentMethod property.
 */
export function getAcceptedPaymentMethod(record) {
    return h.getValue(record, 'acceptedPaymentMethod');
}

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 * @param {Demand | Offer | Organization} record - The record to retrieve the value from.
 * @param {LoanOrCredit | PaymentMethod | Text} value - The value to set on record acceptedPaymentMethod property.
 * @returns {Demand | Offer | Organization} - The record with updated value.
 */
export function setAcceptedPaymentMethod(record, value) {
    return h.setValue(record, 'acceptedPaymentMethod', value);
}

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 * @param {Demand | Offer | Organization} record - The record to retrieve the values from.
 * @returns {LoanOrCredit[] | PaymentMethod[] | Text[]} - All values of the acceptedPaymentMethod property.
 */
export function acceptedPaymentMethods(record) {
    return h.getValues(record, 'acceptedPaymentMethod');
}

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 * @param {Demand | Offer | Organization} record - The record to retrieve the values from.
 * @returns {LoanOrCredit[] | PaymentMethod[] | Text[]} - All values of the acceptedPaymentMethod property.
 */
export function getAcceptedPaymentMethods(record) {
    return h.getValues(record, 'acceptedPaymentMethod');
}

/**
 * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
 * @param {Demand | Offer | Organization} record - The record to retrieve the value from.
 * @param {LoanOrCredit[] | PaymentMethod[] | Text[]} value - The value to set on record acceptedPaymentMethod property.
 * @returns {Demand | Offer | Organization} - The record with updated value.
 */
export function setAcceptedPaymentMethods(record, value) {
    return h.setValues(record, 'acceptedPaymentMethod', value);
}

        

/**
 * Returns the list of choices (enum) for property acceptedPaymentMethod.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAcceptedPaymentMethod(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: actionableFeedbackPolicy
// ----------------------------------------------------------------------

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the actionableFeedbackPolicy property.
 */
export function actionableFeedbackPolicy(record) {
    return h.getValue(record, 'actionableFeedbackPolicy');
}

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the actionableFeedbackPolicy property.
 */
export function getActionableFeedbackPolicy(record) {
    return h.getValue(record, 'actionableFeedbackPolicy');
}

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record actionableFeedbackPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setActionableFeedbackPolicy(record, value) {
    return h.setValue(record, 'actionableFeedbackPolicy', value);
}

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the actionableFeedbackPolicy property.
 */
export function actionableFeedbackPolicys(record) {
    return h.getValues(record, 'actionableFeedbackPolicy');
}

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the actionableFeedbackPolicy property.
 */
export function getActionableFeedbackPolicys(record) {
    return h.getValues(record, 'actionableFeedbackPolicy');
}

/**
 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record actionableFeedbackPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setActionableFeedbackPolicys(record, value) {
    return h.setValues(record, 'actionableFeedbackPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property actionableFeedbackPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumActionableFeedbackPolicy(){
    
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
// Property: aggregateRating
// ----------------------------------------------------------------------

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {AggregateRating} - The 1st value of the aggregateRating property.
 */
export function aggregateRating(record) {
    return h.getValue(record, 'aggregateRating');
}

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {AggregateRating} - The 1st value of the aggregateRating property.
 */
export function getAggregateRating(record) {
    return h.getValue(record, 'aggregateRating');
}

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {AggregateRating} value - The value to set on record aggregateRating property.
 * @returns {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} - The record with updated value.
 */
export function setAggregateRating(record, value) {
    return h.setValue(record, 'aggregateRating', value);
}

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {AggregateRating[]} - All values of the aggregateRating property.
 */
export function aggregateRatings(record) {
    return h.getValues(record, 'aggregateRating');
}

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {AggregateRating[]} - All values of the aggregateRating property.
 */
export function getAggregateRatings(record) {
    return h.getValues(record, 'aggregateRating');
}

/**
 * The overall rating, based on a collection of reviews or ratings, of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {AggregateRating[]} value - The value to set on record aggregateRating property.
 * @returns {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} - The record with updated value.
 */
export function setAggregateRatings(record, value) {
    return h.setValues(record, 'aggregateRating', value);
}

        

/**
 * Returns the list of choices (enum) for property aggregateRating.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAggregateRating(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: alumni
// ----------------------------------------------------------------------

/**
 * Alumni of an organization.
 * @param {EducationalOrganization | Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the alumni property.
 */
export function alumni(record) {
    return h.getValue(record, 'alumni');
}

/**
 * Alumni of an organization.
 * @param {EducationalOrganization | Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the alumni property.
 */
export function getAlumni(record) {
    return h.getValue(record, 'alumni');
}

/**
 * Alumni of an organization.
 * @param {EducationalOrganization | Organization} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record alumni property.
 * @returns {EducationalOrganization | Organization} - The record with updated value.
 */
export function setAlumni(record, value) {
    return h.setValue(record, 'alumni', value);
}

/**
 * Alumni of an organization.
 * @param {EducationalOrganization | Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the alumni property.
 */
export function alumnis(record) {
    return h.getValues(record, 'alumni');
}

/**
 * Alumni of an organization.
 * @param {EducationalOrganization | Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the alumni property.
 */
export function getAlumnis(record) {
    return h.getValues(record, 'alumni');
}

/**
 * Alumni of an organization.
 * @param {EducationalOrganization | Organization} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record alumni property.
 * @returns {EducationalOrganization | Organization} - The record with updated value.
 */
export function setAlumnis(record, value) {
    return h.setValues(record, 'alumni', value);
}

        

/**
 * Returns the list of choices (enum) for property alumni.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAlumni(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: areaServed
// ----------------------------------------------------------------------

/**
 * The geographic area where a service or offered item is provided.
 * @param {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} record - The record to retrieve the value from.
 * @returns {AdministrativeArea | GeoShape | Place | Text} - The 1st value of the areaServed property.
 */
export function areaServed(record) {
    return h.getValue(record, 'areaServed');
}

/**
 * The geographic area where a service or offered item is provided.
 * @param {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} record - The record to retrieve the value from.
 * @returns {AdministrativeArea | GeoShape | Place | Text} - The 1st value of the areaServed property.
 */
export function getAreaServed(record) {
    return h.getValue(record, 'areaServed');
}

/**
 * The geographic area where a service or offered item is provided.
 * @param {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} record - The record to retrieve the value from.
 * @param {AdministrativeArea | GeoShape | Place | Text} value - The value to set on record areaServed property.
 * @returns {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} - The record with updated value.
 */
export function setAreaServed(record, value) {
    return h.setValue(record, 'areaServed', value);
}

/**
 * The geographic area where a service or offered item is provided.
 * @param {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} record - The record to retrieve the values from.
 * @returns {AdministrativeArea[] | GeoShape[] | Place[] | Text[]} - All values of the areaServed property.
 */
export function areaServeds(record) {
    return h.getValues(record, 'areaServed');
}

/**
 * The geographic area where a service or offered item is provided.
 * @param {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} record - The record to retrieve the values from.
 * @returns {AdministrativeArea[] | GeoShape[] | Place[] | Text[]} - All values of the areaServed property.
 */
export function getAreaServeds(record) {
    return h.getValues(record, 'areaServed');
}

/**
 * The geographic area where a service or offered item is provided.
 * @param {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} record - The record to retrieve the value from.
 * @param {AdministrativeArea[] | GeoShape[] | Place[] | Text[]} value - The value to set on record areaServed property.
 * @returns {ContactPoint | DeliveryChargeSpecification | Demand | FinancialIncentive | Offer | Organization | Service} - The record with updated value.
 */
export function setAreaServeds(record, value) {
    return h.setValues(record, 'areaServed', value);
}

        

/**
 * Returns the list of choices (enum) for property areaServed.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAreaServed(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: authorizedRepresentative
// ----------------------------------------------------------------------

/**
 * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the authorizedRepresentative property.
 */
export function authorizedRepresentative(record) {
    return h.getValue(record, 'authorizedRepresentative');
}

/**
 * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the authorizedRepresentative property.
 */
export function getAuthorizedRepresentative(record) {
    return h.getValue(record, 'authorizedRepresentative');
}

/**
 * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record authorizedRepresentative property.
 * @returns {Organization | Product} - The record with updated value.
 */
export function setAuthorizedRepresentative(record, value) {
    return h.setValue(record, 'authorizedRepresentative', value);
}

/**
 * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
 * @param {Organization | Product} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the authorizedRepresentative property.
 */
export function authorizedRepresentatives(record) {
    return h.getValues(record, 'authorizedRepresentative');
}

/**
 * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
 * @param {Organization | Product} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the authorizedRepresentative property.
 */
export function getAuthorizedRepresentatives(record) {
    return h.getValues(record, 'authorizedRepresentative');
}

/**
 * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record authorizedRepresentative property.
 * @returns {Organization | Product} - The record with updated value.
 */
export function setAuthorizedRepresentatives(record, value) {
    return h.setValues(record, 'authorizedRepresentative', value);
}

        

/**
 * Returns the list of choices (enum) for property authorizedRepresentative.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumAuthorizedRepresentative(){
    
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
// Property: companyRegistration
// ----------------------------------------------------------------------

/**
 * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Certification} - The 1st value of the companyRegistration property.
 */
export function companyRegistration(record) {
    return h.getValue(record, 'companyRegistration');
}

/**
 * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Certification} - The 1st value of the companyRegistration property.
 */
export function getCompanyRegistration(record) {
    return h.getValue(record, 'companyRegistration');
}

/**
 * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Certification} value - The value to set on record companyRegistration property.
 * @returns {Organization} - The record with updated value.
 */
export function setCompanyRegistration(record, value) {
    return h.setValue(record, 'companyRegistration', value);
}

/**
 * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Certification[]} - All values of the companyRegistration property.
 */
export function companyRegistrations(record) {
    return h.getValues(record, 'companyRegistration');
}

/**
 * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Certification[]} - All values of the companyRegistration property.
 */
export function getCompanyRegistrations(record) {
    return h.getValues(record, 'companyRegistration');
}

/**
 * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Certification[]} value - The value to set on record companyRegistration property.
 * @returns {Organization} - The record with updated value.
 */
export function setCompanyRegistrations(record, value) {
    return h.setValues(record, 'companyRegistration', value);
}

        

/**
 * Returns the list of choices (enum) for property companyRegistration.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumCompanyRegistration(){
    
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
// Property: correctionsPolicy
// ----------------------------------------------------------------------

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the correctionsPolicy property.
 */
export function correctionsPolicy(record) {
    return h.getValue(record, 'correctionsPolicy');
}

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the correctionsPolicy property.
 */
export function getCorrectionsPolicy(record) {
    return h.getValue(record, 'correctionsPolicy');
}

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record correctionsPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setCorrectionsPolicy(record, value) {
    return h.setValue(record, 'correctionsPolicy', value);
}

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the correctionsPolicy property.
 */
export function correctionsPolicys(record) {
    return h.getValues(record, 'correctionsPolicy');
}

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the correctionsPolicy property.
 */
export function getCorrectionsPolicys(record) {
    return h.getValues(record, 'correctionsPolicy');
}

/**
 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record correctionsPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setCorrectionsPolicys(record, value) {
    return h.setValues(record, 'correctionsPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property correctionsPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumCorrectionsPolicy(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: department
// ----------------------------------------------------------------------

/**
 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the department property.
 */
export function department(record) {
    return h.getValue(record, 'department');
}

/**
 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the department property.
 */
export function getDepartment(record) {
    return h.getValue(record, 'department');
}

/**
 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization} value - The value to set on record department property.
 * @returns {Organization} - The record with updated value.
 */
export function setDepartment(record, value) {
    return h.setValue(record, 'department', value);
}

/**
 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the department property.
 */
export function departments(record) {
    return h.getValues(record, 'department');
}

/**
 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the department property.
 */
export function getDepartments(record) {
    return h.getValues(record, 'department');
}

/**
 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization[]} value - The value to set on record department property.
 * @returns {Organization} - The record with updated value.
 */
export function setDepartments(record, value) {
    return h.setValues(record, 'department', value);
}

        

/**
 * Returns the list of choices (enum) for property department.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDepartment(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: dissolutionDate
// ----------------------------------------------------------------------

/**
 * The date that this organization was dissolved.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the dissolutionDate property.
 */
export function dissolutionDate(record) {
    return h.getValue(record, 'dissolutionDate');
}

/**
 * The date that this organization was dissolved.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the dissolutionDate property.
 */
export function getDissolutionDate(record) {
    return h.getValue(record, 'dissolutionDate');
}

/**
 * The date that this organization was dissolved.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Date} value - The value to set on record dissolutionDate property.
 * @returns {Organization} - The record with updated value.
 */
export function setDissolutionDate(record, value) {
    return h.setValue(record, 'dissolutionDate', value);
}

/**
 * The date that this organization was dissolved.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the dissolutionDate property.
 */
export function dissolutionDates(record) {
    return h.getValues(record, 'dissolutionDate');
}

/**
 * The date that this organization was dissolved.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the dissolutionDate property.
 */
export function getDissolutionDates(record) {
    return h.getValues(record, 'dissolutionDate');
}

/**
 * The date that this organization was dissolved.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Date[]} value - The value to set on record dissolutionDate property.
 * @returns {Organization} - The record with updated value.
 */
export function setDissolutionDates(record, value) {
    return h.setValues(record, 'dissolutionDate', value);
}

        

/**
 * Returns the list of choices (enum) for property dissolutionDate.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDissolutionDate(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: diversityPolicy
// ----------------------------------------------------------------------

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the diversityPolicy property.
 */
export function diversityPolicy(record) {
    return h.getValue(record, 'diversityPolicy');
}

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the diversityPolicy property.
 */
export function getDiversityPolicy(record) {
    return h.getValue(record, 'diversityPolicy');
}

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record diversityPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setDiversityPolicy(record, value) {
    return h.setValue(record, 'diversityPolicy', value);
}

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the diversityPolicy property.
 */
export function diversityPolicys(record) {
    return h.getValues(record, 'diversityPolicy');
}

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the diversityPolicy property.
 */
export function getDiversityPolicys(record) {
    return h.getValues(record, 'diversityPolicy');
}

/**
 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record diversityPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setDiversityPolicys(record, value) {
    return h.setValues(record, 'diversityPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property diversityPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDiversityPolicy(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: diversityStaffingReport
// ----------------------------------------------------------------------

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {Article | URL} - The 1st value of the diversityStaffingReport property.
 */
export function diversityStaffingReport(record) {
    return h.getValue(record, 'diversityStaffingReport');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {Article | URL} - The 1st value of the diversityStaffingReport property.
 */
export function getDiversityStaffingReport(record) {
    return h.getValue(record, 'diversityStaffingReport');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {Article | URL} value - The value to set on record diversityStaffingReport property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setDiversityStaffingReport(record, value) {
    return h.setValue(record, 'diversityStaffingReport', value);
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {Article[] | URL[]} - All values of the diversityStaffingReport property.
 */
export function diversityStaffingReports(record) {
    return h.getValues(record, 'diversityStaffingReport');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {Article[] | URL[]} - All values of the diversityStaffingReport property.
 */
export function getDiversityStaffingReports(record) {
    return h.getValues(record, 'diversityStaffingReport');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {Article[] | URL[]} value - The value to set on record diversityStaffingReport property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setDiversityStaffingReports(record, value) {
    return h.setValues(record, 'diversityStaffingReport', value);
}

        

/**
 * Returns the list of choices (enum) for property diversityStaffingReport.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDiversityStaffingReport(){
    
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
// Property: employee
// ----------------------------------------------------------------------

/**
 * Someone working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the employee property.
 */
export function employee(record) {
    return h.getValue(record, 'employee');
}

/**
 * Someone working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the employee property.
 */
export function getEmployee(record) {
    return h.getValue(record, 'employee');
}

/**
 * Someone working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record employee property.
 * @returns {Organization} - The record with updated value.
 */
export function setEmployee(record, value) {
    return h.setValue(record, 'employee', value);
}

/**
 * Someone working for this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the employee property.
 */
export function employees(record) {
    return h.getValues(record, 'employee');
}

/**
 * Someone working for this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the employee property.
 */
export function getEmployees(record) {
    return h.getValues(record, 'employee');
}

/**
 * Someone working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record employee property.
 * @returns {Organization} - The record with updated value.
 */
export function setEmployees(record, value) {
    return h.setValues(record, 'employee', value);
}

        

/**
 * Returns the list of choices (enum) for property employee.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEmployee(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: employees
// ----------------------------------------------------------------------

/**
 * People working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the employees property.
 */
export function employees(record) {
    return h.getValue(record, 'employees');
}

/**
 * People working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the employees property.
 */
export function getEmployees(record) {
    return h.getValue(record, 'employees');
}

/**
 * People working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record employees property.
 * @returns {Organization} - The record with updated value.
 */
export function setEmployees(record, value) {
    return h.setValue(record, 'employees', value);
}

/**
 * People working for this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the employees property.
 */
export function employeess(record) {
    return h.getValues(record, 'employees');
}

/**
 * People working for this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the employees property.
 */
export function getEmployeess(record) {
    return h.getValues(record, 'employees');
}

/**
 * People working for this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record employees property.
 * @returns {Organization} - The record with updated value.
 */
export function setEmployeess(record, value) {
    return h.setValues(record, 'employees', value);
}

        

/**
 * Returns the list of choices (enum) for property employees.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEmployees(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: ethicsPolicy
// ----------------------------------------------------------------------

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the ethicsPolicy property.
 */
export function ethicsPolicy(record) {
    return h.getValue(record, 'ethicsPolicy');
}

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the ethicsPolicy property.
 */
export function getEthicsPolicy(record) {
    return h.getValue(record, 'ethicsPolicy');
}

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record ethicsPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setEthicsPolicy(record, value) {
    return h.setValue(record, 'ethicsPolicy', value);
}

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the ethicsPolicy property.
 */
export function ethicsPolicys(record) {
    return h.getValues(record, 'ethicsPolicy');
}

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the ethicsPolicy property.
 */
export function getEthicsPolicys(record) {
    return h.getValues(record, 'ethicsPolicy');
}

/**
 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record ethicsPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setEthicsPolicys(record, value) {
    return h.setValues(record, 'ethicsPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property ethicsPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEthicsPolicy(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: event
// ----------------------------------------------------------------------

/**
 * Upcoming or past event associated with this place, organization, or action.
 * @param {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the event property.
 */
export function event(record) {
    return h.getValue(record, 'event');
}

/**
 * Upcoming or past event associated with this place, organization, or action.
 * @param {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the event property.
 */
export function getEvent(record) {
    return h.getValue(record, 'event');
}

/**
 * Upcoming or past event associated with this place, organization, or action.
 * @param {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} record - The record to retrieve the value from.
 * @param {Event} value - The value to set on record event property.
 * @returns {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} - The record with updated value.
 */
export function setEvent(record, value) {
    return h.setValue(record, 'event', value);
}

/**
 * Upcoming or past event associated with this place, organization, or action.
 * @param {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the event property.
 */
export function events(record) {
    return h.getValues(record, 'event');
}

/**
 * Upcoming or past event associated with this place, organization, or action.
 * @param {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the event property.
 */
export function getEvents(record) {
    return h.getValues(record, 'event');
}

/**
 * Upcoming or past event associated with this place, organization, or action.
 * @param {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} record - The record to retrieve the value from.
 * @param {Event[]} value - The value to set on record event property.
 * @returns {InformAction | InviteAction | JoinAction | LeaveAction | Organization | Place | PlayAction} - The record with updated value.
 */
export function setEvents(record, value) {
    return h.setValues(record, 'event', value);
}

        

/**
 * Returns the list of choices (enum) for property event.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEvent(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: events
// ----------------------------------------------------------------------

/**
 * Upcoming or past events associated with this place or organization.
 * @param {Organization | Place} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the events property.
 */
export function events(record) {
    return h.getValue(record, 'events');
}

/**
 * Upcoming or past events associated with this place or organization.
 * @param {Organization | Place} record - The record to retrieve the value from.
 * @returns {Event} - The 1st value of the events property.
 */
export function getEvents(record) {
    return h.getValue(record, 'events');
}

/**
 * Upcoming or past events associated with this place or organization.
 * @param {Organization | Place} record - The record to retrieve the value from.
 * @param {Event} value - The value to set on record events property.
 * @returns {Organization | Place} - The record with updated value.
 */
export function setEvents(record, value) {
    return h.setValue(record, 'events', value);
}

/**
 * Upcoming or past events associated with this place or organization.
 * @param {Organization | Place} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the events property.
 */
export function eventss(record) {
    return h.getValues(record, 'events');
}

/**
 * Upcoming or past events associated with this place or organization.
 * @param {Organization | Place} record - The record to retrieve the values from.
 * @returns {Event[]} - All values of the events property.
 */
export function getEventss(record) {
    return h.getValues(record, 'events');
}

/**
 * Upcoming or past events associated with this place or organization.
 * @param {Organization | Place} record - The record to retrieve the value from.
 * @param {Event[]} value - The value to set on record events property.
 * @returns {Organization | Place} - The record with updated value.
 */
export function setEventss(record, value) {
    return h.setValues(record, 'events', value);
}

        

/**
 * Returns the list of choices (enum) for property events.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumEvents(){
    
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
// Property: founder
// ----------------------------------------------------------------------

/**
 * A person or organization who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the founder property.
 */
export function founder(record) {
    return h.getValue(record, 'founder');
}

/**
 * A person or organization who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the founder property.
 */
export function getFounder(record) {
    return h.getValue(record, 'founder');
}

/**
 * A person or organization who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record founder property.
 * @returns {Organization} - The record with updated value.
 */
export function setFounder(record, value) {
    return h.setValue(record, 'founder', value);
}

/**
 * A person or organization who founded this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the founder property.
 */
export function founders(record) {
    return h.getValues(record, 'founder');
}

/**
 * A person or organization who founded this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the founder property.
 */
export function getFounders(record) {
    return h.getValues(record, 'founder');
}

/**
 * A person or organization who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record founder property.
 * @returns {Organization} - The record with updated value.
 */
export function setFounders(record, value) {
    return h.setValues(record, 'founder', value);
}

        

/**
 * Returns the list of choices (enum) for property founder.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFounder(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: founders
// ----------------------------------------------------------------------

/**
 * A person who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the founders property.
 */
export function founders(record) {
    return h.getValue(record, 'founders');
}

/**
 * A person who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the founders property.
 */
export function getFounders(record) {
    return h.getValue(record, 'founders');
}

/**
 * A person who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record founders property.
 * @returns {Organization} - The record with updated value.
 */
export function setFounders(record, value) {
    return h.setValue(record, 'founders', value);
}

/**
 * A person who founded this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the founders property.
 */
export function founderss(record) {
    return h.getValues(record, 'founders');
}

/**
 * A person who founded this organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the founders property.
 */
export function getFounderss(record) {
    return h.getValues(record, 'founders');
}

/**
 * A person who founded this organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record founders property.
 * @returns {Organization} - The record with updated value.
 */
export function setFounderss(record, value) {
    return h.setValues(record, 'founders', value);
}

        

/**
 * Returns the list of choices (enum) for property founders.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFounders(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: foundingDate
// ----------------------------------------------------------------------

/**
 * The date that this organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the foundingDate property.
 */
export function foundingDate(record) {
    return h.getValue(record, 'foundingDate');
}

/**
 * The date that this organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Date} - The 1st value of the foundingDate property.
 */
export function getFoundingDate(record) {
    return h.getValue(record, 'foundingDate');
}

/**
 * The date that this organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Date} value - The value to set on record foundingDate property.
 * @returns {Organization} - The record with updated value.
 */
export function setFoundingDate(record, value) {
    return h.setValue(record, 'foundingDate', value);
}

/**
 * The date that this organization was founded.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the foundingDate property.
 */
export function foundingDates(record) {
    return h.getValues(record, 'foundingDate');
}

/**
 * The date that this organization was founded.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Date[]} - All values of the foundingDate property.
 */
export function getFoundingDates(record) {
    return h.getValues(record, 'foundingDate');
}

/**
 * The date that this organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Date[]} value - The value to set on record foundingDate property.
 * @returns {Organization} - The record with updated value.
 */
export function setFoundingDates(record, value) {
    return h.setValues(record, 'foundingDate', value);
}

        

/**
 * Returns the list of choices (enum) for property foundingDate.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFoundingDate(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: foundingLocation
// ----------------------------------------------------------------------

/**
 * The place where the Organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the foundingLocation property.
 */
export function foundingLocation(record) {
    return h.getValue(record, 'foundingLocation');
}

/**
 * The place where the Organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Place} - The 1st value of the foundingLocation property.
 */
export function getFoundingLocation(record) {
    return h.getValue(record, 'foundingLocation');
}

/**
 * The place where the Organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Place} value - The value to set on record foundingLocation property.
 * @returns {Organization} - The record with updated value.
 */
export function setFoundingLocation(record, value) {
    return h.setValue(record, 'foundingLocation', value);
}

/**
 * The place where the Organization was founded.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the foundingLocation property.
 */
export function foundingLocations(record) {
    return h.getValues(record, 'foundingLocation');
}

/**
 * The place where the Organization was founded.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Place[]} - All values of the foundingLocation property.
 */
export function getFoundingLocations(record) {
    return h.getValues(record, 'foundingLocation');
}

/**
 * The place where the Organization was founded.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Place[]} value - The value to set on record foundingLocation property.
 * @returns {Organization} - The record with updated value.
 */
export function setFoundingLocations(record, value) {
    return h.setValues(record, 'foundingLocation', value);
}

        

/**
 * Returns the list of choices (enum) for property foundingLocation.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumFoundingLocation(){
    
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
// Property: hasGS1DigitalLink
// ----------------------------------------------------------------------

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 * @param {Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @returns {URL} - The 1st value of the hasGS1DigitalLink property.
 */
export function hasGS1DigitalLink(record) {
    return h.getValue(record, 'hasGS1DigitalLink');
}

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 * @param {Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @returns {URL} - The 1st value of the hasGS1DigitalLink property.
 */
export function getHasGS1DigitalLink(record) {
    return h.getValue(record, 'hasGS1DigitalLink');
}

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 * @param {Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @param {URL} value - The value to set on record hasGS1DigitalLink property.
 * @returns {Offer | Organization | Place | Product} - The record with updated value.
 */
export function setHasGS1DigitalLink(record, value) {
    return h.setValue(record, 'hasGS1DigitalLink', value);
}

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 * @param {Offer | Organization | Place | Product} record - The record to retrieve the values from.
 * @returns {URL[]} - All values of the hasGS1DigitalLink property.
 */
export function hasGS1DigitalLinks(record) {
    return h.getValues(record, 'hasGS1DigitalLink');
}

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 * @param {Offer | Organization | Place | Product} record - The record to retrieve the values from.
 * @returns {URL[]} - All values of the hasGS1DigitalLink property.
 */
export function getHasGS1DigitalLinks(record) {
    return h.getValues(record, 'hasGS1DigitalLink');
}

/**
 * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
 * @param {Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @param {URL[]} value - The value to set on record hasGS1DigitalLink property.
 * @returns {Offer | Organization | Place | Product} - The record with updated value.
 */
export function setHasGS1DigitalLinks(record, value) {
    return h.setValues(record, 'hasGS1DigitalLink', value);
}

        

/**
 * Returns the list of choices (enum) for property hasGS1DigitalLink.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasGS1DigitalLink(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasMemberProgram
// ----------------------------------------------------------------------

/**
 * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {MemberProgram} - The 1st value of the hasMemberProgram property.
 */
export function hasMemberProgram(record) {
    return h.getValue(record, 'hasMemberProgram');
}

/**
 * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {MemberProgram} - The 1st value of the hasMemberProgram property.
 */
export function getHasMemberProgram(record) {
    return h.getValue(record, 'hasMemberProgram');
}

/**
 * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {MemberProgram} value - The value to set on record hasMemberProgram property.
 * @returns {Organization} - The record with updated value.
 */
export function setHasMemberProgram(record, value) {
    return h.setValue(record, 'hasMemberProgram', value);
}

/**
 * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {MemberProgram[]} - All values of the hasMemberProgram property.
 */
export function hasMemberPrograms(record) {
    return h.getValues(record, 'hasMemberProgram');
}

/**
 * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {MemberProgram[]} - All values of the hasMemberProgram property.
 */
export function getHasMemberPrograms(record) {
    return h.getValues(record, 'hasMemberProgram');
}

/**
 * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {MemberProgram[]} value - The value to set on record hasMemberProgram property.
 * @returns {Organization} - The record with updated value.
 */
export function setHasMemberPrograms(record, value) {
    return h.setValues(record, 'hasMemberProgram', value);
}

        

/**
 * Returns the list of choices (enum) for property hasMemberProgram.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasMemberProgram(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasMerchantReturnPolicy
// ----------------------------------------------------------------------

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 * @param {Offer | Organization | Product} record - The record to retrieve the value from.
 * @returns {MerchantReturnPolicy} - The 1st value of the hasMerchantReturnPolicy property.
 */
export function hasMerchantReturnPolicy(record) {
    return h.getValue(record, 'hasMerchantReturnPolicy');
}

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 * @param {Offer | Organization | Product} record - The record to retrieve the value from.
 * @returns {MerchantReturnPolicy} - The 1st value of the hasMerchantReturnPolicy property.
 */
export function getHasMerchantReturnPolicy(record) {
    return h.getValue(record, 'hasMerchantReturnPolicy');
}

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 * @param {Offer | Organization | Product} record - The record to retrieve the value from.
 * @param {MerchantReturnPolicy} value - The value to set on record hasMerchantReturnPolicy property.
 * @returns {Offer | Organization | Product} - The record with updated value.
 */
export function setHasMerchantReturnPolicy(record, value) {
    return h.setValue(record, 'hasMerchantReturnPolicy', value);
}

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 * @param {Offer | Organization | Product} record - The record to retrieve the values from.
 * @returns {MerchantReturnPolicy[]} - All values of the hasMerchantReturnPolicy property.
 */
export function hasMerchantReturnPolicys(record) {
    return h.getValues(record, 'hasMerchantReturnPolicy');
}

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 * @param {Offer | Organization | Product} record - The record to retrieve the values from.
 * @returns {MerchantReturnPolicy[]} - All values of the hasMerchantReturnPolicy property.
 */
export function getHasMerchantReturnPolicys(record) {
    return h.getValues(record, 'hasMerchantReturnPolicy');
}

/**
 * Specifies a MerchantReturnPolicy that may be applicable.
 * @param {Offer | Organization | Product} record - The record to retrieve the value from.
 * @param {MerchantReturnPolicy[]} value - The value to set on record hasMerchantReturnPolicy property.
 * @returns {Offer | Organization | Product} - The record with updated value.
 */
export function setHasMerchantReturnPolicys(record, value) {
    return h.setValues(record, 'hasMerchantReturnPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property hasMerchantReturnPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasMerchantReturnPolicy(){
    
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
// Property: hasProductReturnPolicy
// ----------------------------------------------------------------------

/**
 * Indicates a ProductReturnPolicy that may be applicable.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @returns {ProductReturnPolicy} - The 1st value of the hasProductReturnPolicy property.
 */
export function hasProductReturnPolicy(record) {
    return h.getValue(record, 'hasProductReturnPolicy');
}

/**
 * Indicates a ProductReturnPolicy that may be applicable.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @returns {ProductReturnPolicy} - The 1st value of the hasProductReturnPolicy property.
 */
export function getHasProductReturnPolicy(record) {
    return h.getValue(record, 'hasProductReturnPolicy');
}

/**
 * Indicates a ProductReturnPolicy that may be applicable.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @param {ProductReturnPolicy} value - The value to set on record hasProductReturnPolicy property.
 * @returns {Organization | Product} - The record with updated value.
 */
export function setHasProductReturnPolicy(record, value) {
    return h.setValue(record, 'hasProductReturnPolicy', value);
}

/**
 * Indicates a ProductReturnPolicy that may be applicable.
 * @param {Organization | Product} record - The record to retrieve the values from.
 * @returns {ProductReturnPolicy[]} - All values of the hasProductReturnPolicy property.
 */
export function hasProductReturnPolicys(record) {
    return h.getValues(record, 'hasProductReturnPolicy');
}

/**
 * Indicates a ProductReturnPolicy that may be applicable.
 * @param {Organization | Product} record - The record to retrieve the values from.
 * @returns {ProductReturnPolicy[]} - All values of the hasProductReturnPolicy property.
 */
export function getHasProductReturnPolicys(record) {
    return h.getValues(record, 'hasProductReturnPolicy');
}

/**
 * Indicates a ProductReturnPolicy that may be applicable.
 * @param {Organization | Product} record - The record to retrieve the value from.
 * @param {ProductReturnPolicy[]} value - The value to set on record hasProductReturnPolicy property.
 * @returns {Organization | Product} - The record with updated value.
 */
export function setHasProductReturnPolicys(record, value) {
    return h.setValues(record, 'hasProductReturnPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property hasProductReturnPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasProductReturnPolicy(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: hasShippingService
// ----------------------------------------------------------------------

/**
 * Specification of a shipping service offered by the organization.
 * @param {OfferShippingDetails | Organization} record - The record to retrieve the value from.
 * @returns {ShippingService} - The 1st value of the hasShippingService property.
 */
export function hasShippingService(record) {
    return h.getValue(record, 'hasShippingService');
}

/**
 * Specification of a shipping service offered by the organization.
 * @param {OfferShippingDetails | Organization} record - The record to retrieve the value from.
 * @returns {ShippingService} - The 1st value of the hasShippingService property.
 */
export function getHasShippingService(record) {
    return h.getValue(record, 'hasShippingService');
}

/**
 * Specification of a shipping service offered by the organization.
 * @param {OfferShippingDetails | Organization} record - The record to retrieve the value from.
 * @param {ShippingService} value - The value to set on record hasShippingService property.
 * @returns {OfferShippingDetails | Organization} - The record with updated value.
 */
export function setHasShippingService(record, value) {
    return h.setValue(record, 'hasShippingService', value);
}

/**
 * Specification of a shipping service offered by the organization.
 * @param {OfferShippingDetails | Organization} record - The record to retrieve the values from.
 * @returns {ShippingService[]} - All values of the hasShippingService property.
 */
export function hasShippingServices(record) {
    return h.getValues(record, 'hasShippingService');
}

/**
 * Specification of a shipping service offered by the organization.
 * @param {OfferShippingDetails | Organization} record - The record to retrieve the values from.
 * @returns {ShippingService[]} - All values of the hasShippingService property.
 */
export function getHasShippingServices(record) {
    return h.getValues(record, 'hasShippingService');
}

/**
 * Specification of a shipping service offered by the organization.
 * @param {OfferShippingDetails | Organization} record - The record to retrieve the value from.
 * @param {ShippingService[]} value - The value to set on record hasShippingService property.
 * @returns {OfferShippingDetails | Organization} - The record with updated value.
 */
export function setHasShippingServices(record, value) {
    return h.setValues(record, 'hasShippingService', value);
}

        

/**
 * Returns the list of choices (enum) for property hasShippingService.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumHasShippingService(){
    
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
// Property: iso6523Code
// ----------------------------------------------------------------------

/**
 * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the iso6523Code property.
 */
export function iso6523Code(record) {
    return h.getValue(record, 'iso6523Code');
}

/**
 * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the iso6523Code property.
 */
export function getIso6523Code(record) {
    return h.getValue(record, 'iso6523Code');
}

/**
 * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record iso6523Code property.
 * @returns {Organization} - The record with updated value.
 */
export function setIso6523Code(record, value) {
    return h.setValue(record, 'iso6523Code', value);
}

/**
 * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the iso6523Code property.
 */
export function iso6523Codes(record) {
    return h.getValues(record, 'iso6523Code');
}

/**
 * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the iso6523Code property.
 */
export function getIso6523Codes(record) {
    return h.getValues(record, 'iso6523Code');
}

/**
 * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record iso6523Code property.
 * @returns {Organization} - The record with updated value.
 */
export function setIso6523Codes(record, value) {
    return h.setValues(record, 'iso6523Code', value);
}

        

/**
 * Returns the list of choices (enum) for property iso6523Code.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumIso6523Code(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: keywords
// ----------------------------------------------------------------------

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 * @param {CreativeWork | Event | Organization | Place | Product} record - The record to retrieve the value from.
 * @returns {DefinedTerm | Text | URL} - The 1st value of the keywords property.
 */
export function keywords(record) {
    return h.getValue(record, 'keywords');
}

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 * @param {CreativeWork | Event | Organization | Place | Product} record - The record to retrieve the value from.
 * @returns {DefinedTerm | Text | URL} - The 1st value of the keywords property.
 */
export function getKeywords(record) {
    return h.getValue(record, 'keywords');
}

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 * @param {CreativeWork | Event | Organization | Place | Product} record - The record to retrieve the value from.
 * @param {DefinedTerm | Text | URL} value - The value to set on record keywords property.
 * @returns {CreativeWork | Event | Organization | Place | Product} - The record with updated value.
 */
export function setKeywords(record, value) {
    return h.setValue(record, 'keywords', value);
}

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 * @param {CreativeWork | Event | Organization | Place | Product} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | Text[] | URL[]} - All values of the keywords property.
 */
export function keywordss(record) {
    return h.getValues(record, 'keywords');
}

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 * @param {CreativeWork | Event | Organization | Place | Product} record - The record to retrieve the values from.
 * @returns {DefinedTerm[] | Text[] | URL[]} - All values of the keywords property.
 */
export function getKeywordss(record) {
    return h.getValues(record, 'keywords');
}

/**
 * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
 * @param {CreativeWork | Event | Organization | Place | Product} record - The record to retrieve the value from.
 * @param {DefinedTerm[] | Text[] | URL[]} value - The value to set on record keywords property.
 * @returns {CreativeWork | Event | Organization | Place | Product} - The record with updated value.
 */
export function setKeywordss(record, value) {
    return h.setValues(record, 'keywords', value);
}

        

/**
 * Returns the list of choices (enum) for property keywords.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumKeywords(){
    
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
// Property: legalAddress
// ----------------------------------------------------------------------

/**
 * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {PostalAddress} - The 1st value of the legalAddress property.
 */
export function legalAddress(record) {
    return h.getValue(record, 'legalAddress');
}

/**
 * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {PostalAddress} - The 1st value of the legalAddress property.
 */
export function getLegalAddress(record) {
    return h.getValue(record, 'legalAddress');
}

/**
 * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {PostalAddress} value - The value to set on record legalAddress property.
 * @returns {Organization} - The record with updated value.
 */
export function setLegalAddress(record, value) {
    return h.setValue(record, 'legalAddress', value);
}

/**
 * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {PostalAddress[]} - All values of the legalAddress property.
 */
export function legalAddresss(record) {
    return h.getValues(record, 'legalAddress');
}

/**
 * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {PostalAddress[]} - All values of the legalAddress property.
 */
export function getLegalAddresss(record) {
    return h.getValues(record, 'legalAddress');
}

/**
 * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {PostalAddress[]} value - The value to set on record legalAddress property.
 * @returns {Organization} - The record with updated value.
 */
export function setLegalAddresss(record, value) {
    return h.setValues(record, 'legalAddress', value);
}

        

/**
 * Returns the list of choices (enum) for property legalAddress.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLegalAddress(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: legalName
// ----------------------------------------------------------------------

/**
 * The official name of the organization, e.g. the registered company name.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the legalName property.
 */
export function legalName(record) {
    return h.getValue(record, 'legalName');
}

/**
 * The official name of the organization, e.g. the registered company name.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the legalName property.
 */
export function getLegalName(record) {
    return h.getValue(record, 'legalName');
}

/**
 * The official name of the organization, e.g. the registered company name.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record legalName property.
 * @returns {Organization} - The record with updated value.
 */
export function setLegalName(record, value) {
    return h.setValue(record, 'legalName', value);
}

/**
 * The official name of the organization, e.g. the registered company name.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the legalName property.
 */
export function legalNames(record) {
    return h.getValues(record, 'legalName');
}

/**
 * The official name of the organization, e.g. the registered company name.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the legalName property.
 */
export function getLegalNames(record) {
    return h.getValues(record, 'legalName');
}

/**
 * The official name of the organization, e.g. the registered company name.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record legalName property.
 * @returns {Organization} - The record with updated value.
 */
export function setLegalNames(record, value) {
    return h.setValues(record, 'legalName', value);
}

        

/**
 * Returns the list of choices (enum) for property legalName.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLegalName(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: legalRepresentative
// ----------------------------------------------------------------------

/**
 * One or multiple persons who represent this organization legally such as CEO or sole administrator.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the legalRepresentative property.
 */
export function legalRepresentative(record) {
    return h.getValue(record, 'legalRepresentative');
}

/**
 * One or multiple persons who represent this organization legally such as CEO or sole administrator.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Person} - The 1st value of the legalRepresentative property.
 */
export function getLegalRepresentative(record) {
    return h.getValue(record, 'legalRepresentative');
}

/**
 * One or multiple persons who represent this organization legally such as CEO or sole administrator.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person} value - The value to set on record legalRepresentative property.
 * @returns {Organization} - The record with updated value.
 */
export function setLegalRepresentative(record, value) {
    return h.setValue(record, 'legalRepresentative', value);
}

/**
 * One or multiple persons who represent this organization legally such as CEO or sole administrator.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the legalRepresentative property.
 */
export function legalRepresentatives(record) {
    return h.getValues(record, 'legalRepresentative');
}

/**
 * One or multiple persons who represent this organization legally such as CEO or sole administrator.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Person[]} - All values of the legalRepresentative property.
 */
export function getLegalRepresentatives(record) {
    return h.getValues(record, 'legalRepresentative');
}

/**
 * One or multiple persons who represent this organization legally such as CEO or sole administrator.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Person[]} value - The value to set on record legalRepresentative property.
 * @returns {Organization} - The record with updated value.
 */
export function setLegalRepresentatives(record, value) {
    return h.setValues(record, 'legalRepresentative', value);
}

        

/**
 * Returns the list of choices (enum) for property legalRepresentative.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLegalRepresentative(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: leiCode
// ----------------------------------------------------------------------

/**
 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the leiCode property.
 */
export function leiCode(record) {
    return h.getValue(record, 'leiCode');
}

/**
 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the leiCode property.
 */
export function getLeiCode(record) {
    return h.getValue(record, 'leiCode');
}

/**
 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record leiCode property.
 * @returns {Organization} - The record with updated value.
 */
export function setLeiCode(record, value) {
    return h.setValue(record, 'leiCode', value);
}

/**
 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the leiCode property.
 */
export function leiCodes(record) {
    return h.getValues(record, 'leiCode');
}

/**
 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the leiCode property.
 */
export function getLeiCodes(record) {
    return h.getValues(record, 'leiCode');
}

/**
 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record leiCode property.
 * @returns {Organization} - The record with updated value.
 */
export function setLeiCodes(record, value) {
    return h.setValues(record, 'leiCode', value);
}

        

/**
 * Returns the list of choices (enum) for property leiCode.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLeiCode(){
    
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
// Property: logo
// ----------------------------------------------------------------------

/**
 * An associated logo.
 * @param {Brand | Certification | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {ImageObject | URL} - The 1st value of the logo property.
 */
export function logo(record) {
    return h.getValue(record, 'logo');
}

/**
 * An associated logo.
 * @param {Brand | Certification | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {ImageObject | URL} - The 1st value of the logo property.
 */
export function getLogo(record) {
    return h.getValue(record, 'logo');
}

/**
 * An associated logo.
 * @param {Brand | Certification | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {ImageObject | URL} value - The value to set on record logo property.
 * @returns {Brand | Certification | Organization | Place | Product | Service} - The record with updated value.
 */
export function setLogo(record, value) {
    return h.setValue(record, 'logo', value);
}

/**
 * An associated logo.
 * @param {Brand | Certification | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {ImageObject[] | URL[]} - All values of the logo property.
 */
export function logos(record) {
    return h.getValues(record, 'logo');
}

/**
 * An associated logo.
 * @param {Brand | Certification | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {ImageObject[] | URL[]} - All values of the logo property.
 */
export function getLogos(record) {
    return h.getValues(record, 'logo');
}

/**
 * An associated logo.
 * @param {Brand | Certification | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {ImageObject[] | URL[]} value - The value to set on record logo property.
 * @returns {Brand | Certification | Organization | Place | Product | Service} - The record with updated value.
 */
export function setLogos(record, value) {
    return h.setValues(record, 'logo', value);
}

        

/**
 * Returns the list of choices (enum) for property logo.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumLogo(){
    
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
// Property: member
// ----------------------------------------------------------------------

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the member property.
 */
export function member(record) {
    return h.getValue(record, 'member');
}

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the member property.
 */
export function getMember(record) {
    return h.getValue(record, 'member');
}

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record member property.
 * @returns {Organization | ProgramMembership} - The record with updated value.
 */
export function setMember(record, value) {
    return h.setValue(record, 'member', value);
}

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 * @param {Organization | ProgramMembership} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the member property.
 */
export function members(record) {
    return h.getValues(record, 'member');
}

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 * @param {Organization | ProgramMembership} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the member property.
 */
export function getMembers(record) {
    return h.getValues(record, 'member');
}

/**
 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record member property.
 * @returns {Organization | ProgramMembership} - The record with updated value.
 */
export function setMembers(record, value) {
    return h.setValues(record, 'member', value);
}

        

/**
 * Returns the list of choices (enum) for property member.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumMember(){
    
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
// Property: members
// ----------------------------------------------------------------------

/**
 * A member of this organization.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the members property.
 */
export function members(record) {
    return h.getValue(record, 'members');
}

/**
 * A member of this organization.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @returns {Organization | Person} - The 1st value of the members property.
 */
export function getMembers(record) {
    return h.getValue(record, 'members');
}

/**
 * A member of this organization.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @param {Organization | Person} value - The value to set on record members property.
 * @returns {Organization | ProgramMembership} - The record with updated value.
 */
export function setMembers(record, value) {
    return h.setValue(record, 'members', value);
}

/**
 * A member of this organization.
 * @param {Organization | ProgramMembership} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the members property.
 */
export function memberss(record) {
    return h.getValues(record, 'members');
}

/**
 * A member of this organization.
 * @param {Organization | ProgramMembership} record - The record to retrieve the values from.
 * @returns {Organization[] | Person[]} - All values of the members property.
 */
export function getMemberss(record) {
    return h.getValues(record, 'members');
}

/**
 * A member of this organization.
 * @param {Organization | ProgramMembership} record - The record to retrieve the value from.
 * @param {Organization[] | Person[]} value - The value to set on record members property.
 * @returns {Organization | ProgramMembership} - The record with updated value.
 */
export function setMemberss(record, value) {
    return h.setValues(record, 'members', value);
}

        

/**
 * Returns the list of choices (enum) for property members.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumMembers(){
    
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
// Property: nonprofitStatus
// ----------------------------------------------------------------------

/**
 * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {NonprofitType} - The 1st value of the nonprofitStatus property.
 */
export function nonprofitStatus(record) {
    return h.getValue(record, 'nonprofitStatus');
}

/**
 * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {NonprofitType} - The 1st value of the nonprofitStatus property.
 */
export function getNonprofitStatus(record) {
    return h.getValue(record, 'nonprofitStatus');
}

/**
 * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {NonprofitType} value - The value to set on record nonprofitStatus property.
 * @returns {Organization} - The record with updated value.
 */
export function setNonprofitStatus(record, value) {
    return h.setValue(record, 'nonprofitStatus', value);
}

/**
 * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {NonprofitType[]} - All values of the nonprofitStatus property.
 */
export function nonprofitStatuss(record) {
    return h.getValues(record, 'nonprofitStatus');
}

/**
 * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {NonprofitType[]} - All values of the nonprofitStatus property.
 */
export function getNonprofitStatuss(record) {
    return h.getValues(record, 'nonprofitStatus');
}

/**
 * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {NonprofitType[]} value - The value to set on record nonprofitStatus property.
 * @returns {Organization} - The record with updated value.
 */
export function setNonprofitStatuss(record, value) {
    return h.setValues(record, 'nonprofitStatus', value);
}

        

/**
 * Returns the list of choices (enum) for property nonprofitStatus.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNonprofitStatus(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: numberOfEmployees
// ----------------------------------------------------------------------

/**
 * The number of employees in an organization, e.g. business.
 * @param {BusinessAudience | Organization} record - The record to retrieve the value from.
 * @returns {QuantitativeValue} - The 1st value of the numberOfEmployees property.
 */
export function numberOfEmployees(record) {
    return h.getValue(record, 'numberOfEmployees');
}

/**
 * The number of employees in an organization, e.g. business.
 * @param {BusinessAudience | Organization} record - The record to retrieve the value from.
 * @returns {QuantitativeValue} - The 1st value of the numberOfEmployees property.
 */
export function getNumberOfEmployees(record) {
    return h.getValue(record, 'numberOfEmployees');
}

/**
 * The number of employees in an organization, e.g. business.
 * @param {BusinessAudience | Organization} record - The record to retrieve the value from.
 * @param {QuantitativeValue} value - The value to set on record numberOfEmployees property.
 * @returns {BusinessAudience | Organization} - The record with updated value.
 */
export function setNumberOfEmployees(record, value) {
    return h.setValue(record, 'numberOfEmployees', value);
}

/**
 * The number of employees in an organization, e.g. business.
 * @param {BusinessAudience | Organization} record - The record to retrieve the values from.
 * @returns {QuantitativeValue[]} - All values of the numberOfEmployees property.
 */
export function numberOfEmployeess(record) {
    return h.getValues(record, 'numberOfEmployees');
}

/**
 * The number of employees in an organization, e.g. business.
 * @param {BusinessAudience | Organization} record - The record to retrieve the values from.
 * @returns {QuantitativeValue[]} - All values of the numberOfEmployees property.
 */
export function getNumberOfEmployeess(record) {
    return h.getValues(record, 'numberOfEmployees');
}

/**
 * The number of employees in an organization, e.g. business.
 * @param {BusinessAudience | Organization} record - The record to retrieve the value from.
 * @param {QuantitativeValue[]} value - The value to set on record numberOfEmployees property.
 * @returns {BusinessAudience | Organization} - The record with updated value.
 */
export function setNumberOfEmployeess(record, value) {
    return h.setValues(record, 'numberOfEmployees', value);
}

        

/**
 * Returns the list of choices (enum) for property numberOfEmployees.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumNumberOfEmployees(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: ownershipFundingInfo
// ----------------------------------------------------------------------

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {AboutPage | CreativeWork | Text | URL} - The 1st value of the ownershipFundingInfo property.
 */
export function ownershipFundingInfo(record) {
    return h.getValue(record, 'ownershipFundingInfo');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {AboutPage | CreativeWork | Text | URL} - The 1st value of the ownershipFundingInfo property.
 */
export function getOwnershipFundingInfo(record) {
    return h.getValue(record, 'ownershipFundingInfo');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {AboutPage | CreativeWork | Text | URL} value - The value to set on record ownershipFundingInfo property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setOwnershipFundingInfo(record, value) {
    return h.setValue(record, 'ownershipFundingInfo', value);
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {AboutPage[] | CreativeWork[] | Text[] | URL[]} - All values of the ownershipFundingInfo property.
 */
export function ownershipFundingInfos(record) {
    return h.getValues(record, 'ownershipFundingInfo');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {AboutPage[] | CreativeWork[] | Text[] | URL[]} - All values of the ownershipFundingInfo property.
 */
export function getOwnershipFundingInfos(record) {
    return h.getValues(record, 'ownershipFundingInfo');
}

/**
 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {AboutPage[] | CreativeWork[] | Text[] | URL[]} value - The value to set on record ownershipFundingInfo property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setOwnershipFundingInfos(record, value) {
    return h.setValues(record, 'ownershipFundingInfo', value);
}

        

/**
 * Returns the list of choices (enum) for property ownershipFundingInfo.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumOwnershipFundingInfo(){
    
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
// Property: parentOrganization
// ----------------------------------------------------------------------

/**
 * The larger organization that this organization is a [[subOrganization]] of, if any.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the parentOrganization property.
 */
export function parentOrganization(record) {
    return h.getValue(record, 'parentOrganization');
}

/**
 * The larger organization that this organization is a [[subOrganization]] of, if any.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the parentOrganization property.
 */
export function getParentOrganization(record) {
    return h.getValue(record, 'parentOrganization');
}

/**
 * The larger organization that this organization is a [[subOrganization]] of, if any.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization} value - The value to set on record parentOrganization property.
 * @returns {Organization} - The record with updated value.
 */
export function setParentOrganization(record, value) {
    return h.setValue(record, 'parentOrganization', value);
}

/**
 * The larger organization that this organization is a [[subOrganization]] of, if any.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the parentOrganization property.
 */
export function parentOrganizations(record) {
    return h.getValues(record, 'parentOrganization');
}

/**
 * The larger organization that this organization is a [[subOrganization]] of, if any.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the parentOrganization property.
 */
export function getParentOrganizations(record) {
    return h.getValues(record, 'parentOrganization');
}

/**
 * The larger organization that this organization is a [[subOrganization]] of, if any.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization[]} value - The value to set on record parentOrganization property.
 * @returns {Organization} - The record with updated value.
 */
export function setParentOrganizations(record, value) {
    return h.setValues(record, 'parentOrganization', value);
}

        

/**
 * Returns the list of choices (enum) for property parentOrganization.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumParentOrganization(){
    
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
// Property: review
// ----------------------------------------------------------------------

/**
 * A review of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {Review} - The 1st value of the review property.
 */
export function review(record) {
    return h.getValue(record, 'review');
}

/**
 * A review of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {Review} - The 1st value of the review property.
 */
export function getReview(record) {
    return h.getValue(record, 'review');
}

/**
 * A review of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {Review} value - The value to set on record review property.
 * @returns {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} - The record with updated value.
 */
export function setReview(record, value) {
    return h.setValue(record, 'review', value);
}

/**
 * A review of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {Review[]} - All values of the review property.
 */
export function reviews(record) {
    return h.getValues(record, 'review');
}

/**
 * A review of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {Review[]} - All values of the review property.
 */
export function getReviews(record) {
    return h.getValues(record, 'review');
}

/**
 * A review of the item.
 * @param {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {Review[]} value - The value to set on record review property.
 * @returns {Brand | CreativeWork | Event | Offer | Organization | Place | Product | Service} - The record with updated value.
 */
export function setReviews(record, value) {
    return h.setValues(record, 'review', value);
}

        

/**
 * Returns the list of choices (enum) for property review.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumReview(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: reviews
// ----------------------------------------------------------------------

/**
 * Review of the item.
 * @param {CreativeWork | Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @returns {Review} - The 1st value of the reviews property.
 */
export function reviews(record) {
    return h.getValue(record, 'reviews');
}

/**
 * Review of the item.
 * @param {CreativeWork | Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @returns {Review} - The 1st value of the reviews property.
 */
export function getReviews(record) {
    return h.getValue(record, 'reviews');
}

/**
 * Review of the item.
 * @param {CreativeWork | Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @param {Review} value - The value to set on record reviews property.
 * @returns {CreativeWork | Offer | Organization | Place | Product} - The record with updated value.
 */
export function setReviews(record, value) {
    return h.setValue(record, 'reviews', value);
}

/**
 * Review of the item.
 * @param {CreativeWork | Offer | Organization | Place | Product} record - The record to retrieve the values from.
 * @returns {Review[]} - All values of the reviews property.
 */
export function reviewss(record) {
    return h.getValues(record, 'reviews');
}

/**
 * Review of the item.
 * @param {CreativeWork | Offer | Organization | Place | Product} record - The record to retrieve the values from.
 * @returns {Review[]} - All values of the reviews property.
 */
export function getReviewss(record) {
    return h.getValues(record, 'reviews');
}

/**
 * Review of the item.
 * @param {CreativeWork | Offer | Organization | Place | Product} record - The record to retrieve the value from.
 * @param {Review[]} value - The value to set on record reviews property.
 * @returns {CreativeWork | Offer | Organization | Place | Product} - The record with updated value.
 */
export function setReviewss(record, value) {
    return h.setValues(record, 'reviews', value);
}

        

/**
 * Returns the list of choices (enum) for property reviews.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumReviews(){
    
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
// Property: serviceArea
// ----------------------------------------------------------------------

/**
 * The geographic area where the service is provided.
 * @param {ContactPoint | Organization | Service} record - The record to retrieve the value from.
 * @returns {AdministrativeArea | GeoShape | Place} - The 1st value of the serviceArea property.
 */
export function serviceArea(record) {
    return h.getValue(record, 'serviceArea');
}

/**
 * The geographic area where the service is provided.
 * @param {ContactPoint | Organization | Service} record - The record to retrieve the value from.
 * @returns {AdministrativeArea | GeoShape | Place} - The 1st value of the serviceArea property.
 */
export function getServiceArea(record) {
    return h.getValue(record, 'serviceArea');
}

/**
 * The geographic area where the service is provided.
 * @param {ContactPoint | Organization | Service} record - The record to retrieve the value from.
 * @param {AdministrativeArea | GeoShape | Place} value - The value to set on record serviceArea property.
 * @returns {ContactPoint | Organization | Service} - The record with updated value.
 */
export function setServiceArea(record, value) {
    return h.setValue(record, 'serviceArea', value);
}

/**
 * The geographic area where the service is provided.
 * @param {ContactPoint | Organization | Service} record - The record to retrieve the values from.
 * @returns {AdministrativeArea[] | GeoShape[] | Place[]} - All values of the serviceArea property.
 */
export function serviceAreas(record) {
    return h.getValues(record, 'serviceArea');
}

/**
 * The geographic area where the service is provided.
 * @param {ContactPoint | Organization | Service} record - The record to retrieve the values from.
 * @returns {AdministrativeArea[] | GeoShape[] | Place[]} - All values of the serviceArea property.
 */
export function getServiceAreas(record) {
    return h.getValues(record, 'serviceArea');
}

/**
 * The geographic area where the service is provided.
 * @param {ContactPoint | Organization | Service} record - The record to retrieve the value from.
 * @param {AdministrativeArea[] | GeoShape[] | Place[]} value - The value to set on record serviceArea property.
 * @returns {ContactPoint | Organization | Service} - The record with updated value.
 */
export function setServiceAreas(record, value) {
    return h.setValues(record, 'serviceArea', value);
}

        

/**
 * Returns the list of choices (enum) for property serviceArea.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumServiceArea(){
    
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
// Property: slogan
// ----------------------------------------------------------------------

/**
 * A slogan or motto associated with the item.
 * @param {Brand | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the slogan property.
 */
export function slogan(record) {
    return h.getValue(record, 'slogan');
}

/**
 * A slogan or motto associated with the item.
 * @param {Brand | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @returns {Text} - The 1st value of the slogan property.
 */
export function getSlogan(record) {
    return h.getValue(record, 'slogan');
}

/**
 * A slogan or motto associated with the item.
 * @param {Brand | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {Text} value - The value to set on record slogan property.
 * @returns {Brand | Organization | Place | Product | Service} - The record with updated value.
 */
export function setSlogan(record, value) {
    return h.setValue(record, 'slogan', value);
}

/**
 * A slogan or motto associated with the item.
 * @param {Brand | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the slogan property.
 */
export function slogans(record) {
    return h.getValues(record, 'slogan');
}

/**
 * A slogan or motto associated with the item.
 * @param {Brand | Organization | Place | Product | Service} record - The record to retrieve the values from.
 * @returns {Text[]} - All values of the slogan property.
 */
export function getSlogans(record) {
    return h.getValues(record, 'slogan');
}

/**
 * A slogan or motto associated with the item.
 * @param {Brand | Organization | Place | Product | Service} record - The record to retrieve the value from.
 * @param {Text[]} value - The value to set on record slogan property.
 * @returns {Brand | Organization | Place | Product | Service} - The record with updated value.
 */
export function setSlogans(record, value) {
    return h.setValues(record, 'slogan', value);
}

        

/**
 * Returns the list of choices (enum) for property slogan.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSlogan(){
    
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
// Property: subOrganization
// ----------------------------------------------------------------------

/**
 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the subOrganization property.
 */
export function subOrganization(record) {
    return h.getValue(record, 'subOrganization');
}

/**
 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 * @param {Organization} record - The record to retrieve the value from.
 * @returns {Organization} - The 1st value of the subOrganization property.
 */
export function getSubOrganization(record) {
    return h.getValue(record, 'subOrganization');
}

/**
 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization} value - The value to set on record subOrganization property.
 * @returns {Organization} - The record with updated value.
 */
export function setSubOrganization(record, value) {
    return h.setValue(record, 'subOrganization', value);
}

/**
 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the subOrganization property.
 */
export function subOrganizations(record) {
    return h.getValues(record, 'subOrganization');
}

/**
 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 * @param {Organization} record - The record to retrieve the values from.
 * @returns {Organization[]} - All values of the subOrganization property.
 */
export function getSubOrganizations(record) {
    return h.getValues(record, 'subOrganization');
}

/**
 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 * @param {Organization} record - The record to retrieve the value from.
 * @param {Organization[]} value - The value to set on record subOrganization property.
 * @returns {Organization} - The record with updated value.
 */
export function setSubOrganizations(record, value) {
    return h.setValues(record, 'subOrganization', value);
}

        

/**
 * Returns the list of choices (enum) for property subOrganization.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSubOrganization(){
    
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
// Property: unnamedSourcesPolicy
// ----------------------------------------------------------------------

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the unnamedSourcesPolicy property.
 */
export function unnamedSourcesPolicy(record) {
    return h.getValue(record, 'unnamedSourcesPolicy');
}

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @returns {CreativeWork | URL} - The 1st value of the unnamedSourcesPolicy property.
 */
export function getUnnamedSourcesPolicy(record) {
    return h.getValue(record, 'unnamedSourcesPolicy');
}

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork | URL} value - The value to set on record unnamedSourcesPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setUnnamedSourcesPolicy(record, value) {
    return h.setValue(record, 'unnamedSourcesPolicy', value);
}

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the unnamedSourcesPolicy property.
 */
export function unnamedSourcesPolicys(record) {
    return h.getValues(record, 'unnamedSourcesPolicy');
}

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the values from.
 * @returns {CreativeWork[] | URL[]} - All values of the unnamedSourcesPolicy property.
 */
export function getUnnamedSourcesPolicys(record) {
    return h.getValues(record, 'unnamedSourcesPolicy');
}

/**
 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 * @param {NewsMediaOrganization | Organization} record - The record to retrieve the value from.
 * @param {CreativeWork[] | URL[]} value - The value to set on record unnamedSourcesPolicy property.
 * @returns {NewsMediaOrganization | Organization} - The record with updated value.
 */
export function setUnnamedSourcesPolicys(record, value) {
    return h.setValues(record, 'unnamedSourcesPolicy', value);
}

        

/**
 * Returns the list of choices (enum) for property unnamedSourcesPolicy.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumUnnamedSourcesPolicy(){
    
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
    
