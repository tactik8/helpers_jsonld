/**
 * Safely escapes double quotes and HTML special characters for attributes and text nodes
 * @param {string} str 
 * @returns {string}
 */
export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Button Component (shadcn style)
 * @param {Object} props
 * @param {string} [props.children='']
 * @param {string} [props.variant='default']
 * @param {string} [props.size='default']
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Button({
  children = '',
  variant = 'default',
  size = 'default',
  className = '',
  attrs = ''
} = {}) {
  const variants = {
    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  };

  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9'
  };

  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none';

  return `
    <button type="button" class="${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}" ${attrs}>
      ${children}
    </button>
  `.trim();
}

/**
 * Recursively converts a key-value JS object into hidden HTML form inputs
 * @param {Object} obj 
 * @param {string} [prefix=''] 
 * @returns {string} HTML hidden input strings
 */
function renderHiddenInputs(obj, prefix = '') {
  if (!obj || typeof obj !== 'object') return '';
  
  return Object.entries(obj)
    .map(([key, val]) => {
      const inputName = prefix ? `${prefix}[${key}]` : key;
      if (typeof val === 'object' && val !== null) {
        return renderHiddenInputs(val, inputName);
      }
      return `<input type="hidden" name="${escapeHtml(inputName)}" value="${escapeHtml(String(val))}">`;
    })
    .join('');
}

/**
 * FormDropdownMenu Component
 * Uses native HTML forms wrapped inside a <details>/<summary> tag.
 * The trigger defaults to a vertical kebab (three dots / MoreVertical) icon.
 * Clicking any action item submits a native POST request containing the `object` payload.
 *
 * @param {Object} props
 * @param {string} [props.label=''] - Optional sr-only label or text next to kebab icon
 * @param {Array<Object>} [props.items=[]] - Array of { name, url, object, disabled, isSeparator }
 * @param {string} [props.align='end'] - Alignment: 'start' | 'end'
 * @param {string} [props.variant='ghost'] - Button variant for trigger
 * @param {string} [props.size='icon'] - Button size for trigger: 'icon' | 'default' | 'sm' | 'lg'
 * @param {string} [props.className=''] - Extra classes for wrapper element
 * @param {string} [props.attrs=''] - Extra inline attributes
 */
export function DropdownMenu({
  label = '',
  items = [],
  align = 'end',
  variant = 'ghost',
  size = 'icon',
  className = '',
  attrs = ''
} = {}) {
  const alignClasses = {
    start: 'left-0 origin-top-left',
    end: 'right-0 origin-top-right'
  };

  const buttonVariants = {
    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };

  const buttonSizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9 p-0'
  };

  // Kebab / MoreVertical SVG Icon
  const kebabIcon = `
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim();

  // Render trigger inner content
  const triggerContent = label
    ? `<span class="mr-2">${escapeHtml(label)}</span>${kebabIcon}`
    : `${kebabIcon}<span class="sr-only">Toggle menu</span>`;

  // Render dropdown items
  const renderedItems = items
    .map((item) => {
      if (item.isSeparator) {
        return `<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>`;
      }

      const hiddenInputs = renderHiddenInputs(item.object);
      const disabledAttr = item.disabled ? 'disabled' : '';

      return `
        <form method="POST" action="${escapeHtml(item.url || '')}" class="m-0 p-0">
          ${hiddenInputs}
          <button
            type="submit"
            ${disabledAttr}
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${escapeHtml(item.name || '')}
          </button>
        </form>
      `.trim();
    })
    .join('');

  return `
    <details class="relative inline-block text-left ${className}" ${attrs}>
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden ${buttonVariants[variant] || buttonVariants.ghost} ${buttonSizes[size] || buttonSizes.icon}"
      >
        ${triggerContent}
      </summary>

      <div class="absolute ${alignClasses[align] || alignClasses.end} z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${renderedItems}
      </div>
    </details>
  `.trim();
}