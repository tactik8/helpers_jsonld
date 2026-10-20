/**
 * Extracts Markdown tables from a string and converts them into JSON format.
 * 
 * @param {string} markdownString - The raw Markdown text containing tables.
 * @returns {Array<Array<Object>|Array<Array<string>>>} An array of tables converted to JSON arrays.
 */
export function extractMarkdownTablesToJson(markdownString) {
  if (typeof markdownString !== 'string' || !markdownString.trim()) {
    return [];
  }

  const tables = [];
  const lines = markdownString.split(/\r?\n/);
  
  let currentTableLines = [];

  for (let i = 0; i <= lines.length; i++) {
    const line = lines[i] ? lines[i].trim() : '';

    // A table line typically starts and ends with '|' or contains '|' separating cells
    if (line.includes('|')) {
      currentTableLines.push(line);
    } else {
      if (currentTableLines.length >= 2) {
        const parsedTable = parseMarkdownTableLines(currentTableLines);
        if (parsedTable && parsedTable.length > 0) {
          tables.push(parsedTable);
        }
      }
      currentTableLines = [];
    }
  }

  return tables;
}

/**
 * Helper to parse an array of contiguous pipe-delimited table lines into JSON.
 */
function parseMarkdownTableLines(lines) {
  // Helper to split a table row by '|' while ignoring leading/trailing empty elements
  const splitRow = (rowStr) => {
    let clean = rowStr.trim();
    if (clean.startsWith('|')) clean = clean.slice(1);
    if (clean.endsWith('|')) clean = clean.slice(0, -1);
    return clean.split('|').map(cell => cell.trim());
  };

  if (lines.length < 2) return null;

  const headerCells = splitRow(lines[0]);
  let startRowIndex = 1;

  // Check if line 2 is a separator row (e.g., |---|:---:|---|)
  const isSeparator = /^[:\s|-]+$/.test(splitRow(lines[1]).join(''));
  if (isSeparator) {
    startRowIndex = 2;
  }

  const rows = [];

  for (let i = startRowIndex; i < lines.length; i++) {
    // Skip inline separator rows if any exist
    if (/^[:\s|-]+$/.test(splitRow(lines[i]).join(''))) continue;

    const rowCells = splitRow(lines[i]);

    if (isSeparator && headerCells.length > 0) {
      // Map to object keys if valid headers exist
      const rowObj = {};
      rowCells.forEach((cell, idx) => {
        const key = headerCells[idx] || `column_${idx + 1}`;
        rowObj[key] = cell;
      });
      rows.push(rowObj);
    } else {
      // Fallback to array of values
      rows.push(rowCells);
    }
  }

  return rows;
}



/**
 * Extracts image URLs from HTML strings or Markdown text.
 *
 * @param {string} text - The input HTML or Markdown text.
 * @param {boolean} formatAsJsonld - If true, returns URLs as JSON-LD format.
 * @returns {Array<string>} An array of unique image URLs.
 */
export function extractImageUrls(text, formatAsJsonld=false) {
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
