/**
 * Generates an HTML pagination component.
 * 
 * @param {Object} options Configuration settings for pagination.
 * @param {number} options.currentPage Current active page (1-indexed).
 * @param {number} options.totalPages Total number of pages available.
 * @param {number} [options.maxVisiblePages=5] Maximum page numbers to display before adding ellipses.
 * @param {function} [options.onPageChange] Callback function(pageNumber) when a page is clicked.
 * @param {boolean} [options.asString=false] If true, returns an HTML string instead of an HTMLElement.
 * @param {string} [options.baseUrl] Optional URL base pattern for standard anchor link navigation (e.g., '/items?page=').
 * @returns {HTMLElement|string} HTML pagination container element or string.
 */
function createPagination({
  currentPage = 1,
  totalPages = 1,
  maxVisiblePages = 5,
  onPageChange = null,
  asString = false,
  baseUrl = null
}) {
  const container = document.createElement('nav');
  container.className = 'pagination-container';
  container.setAttribute('aria-label', 'Pagination Navigation');

  const ul = document.createElement('ul');
  ul.className = 'pagination-list';

  // Helper to construct link URL or fallback javascript action
  function getHref(page) {
    return baseUrl ? `${baseUrl}${page}` : '#';
  }

  // Helper to build single list item button
  function createPageItem(page, text, isActive = false, isDisabled = false, ariaLabel = '') {
    const li = document.createElement('li');
    li.className = 'pagination-item';

    if (isDisabled) {
      const span = document.createElement('span');
      span.className = 'pagination-link disabled';
      span.innerHTML = text;
      span.setAttribute('aria-disabled', 'true');
      li.appendChild(span);
      return li;
    }

    const a = document.createElement('a');
    a.className = `pagination-link${isActive ? ' active' : ''}`;
    a.href = getHref(page);
    a.innerHTML = text;

    if (ariaLabel) {
      a.setAttribute('aria-label', ariaLabel);
    }
    if (isActive) {
      a.setAttribute('aria-current', 'page');
    }

    a.addEventListener('click', (e) => {
      if (!baseUrl) {
        e.preventDefault();
      }
      if (!isActive && typeof onPageChange === 'function') {
        onPageChange(page);
      }
    });

    li.appendChild(a);
    return li;
  }

  // Helper to create ellipsis (...) item
  function createEllipsis() {
    const li = document.createElement('li');
    li.className = 'pagination-item ellipsis';
    li.innerHTML = '<span class="pagination-link">&hellip;</span>';
    return li;
  }

  // --- 1. Previous Button ---
  const isFirstPage = currentPage <= 1;
  ul.appendChild(
    createPageItem(
      currentPage - 1,
      '&laquo; Prev',
      false,
      isFirstPage,
      'Go to previous page'
    )
  );

  // --- 2. Dynamic Page Range with Ellipses ---
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Always show page 1 + ellipsis if needed
  if (startPage > 1) {
    ul.appendChild(createPageItem(1, '1', 1 === currentPage));
    if (startPage > 2) {
      ul.appendChild(createEllipsis());
    }
  }

  // Middle visible pages
  for (let page = startPage; page <= endPage; page++) {
    ul.appendChild(createPageItem(page, String(page), page === currentPage));
  }

  // Always show last page + ellipsis if needed
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      ul.appendChild(createEllipsis());
    }
    ul.appendChild(createPageItem(totalPages, String(totalPages), totalPages === currentPage));
  }

  // --- 3. Next Button ---
  const isLastPage = currentPage >= totalPages;
  ul.appendChild(
    createPageItem(
      currentPage + 1,
      'Next &raquo;',
      false,
      isLastPage,
      'Go to next page'
    )
  );

  container.appendChild(ul);

  return asString ? container.outerHTML : container;
}