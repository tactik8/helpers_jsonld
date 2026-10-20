


export function H1(title, { options, className }) {
  return Heading({ title, level: "1", options, className });
}

export function H2(title, { options, className }) {
  return Heading({ title, level: "2", options, className });
}

export function H3(title, { options, className }) {
  return Heading({ title, level: "3", options, className });
}

export function H4(title, { options, className }) {
  return Heading({ title, level: "4", options, className });
}

export function H5(title, { options, className }) {
  return Heading({ title, level: "5", options, className });
}

export function H6(title, { options, className }) {
  return Heading({ title, level: "6", options, className });
}

export function Heading({ title, level, options, className }) {
  level = String(level || 1);

  return `
    <h${level} class="
      break-all 
      ${className || ""}
      "
    >${title}</h${level}>
    
    `;
}


export function P(text, nbOfLines, { options, className}){

    return `
      <p class="${ nbOfLines !== undefined ? `line-clamp-${nbOfLines ?? 1}` : ""} ${className ?? ""} "
      >${text || ""}</p>
    
    `
}



export function Text(text, nbOfLines, { options, className}){

    return `
      <p class="${ nbOfLines !== undefined ? `line-clamp-${nbOfLines ?? 1}` : ""} ${className ?? ""} "
      >${text || ""}</p>
    
    `
}

