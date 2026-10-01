/**
 * Section Component
 * Flexible container for grouping content with standard layout and spacing variants.
 * 
 * @param {Object} props
 * @param {string} [props.children=''] - HTML content string inside the section
 * @param {string} [props.variant='default'] - Padding size ('none' | 'sm' | 'default' | 'lg' | 'xl')
 * @param {string} [props.container='default'] - Max-width container wrapper ('none' | 'sm' | 'default' | 'lg' | 'xl' | 'full')
 * @param {string} [props.className=''] - Custom Tailwind CSS classes for outer section
 * @param {string} [props.containerClassName=''] - Custom Tailwind CSS classes for inner container
 * @param {string} [props.attrs=''] - HTML attributes passed to the <section> tag
 * @returns {string} HTML string
 */
export function Section({
  children = '',
  variant = 'default',
  container = 'default',
  className = '',
  containerClassName = '',
  attrs = ''
} = {}) {
  const variants = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-24',
    lg: 'py-16 md:py-24 lg:py-32',
    xl: 'py-20 md:py-32 lg:py-40'
  };

  const containers = {
    none: '',
    sm: 'max-w-3xl',
    default: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[96rem]',
    full: 'w-full'
  };

  const paddingClass = variants[variant] || variants.default;
  const containerSizeClass = containers[container] !== undefined ? containers[container] : containers.default;

  // Render inner wrapper only if container constraint is active
  const content = container !== 'none'
    ? `<div class="mx-auto w-full px-4 sm:px-6 lg:px-8 ${containerSizeClass} ${containerClassName}".trim()>${children}</div>`
    : children;

  return `
    <section class="w-full bg-background text-foreground ${paddingClass} ${className}" ${attrs}>
      ${content}
    </section>
  `.trim();
}

/**
 * Section Header Component
 * Pre-styled title/subtitle wrapper for section entrances.
 * 
 * @param {Object} props
 * @param {string} [props.title=''] - Main section heading
 * @param {string} [props.description=''] - Subtitle or explanatory text
 * @param {string} [props.align='left'] - Text alignment ('left' | 'center' | 'right')
 * @param {string} [props.className=''] - Custom classes for the header wrapper
 * @returns {string} HTML string
 */
export function SectionHeader({
  title = '',
  description = '',
  align = 'left',
  className = ''
} = {}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const alignClass = alignments[align] || alignments.left;

  return `
    <div class="flex flex-col gap-2 mb-8 md:mb-12 ${alignClass} ${className}">
      ${title ? `<h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">${title}</h2>` : ''}
      ${description ? `<p class="text-lg text-muted-foreground max-w-2xl">${description}</p>` : ''}
    </div>
  `.trim();
}