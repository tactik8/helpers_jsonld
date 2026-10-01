
import { things } from '../../../../../things/things.js'


export function Breadcrumb({ urls, titles, links }) {

    // Convert to itemList
    let itemList = new things.ItemList(links)
    if (urls) {
        for (let i = 0; i < urls.length; i++) {
            let name = titles?.[i] || urls[i].split('/')?.[urls[i].split('/').length - 1] || "na"
            itemList.add({ "@type": "WebPage", url: urls[i], name: name })
        }
    }


    let items = itemList.items
    console.log('items', items)

    let content = BreadcrumbMain(
        {
            children: BreadcrumbList(
                {
                    children: items.map(
                        x => BreadcrumbItem(
                            {
                                children: BreadcrumbLink(
                                    { href: x?.url, children: x?.name }
                                )
                            })).join(BreadcrumbSeparator())

                })
        })

    return content


}



/**
 * shadcn UI Breadcrumb components for Vanilla JavaScript template literals.
 */

/**
 * Root Breadcrumb Navigation Wrapper
 * @param {Object} props
 * @param {string} props.children - Inner HTML content (typically BreadcrumbList)
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes (e.g., aria-label override)
 * @returns {string} HTML string
 */
export function BreadcrumbMain({ children = '', className = '', attrs = '' } = {}) {
    return `
      <nav aria-label="breadcrumb" class="${className}" ${attrs}>
        ${children}
      </nav>
    `.trim();
}

/**
 * Ordered List container for Breadcrumb Items
 * @param {Object} props
 * @param {string} props.children - BreadcrumbItem elements
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes
 * @returns {string} HTML string
 */
export function BreadcrumbList({ children = '', className = '', attrs = '' } = {}) {
    return `
      <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${className}" ${attrs}>
        ${children}
      </ol>
    `.trim();
}

/**
 * Breadcrumb Item (ListItem)
 * @param {Object} props
 * @param {string} props.children - BreadcrumbLink, BreadcrumbPage, or BreadcrumbSeparator
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes
 * @returns {string} HTML string
 */
export function BreadcrumbItem({ children = '', className = '', attrs = '' } = {}) {
    return `
      <li class="inline-flex items-center gap-1.5 ${className}" ${attrs}>
        ${children}
      </li>
    `.trim();
}

/**
 * Interactive Link for Breadcrumb Items
 * @param {Object} props
 * @param {string} props.children - Label or content of the link
 * @param {string} [props.href='#'] - Link destination URL
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes (e.g., onclick)
 * @returns {string} HTML string
 */
export function BreadcrumbLink({ children = '', href = '#', className = '', attrs = '' } = {}) {
    return `
      <a href="${href}" class="transition-colors hover:text-foreground ${className}" ${attrs}>
        ${children}
      </a>
    `.trim();
}

/**
 * Current Page Indicator (Non-clickable leaf item)
 * @param {Object} props
 * @param {string} props.children - Current page name/label
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes
 * @returns {string} HTML string
 */
export function BreadcrumbPage({ children = '', className = '', attrs = '' } = {}) {
    return `
      <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground ${className}" ${attrs}>
        ${children}
      </span>
    `.trim();
}

/**
 * Separator icon between items
 * @param {Object} props
 * @param {string} [props.children] - Custom separator character or SVG icon (defaults to ChevronRight)
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes
 * @returns {string} HTML string
 */
export function BreadcrumbSeparator({ children, className = '', attrs = '' } = {}) {
    const defaultIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right size-3.5">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    `.trim();

    return `
      <li role="presentation" aria-hidden="true" class="[&>svg]:size-3.5 ${className}" ${attrs}>
        ${children !== undefined ? children : defaultIcon}
      </li>
    `.trim();
}

/**
 * Ellipsis indicator for collapsed routes
 * @param {Object} props
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {string} [props.attrs=''] - Extra HTML attributes
 * @returns {string} HTML string
 */
export function BreadcrumbEllipsis({ className = '', attrs = '' } = {}) {
    return `
      <span role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center ${className}" ${attrs}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis size-4">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
        <span class="sr-only">More</span>
      </span>
    `.trim();
}
