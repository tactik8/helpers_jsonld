
import { jsonldBase as h} from '../../../../../jsonldBase/jsonldBase.js'


export function Menu(menuContent){

return `
    

      <div class="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${menuContent}
      </div>
   

    `

}



export function DropdownMenu(triggerContent, menuContent, className){

return `
    <details class="relative inline-block text-left ${className || ""}" >
      <summary 
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer list-none [&::-webkit-details-marker]:hidden "
      >
        ${triggerContent}
      </summary>

      <div class="absolute  z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95">
        ${menuContent}
      </div>
    </details>

    `

}



export function DropdownMenuIcon(){

    return  `
    <svg class="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  `.trim();
}




/**
 * Returns a line in a menu with link
 * @param {Action} actionRecord - a jsonld action record
 * @returns
 */
export function MenuItemLink(iconUrl, name, url, jsonContent) {

  
    //const hiddenInputs = renderHiddenInputs(item.object);
   // const disabledAttr = item.disabled ? 'disabled' : '';

    return `
    
        <a href="${url || ""}">${iconUrl || ""}${name}</a>

    `
   
}



/**
 * Returns a line in a menu in a post form
 * @param {Action} actionRecord - a jsonld action record
 * @returns
 */
export function MenuItemPost(iconUrl, name, url, record) {

  
 

    return `<form method="POST" action="${url || ''}" class="m-0 p-0">
            <input type="hidden" id="record" name="record" value='${JSON.stringify(record)}'>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 text-left"
          >
            ${name || ''}
          </button>
        </form>`;
}


export function MenuItemSeparator(){

    return `<div role="separator" class="-mx-1 my-1 h-px bg-border"></div>`;
}



/**
 * Recursively converts a key-value JS object into hidden HTML form inputs
 * @param {Object} obj
 * @param {string} [prefix='']
 * @returns {string} HTML hidden input strings
 */
function renderHiddenInputs(obj, prefix = '') {
    if (!obj || typeof obj !== 'object') return '';

    return Object.entries(obj)
        .map(([key, val]) => {
            const inputName = prefix ? `${prefix}[${key}]` : key;
            if (typeof val === 'object' && val !== null) {
                return renderHiddenInputs(val, inputName);
            }
            return `<input type="hidden" name="${inputName}" value="${String(val)}">`;
        })
        .join('');
}
