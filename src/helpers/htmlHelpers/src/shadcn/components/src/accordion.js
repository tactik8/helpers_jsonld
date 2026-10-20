

/**
 * Accordion Component (Uses Native HTML <details>)
 * @param {Object} props
 * @param {Array<{title: string, content: string, open?: boolean}>} props.items
 * @param {string} [props.className='']
 */
export function Accordion({ items = [], className = '' }) {
  const renderItems = items.map((item) => `
      <details class="group border-b border-border py-2" ${item.open ? 'open' : ''}>
        <summary class="flex cursor-pointer items-center justify-between font-medium transition-all hover:underline text-sm py-2 list-none">
          ${item.title}
          <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-open:rotate-180 text-muted-foreground"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="pb-3 pt-1 text-sm text-muted-foreground leading-relaxed">
          ${item.content}
        </div>
      </details>
    `).join('');

  return `<div class="w-full ${className}">${renderItems}</div>`.trim();
}