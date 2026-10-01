
  /**
   * Header Component with Navigation Menu & Dropdown Support
   */
  export function Header({ brand = '', navItems = [], actions = '', className = '' }) {
    const renderNav = navItems.map((item, index) => {
      if (item.dropdown && item.dropdown.length > 0) {
        const dropdownMenuId = `dropdown-menu-${index}`;
        return `
          <div class="relative inline-block text-left">
            <button 
              onclick="toggleDropdown('${dropdownMenuId}')" 
              class="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none cursor-pointer py-2 px-3 rounded-md hover:bg-accent"
            >
              <span>${item.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div 
              id="${dropdownMenuId}" 
              class="hidden absolute left-0 mt-2 w-48 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-80"
            >
              ${item.dropdown.map(sub => `
                <a href="${sub.url || '#'}" class="block rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  ${sub.name}
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <a href="${item.url || '#'}" class="text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md hover:bg-accent">
          ${item.name}
        </a>
      `;
    }).join('');

    return `
      <header class="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}">
        <div class="container mx-auto flex h-14 items-center justify-between px-4">
          <div class="flex items-center gap-6">
            <a href="#" class="flex items-center space-x-2 font-bold text-lg tracking-tight">
              ${brand}
            </a>
            <nav class="hidden md:flex items-center gap-1">
              ${renderNav}
            </nav>
          </div>
          <div class="flex items-center gap-2">
            ${actions}
          </div>
        </div>
      </header>
    `.trim();
  }

