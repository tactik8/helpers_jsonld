
/**
 * Modal Dialog Component (Uses Native HTML <dialog>)
 * @param {Object} props
 * @param {string} props.id - Required ID used to call showModal() / close()
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} props.content - Body HTML
 * @param {string} [props.footer] - Optional Action buttons HTML
 * @param {string} [props.className='']
 */
export function Dialog({ id, title, description = '', content, footer = '', className = '' }) {
  return `
      <dialog id="${id}" class="bg-card text-card-foreground p-6 rounded-xl border border-border shadow-lg max-w-lg w-full backdrop:bg-black/80 ${className}">
        <div class="space-y-4">
          <div class="space-y-1.5">
            <h3 class="text-lg font-semibold leading-none tracking-tight">${title}</h3>
            ${description ? `<p class="text-sm text-muted-foreground">${description}</p>` : ''}
          </div>
          <div class="py-2 text-sm">
            ${content}
          </div>
          ${footer ? `<div class="flex justify-end gap-3 pt-4">${footer}</div>` : ''}
        </div>
      </dialog>
    `.trim();
}
