/**
 * Helper functions for retrieving and setting record properties.
 */
const _h = {
  /**
   * Helper to resolve property path segments handling dot-notation and index syntax
   * e.g. "itemListElement[2].item.name" -> ["itemListElement", "2", "item", "name"]
   */
  _parsePath(path) {
    if (Array.isArray(path)) return path;
    const segments = [];
    const re = /([^\.\[\]]+)|\[(\d+)\]/g;
    let match;
    while ((match = re.exec(path)) !== null) {
      if (match[1] !== undefined) segments.push(match[1]);
      else if (match[2] !== undefined) segments.push(parseInt(match[2], 10));
    }
    return segments;
  },

  getValue(record, propertyID) {
    const values = this.getValues(record, propertyID);
    return values.length > 0 ? values[0] : undefined;
  },

  getValues(record, propertyID) {
    if (!record || typeof record !== 'object') return [];
    const parts = this._parsePath(propertyID);
    let current = record;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (current === null || current === undefined) return [];

      if (typeof part === 'number') {
        if (!Array.isArray(current)) return [];
        current = current[part];
      } else {
        if (Array.isArray(current)) {
          // Default to position 0 if location index is omitted for an array
          current = current[0];
        }
        if (current && typeof current === 'object' && part in current) {
          current = current[part];
        } else {
          return [];
        }
      }
    }

    if (current === undefined || current === null) return [];
    return Array.isArray(current) ? current : [current];
  },

  setValue(record, propertyID, value) {
    if (!record || typeof record !== 'object') return;
    const parts = this._parsePath(propertyID);
    let current = record;

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      const nextPart = parts[i + 1];

      if (typeof part === 'number') {
        if (!Array.isArray(current)) return;
        if (!current[part]) {
          current[part] = typeof nextPart === 'number' ? [] : {};
        }
        current = current[part];
      } else {
        if (Array.isArray(current)) current = current[0];
        if (!current[part] || typeof current[part] !== 'object') {
          current[part] = typeof nextPart === 'number' ? [] : {};
        }
        current = current[part];
      }
    }

    const lastPart = parts[parts.length - 1];
    if (Array.isArray(current) && typeof lastPart === 'number') {
      current[lastPart] = value;
    } else if (current && typeof current === 'object') {
      current[lastPart] = value;
    }
  },

  setValues(record, propertyID, value) {
    const arrayVal = Array.isArray(value) ? value : [value];
    this.setValue(record, propertyID, arrayVal);
  },

  addValue(record, propertyID, value) {
    const existing = this.getValues(record, propertyID);
    existing.push(value);
    this.setValue(record, propertyID, existing);
  }
};

/**
 * Main Function: Generates an HTML Table string from JSON-LD records or an ItemList.
 */
function generateRecordTable(inputRecords, options = {}) {
  // Normalize defaults
  const config = {
    baseUrl: options.baseUrl || '',
    decimalsLength: options.decimalsLength !== undefined ? options.decimalsLength : 2,
    charLength: options.charLength || 30,
    properties: options.properties || null,
    titles: options.titles || null,
    orderBy: options.orderBy || null,
    orderDirection: options.orderDirection || 1,
    offset: options.offset || 0,
    limit: options.limit || undefined
  };

  // Helper to safely escape HTML special characters
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Handle Input (Array or jsonld schema.org ItemList)
  let rawRecords = [];
  if (Array.isArray(inputRecords)) {
    rawRecords = inputRecords;
  } else if (inputRecords && typeof inputRecords === 'object') {
    const type = _h.getValue(inputRecords, '@type');
    if (type === 'ItemList') {
      rawRecords = _h.getValues(inputRecords, 'itemListElement');
    } else {
      rawRecords = [inputRecords];
    }
  }

  if (!rawRecords.length) return '<table></table>';

  // Build Record-Specific Link
  function getRecordUrl(rec) {
    const idVal = _h.getValue(rec, '@id');
    if (!idVal) return config.baseUrl;
    const base = config.baseUrl ? config.baseUrl.replace(/\/+$/, '') : '';
    return `${base}/${encodeURIComponent(idVal)}`;
  }

  // Format primitives
  function formatDate(val) {
    const d = new Date(val);
    if (isNaN(d.getTime())) return String(val);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');

    const hours = d.getUTCHours();
    const minutes = d.getUTCMinutes();
    const seconds = d.getUTCSeconds();

    if (hours === 0 && minutes === 0 && seconds === 0) {
      return `${yyyy}/${mm}/${dd}`;
    }
    const hhStr = String(hours).padStart(2, '0');
    const miStr = String(minutes).padStart(2, '0');
    const ssStr = String(seconds).padStart(2, '0');
    return `${yyyy}/${mm}/${dd} ${hhStr}:${miStr}:${ssStr}`;
  }

  function formatNumber(num) {
    const n = Number(num);
    return isNaN(n) ? String(num) : n.toFixed(config.decimalsLength);
  }

  function isDate(val) {
    return (typeof val === 'string' || val instanceof Date) && !isNaN(Date.parse(val)) && /\d{4}-\d{2}-\d{2}/.test(String(val));
  }

  // --- CELL VALUE PRESENTATION (Table level) ---
  function renderTableCellValue(val, isIdProperty = false) {
    if (val === null || val === undefined) return '';

    // Arrays
    if (Array.isArray(val)) {
      if (val.length === 1) {
        return `[ ${renderTableCellValue(val[0], isIdProperty)} ]`;
      }
      return `(${val.length})`;
    }

    // JSON-LD Object
    if (typeof val === 'object') {
      const recId = _h.getValue(val, '@id') || '';
      const href = getRecordUrl(val);
      return `<a href="${escapeHtml(href)}">${escapeHtml(recId)}</a>`;
    }

    // Number
    if (typeof val === 'number') {
      return `<div style="text-align: right;">${formatNumber(val)}</div>`;
    }

    // Date
    if (isDate(val)) {
      return formatDate(val);
    }

    // String
    let strVal = String(val);
    if (isIdProperty) {
      if (strVal.length > config.charLength) {
        const half = Math.floor((config.charLength - 3) / 2);
        strVal = strVal.slice(0, half) + '...' + strVal.slice(-half);
      }
      const href = config.baseUrl ? `${config.baseUrl.replace(/\/+$/, '')}/${encodeURIComponent(val)}` : val;
      return `<a href="${escapeHtml(href)}">${escapeHtml(strVal)}</a>`;
    } else {
      if (strVal.length > config.charLength) {
        strVal = strVal.substring(0, config.charLength) + '...';
      }
      return escapeHtml(strVal);
    }
  }

  // --- RECORD PRESENTATION (Nested Single Record/Key-Value) ---
  function renderRecordDetailTable(rec) {
    let keys = config.properties ? [...config.properties] : Object.keys(rec).sort();

    let html = '<table class="jsonld-record">';
    keys.forEach(key => {
      const rawVal = _h.getValues(rec, key);
      const val = rawVal.length > 1 ? rawVal : rawVal[0];
      html += `<tr><th>${escapeHtml(key)}</th><td>${renderNestedValue(val, key === '@id')}</td></tr>`;
    });
    html += '</table>';
    return html;
  }

  function renderNestedValue(val, isIdProperty = false) {
    if (val === null || val === undefined) return '';

    // Array Presentation Rules
    if (Array.isArray(val)) {
      let contentHtml = '<ul>';
      val.forEach(item => {
        contentHtml += `<li>${renderNestedValue(item, isIdProperty)}</li>`;
      });
      contentHtml += '</ul>';
      return `<details><summary>(${val.length})</summary>${contentHtml}</details>`;
    }

    // Value of @id property
    if (isIdProperty && typeof val === 'string') {
      const href = config.baseUrl ? `${config.baseUrl.replace(/\/+$/, '')}/${encodeURIComponent(val)}` : val;
      return `<a href="${escapeHtml(href)}">${escapeHtml(val)}</a>`;
    }

    // JSON-LD Object
    if (typeof val === 'object') {
      const href = getRecordUrl(val);
      const summaryText = escapeHtml(href);
      return `<details><summary>${summaryText}</summary>${renderRecordDetailTable(val)}</details>`;
    }

    // Number
    if (typeof val === 'number') {
      return `<div style="text-align: right;">${formatNumber(val)}</div>`;
    }

    // Date
    if (isDate(val)) {
      return formatDate(val);
    }

    // String
    const strVal = String(val);
    if (strVal.length > config.charLength) {
      const shortStr = strVal.substring(0, config.charLength) + '...';
      return `<details><summary>${escapeHtml(shortStr)}</summary>${escapeHtml(strVal)}</details>`;
    }

    return escapeHtml(strVal);
  }

  // Determine Properties & Column Titles
  let properties = config.properties;
  if (!properties || properties.length === 0) {
    const propSet = new Set();
    rawRecords.forEach(rec => {
      if (rec && typeof rec === 'object') {
        Object.keys(rec).forEach(k => propSet.add(k));
      }
    });

    // Remove primary @type and @id to append at front
    propSet.delete('@type');
    propSet.delete('@id');

    const sortedProps = Array.from(propSet).sort();
    properties = [];
    if (rawRecords.some(r => _h.getValue(r, '@type') !== undefined)) properties.push('@type');
    if (rawRecords.some(r => _h.getValue(r, '@id') !== undefined)) properties.push('@id');
    properties = properties.concat(sortedProps);
  }

  const titles = config.titles && config.titles.length === properties.length
    ? config.titles
    : properties;

  // Sorting
  let sortedRecords = [...rawRecords];
  if (config.orderBy) {
    const isArrayOrder = Array.isArray(config.orderBy);
    const orderProp = isArrayOrder ? config.orderBy[0] : config.orderBy;
    const direction = isArrayOrder ? -1 : (config.orderDirection || 1);

    sortedRecords.sort((a, b) => {
      const valA = _h.getValue(a, orderProp);
      const valB = _h.getValue(b, orderProp);

      if (valA < valB) return -1 * direction;
      if (valA > valB) return 1 * direction;
      return 0;
    });
  }

  // Offset & Limit
  if (config.offset || config.limit) {
    const start = config.offset || 0;
    const end = config.limit ? start + config.limit : undefined;
    sortedRecords = sortedRecords.slice(start, end);
  }

  // Build HTML Output
  let tableHtml = '<table>\n<thead>\n<tr>';
  titles.forEach(title => {
    tableHtml += `<th>${escapeHtml(title)}</th>`;
  });
  tableHtml += '</tr>\n</thead>\n<tbody>\n';

  sortedRecords.forEach(record => {
    tableHtml += '<tr>';
    properties.forEach(prop => {
      const rawVal = _h.getValues(record, prop);
      const val = rawVal.length > 1 ? rawVal : rawVal[0];
      const renderedCell = renderTableCellValue(val, prop === '@id');
      tableHtml += `<td>${renderedCell}</td>`;
    });
    tableHtml += '</tr>\n';
  });

  tableHtml += '</tbody>\n</table>';

  return tableHtml;
}