/**
 * Badge Component
 * @param {Object} props
 * @param {string} props.text - Badge content
 * @param {'default'|'secondary'|'destructive'|'outline'} [props.variant='default']
 * @param {string} [props.className='']
 */
export function Badge(content, className, variant = 'default') {
    const variants = {
        default:
            'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
            'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
            'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border',
    };

    return `
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant] || variants.default} ${className | ''}">
        ${content}
      </div>
    `.trim();
}

/**
 * Badge Component
 * @param {Object} props
 * @param {string} props.text - Badge content
 * @param {'default'|'secondary'|'destructive'|'outline'} [props.variant='default']
 * @param {string} [props.className='']
 */
export function Badges(content, className, variant = 'default') {
    const variants = {
        default:
            'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
            'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
            'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border',
    };

    if (typeof text == 'string') {
        text = [text];
    }

    if (variant == 'secondary') {
      return `
        <span class="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          ${content || ''}
        </span>
        `;
    }

    if (variant == 'destructive') {
      return `
        <span class="inline-flex items-center rounded-md border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground transition-colors hover:bg-destructive/80">
          ${content || ''}
        </span>

    `;
    }

    if (variant == 'outline') {
      return `

        <span class="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors">
            ${content || ''}
        </span>

    `;
    }

    return `
     <span class="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      ${content || ''}
    </span>
    `
}
