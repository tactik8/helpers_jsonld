

/**
 * 
 * @param {object} config  - table config object
 * @param { array } headers - table headers as array
 * @returns 
 */
export function Table({ headers = [], rows = [], className = "" }) {

  return `
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${className || ""}">
      
      <table class="w-full caption-bottom text-sm">

        ${TableHeader( headers.map((x) => TableColumnHeader( x )))}
      
        ${TableBody(
          rows.map(
            x => TableRow( 
              x.map(x1 => TableCell( x1 ))
            )
          )
        )}
        
        ${TableFooter()}

      </table>

    </div>
  
  
  `;
}

// relative overflow-auto w-full

function TableHeader( content, className ) {
  if (!content) {
    return "";
  }

  if (Array.isArray(content)) {
    content = content.join("");
  }



  return `
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${content}
        </tr>
  
  `;
}

function TableColumnHeader( content, className ) {

  // Keep even if empty to keep nb columns ok
  if (!content) {
    content = ""
  }

  

  return `
    <td class="p-4 align-middle pr-0 ${content?.table?.className || content?.className || ""}">
      ${content?.htmlValue ?? content?.value ?? content}
    </td>
  `;
}

function TableBody( content, className ) {
  if (!content) {
    return "";
  }
  if (Array.isArray(content)) {
    content = content.join("");
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
  <tbody class="[&_tr:last-child]:border-0">${content}</tbody>
  
  `;
}

function TableRow( content, className ) {
  
  if (!content) {
    return "";
  }
  
  if (Array.isArray(content)) {
    content = content.join("");
  }

  if (content.trim().length == 0) {
    return "";
  }

  return `
  
  <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    ${content}
  </tr>
  `;
}

function TableCell(content, className ) {


  // Produce cell even if empty value
  if (!content) {
    content = ""
  }
  if (Array.isArray(content)) {
    content = content.join("");
  }
 

  return `
    <td 
      class="
        p-4 
        align-middle                                     <!-- Vertical alignment -->
        ${content?.table?.className || content?.className || ""}                     <!-- Inherited classes -->
        ${className || ""}
      "
    >
      ${content?.htmlValue ?? content?.value ?? content ?? ""}
    </td>
  `;
}


function TableFooter( content, className ) {

  if (!content) {
    return ""
  }

  return `
    
      <tfoot>
      
        ${content}

      </tfoot>
    
    `


}
