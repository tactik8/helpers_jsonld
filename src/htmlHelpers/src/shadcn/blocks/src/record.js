import { jsonldBase as h } from "../../../../../jsonldBase/jsonldBase.js";

import * as htmlValue from "../../../formating/htmlValue.js";

import * as dataConversion from "../../dataConversion/dataConversion.js";
import { components } from "../../components/components.js";
import { things } from "../../../../../things/things.js";
import { Media } from "./media.js";

import * as hpv from "../../../formating/htmlPropertyValue.js";
import { setValues } from "../../../../../jsonldBase/src/propertyHelpers.js";

export function Record({
  record,
  properties,
  className = "",
  attrs = "",
  expandAll = false,
  depth = 0,
  options,
} = {}) {
  // Get properties
  properties = properties || Object.keys(record);

  // Make data
  let result = {
    rows: [],
  };





  let recordContent = formatRecordForObject({
    record,
    properties,
    className,
    attrs,
    expandAll,
    depth: 0,
    options,
  });


  // Assemble
  let html = `

        <div class="space-y-4 ${className || ""}" ${attrs || ""}>
            <div class="flex-1">
                ${Media({record, options}) || ""}
            </div>
            
            <div class="flex-1">
                ${recordContent || ""}
            </div>
            
             <div class="flex-1">
              <details>
                <summary>JSON Editor</summary>
                ${components.JsonEditor({
                  initialData: record,
                  endpoint: options.baseUrl,
                })}
              </details>
            </div>
        </div>

    `;

    return html


}

function formatRecordForObject({
  record,
  properties,
  className = "",
  attrs = "",
  expandAll = false,
  depth = 0,
  options,
}) {
  // Get properties
  properties = properties || Object.keys(record);

  // Make data
  let result = {
    rows: [],
  };

  for (let k of Object.keys(record)) {
    // Format value
    let v = h.getValues(record, k);
    v = h.isArray(v) && v.length == 1 ? v[0] : v;

    //
    let row = [];
    result.rows.push(row);

    // Add key
    row.push(k + ":");

    // add value

    row.push(
      formatRecordForGeneric({
        record,
        propertyID: k,
        className,
        attrs,
        expandAll,
        depth: depth + 1,
        options,
      }),
    );
  }

  // Generate html
  let html = components.Table(result);

  return html;
}

function formatRecordForArray({
  record,
  propertyID,
  className = "",
  attrs = "",
  expandAll = false,
  depth = 0,
  options,
}) {
  let values = h.getValues(record, propertyID);

 

  let content = [];

  for (let v of values) {
    let r = h.clone(record);
    r = h.setValue(r, propertyID, v);
    content.push(
      formatRecordForGeneric({
        record: r,
        propertyID,
        className,
        attrs,
        expandAll,
        depth: depth + 1,
        options,
      }),
    );
  }

  return `
        <ul>
          ${content.map( x => `
            <li>
              ${x}
            </li>
            `
          ).join('')}

        </ul>
     
  
  `;
}

function formatRecordForGeneric({
  record,
  propertyID,
  className = "",
  attrs = "",
  expandAll = false,
  depth = 0,
  options,
}) {
  let v = h.getValues(record, propertyID);

  let hpvRecord = hpv.getHtmlPropertyValue(
    record,
    propertyID,
    options?.baseUrl,
  );

  if (h.isArray(v) && v.length == 1) {
    v = v[0];
  }

  if (h.isArray(v) && v.length > 0) {
    hpvRecord.htmlValue = `
        <details> <summary>${hpvRecord.htmlValue}</summary>
      
          ${formatRecordForArray({ record: record, propertyID, className, attrs, expandAll, depth, options })}
        </details>
      `;
  }

  if (v?.["@id"]) {
    hpvRecord.htmlValue = `
        <details> <summary>${hpvRecord.htmlValue}</summary>
      
          ${formatRecordForObject({ record: v, propertyID: undefined, className, attrs, expandAll, depth, options })}
        </details>
      `;
  }


  if(v === undefined){
    hpvRecord.htmlValue = ""
  }

  return hpvRecord.htmlValue
}













export function RecordOLD({
  record,
  className = "",
  attrs = "",
  expandAll = false,
  depth = 0,
  options,
} = {}) {
  record = record?.record || record;

  // Add potential actions
  record = dataConversion.addPotentialActions({ record, options });

  // simplify
  record = h.simplify(record);

  // Assemble
  let html = `

        <div class="grid grid-cols-1 gap-6">
            
          <div class="flex justify-center">
                ${Media({ record, options })}
          </div>

          <div class="flex justify-end">
                ${components.DropdownMenu({ items: h.getValues(record, "potentialAction") })}
          </div>

          <div>
                ${RecordTable({
                  data: record,
                  className,
                  attrs,
                  expandAll,
                  depth,
                  options,
                })}
          </div>

          <div class="">
            <details>
              <summary>JSON Editor</summary>
              ${components.JsonEditor({
                initialData: record,
                endpoint: options.baseUrl,
              })}
            </details>
          </div>

        </div>

    `;

  return html;
}

/**
 * Helper to sanitize HTML text content to prevent XSS.
 * @param {any} str
 * @returns {string}
 */
const escapeHtml = (str) => {
  return str;
  if (typeof str !== "string") return String(str);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Badge Component
 * @param {Object} props
 * @param {string} props.children - Inner HTML/Text of the badge
 * @param {'default'|'secondary'|'outline'|'destructive'} [props.variant='default'] - Badge variant pattern
 * @param {string} [props.className=''] - Additional utility classes
 * @param {string} [props.attrs=''] - HTML attributes
 * @returns {string}
 */
export const Badge = ({
  children = "",
  variant = "default",
  className = "",
  attrs = "",
} = {}) => {
  const variants = {
    default:
      "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border-border",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
  };

  const selectedVariant = variants[variant] || variants.default;

  return `
    <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${selectedVariant} ${className}" ${attrs}>
      ${children}
    </span>
  `.trim();
};

/**
 * RecordDetails Component
 * Custom <details> and <summary> disclosure wrapper styled like a shadcn collapsible card.
 * @param {Object} props
 * @param {string} props.title - Disclosure title text
 * @param {string|number} [props.count=''] - Item count or metadata label
 * @param {string} props.children - Inner HTML content
 * @param {boolean} [props.open=false] - Whether disclosure is open by default
 * @param {string} [props.className=''] - Custom utility classes
 * @param {string} [props.attrs=''] - HTML attributes
 * @returns {string}
 */
export const RecordDetails = ({
  title = "",
  count = "",
  children = "",
  open = false,
  className = "",
  attrs = "",
} = {}) => {
  const badgeHtml =
    count !== ""
      ? Badge({
          children: String(count),
          variant: "secondary",
          className: "ml-2 text-[10px] px-1.5 py-0",
        })
      : "";
  const openAttr = open ? "open" : "";

  return `
    <details class="group rounded-md border border-border bg-card text-card-foreground shadow-sm transition-all ${className}" ${openAttr} ${attrs}>
      <summary class="flex cursor-pointer items-center justify-between rounded-md p-2.5 text-sm font-medium transition-colors hover:bg-muted/50 select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <div class="flex items-center gap-1.5 font-mono text-xs text-foreground font-semibold">
          <svg class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span>${escapeHtml(title)}</span>
        </div>
        ${badgeHtml}
      </summary>
      <div class="border-t border-border p-3 text-sm bg-muted/20 overflow-x-auto">
        ${children}
      </div>
    </details>
  `.trim();
};

/**
 * Table Component
 * Generic table wrapper styled with shadcn CSS variables and borders.
 * @param {Object} props
 * @param {string[]} [props.headers=[]] - Array of header string titles
 * @param {string[][]} [props.rows=[]] - Array of row cell HTML strings
 * @param {string} [props.className=''] - Custom utility classes
 * @param {string} [props.attrs=''] - HTML attributes
 * @returns {string}
 */
export const Table = ({
  headers = [],
  rows = [],
  className = "",
  attrs = "",
} = {}) => {
  let headerHtml =
    headers.length > 0
      ? `<thead class="border-b border-border bg-muted/50">
        <tr>
          ${headers.map((h) => `<th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground text-xs uppercase tracking-wider">${escapeHtml(h)}</th>`).join("")}
        </tr>
      </thead>`
      : "";
  headerHtml = "";

  const bodyHtml =
    rows.length > 0
      ? rows
          .map(
            (row) => `
        <tr class="transition-colors hover:bg-muted/30">
          ${row.map((cell) => `<td class="p-3 align-top text-xs">${cell}</td>`).join("")}
        </tr>
      `,
          )
          .join("")
      : "";

  return `
    <div class="relative w-full overflow-auto rounded-lg border border-border bg-card text-card-foreground shadow-sm ${className}" ${attrs}>
      <table class="w-full caption-bottom text-sm border-collapse">
        ${headerHtml}
        <tbody class="[&_tr:last-child]:border-0 divide-y divide-border">
          ${bodyHtml}
        </tbody>
      </table>
    </div>
  `.trim();
};

/**
 * Value renderer that formats primitive values or recursively renders objects and arrays.
 * @param {any} value
 * @param {number} depth
 * @param {boolean} expandAll
 * @returns {string}
 */
const renderRecordValue = (
  data,
  key,
  value,
  depth = 0,
  expandAll = false,
  options,
) => {
  if (value === null) {
    return `<span class="italic text-muted-foreground/60 text-xs font-mono">null</span>`;
  }

  if (value === undefined) {
    return `<span class="italic text-muted-foreground/60 text-xs font-mono">undefined</span>`;
  }

  if (key == "@id") {
    // return htmlValue.get(undefined, '@id', value, options)
  }

  if (typeof value === "boolean") {
    return Badge({
      children: String(value),
      variant: value ? "default" : "secondary",
      className: value
        ? "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-700"
        : "",
    });
  }

  if (typeof value === "number") {
    // return `<span class="font-mono text-xs font-medium text-blue-600 dark:text-blue-400">${value}</span>`;
  }

  if (typeof value === "string") {
    //  return `<span class="text-xs text-foreground break-all">${escapeHtml(value)}</span>`;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return `<span class="italic text-muted-foreground/60 text-xs font-mono">[] (empty array)</span>`;
    }

    const arrayContent = RecordTable({
      data: value,
      depth: depth + 1,
      expandAll,
      className: "border-0 shadow-none bg-transparent",
    });

    return RecordDetails({
      title: `Array [${value.length}]`,
      count: `${value.length} items`,
      children: arrayContent,
      open: expandAll || depth === 0,
    });
  }

  if (typeof value === "object" && h.record_id(value)) {
    const keys = Object.keys(value);
    if (keys.length === 0) {
      return `<span class="italic text-muted-foreground/60 text-xs font-mono">{} (empty object)</span>`;
    }

    const objectContent = RecordTable({
      data: value,
      depth: depth + 1,
      expandAll,
      className: "border-0 shadow-none bg-transparent",
      options,
    });

    return RecordDetails({
      title: `${htmlValue.get(h.record_type(value), key, value, options)}`,
      count: "", //`${keys.length} keys`,
      children: objectContent,
      open: expandAll || depth === 0,
    });
  }

  return `<span class="text-xs text-foreground">${htmlValue.get(data, key, value, options)}</span>`;
};

/**
 * RecordTable Component
 * Generates an accessible key-value table string for flat or complex nested objects and arrays.
 * @param {Object} props
 * @param {Object|Array} props.data - Record object or array to render
 * @param {string} [props.className=''] - Custom utility classes
 * @param {string} [props.attrs=''] - HTML attributes
 * @param {boolean} [props.expandAll=false] - Force expand all nested <details> disclosures
 * @param {number} [props.depth=0] - Recursion nesting depth
 * @returns {string}
 */
export const RecordTable = ({
  data,
  className = "",
  attrs = "",
  expandAll = false,
  depth = 0,
  options,
} = {}) => {
  if (
    data === null ||
    data === undefined ||
    (typeof data !== "object" && !Array.isArray(data))
  ) {
    return `<div class="p-4 text-xs text-muted-foreground border border-border rounded-md bg-muted/20">No valid record data provided.</div>`.trim();
  }

  const entries = Array.isArray(data)
    ? data.map((item, index) => [index, item])
    : Object.entries(data);

  if (entries.length === 0) {
    return `<div class="p-3 text-xs italic text-muted-foreground border border-border rounded-md bg-muted/20">Record is empty.</div>`.trim();
  }

  const headers = depth === 0 ? ["Key", "Value"] : [];

  const rows = entries.map(([key, value]) => {
    const formattedKey = `<span class="font-mono text-xs font-medium text-foreground select-all">${escapeHtml(String(key))}</span>`;
    const formattedValue = renderRecordValue(
      data,
      key,
      value,
      depth,
      expandAll,
      options,
    );
    return [formattedKey, formattedValue];
  });

  return Table({ headers, rows, className, attrs });
};
