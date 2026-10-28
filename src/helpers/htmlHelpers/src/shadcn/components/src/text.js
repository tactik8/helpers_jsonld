


export function H1(title, { options, record_id, propertyID, className }) {
  return Heading({ title, level: "1", options, record_id, propertyID, className });
}

export function H2(title, { options, record_id, propertyID, className }) {
  return Heading({ title, level: "2", options, record_id, propertyID, className });
}

export function H3(title, { options, record_id, propertyID, className }) {
  return Heading({ title, level: "3", options, record_id, propertyID, className });
}

export function H4(title, { options, record_id, propertyID, className }) {
  return Heading({ title, level: "4", options, record_id, propertyID, className });
}

export function H5(title, { options, record_id, propertyID, className }) {
  return Heading({ title, level: "5", options, record_id, propertyID, className });
}

export function H6(title, { options, record_id, propertyID, className }) {
  return Heading({ title, level: "6", options, record_id, propertyID, className });
}

export function Heading({ title, level, options, record_id, propertyID, className }) {
  level = String(level || 1);

  return `
    <h${level} 
    data-id="${record_id || ""}" data-property-id="${propertyID}" 
    class="break-all ${record_id, propertyID, className || ""}"
    >${title}</h${level}>
    
    `;
}


export function P(text, nbOfLines, { options, record_id, propertyID, className}){

    return `
      <p data-id="${record_id || ""}" data-property-id="${propertyID}" class="${ nbOfLines !== undefined ? `line-clamp-${nbOfLines ?? 1}` : ""} ${record_id, propertyID, className ?? ""} "
      >${text || ""}</p>
    
    `
}



export function Text(text, nbOfLines, { options, record_id, propertyID, className}){

    return `
      <p data-id="${record_id || ""}" data-property-id="${propertyID}" class="${ nbOfLines !== undefined ? `line-clamp-${nbOfLines ?? 1}` : ""} ${record_id, propertyID, className ?? ""} "
      >${text || ""}</p>
    
    `
}

