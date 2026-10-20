

export function jsonToMarkdown(jsonInput, depth = 1) {
  let data;
  try {
    data = typeof jsonInput === 'string' ? JSON.parse(jsonInput) : jsonInput;
  } catch (e) {
    return "Error: Invalid JSON input.";
  }

  if (data === null || data === undefined) return '';
  let markdown = '';
  const indent = '  '.repeat(depth - 1);

  // Case 1: Array (List of Records)
  if (Array.isArray(data)) {
    if (data.length === 0) return '';

    data.forEach((item, index) => {
      if (typeof item === 'object' && item !== null) {
        // Record header (e.g., "Record #1" or just a primary bullet)
        markdown += `${indent}* **Record ${index + 1}:**\n`;
        // Recursively parse the object inside this record, increasing the indentation
        markdown += jsonToMarkdown(item, depth + 1);
      } else {
        // Simple array of primitives
        markdown += `${indent}* ${item}\n`;
      }
    });
  } 
  // Case 2: Object
  else if (typeof data === 'object') {
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        // Nested object/array gets a key label, then its contents are indented underneath
        markdown += `${indent}* **${key}:**\n`;
        markdown += jsonToMarkdown(value, depth + 1);
      } else {
        // Standard key-value pair
        markdown += `${indent}* **${key}:** ${value}\n`;
      }
    });
  } else {
    // Fallback for single primitive values
    markdown += `${indent}* ${data}\n`;
  }

  return markdown;
}