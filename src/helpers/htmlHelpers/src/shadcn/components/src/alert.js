
/**
 * Alert Component
 * @param {Object} props
 * @param {string} props.title - Main alert title
 * @param {string} [props.description] - Detailed message
 * @param {'default'|'destructive'} [props.variant='default']
 * @param {string} [props.className='']
 */
export function Alert({ title, description = '', variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-background text-foreground border-border',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
  };

  return `
      <div class="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground ${variants[variant] || variants.default} ${className}">
        <h5 class="mb-1 font-medium leading-none tracking-tight">${title}</h5>
        ${description ? `<div class="text-sm [&_p]:leading-relaxed text-muted-foreground">${description}</div>` : ''}
      </div>
    `.trim();
}
