/**
 * Extracts and parses all JSON-LD script blocks from an HTML string.
 * Works in both Browser and Node.js environments.
 *
 * @param {string} htmlString - The raw HTML content to search.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<Object>} An array of parsed JSON-LD objects.
 */
export function extractJsonLd(htmlString, formatAsJsonld=false) {
    if (typeof htmlString !== 'string' || !htmlString.trim()) {
        return [];
    }

    // Regex to match <script type="application/ld+json"> content, including optional attributes and whitespace
    const regex =
        /<script\b[^>]*\btype\s*=\s*(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi;
    const results = [];
    let match;

    while ((match = regex.exec(htmlString)) !== null) {
        const jsonContent = match[1].trim();
        if (!jsonContent) continue;

        try {
            const parsed = JSON.parse(jsonContent);

            // Flatten arrays if top-level @graph array is present or if multiple roots exist
            if (Array.isArray(parsed)) {
                results.push(...parsed);
            } else {
                results.push(parsed);
            }
        } catch (e) {
            // Handles cases where JSON-LD contains syntax errors or invalid characters
            console.warn('Failed to parse JSON-LD block:', e.message);
        }
    }

    return results;
}

/**
 * Extracts key metadata (title, description, canonical URL, language, OGP, Twitter, JSON-LD)
 * from an HTML string.
 *
 * @param {string} htmlString - Raw HTML document
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Object} Extracted structured metadata
 */
export function extractPageMetadata(htmlString, formatAsJsonld=false) {
    if (typeof htmlString !== 'string' || !htmlString.trim()) {
        return {};
    }

    // Safe attribute extractor from tag string
    const getAttr = (tagStr, attrName) => {
        const attrRegex = new RegExp(
            `${attrName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
            'i',
        );
        const match = tagStr.match(attrRegex);
        return match ? (match[1] || match[2] || match[3] || '').trim() : null;
    };

    // Helper to extract text content between tags
    const getTagContent = (tagName) => {
        const regex = new RegExp(
            `<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`,
            'i',
        );
        const match = htmlString.match(regex);
        return match ? match[1].replace(/<[^>]+>/g, '').trim() : null;
    };

    // 1. Language
    const htmlTagMatch = htmlString.match(/<html\b[^>]*>/i);
    const lang = htmlTagMatch ? getAttr(htmlTagMatch[0], 'lang') : null;

    // 2. Title (<title> or og:title)
    const titleTag = getTagContent('title');

    // 3. Meta tags parsing (description, canonical, OpenGraph, Twitter Cards)
    const metaRegex = /<(meta|link)\b[^>]*>/gi;
    const metaTags = [];
    let match;

    while ((match = metaRegex.exec(htmlString)) !== null) {
        metaTags.push(match[0]);
    }

    const metaData = {
        description: null,
        canonical: null,
        og: {},
        twitter: {},
    };

    for (const tag of metaTags) {
        const name = (getAttr(tag, 'name') || '').toLowerCase();
        const property = (getAttr(tag, 'property') || '').toLowerCase();
        const rel = (getAttr(tag, 'rel') || '').toLowerCase();
        const content = getAttr(tag, 'content') || getAttr(tag, 'href');

        if (!content) continue;

        if (name === 'description') metaData.description = content;
        if (rel === 'canonical') metaData.canonical = content;

        // OpenGraph (og:title, og:image, og:description, etc.)
        if (property.startsWith('og:')) {
            const key = property.replace('og:', '');
            metaData.og[key] = content;
        }

        // Twitter Card (twitter:card, twitter:title, etc.)
        if (name.startsWith('twitter:')) {
            const key = name.replace('twitter:', '');
            metaData.twitter[key] = content;
        }
    }

    // 4. JSON-LD fallback for structured data
    const jsonLdRegex =
        /<script\b[^>]*\btype\s*=\s*(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi;
    const jsonLd = [];
    while ((match = jsonLdRegex.exec(htmlString)) !== null) {
        try {
            const parsed = JSON.parse(match[1].trim());
            if (Array.isArray(parsed)) jsonLd.push(...parsed);
            else jsonLd.push(parsed);
        } catch (e) {
            // Skip invalid JSON-LD blocks
        }
    }

    // Fallbacks for consolidated visual properties
    const title = metaData.og.title || metaData.twitter.title || titleTag;
    const description =
        metaData.description ||
        metaData.og.description ||
        metaData.twitter.description;
    const image = metaData.og.image || metaData.twitter.image || null;

    return {
        title,
        description,
        image,
        canonical: metaData.canonical,
        lang,
        openGraph: metaData.og,
        twitter: metaData.twitter,
        jsonLd,
    };
}


/**
 * Extracts image URLs from HTML strings or Markdown text.
 *
 * @param {string} text - The input HTML or Markdown text.
 * @param {string} formatAsJsonld - Whether the output will be jsonld schema.org ImageObject
 * @returns {Array<string> | Array<ImageObject>} An array of unique image URLs.
 */
function extractImageUrls(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) return [];

  const images = new Set();

  // HTML <img src="..."> tags
  const imgTagRegex = /<img\b[^>]*?\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
  let match;
  while ((match = imgTagRegex.exec(text)) !== null) {
    const src = match[1] || match[2] || match[3];
    if (src) images.add(src);
  }

  // Markdown ![alt](url) tags
  const mdImgRegex = /!\[.*?\]\((https?:\/\/[^\s\)]+)\)/gi;
  while ((match = mdImgRegex.exec(text)) !== null) {
    if (match[1]) images.add(match[1]);
  }


  return [...images];
}



/**
 * Extracts all HTML tables from an HTML string and converts them to JSON format.
 * Works in both Browser and Node.js environments.
 *
 * @param {string} htmlString - Raw HTML string containing <table> elements.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<Array<Object>|Array<Array<string>>>} An array of tables converted to JSON arrays.
 */
function extractTablesToJson(htmlString, formatAsJsonld=false) {
  if (typeof htmlString !== 'string' || !htmlString.trim()) {
    return [];
  }

  const tables = [];
  // Match each <table>...</table> block
  const tableRegex = /<table\b[^>]*>([\s\S]*?)<\/table>/gi;
  let tableMatch;

  while ((tableMatch = tableRegex.exec(htmlString)) !== null) {
    const tableHtml = tableMatch[1];

    // Extract headers (<th> inside <thead> or <tr>)
    const headers = [];
    const headerRowMatch = tableHtml.match(/<tr\b[^>]*>([\s\S]*?)<\/tr>/i);
    const thRegex = /<th\b[^>]*>([\s\S]*?)<\/th>/gi;
    let thMatch;

    // Check if <th> tags exist in the table
    while ((thMatch = thRegex.exec(tableHtml)) !== null) {
      const cleanHeader = thMatch[1].replace(/<[^>]+>/g, '').trim();
      headers.push(cleanHeader);
    }

    // Extract table rows (<tr>)
    const rows = [];
    const trRegex = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
    let trMatch;

    while ((trMatch = trRegex.exec(tableHtml)) !== null) {
      const rowHtml = trMatch[1];
      
      // Skip row if it only contains <th> tags (already parsed as headers)
      if (!/<td\b/i.test(rowHtml)) continue;

      const cells = [];
      const tdRegex = /<td\b[^>]*>([\s\S]*?)<\/td>/gi;
      let tdMatch;

      while ((tdMatch = tdRegex.exec(rowHtml)) !== null) {
        const cleanCell = tdMatch[1].replace(/<[^>]+>/g, '').trim();
        cells.push(cleanCell);
      }

      if (cells.length > 0) {
        // If headers exist, map row to an object with header keys
        if (headers.length > 0) {
          const rowObj = {};
          cells.forEach((cell, index) => {
            const key = headers[index] || `column_${index + 1}`;
            rowObj[key] = cell;
          });
          rows.push(rowObj);
        } else {
          // Fallback to array of values if no <th> headers were found
          rows.push(cells);
        }
      }
    }

    if (rows.length > 0) {
      tables.push(rows);
    }
  }

  return tables;
}