
    

import { jsonldBase as h } from '../../../../jsonldBase/jsonldBase.js';

/**
 * Returns list of properties for Message and its parents.
 * @returns {String[]} - The properties for Message.
 */
export function getProperties() {
    return ["about","abstract","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","additionalType","aggregateRating","alternateName","alternativeHeadline","archivedAt","assesses","associatedMedia","audience","audio","author","award","awards","bccRecipient","ccRecipient","character","citation","comment","commentCount","conditionsOfAccess","contentLocation","contentRating","contentReferenceTime","contributor","copyrightHolder","copyrightNotice","copyrightYear","correction","countryOfOrigin","creativeWorkStatus","creator","creditText","dateCreated","dateModified","datePublished","dateRead","dateReceived","dateSent","description","digitalSourceType","disambiguatingDescription","discussionUrl","displayLocation","editEIDR","editor","educationalAlignment","educationalLevel","educationalUse","encoding","encodingFormat","encodings","exampleOfWork","expires","fileFormat","funder","funding","genre","hasPart","headline","identifier","image","inLanguage","interactionStatistic","interactivityType","interpretedAsClaim","isAccessibleForFree","isBasedOn","isBasedOnUrl","isFamilyFriendly","isPartOf","keywords","learningResourceType","license","locationCreated","mainEntity","mainEntityOfPage","maintainer","material","materialExtent","mentions","messageAttachment","name","offers","owner","pattern","position","potentialAction","producer","provider","publication","publisher","publisherImprint","publishingPrinciples","recipient","recordedAt","releasedEvent","review","reviews","sameAs","schemaVersion","sdDatePublished","sdLicense","sdPublisher","sender","size","sourceOrganization","spatial","spatialCoverage","sponsor","subjectOf","teaches","temporal","temporalCoverage","text","thumbnail","thumbnailUrl","timeRequired","toRecipient","translationOfWork","translator","typicalAgeRange","url","usageInfo","version","video","wordCount","workExample","workTranslation"]
}

/**
 * Returns list of properties for Message and its parents.
 * @returns {String[]} - The properties for Message.
 */
export function getPropertiesAll() {
    return ["about","abstract","accessMode","accessModeSufficient","accessibilityAPI","accessibilityControl","accessibilityFeature","accessibilityHazard","accessibilitySummary","accountablePerson","acquireLicensePage","additionalType","aggregateRating","alternateName","alternativeHeadline","archivedAt","assesses","associatedMedia","audience","audio","author","award","awards","bccRecipient","ccRecipient","character","citation","comment","commentCount","conditionsOfAccess","contentLocation","contentRating","contentReferenceTime","contributor","copyrightHolder","copyrightNotice","copyrightYear","correction","countryOfOrigin","creativeWorkStatus","creator","creditText","dateCreated","dateModified","datePublished","dateRead","dateReceived","dateSent","description","digitalSourceType","disambiguatingDescription","discussionUrl","displayLocation","editEIDR","editor","educationalAlignment","educationalLevel","educationalUse","encoding","encodingFormat","encodings","exampleOfWork","expires","fileFormat","funder","funding","genre","hasPart","headline","identifier","image","inLanguage","interactionStatistic","interactivityType","interpretedAsClaim","isAccessibleForFree","isBasedOn","isBasedOnUrl","isFamilyFriendly","isPartOf","keywords","learningResourceType","license","locationCreated","mainEntity","mainEntityOfPage","maintainer","material","materialExtent","mentions","messageAttachment","name","offers","owner","pattern","position","potentialAction","producer","provider","publication","publisher","publisherImprint","publishingPrinciples","recipient","recordedAt","releasedEvent","review","reviews","sameAs","schemaVersion","sdDatePublished","sdLicense","sdPublisher","sender","size","sourceOrganization","spatial","spatialCoverage","sponsor","subjectOf","teaches","temporal","temporalCoverage","text","thumbnail","thumbnailUrl","timeRequired","toRecipient","translationOfWork","translator","typicalAgeRange","url","usageInfo","version","video","wordCount","workExample","workTranslation"]
}

/**
 * Returns list of properties for Message without parent properties.
 * @returns {String[]} - The properties for Message.
 */
export function getPropertiesMain() {
    return ["bccRecipient","ccRecipient","dateRead","dateReceived","dateSent","messageAttachment","recipient","sender","toRecipient"]
}

/**
 * Returns list of common properties for Message.
 * @returns {String[]} - The common properties for Message.
 */
export function getPropertiesShort() {
    return ["bccRecipient","ccRecipient","dateRead","dateReceived","dateSent","messageAttachment","recipient","sender","toRecipient"]        
}

    
        
// ----------------------------------------------------------------------
// Property: bccRecipient
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {ContactPoint | Organization | Person} - The 1st value of the bccRecipient property.
 */
export function bccRecipient(record) {
    return h.getValue(record, 'bccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {ContactPoint | Organization | Person} - The 1st value of the bccRecipient property.
 */
export function getBccRecipient(record) {
    return h.getValue(record, 'bccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {ContactPoint | Organization | Person} value - The value to set on record bccRecipient property.
 * @returns {} - The record with updated value.
 */
export function setBccRecipient(record, value) {
    return h.setValue(record, 'bccRecipient', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Organization[] | Person[]} - All values of the bccRecipient property.
 */
export function bccRecipients(record) {
    return h.getValues(record, 'bccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Organization[] | Person[]} - All values of the bccRecipient property.
 */
export function getBccRecipients(record) {
    return h.getValues(record, 'bccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {ContactPoint[] | Organization[] | Person[]} value - The value to set on record bccRecipient property.
 * @returns {} - The record with updated value.
 */
export function setBccRecipients(record, value) {
    return h.setValues(record, 'bccRecipient', value);
}

        

/**
 * Returns the list of choices (enum) for property bccRecipient.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumBccRecipient(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: ccRecipient
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {ContactPoint | Organization | Person} - The 1st value of the ccRecipient property.
 */
export function ccRecipient(record) {
    return h.getValue(record, 'ccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {ContactPoint | Organization | Person} - The 1st value of the ccRecipient property.
 */
export function getCcRecipient(record) {
    return h.getValue(record, 'ccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {ContactPoint | Organization | Person} value - The value to set on record ccRecipient property.
 * @returns {} - The record with updated value.
 */
export function setCcRecipient(record, value) {
    return h.setValue(record, 'ccRecipient', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Organization[] | Person[]} - All values of the ccRecipient property.
 */
export function ccRecipients(record) {
    return h.getValues(record, 'ccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {ContactPoint[] | Organization[] | Person[]} - All values of the ccRecipient property.
 */
export function getCcRecipients(record) {
    return h.getValues(record, 'ccRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {ContactPoint[] | Organization[] | Person[]} value - The value to set on record ccRecipient property.
 * @returns {} - The record with updated value.
 */
export function setCcRecipients(record, value) {
    return h.setValues(record, 'ccRecipient', value);
}

        

/**
 * Returns the list of choices (enum) for property ccRecipient.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumCcRecipient(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: dateRead
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Date | DateTime} - The 1st value of the dateRead property.
 */
export function dateRead(record) {
    return h.getValue(record, 'dateRead');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Date | DateTime} - The 1st value of the dateRead property.
 */
export function getDateRead(record) {
    return h.getValue(record, 'dateRead');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Date | DateTime} value - The value to set on record dateRead property.
 * @returns {} - The record with updated value.
 */
export function setDateRead(record, value) {
    return h.setValue(record, 'dateRead', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Date[] | DateTime[]} - All values of the dateRead property.
 */
export function dateReads(record) {
    return h.getValues(record, 'dateRead');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Date[] | DateTime[]} - All values of the dateRead property.
 */
export function getDateReads(record) {
    return h.getValues(record, 'dateRead');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Date[] | DateTime[]} value - The value to set on record dateRead property.
 * @returns {} - The record with updated value.
 */
export function setDateReads(record, value) {
    return h.setValues(record, 'dateRead', value);
}

        

/**
 * Returns the list of choices (enum) for property dateRead.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDateRead(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: dateReceived
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {DateTime} - The 1st value of the dateReceived property.
 */
export function dateReceived(record) {
    return h.getValue(record, 'dateReceived');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {DateTime} - The 1st value of the dateReceived property.
 */
export function getDateReceived(record) {
    return h.getValue(record, 'dateReceived');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {DateTime} value - The value to set on record dateReceived property.
 * @returns {} - The record with updated value.
 */
export function setDateReceived(record, value) {
    return h.setValue(record, 'dateReceived', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {DateTime[]} - All values of the dateReceived property.
 */
export function dateReceiveds(record) {
    return h.getValues(record, 'dateReceived');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {DateTime[]} - All values of the dateReceived property.
 */
export function getDateReceiveds(record) {
    return h.getValues(record, 'dateReceived');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {DateTime[]} value - The value to set on record dateReceived property.
 * @returns {} - The record with updated value.
 */
export function setDateReceiveds(record, value) {
    return h.setValues(record, 'dateReceived', value);
}

        

/**
 * Returns the list of choices (enum) for property dateReceived.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDateReceived(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: dateSent
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {DateTime} - The 1st value of the dateSent property.
 */
export function dateSent(record) {
    return h.getValue(record, 'dateSent');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {DateTime} - The 1st value of the dateSent property.
 */
export function getDateSent(record) {
    return h.getValue(record, 'dateSent');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {DateTime} value - The value to set on record dateSent property.
 * @returns {} - The record with updated value.
 */
export function setDateSent(record, value) {
    return h.setValue(record, 'dateSent', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {DateTime[]} - All values of the dateSent property.
 */
export function dateSents(record) {
    return h.getValues(record, 'dateSent');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {DateTime[]} - All values of the dateSent property.
 */
export function getDateSents(record) {
    return h.getValues(record, 'dateSent');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {DateTime[]} value - The value to set on record dateSent property.
 * @returns {} - The record with updated value.
 */
export function setDateSents(record, value) {
    return h.setValues(record, 'dateSent', value);
}

        

/**
 * Returns the list of choices (enum) for property dateSent.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumDateSent(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: messageAttachment
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {CreativeWork} - The 1st value of the messageAttachment property.
 */
export function messageAttachment(record) {
    return h.getValue(record, 'messageAttachment');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {CreativeWork} - The 1st value of the messageAttachment property.
 */
export function getMessageAttachment(record) {
    return h.getValue(record, 'messageAttachment');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {CreativeWork} value - The value to set on record messageAttachment property.
 * @returns {} - The record with updated value.
 */
export function setMessageAttachment(record, value) {
    return h.setValue(record, 'messageAttachment', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {CreativeWork[]} - All values of the messageAttachment property.
 */
export function messageAttachments(record) {
    return h.getValues(record, 'messageAttachment');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {CreativeWork[]} - All values of the messageAttachment property.
 */
export function getMessageAttachments(record) {
    return h.getValues(record, 'messageAttachment');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {CreativeWork[]} value - The value to set on record messageAttachment property.
 * @returns {} - The record with updated value.
 */
export function setMessageAttachments(record, value) {
    return h.setValues(record, 'messageAttachment', value);
}

        

/**
 * Returns the list of choices (enum) for property messageAttachment.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumMessageAttachment(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: recipient
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Audience | ContactPoint | Organization | Person} - The 1st value of the recipient property.
 */
export function recipient(record) {
    return h.getValue(record, 'recipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Audience | ContactPoint | Organization | Person} - The 1st value of the recipient property.
 */
export function getRecipient(record) {
    return h.getValue(record, 'recipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Audience | ContactPoint | Organization | Person} value - The value to set on record recipient property.
 * @returns {} - The record with updated value.
 */
export function setRecipient(record, value) {
    return h.setValue(record, 'recipient', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Audience[] | ContactPoint[] | Organization[] | Person[]} - All values of the recipient property.
 */
export function recipients(record) {
    return h.getValues(record, 'recipient');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Audience[] | ContactPoint[] | Organization[] | Person[]} - All values of the recipient property.
 */
export function getRecipients(record) {
    return h.getValues(record, 'recipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Audience[] | ContactPoint[] | Organization[] | Person[]} value - The value to set on record recipient property.
 * @returns {} - The record with updated value.
 */
export function setRecipients(record, value) {
    return h.setValues(record, 'recipient', value);
}

        

/**
 * Returns the list of choices (enum) for property recipient.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumRecipient(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: sender
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Audience | Organization | Person} - The 1st value of the sender property.
 */
export function sender(record) {
    return h.getValue(record, 'sender');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Audience | Organization | Person} - The 1st value of the sender property.
 */
export function getSender(record) {
    return h.getValue(record, 'sender');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Audience | Organization | Person} value - The value to set on record sender property.
 * @returns {} - The record with updated value.
 */
export function setSender(record, value) {
    return h.setValue(record, 'sender', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Audience[] | Organization[] | Person[]} - All values of the sender property.
 */
export function senders(record) {
    return h.getValues(record, 'sender');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Audience[] | Organization[] | Person[]} - All values of the sender property.
 */
export function getSenders(record) {
    return h.getValues(record, 'sender');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Audience[] | Organization[] | Person[]} value - The value to set on record sender property.
 * @returns {} - The record with updated value.
 */
export function setSenders(record, value) {
    return h.setValues(record, 'sender', value);
}

        

/**
 * Returns the list of choices (enum) for property sender.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumSender(){
    
    return []
}
    

        
// ----------------------------------------------------------------------
// Property: toRecipient
// ----------------------------------------------------------------------

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Audience | ContactPoint | Organization | Person} - The 1st value of the toRecipient property.
 */
export function toRecipient(record) {
    return h.getValue(record, 'toRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @returns {Audience | ContactPoint | Organization | Person} - The 1st value of the toRecipient property.
 */
export function getToRecipient(record) {
    return h.getValue(record, 'toRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Audience | ContactPoint | Organization | Person} value - The value to set on record toRecipient property.
 * @returns {} - The record with updated value.
 */
export function setToRecipient(record, value) {
    return h.setValue(record, 'toRecipient', value);
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Audience[] | ContactPoint[] | Organization[] | Person[]} - All values of the toRecipient property.
 */
export function toRecipients(record) {
    return h.getValues(record, 'toRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the values from.
 * @returns {Audience[] | ContactPoint[] | Organization[] | Person[]} - All values of the toRecipient property.
 */
export function getToRecipients(record) {
    return h.getValues(record, 'toRecipient');
}

/**
 * 
 * @param {} record - The record to retrieve the value from.
 * @param {Audience[] | ContactPoint[] | Organization[] | Person[]} value - The value to set on record toRecipient property.
 * @returns {} - The record with updated value.
 */
export function setToRecipients(record, value) {
    return h.setValues(record, 'toRecipient', value);
}

        

/**
 * Returns the list of choices (enum) for property toRecipient.
 * @returns {Integer[]} - The list (enum) of value options.
 */
export function getEnumToRecipient(){
    
    return []
}
    
