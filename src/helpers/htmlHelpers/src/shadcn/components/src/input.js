/**
 * Input Field Component
 * @param {Object} props
 * @param {string} [props.label] - Field label above input
 * @param {string} [props.type='text'] - HTML input type
 * @param {string} [props.placeholder='']
 * @param {string} [props.id='']
 * @param {string} [props.className='']
 * @param {string} [props.attrs='']
 */
export function Input({ label = '', type = 'text', placeholder = '', value='', id = '', className = '', attrs = '' }) {
  const idAttr = id ? `id="${id}"` : '';
  return `
      <div class="space-y-2 w-full">
        ${label ? `<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" ${id ? `for="${id}"` : ''}>${label}</label>` : ''}
        <input 
          type="${type || 'text'}" 
          id=${id || ''} 
          placeholder="${placeholder || ''}" 
          value=${value || ''} 
          class="
            flex h-9 w-full rounded-md border border-input bg-transparent 
            px-3 py-1 text-sm shadow-sm transition-colors 
            file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 
            ${className || ''}"
          ${attrs || ''}
        />
      </div>
    `.trim();
}




export function InputCheckbox({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'checkbox', label, value, propertyID, id, className}) 

}

export function InputDate({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'date', label, value, propertyID, id, className}) 

}




export function InputNumber({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'number', label, value, propertyID, id, className}) 

}



export function InputDateTime({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'datetime-local', label, value, propertyID, id, className}) 

}


export function InputEmail({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'email', label, value, propertyID, id, className}) 

}


export function InputPassword({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'password', label, value, propertyID, id, className}) 

}

export function InputTel({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'tel', label, value, propertyID, id, className}) 

}

export function InputText({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'text', label, value, propertyID, id, className}) 

}

export function InputTime({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'time', label, value, propertyID, id, className}) 

}

export function InputUrl({label = '', value='', propertyID='', id='', className = '' }){

  return Input({type: 'url', label, value, propertyID, id, className}) 

}