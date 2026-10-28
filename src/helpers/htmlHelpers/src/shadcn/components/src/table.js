import { jsonldBase as h} from '../../../../../jsonldBase/jsonldBase.js'
import { dataHelpers} from '../../../../../dataHelpers/dataHelpers.js'

/**
 * 
 * @param {object} config  - table config object
 * @param { array } headers - table headers as array
 * @returns 
 */
export function getTable({ headers = [], rows = [], className = "" }) {

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



/**
 * 
 * @param {object} config  - table config object
 * @param { array } headers - table headers as array
 * @returns 
 */
export function Table(content, record_id, propertyID, layoutClasses, className = "") {

  if (Array.isArray(content)) {
    content = content.join(" ");
  }



  return `
  
    <div class="relative overflow-auto w-full rounded-md border border-border ${className || ""}">
      
      <table data-id="${record_id || ""}" data-property-id="${propertyID || ""}" class="w-full caption-bottom text-sm">

        ${content}

      </table>

    </div>
  
  
  `;
}




// relative overflow-auto w-full

export function TableHeader( content, className ) {
  if (!content) {
    return "";
  }

  if (Array.isArray(content)) {
    content = content.join(" ");
  }



  return `
  <thead>
    <tr class="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          ${content}
        </tr>
  </thead>
  `;
}

export function TableColumnHeader( content, className ) {

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

export function TableColumnHeaderLeft(content, className){

   // text-right
  return TableCell(content, className)

}
export function TableColumnHeaderRight(content, className){

   // text-right
  className = className + ' text-right '
  return TableCell(content, className)

}

export function TableColumnHeaderCenter(content, className){

   // text-right
  className = className + ' text-center '
  return TableCell(content, className)

}

export function TableBody( content, record_id, propertyID, className ) {
  if (!content) {
    return "";
  }
  if (Array.isArray(content)) {
    content = content.join(" ");
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
  <tbody class="[&_tr:last-child]:border-0">${content}</tbody>
  
  `;
}

export function TableRow(content, record_id, propertyID, className ) {
  
  if (!content) {
    return "";
  }
  
  if (Array.isArray(content)) {
    content = content.join(" ");
  }

  if (content.trim().length == 0) {
    return "";
  }

  return `
  
    <tr 
      data-id="${record_id || ""}" 
      data-property-id="${propertyID || ""}" 
      class="${className || ""} border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
    >${content}</tr>
  `;
}

export function TableCell(content, record_id, propertyID, className ) {


  // Produce cell even if empty value
  if (!content) {
    content = ""
  }
  if (Array.isArray(content)) {
    content = content.join(" ");
  }
 

  return `
    <td 
      data-id="${record_id || ""}" 
      data-property-id="${propertyID || ""}" 
      class="p-4 align-middle ${className || ""}"
    >${content}</td>
  `;
}


export function TableCellLeft(content, record_id, propertyID, className){

  return TableCell(content, record_id, propertyID, className)

}


export function TableCellRight(content, record_id, propertyID, className){

  // text-right
  className = className + ' text-right '
  return TableCell(content, record_id, propertyID, className)

}

export function TableCellCenter(content, record_id, propertyID, className){

   // text-right
  className = className + ' text-center '
  return TableCell(content, record_id, propertyID, className)
}




export function TableCellNumber(value, nbOfDecimals, content, record_id, propertyID, className ) {
  
  value = h.toNumber(value)
  value = dataHelpers.number.format(value, nbOfDecimals)

  return TableCellRight(`
      
    ${value || ""}
    ${content || ""}
  `,
  // "krnumber h-min text-right font-mono"
    "krnumber h-min font-mono"

  )

}


export function TableCellLink(url, title, content, record_id, propertyID, className ) {


  return TableCell(`
      
    <a data-id="${record_id || ""}" data-property-id="${propertyID || ""}"  title="${title || ""}" href="${url || ""}" target="_blank" rel="noopener noreferrer">${title || url || ""}</a>
    ${content || ""}
  `,
  "krurl max-w-2xs truncate"
  )
}


export function TableCellText(text, record_id, propertyID, className ) {


  let c = `
    <div 
      data-id="${record_id || ""}" 
      data-property-id="${propertyID || ""}"  
      title="${text}" 
      class=" line-clamp-4"
    >${text ?? ''}</div>
  `

  return TableCell(c)

}


export function TableFooter( content, record_id, propertyID, className ) {

  if (!content) {
    return ""
  }

  return `
    
      <tfoot>
      
        ${content}

      </tfoot>
    
    `


}




