

import { jsonldBase as h} from '../../../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../../../dataHelpers/dataHelpers.js'



export function newRecord(name, url){

  

    url = dataHelpers.url.getUrl(url)

    let record = {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "@id": url + '#webpage',
        name, 
        url
    }

    return record
}
