/**
 * Formats key names from camelCase, snake_case, or kebab-case into Title Case.
 * @param {string} key
 * @returns {string}
 */
function formatKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}

/**
 * Generates an appropriate HTML string representation for a given record value.
 * @param {any} value
 * @returns {string}
 */
function renderValue(value) {
  if (value === null || value === undefined) {
    return `<span class="text-muted-foreground/60 italic">None</span>`;
  }

  if (typeof value === 'boolean') {
    const variantClass = value 
      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20' 
      : 'bg-destructive/10 text-destructive border-destructive/20';
    return `<span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${variantClass}">${value ? 'True' : 'False'}</span>`;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return `<span class="text-muted-foreground/60 italic">Empty array</span>`;
    return `
      <ul class="flex flex-wrap gap-1">
        ${value
          .map(
            (item) =>
              `<li class="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs font-medium text-secondary-foreground">${
                typeof item === 'object' ? JSON.stringify(item) : String(item)
              }</li>`
          )
          .join('')}
      </ul>
    `.trim();
  }

  if (typeof value === 'object') {
    // Nested record rendering
    return RecordView({ record: value, layout: 'grid', columns: 1, className: 'mt-1 border rounded-md p-2 bg-muted/20' });
  }

  // URLs / Links
  if (typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://'))) {
    return `<a href="${value}" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity text-sm font-medium">${value}</a>`;
  }

  return `<span class="text-sm font-medium text-foreground">${String(value)}</span>`;
}

/**
 * RecordView Component
 * Renders a key-value representation of any JavaScript object/record.
 * 
 * @param {Object} props
 * @param {Record<string, any>} [props.record={}] - The JavaScript object/record to display.
 * @param {'grid' | 'table' | 'stacked'} [props.layout='grid'] - Visual layout style.
 * @param {1 | 2 | 3 | 4} [props.columns=2] - Grid column count (only applicable when layout='grid').
 * @param {boolean} [props.striped=false] - Alternating row background colors (for 'table' or 'stacked').
 * @param {string} [props.className=''] - Additional Tailwind CSS utility classes.
 * @param {string} [props.attrs=''] - Additional HTML attributes.
 * @returns {string} HTML string representation.
 */
export function Record2({
  record = {},
  layout = 'grid',
  columns = 2,
  striped = false,
  className = '',
  attrs = ''
}) {
  const keys = Object.keys(record);

  if (keys.length === 0) {
    return `
      <div class="rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground ${className}" ${attrs}>
        No record data available.
      </div>
    `.trim();
  }

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
  };

  // GRID LAYOUT
  if (layout === 'grid') {
    return `
      <div class="grid ${gridCols[columns] || gridCols[2]} gap-4 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm ${className}" ${attrs}>
        ${keys
          .map(
            (key) => `
          <div class="flex flex-col space-y-1">
            <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">${formatKey(key)}</span>
            <div class="break-words">${renderValue(record[key])}</div>
          </div>
        `
          )
          .join('')}
      </div>
    `.trim();
  }

  // TABLE / LIST LAYOUT
  if (layout === 'table') {
    return `
      <div class="w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm ${className}" ${attrs}>
        <table class="w-full text-left text-sm">
          <tbody class="divide-y divide-border">
            ${keys
              .map(
                (key, index) => `
              <tr class="${striped && index % 2 === 1 ? 'bg-muted/40' : 'bg-transparent'} hover:bg-muted/20 transition-colors">
                <td class="py-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/3 align-top">${formatKey(key)}</td>
                <td class="py-3 px-4 align-top break-words">${renderValue(record[key])}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      </div>
    `.trim();
  }

  // STACKED / HORIZONTAL ROW LAYOUT
  return `
    <div class="divide-y divide-border rounded-lg border border-border bg-card text-card-foreground shadow-sm ${className}" ${attrs}>
      ${keys
        .map(
          (key, index) => `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 gap-2 ${striped && index % 2 === 1 ? 'bg-muted/40' : ''}">
          <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">${formatKey(key)}</span>
          <div class="break-words sm:text-right">${renderValue(record[key])}</div>
        </div>
      `
        )
        .join('')}
    </div>
  `.trim();
}