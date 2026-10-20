import { conversion } from '../../../conversionHelpers/conversionHelpers.js'

/**
 * Extracts all unique HTTP/HTTPS URLs from a given string.
 *
 * @param {string} text - The input string containing URLs.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<string>} An array of valid, normalized URL strings.
 */
export function extractUrls(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) {
    return [];
  }

  // Matches http/https URLs handling common trailing punctuation (.,!?) cleanups
  const urlRegex = /https?:\/\/[^\s<>"{}|\\^`[\]]+/gi;
  const matches = text.match(urlRegex) || [];

  const cleanUrls = matches.map(url => {
    // Strip trailing punctuation often caught at the end of sentences
    return url.replace(/[.,!?;:]+$/, '');
  });

  // Filter for valid URLs and return unique entries
  const validUrls = cleanUrls.filter(url => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  });

  let results = [...new Set(validUrls)];

  // Format output
  if(formatAsJsonld == true){
    results = conversion.schema.toWebPage(results)
  }

  return results

}


/**
 * Extracts all unique email addresses from a given string.
 *
 * @param {string} text - The input string containing email addresses.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<string>} An array of cleaned, unique email addresses in lower-case.
 */
export function extractEmails(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) {
    return [];
  }

  // Matches standard email format and handles trailing punctuation cleanup
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  const matches = text.match(emailRegex) || [];

  const cleanEmails = matches.map(email => {
    // Strip trailing periods or punctuation caught at the end of sentences
    return email.replace(/[.,!?;:]+$/, '').toLowerCase();
  });

  return [...new Set(cleanEmails)];
}


/**
 * Extracts all unique phone numbers from a given string.
 * Supports international formats (+1, +44), formatted numbers, and extensions.
 *
 * @param {string} text - The input text containing phone numbers.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<string>} An array of extracted, trimmed phone numbers.
 */
function extractPhoneNumbers(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) {
    return [];
  }

  // Regex to match international (+1...), parenthesized (123), hyphenated, dotted, and spaced formats
  const phoneRegex = /(?:\+?\d{1,3}[\s.-]?)?(?:\(\d{2,5}\)|\d{2,5})[\s.-]?\d{3,4}[\s.-]?\d{3,4}(?:\s*(?:ext|x|ext\.)\s*\d{1,5})?/gi;
  
  const matches = text.match(phoneRegex) || [];

  const cleaned = matches
    .map(num => num.trim().replace(/[.,!?;:]+$/, ''))
    // Filter out matches that are too short (e.g. standalone numbers or zip codes)
    .filter(num => num.replace(/\D/g, '').length >= 7);

  return [...new Set(cleaned)];
}

/**
 * Extracts social media handles (Twitter/X, Instagram, TikTok, LinkedIn, etc.) from a string.
 * Handles both @mentions and full platform URLs.
 *
 * @param {string} text - The input text containing handles or URLs.
 * @returns {Array<string>} An array of normalized @handles.
 */
function extractSocialHandles(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) {
    return [];
  }

  const handles = new Set();

  // 1. Match standalone @mentions (e.g., @username)
  const mentionRegex = /(?<=^|[\s\n])@([a-zA-Z0-9_]{1,30})\b/g;
  let match;
  while ((match = mentionRegex.exec(text)) !== null) {
    handles.add(`@${match[1]}`);
  }

  // 2. Match social profile URLs (twitter.com/user, instagram.com/user, linkedin.com/in/user, etc.)
  const urlRegex = /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com|instagram\.com|tiktok\.com|github\.com|linkedin\.com\/in)\/([a-zA-Z0-9_.-]+)\b/gi;
  while ((match = urlRegex.exec(text)) !== null) {
    // Avoid capturing general subpages like /settings or /help
    const handle = match[1].replace(/\/$/, '');
    if (!['home', 'explore', 'settings', 'about', 'help', 'privacy'].includes(handle.toLowerCase())) {
      handles.add(`@${handle}`);
    }
  }

  return [...handles];
}


/**
 * Extracts prices and currencies from text.
 *
 * @param {string} text - The input text containing prices.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<{ amount: number, currency: string, raw: string }>}
 */
function extractPrices(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) return [];

  // Matches currency symbols ($|€|£|¥|₹|A$|C$) or ISO codes (USD, EUR, etc.) followed/preceded by numbers
  const priceRegex = /(?:[\$\€\£\¥\₹]|(?:A\$|C\$))\s?\d+(?:[.,]\d{2})?|\b\d+(?:[.,]\d{2})?\s?(?:USD|EUR|GBP|CAD|AUD|JPY|INR)\b/gi;
  const matches = text.match(priceRegex) || [];

  return [...new Set(matches)].map(raw => {
    const currency = raw.replace(/[0-9.,\s]/g, '');
    const amount = parseFloat(raw.replace(/[^0-9.]/g, ''));
    return { amount, currency, raw: raw.trim() };
  });
}


/**
 * Extracts US/International address patterns and ZIP codes.
 *
 * @param {string} text - The input text containing physical addresses.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<string>}
 */
function extractAddresses(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) return [];

  // Matches common street address patterns (e.g., "123 Main St, Suite 100, New York, NY 10001")
  const addressRegex = /\b\d{1,5}\s+[A-Za-z0-9\s.,-]+?\s+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Way|Court|Ct|Suite|Ste)\b[^\n\r,]*?(?:,\s*[A-Za-z\s]+)?(?:,\s*[A-Z]{2})?\s+\d{5}(?:-\d{4})?/gi;
  
  const matches = text.match(addressRegex) || [];
  return [...new Set(matches.map(addr => addr.trim().replace(/[.,!?;:]+$/, '')))];
}


/**
 * Extracts hashtags from a string.
 *
 * @param {string} text - The input string containing hashtags.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<string>} An array of unique hashtags.
 */
function extractHashtags(text, formatAsJsonld=false) {
  if (typeof text !== 'string' || !text.trim()) return [];

  const hashtagRegex = /(?<=^|[\s\n])#([a-zA-Z0-9_]{1,50})\b/g;
  const matches = text.match(hashtagRegex) || [];

  return [...new Set(matches.map(tag => tag.toLowerCase()))];
}



/**
 * Extracts formatted dates from a text string.
 *
 * @param {string} text - The input string.
 * @returns {Array<string>} An array of unique matched dates.
 */
function extractDates(text) {
  if (typeof text !== 'string' || !text.trim()) return [];

  // Matches ISO dates (2026-10-16), standard dates (10/16/2026), and written dates (October 16, 2026)
  const dateRegex = /\b(?:\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}(?:st|nd|rd|th)?,?\s+\d{4})\b/gi;
  
  const matches = text.match(dateRegex) || [];
  return [...new Set(matches.map(date => date.trim()))];
}



