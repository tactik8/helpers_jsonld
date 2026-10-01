


// -------------------------------------------------------------------------------------
// Common methods
// -------------------------------------------------------------------------------------

/**
 * Returns true if valid url
 * @param {*} value 
 */
export function isValid(value){
    return isUrl(value)
}

/**
 * Returns cleaned value
 * @param {*} value 
 */
export function clean(value, defaultValue=undefined){
    return cleanUrl(value) ?? defaultValue
}

/**
 * Returns cleaned value
 * @param {*} value 
 */
export function toUrl(baseUrl, path, params, defaultValue=undefined){
    return getUrl(baseUrl, path, params) || defaultValue
}



// -------------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------------

/**
 * Configure a new url with query and path params.
 * @param {*} baseUrl 
 * @param {*} path 
 * @param {*} queryParams 
 */
export function getUrl(baseUrl, path, queryParams) {

    let url = setPath(baseUrl, path)

    if (queryParams) {
        url = setParams(url, queryParams)
    }

    return url
}


/**
 * Returns true if url is valid
 * @param {*} url 
 * @returns 
 */
export function isUrl(url) {

    url = clean(url)

    return url ? true : false

}


/**
 * Returns a standardized url string
 * @param {*} inputUrl 
 * @param {*} options 
 * @returns {string}
 */
export function cleanUrl(inputUrl, options = {}) {
    const {
        removeTracking = true,
        stripWww = false,
        removeTrailingSlash = true,
        lowercasePath = false,
        allowedQueryParams = []
    } = options;

    try {
        const parsed = new URL(inputUrl);

        // 1. Lowercase scheme and hostname
        parsed.protocol = parsed.protocol.toLowerCase();
        parsed.hostname = parsed.hostname.toLowerCase();

        // 2. Optionally remove 'www.' prefix
        if (stripWww && parsed.hostname.startsWith('www.')) {
            parsed.hostname = parsed.hostname.slice(4);
        }

        // 3. Remove standard default ports
        if (
            (parsed.protocol === 'http:' && parsed.port === '80') ||
            (parsed.protocol === 'https:' && parsed.port === '443')
        ) {
            parsed.port = '';
        }

        // 4. Handle pathname formatting
        let pathname = parsed.pathname;

        // Remove duplicate slashes (e.g., //path///to -> /path/to)
        pathname = pathname.replace(/\/+/g, '/');

        if (lowercasePath) {
            pathname = pathname.toLowerCase();
        }

        // Remove trailing slash if path is longer than root '/'
        if (removeTrailingSlash && pathname.length > 1 && pathname.endsWith('/')) {
            pathname = pathname.slice(0, -1);
        }

        parsed.pathname = pathname;

        // 5. Clean query parameters
        if (removeTracking) {
            const trackingPrefixes = ['utm_', 'fbclid', 'gclid', 'msclkid', 'mc_eid', '_hsenc', 'ref', 'source'];

            const keys = Array.from(parsed.searchParams.keys());
            for (const key of keys) {
                const isTracking = trackingPrefixes.some(prefix =>
                    key.toLowerCase().startsWith(prefix)
                );

                const isAllowed = allowedQueryParams.includes(key);

                if (isTracking && !isAllowed) {
                    parsed.searchParams.delete(key);
                }
            }
        }

        // 6. Sort remaining query parameters for consistency
        parsed.searchParams.sort();

        return parsed.toString();
    } catch (err) {
        return undefined
        // throw new Error(`Invalid URL provided: ${inputUrl}`);
    }
}

/**
 * Returns the domain of a url without the www
 * @param {*} url 
 * @returns {string}
 */
export function getDomain(url) {
    try {
        let domain = new URL(url).hostname;
        domain = domain.replaceAll('www.', '')
        return domain
    } catch (e) {
        return null; // Handle invalid URLs
    }
}

/**
 * Returns the url query parameters as json object
 * @param {*} url 
 * @returns 
 */
export function getParams(url) {

    try {
        const myUrl = new URL(url);

        // Convert all parameters to a plain object
        const params = Object.fromEntries(myUrl.searchParams);

        return params

    } catch (e) {
        return null; // Handle invalid URLs
    }

}

/**
 * Adds url query parameters to a url
 * @param {*} url 
 * @param {*} params 
 */
export function setParams(url, params) {

    try {
        const myUrl = new URL(url);

        for (let k of Object.keys(params)) {
            myUrl.searchParams.set(k, params[k]);
        }

        return myUrl.toString()

    } catch (e) {
        return null; // Handle invalid URLs
    }


}






/**
 * Get path of a url. Returns undefined if not url. 
 * @param {*} url 
 */
export function getPath(urlString) {

    try {
        const url = new URL(urlString);
        return url.pathname;
    } catch (error) {

        return undefined;
    }

}

/**
 * Adds paths to a base url. 
 * @param {string} baseUrl 
 * @param {string | [string]} path 
 */
export function setPath(baseUrl, path) {


    path = path ?? ""


    let paths = []

    // Retrieve path from base path
    let basePath = getPath(baseUrl) || ""
    paths = paths.concat(basePath.split('/'))

    // Retrieve paths from path
    path = Array.isArray(path) && typeof path != 'string' ? path : [path]
    for (let p of path) {
        paths = paths.concat(p.split('/'))
    }

   



    // Assemble new path
    paths = paths.filter(x => x != "")
    let fullPath = '/' + paths.join('/')


    try {
    let url = new URL(fullPath, baseUrl)

    return url.toString()

    } catch(err){
        console.log(err, fullPath, baseUrl)
        return undefined
    }

}