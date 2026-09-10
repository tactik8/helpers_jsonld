


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

function cleanUrlOLD(urlString, baseUrl) {
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
    throw new Error(`Invalid URL provided: ${inputUrl}`);
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