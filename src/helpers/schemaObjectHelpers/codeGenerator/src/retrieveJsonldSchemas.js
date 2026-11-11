




/**
 * Retrieve jsnld file from schema.org
 * @returns 
 */
export async function retrieveJsonldSchemas(){

    let url = 'https://schema.org/version/latest/schemaorg-current-https.jsonld'

    let r = await fetch(url)

    let record = await r.json()

    let records = record?.['@graph']

    return records
}
