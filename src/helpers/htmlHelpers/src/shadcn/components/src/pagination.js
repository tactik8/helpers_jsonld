/**
 * shadcn-js Pagination Component System
 * 
 * Flexible vanilla JS pagination components adhering to shadcn design specifications.
 * Accepts a URL (string or URL instance), total item count, limit, and current offset,
 * and generates clean URL query parameters (`limit` and `offset`) for each link/action.
 */

/**
 * Helper utility to build a new URL string with updated limit and offset parameters
 * @param {string|URL} baseUrl - The target base URL
 * @param {number} limit - Items per page
 * @param {number} offset - Number of items to skip
 * @returns {string} Updated URL string
 */
export function buildPaginationUrl(baseUrl, limit, offset) {
    try {
        const url = new URL(baseUrl, typeof window !== 'undefined' ? window.location.href : 'http://localhost');
        url.searchParams.set('limit', String(limit));
        url.searchParams.set('offset', String(offset));
        return url.pathname + url.search + url.hash;
    } catch (e) {
        // Fallback naive string concatenation if URL parsing fails
        const cleanUrl = String(baseUrl).split('?')[0];
        return `${cleanUrl}?limit=${limit}&offset=${offset}`;
    }
}

/**
 * Main Pagination Container Component
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 * @param {string} props.children - Inner HTML content (PaginationContent)
 */
export function PaginationComponent({ children = '', className = '', attrs = '' } = {}) {
    return `
    <nav
      role="navigation"
      aria-label="pagination Navigation"
      class="mx-auto flex w-full justify-center gap-1 ${className}"
      ${attrs}
    >
      ${children}
    </nav>
  `.trim();
}

/**
 * Pagination Content Wrapper
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 * @param {string} props.children
 */
export function PaginationContent({ children = '', className = '', attrs = '' } = {}) {
    return `
    <ul class="flex flex-row items-center gap-1 ${className}" ${attrs}>
      ${children}
    </ul>
  `.trim();
}

/**
 * Individual Pagination Item Wrapper
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 * @param {string} props.children
 */
export function PaginationItem({ children = '', className = '', attrs = '' } = {}) {
    return `
    <li class="${className}" ${attrs}>
      ${children}
    </li>
  `.trim();
}

/**
 * Pagination Link / Button Component
 * @param {Object} props
 * @param {string} [props.href='#'] - Link destination
 * @param {boolean} [props.isActive=false] - Active state styling
 * @param {string} [props.size='icon'] - Button size variant: 'default', 'sm', 'lg', 'icon'
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 * @param {string} props.children
 */
export function PaginationLink({
    href = '#',
    isActive = false,
    size = 'icon',
    children = '',
    className = '',
    attrs = ''
} = {}) {
    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
    };

    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground';
    const activeStyles = isActive
        ? 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
        : 'hover:bg-accent hover:text-accent-foreground';

    return `
    <a
      href="${href}"
      aria-current="${isActive ? 'page' : 'false'}"
      class="${baseStyles} ${sizes[size] || sizes.icon} ${activeStyles} ${className}"
      ${attrs}
    >
      ${children}
    </a>
  `.trim();
}

/**
 * Pagination Previous Button
 * @param {Object} props
 * @param {string} [props.href='#']
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function PaginationPrevious({ href = '#', disabled = false, className = '', attrs = '' } = {}) {
    const disabledClasses = disabled ? 'pointer-events-none opacity-50' : '';

    return PaginationLink({
        href,
        size: 'default',
        className: `gap-1 pl-2.5 ${disabledClasses} ${className}`,
        attrs: `${disabled ? 'aria-disabled="true" tabindex="-1"' : ''} ${attrs}`,
        children: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span>Previous</span>
    `
    });
}

/**
 * Pagination Next Button
 * @param {Object} props
 * @param {string} [props.href='#']
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function PaginationNext({ href = '#', disabled = false, className = '', attrs = '' } = {}) {
    const disabledClasses = disabled ? 'pointer-events-none opacity-50' : '';

    return PaginationLink({
        href,
        size: 'default',
        className: `gap-1 pr-2.5 ${disabledClasses} ${className}`,
        attrs: `${disabled ? 'aria-disabled="true" tabindex="-1"' : ''} ${attrs}`,
        children: `
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
    `
    });
}

/**
 * Pagination Ellipsis Placeholder Component
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function PaginationEllipsis({ className = '', attrs = '' } = {}) {
    return `
    <span
      aria-hidden="true"
      class="flex h-9 w-9 items-center justify-center ${className}"
      ${attrs}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      <span class="sr-only">More pages</span>
    </span>
  `.trim();
}

/**
 * Smart URL-driven URL Pagination Generator
 * Automatically generates standard pagination elements with limit and offset query params.
 * 
 * @param {Object} props
 * @param {string|URL} props.url - Base target URL (e.g. "/api/items" or "https://example.com/products?category=shoes")
 * @param {number} props.total - Total number of items
 * @param {number} [props.limit=10] - Number of items per page
 * @param {number} [props.offset=0] - Current offset count
 * @param {number} [props.siblingCount=1] - Number of visible page links on either side of the current page
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Pagination({
    url,
    total,
    limit = 10,
    offset = 0,
    siblingCount = 1,
    className = '',
    attrs = ''
} = {}) {
    const totalPages = Math.ceil(total / limit) || 1;
    const currentPage = Math.floor(offset / limit) + 1;

    // Helper to generate URLs given a 1-based page index
    const getPageUrl = (pageIndex) => {
        const pageOffset = (pageIndex - 1) * limit;
        return buildPaginationUrl(url, limit, pageOffset);
    };

    // Helper range builder
    const range = (start, end) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };

    // Compute page numbers with ellipses logic
    const totalPageNumbers = siblingCount + 5; // siblingCount + firstPage + lastPage + activePage + 2*ellipses

    let pages = [];

    if (totalPageNumbers >= totalPages) {
        pages = range(1, totalPages);
    } else {
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftEllipsis = leftSiblingIndex > 2;
        const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            pages = [...leftRange, 'ellipsis', totalPages];
        } else if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPages - rightItemCount + 1, totalPages);
            pages = [firstPageIndex, 'ellipsis', ...rightRange];
        } else if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            pages = [firstPageIndex, 'ellipsis', ...middleRange, 'ellipsis', lastPageIndex];
        }
    }

    // Render items
    const items = [];

    // Previous Button
    const hasPrev = currentPage > 1;
    const prevUrl = hasPrev ? getPageUrl(currentPage - 1) : '#';
    items.push(
        PaginationItem({
            children: PaginationPrevious({ href: prevUrl, disabled: !hasPrev })
        })
    );

    // Numeric Pages & Ellipses
    pages.forEach((page) => {
        if (page === 'ellipsis') {
            items.push(
                PaginationItem({
                    children: PaginationEllipsis()
                })
            );
        } else {
            const pageNum = Number(page);
            const isCurrent = pageNum === currentPage;
            items.push(
                PaginationItem({
                    children: PaginationLink({
                        href: getPageUrl(pageNum),
                        isActive: isCurrent,
                        children: String(pageNum)
                    })
                })
            );
        }
    });

    // Next Button
    const hasNext = currentPage < totalPages;
    const nextUrl = hasNext ? getPageUrl(currentPage + 1) : '#';
    items.push(
        PaginationItem({
            children: PaginationNext({ href: nextUrl, disabled: !hasNext })
        })
    );

    let c = PaginationComponent({
        className,
        attrs,
        children: PaginationContent({
            children: items.join('')
        })
    });

    // Wrap in div
    c = `  <div class="flex flex-col gap-2 mb-8 md:mb-12">
      ${c}
    </div>`

    return c

}
