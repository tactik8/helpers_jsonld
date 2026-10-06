
/**
 * Badge Component
 * @param {Object} props
 * @param {string} props.text - Badge content
 * @param {'default'|'secondary'|'destructive'|'outline'} [props.variant='default']
 * @param {string} [props.className='']
 */
export function Badge({ text, variant = 'default', className = '' }) {
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground border-border',
  };

  return `
      <div class="inline-flex truncate items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant] || variants.default} ${className}">
        ${text}
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
export function Badges({ text, variant = 'default', className = '' }) {



  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground border-border',
  };

  if(typeof text == 'string'){ text = [text]}

  return `
      <div class="flex flex-wrap gap-2">
        ${ text.map(x => Badge({text: x, variant}) ).join('')}
      
      </div>
    `.trim();
}
