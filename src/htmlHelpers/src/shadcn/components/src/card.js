/**
 * Card Component
 * @param {Object} props
 * @param {string} props.title - Main card heading
 * @param {string} [props.description] - Subheading text
 * @param {string} props.content - Body HTML content
 * @param {string} [props.footer] - Optional footer HTML
 * @param {string} [props.className='']
 */
export function CardOLD({ title, description = '', content, footer = '', className = '' }) {
  return `
      <div class="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 space-y-6 ${className}">
        <div class="space-y-1.5">
          <h3 class="font-semibold text-2xl leading-none tracking-tight">${title || ""}</h3>
          ${description ? `<p class="text-sm text-muted-foreground">${description || ""}</p>` : ''}
        </div>
        <div class="space-y-4">
          ${content || ""}
        </div>
        ${footer ? `<div class="flex items-center pt-2">${footer || ""}</div>` : ''}
      </div>
    `.trim();
}


/**
 * Card Component
 * @param {Object} props
 * @param {string} [props.title] - Main card heading
 * @param {string} [props.description] - Subheading text
 * @param {string} [props.image] - URL of the image
 * @param {string} [props.imageAlt] - Alt text for the image
 * @param {('top'|'bottom'|'content')} [props.imagePosition='top'] - Position of the image relative to card sections
 * @param {string} [props.imageClassName=''] - Additional classes for the image element
 * @param {string} props.content - Body HTML content
 * @param {string} [props.footer] - Optional footer HTML
 * @param {string} [props.className=''] - Additional CSS classes for the card wrapper
 * @param {string} [props.attrs=''] - Additional HTML attributes for the card wrapper
 */
export function Card({
  title = '',
  description = '',
  image = '',
  imageAlt = '',
  imagePosition = 'top',
  imageClassName = '',
  content = '',
  footer = '',
  className = '',
  attrs = ''
}) {
  const imageElement = image
    ? `<div class="overflow-hidden ${imagePosition === 'top' ? '-mx-6 -mt-6 rounded-t-xl mb-6' : imagePosition === 'bottom' ? '-mx-6 -mb-6 rounded-b-xl mt-6' : 'rounded-md my-4'}">
        <img src="${image}" alt="${imageAlt}" class="w-full h-auto object-cover ${imageClassName}" />
       </div>`
    : '';

  return `
      <div class="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${className}" ${attrs}>
        ${imagePosition === 'top' ? imageElement : ''}
        
        ${(title || description) ? `
          <div class="space-y-1.5 mb-6">
            ${title ? `<h3 class="font-semibold text-2xl leading-none tracking-tight">${title}</h3>` : ''}
            ${description ? `<p class="text-sm text-muted-foreground">${description}</p>` : ''}
          </div>
        ` : ''}

        ${imagePosition === 'content' ? imageElement : ''}

        ${content ? `<div class="space-y-4">${content}</div>` : ''}

        ${imagePosition === 'bottom' ? imageElement : ''}

        ${footer ? `<div class="flex items-center pt-6 border-t border-border mt-6">${footer}</div>` : ''}
      </div>
    `.trim();
}