




  /**
   * Footer Component
   * @param {Object} props
   * @param {string} props.brand - Brand label or logo HTML
   * @param {string} [props.copyright] - Copyright text
   * @param {Array<{title: string, links: Array<{label: string, href: string}>}>} [props.columns] - Column link groups
   * @param {string} [props.className='']
   */
  export function Footer({ brand = 'Acme Inc', copyright = '', columns = [], className = '' }) {
    
    copyright = copyright || `&copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.`
    const renderColumns = columns.map(col => `
      <div class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground tracking-tight">${col.title}</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          ${col.links.map(link => `
            <li>
              <a href="${link.url || '#'}" class="transition-colors hover:text-foreground">
                ${link.name}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');

    return `
      <footer class="w-full border-t border-border bg-background/95 py-8 md:py-12 ${className}">
        <div class="container mx-auto px-4 space-y-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div class="space-y-3">
              <div class="font-bold text-lg tracking-tight">${brand}</div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Minimal design components powered by pure HTML and Tailwind CSS tokens.
              </p>
            </div>
            ${renderColumns}
          </div>
          <div class="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>${copyright}</div>
            <div class="flex gap-4">
              <a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `.trim();
  }