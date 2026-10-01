




export function Table({ headers = [], rows = [], className = '' }) {
    // If structured arrays are provided, auto-generate rows and cells
    const headerHtml = headers.length > 0 ? `
      <thead class="[&_tr]:border-b border-border">
        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${headers.map(h => `<th class="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">${h}</th>`).join('')}
        </tr>
      </thead>
    ` : '';

    const bodyHtml = rows.length > 0 ? `
      <tbody class="[&_tr:last-child]:border-0">
        ${rows.map(row => `
          <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            ${row.map(cell => `<td class="p-4 align-middle [&:has([role=checkbox])]:pr-0">${cell}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    ` : '';

    return `
      <div class="relative overflow-auto w-full rounded-md border border-border ${className || ''}">
        <table class="w-full caption-bottom text-sm">
          ${headerHtml}
          ${bodyHtml}
        </table>
      </div>
    `.trim();
  }

  // relative overflow-auto w-full