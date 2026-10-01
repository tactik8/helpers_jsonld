/**
 * ImageModal Component
 * Renders an image thumbnail that opens a full-screen accessible modal viewer on click.
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} [props.alt=''] - Alternative text for the image
 * @param {string} [props.caption=''] - Optional caption shown in the modal viewer
 * @param {string} [props.aspectRatio='aspect-video'] - Aspect ratio utility (e.g., 'aspect-square', 'aspect-video', 'aspect-auto')
 * @param {string} [props.className=''] - Custom Tailwind CSS classes for the thumbnail container
 * @param {string} [props.imageClassName=''] - Custom Tailwind CSS classes for the image element
 * @param {string} [props.attrs=''] - Extra HTML attributes for the thumbnail container
 * @returns {string} HTML string literal
 */
export function ImageModal({
  src,
  alt = '',
  caption = '',
  aspectRatio = 'aspect-video',
  className = '',
  imageClassName = '',
  attrs = ''
}) {
  // Unique identifier for linking the trigger button to its native <dialog>
  const uniqueId = `img-modal-${Math.random().toString(36).substring(2, 9)}`;

  return `
    <!-- Thumbnail Trigger -->
    <div 
      class="group relative inline-block overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-ring/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${className}" 
      ${attrs}
    >
      <button 
        type="button"
        onclick="document.getElementById('${uniqueId}').showModal()"
        aria-label="Enlarge image: ${alt || 'View image'}"
        class="relative block w-full h-full cursor-zoom-in outline-none"
      >
        <div class="relative w-full ${aspectRatio} overflow-hidden bg-muted">
          <img 
            src="${src}" 
            alt="${alt}" 
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${imageClassName}"
          />
        </div>
        <!-- Hover Overlay Icon -->
        <div class="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div class="rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" x2="14" y1="3" y2="10"></line>
              <line x1="3" x2="10" y1="21" y2="14"></line>
            </svg>
          </div>
        </div>
      </button>

      <!-- Native Dialog Modal -->
      <dialog 
        id="${uniqueId}" 
        onclick="if (event.target === this) this.close()"
        class="fixed inset-0 m-auto max-h-[90vh] max-w-[90vw] overflow-visible rounded-xl border border-border bg-popover/95 p-0 text-popover-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:animate-in backdrop:fade-in-0 open:animate-in open:zoom-in-95 focus:outline-none"
      >
        <div class="relative flex flex-col items-center justify-center p-2 sm:p-4">
          <!-- Close Button -->
          <button 
            type="button" 
            onclick="document.getElementById('${uniqueId}').close()" 
            aria-label="Close modal"
            class="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

          <!-- High-Res Image Display -->
          <div class="max-h-[80vh] overflow-hidden rounded-lg">
            <img 
              src="${src}" 
              alt="${alt}" 
              class="max-h-[80vh] w-auto max-w-full object-contain"
            />
          </div>

          <!-- Optional Caption -->
          ${caption ? `
            <div class="mt-3 w-full text-center text-sm text-muted-foreground">
              ${caption}
            </div>
          ` : ''}
        </div>
      </dialog>
    </div>
  `.trim();
}