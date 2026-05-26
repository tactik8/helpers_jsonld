


export const dataHelpers = {

    "url": {
        clean: cleanUrl,
        domain: getDomain,
        params: {
            get: getUrlParams,
            set: setUrlParams
        },
    }

}


export default dataHelpers



// ----------------------------------------
// URL
// ----------------------------------------

function cleanUrl(urlString, baseUrl) {
    try {
        // 1. Create URL object to normalize
        const url = new URL(urlString, baseUrl);

        // 2. Sort search parameters to avoid duplication (optional but recommended)
        url.searchParams.sort();

        // 3. Return the string representation
        return url.toString();
        
    } catch (error) {
        return null; // or handle error as needed
    }
}


function getDomain(url) {
    try {
        let domain = new URL(url).hostname;
        domain = domain.replaceAll('www.', '')
        return domain
    } catch (e) {
        return null; // Handle invalid URLs
    }
}


function getUrlParams(url) {

    try {
        const myUrl = new URL(url);

        // Convert all parameters to a plain object
        const params = Object.fromEntries(myUrl.searchParams);

        return params

    } catch (e) {
        return null; // Handle invalid URLs
    }

}

function setUrlParams(url, params) {
    function getUrlParams(url) {

        try {
            const myUrl = new URL(url);

            for(let k of Object.keys(params)){
                myUrl.searchParams.set(k, params[k]);
            }
          
            return myUrl.toString()

        } catch (e) {
            return null; // Handle invalid URLs
        }

    }
}