
import { jsonldBase as h} from '../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../dataHelpers/dataHelpers.js'


/**
 * Convert a single url or a list of urls to ImageObject
 * @param {string | string[]} url - the url(s) of the image
 * @param {string} name - the name of the image object
 * @returns {ImageObject | ImageObject[]} An ImageObject record(s)
 */
export function toImageObject(url, name) {

    if(h.isArray(url)){
        return url.map(x => toImageObject(x))
    }

    return {
        "@type": "ImageObject",
        "@id": url + "#imageobject",
        name: name || undefined,
        "contentUrl": url
    }

}


/**
 * Convert a single url or a list of urls to ImageObject
 * @param {string | string[]} url - The url(s) of the web page
 * @param {string | undefined} name.- The name of the page
 * @returns {WebPage | WebPage[]} WebPage record(s) for the url(s)
 */
export function toWebPage(url, name) {

    if(h.isArray(url)){
        return url.map(x => toWebPage(x))
    }

    return {
        "@type": "WebPage",
        "@id": url + "#webpage",
        name: name || undefined,
        "url": url
    }

}



/**
 * Convert a single url or a list of urls to ImageObject
 * @param {*} url 
 */
export function toWebSite(url) {

    if(h.isArray(url)){
        return url.map(x => toWebSite(x))
    }

    url = dataHelpers.url.getDomain(url)
    return {
        "@type": "WebSite",
        "@id": url + "#website",
        name: url,
        "url": url
    }

}

/**
 * Converts an array of items to an ItemList
 * @param {*} records 
 * @param {*} name 
 * @returns 
 */
export function toItemList(records, name){

    records = h.toArray(records)

    let listItems = records.map(x => toListItem(x))

    // COnfigure listItems
    for(let i = 0; i < listItems.length; i ++){

        listItems[i].position = i

        if(i >0){
            listItems[i - 1].nextItem = h.ref(listItems[i])
            listItems[i].previousItem = h.ref(listItems[i - 1])
        }

        if(i < listItems.length -1){
            listItems[i].nextItem = h.ref(listItems[i + 1])
            listItems[i + 1].previousItem = h.ref(listItems[i])
        }

    }


    return {
        "@type": "ItemList",
        "@id": h.randomUUID(),
        "name": name || undefined,
        "numberOfItems": listItems.length,
        "itemListElement": listItems
    }


    return result
}

/**
 * Returns a lit item record
 * @param {*} record 
 * @param {*} position 
 * @returns 
 */
export function toListItem(record, position=0){


    if(h.isArray(record)){
        return record.map(x => toListItem(x))
    }

    return {
        "@type": "ItemList",
        "@id": h.randomUUID(),
        "item": record,
        "position": dataHelpers.number.toNumber(position)
    }

}


/**
 * Returns a Message record
 * @param {*} senderEmail 
 * @param {*} recipientEmail 
 * @param {*} subject 
 * @param {*} content 
 * @param {*} dateSent 
 * @param {*} dateReceived 
 * @returns 
 */
export function toMessage(senderEmail, recipientEmail, subject, content, dateSent, dateReceived){


    return {
        "@type": "Message",
        "@id": h.randomUUID(),
        "sender": {
            "@type": "Person",
            "email": senderEmail
        },
        "recipient": {
            "@type": "Person",
            "email": recipientEmail

        },
        "headline": subject,
        "text": content,
        "dateSent": dataHelpers.date.toDate(dateSent),
        "dateReceived": dataHelpers.date.toDate(dateReceived)

    }

}

/**
 * Returns a PostalAddress schema.org record
 * 
 * @param {string} name 
 * @param {string} street 
 * @param {string} city 
 * @param {string} province 
 * @param {string} postalCode 
 * @param {string} country 
 * @returns {object}
 */
export function toPostalAddress(name, street, city, province, postalCode, country) {
    return {
        "@type": "PostalAddress",
        "name": name,
        "streetAddress": street,
        "addressLocality": city,
        "addressRegion": province,
        "postalCode": postalCode,
        "addressCountry": country
    };
}


/**
 * Returns a jsonld schema.org Person record
 * 
 * @param {string} email 
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns {object}
 */
export function toPerson(email, firstName, lastName) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "email": email,
        "givenName": firstName,
        "familyName": lastName,
        "name": `${firstName} ${lastName}`.trim()
    };
}