/**
 * Input Field Component
 * @param {Object} props
 * @param {string} [props.label] - Field label above input
 * @param {string} [props.type='text'] - HTML input type
 * @param {string} [props.placeholder='']
 * @param {string} [props.id='']
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Input({ label = '', type = 'text', placeholder = '', id = '', className = '', attrs = '' }) {
  const idAttr = id ? `id="${id}"` : '';
  return `
      <div class="space-y-2 w-full">
        ${label ? `<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${id ? `for="${id}"` : ''}>${label}</label>` : ''}
        <input 
          type="${type}" 
          ${idAttr}
          placeholder="${placeholder}" 
          class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}"
          ${attrs}
        />
      </div>
    `.trim();
}

