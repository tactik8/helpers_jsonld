import { components as c } from "../components.js";

/**
 * Card Component

 */
export function Card(content, className) {
  return `


    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${className}">

      ${content || ''}

    </div>
  `;

}

export function CardHeader(content, className) {
  if (!content) {
    return "";
  }

  className = className || ''

  if (content.trim().length == 0) {
    return "";
  }

  return `
    <header class="card-header  ${className || ""} ">${content || ""}</header>

  `;
}

export function CardMain(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <section class="card-main  ${className || ""} ">${ content || ""}</section>

  `;
}

export function CardBody(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
      <div class="card-body flex-1 space-y-4  mb-6 ${className || ""} ">${content || ""}</div>

  `;
}

export function CardFooter(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <footer class="card-footer mt-auto align-bottom ${className || ""} ">${ content || ""}</footer>
  `;
}

export function CardTitle(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${className || ""} ">
    ${content || ""}  
    </h3>
     `;
}

export function CardDescription(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${className || ""}">${content || ""}</p>
  `;
}

export function CardContent(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <div class="card-content  ${className || ""} ">${content || ""}</div>
  `;
}


export function CardMedia(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }


  return `
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${className || ""} ">
        ${ content || ""}
    </div>
  `

}
