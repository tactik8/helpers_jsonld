import { components as c } from "../components.js";

/**
 * Card Component
 * @param {Object} props
 * @param {string} [props.title] - Main card heading
 * @param {string} [props.description] - Subheading text
 * @param {string} [props.image] - URL of the image
 * @param {string} [props.imageAlt] - Alt text for the image
 * @param {('top'|'bottom'|'content')} [props.imagePosition='top'] - Position of the image relative to card sections
 * @param {string} [props.imageClassName=''] - Additional classes for the image element
 * @param {string} props.content - Body HTML content
 * @param {string} [props.footer] - Optional footer HTML
 * @param {string} [props.className=''] - Additional CSS classes for the card wrapper
 * @param {string} [props.attrs=''] - Additional HTML attributes for the card wrapper
 */
export function Card({
  title = "",
  description = "",
  url,
  media = "",
  header = "",
  content = "",
  footer = "",
  className = "",
  attrs = "",
  options = {},
}) {
  return `
  
    <div class="card flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 ${className}" ${attrs}>

      ${CardHeader(header)}

      ${CardMedia(media)}

      ${CardMain(`

        ${CardBody(`

            ${CardTitle(title, url)}
            
            ${CardDescription(description)}

        `)}

      `)}

      ${CardFooter(footer)}

    </div>
  `;

}

function CardHeader(content) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <header class="card-header  ${content?.record?.className || content?.className || ""} ">${content?.htmlValue || content?.value || content || ""}</header>

  `;
}

function CardMain(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <section class="card-main  ${content?.record?.className || content?.className || ""} ">${content?.htmlValue || content?.value || content || ""}</section>

  `;
}

function CardBody(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
      <div class="card-body flex-1 space-y-4  mb-6 ${content?.record?.className || content?.className || ""} ">${content?.htmlValue || content?.value || content || ""}</div>

  `;
}

function CardFooter(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <footer class="card-footer mt-auto align-bottom ${content?.record?.className || content?.className || ""} ">${content?.htmlValue || content?.value || content || ""}</footer>
  `;
}

function CardTitle(content, url, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
  <h3 class="card-title font-semibold text-l leading-none tracking line-clamp-2 break-all  ${content?.record?.className || content?.className || ""} ">
    <a href="${url || ""}">
     ${content?.htmlValue || content?.value || content || ""}
    </a>
    </h3>
     `;
}

function CardDescription(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <p class="card-description text-sm text-muted-foreground line-clamp-4 break-all  ${content?.record?.className || content?.className || ""}">${content?.htmlValue || content?.value || content || ""}</p>
  `;
}

function CardContent(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }

  return `
    <div class="card-content  ${content?.record?.className || content?.className || ""} ">${content?.htmlValue || content?.value || content || ""}</div>
  `;
}


function CardMedia(content, className) {
  if (!content) {
    return "";
  }
  if (content.trim().length == 0) {
    return "";
  }


  return `
    <div class="card-media overflow-hidden -mx-6 -mt-6 mb-6 rounded-t-xl ${content?.record?.className || content?.className || ""} ">
        ${content?.htmlValue || content?.value || content || ""}
    </div>
  `

}
