import { jsonldBase as h } from "../../../../../jsonldBase/jsonldBase.js";

import * as dataConversion from "../../dataConversion/dataConversion.js";
import { components } from "../../components/components.js";
import { things } from "../../../../../things/things.js";

import * as htmlValue from "../../../formating/htmlValue.js";

import { Media } from "./media.js";
import * as hpv from "../../../formating/htmlPropertyValue.js";

import { formatHelpers } from "../../../../../formatHelpers/formatHelpers.js";
/**
 *
 * @param {*} param0
 */
export function Table({
  url,
  records,
  properties,
  headers,
  offset,
  limit,
  options,
  layoutClasses,
  className,
  attrs,
}) {
  // init limit and offset
  offset = Number(offset);
  offset = isNaN(offset) ? 0 : offset;
  limit = Number(limit);
  limit = isNaN(limit) ? 20 : limit;

  // Set options default
  options = options || {};
  options.charLength = options?.charLength || 50;
  options.decimalsLength = options?.decimalsLength || 0;

  // Generate records
  let itemList = new things.ItemList(records);
  itemList = itemList.record;
  itemList.numberOfItems =
    itemList?.numberOfItems ?? itemList.itemListElement.length;

  // Add potential actions
  itemList = dataConversion.addPotentialActions({ record: itemList, options });

  // Filter elements within limit and offset
  itemList.itemListElement = (itemList?.itemListElement || []).filter(
    (x) =>
      h.getValue(x, "position") >= offset &&
      h.getValue(x, "position") < offset + limit,
  );

  // Convert data to table format
  // let data = dataConversion.recordsToTable(
  //   itemList,
  //  properties,
  //  headers,
  //  options,
  // );

  let data = recordsToTable(itemList, properties, headers, options);

  // Get table html
  let tableContent = components.Table(data);

  // Get pagination content
  let paginationContent = components.Pagination({
    url,
    limit,
    offset,
    total: itemList.numberOfItems,
    options,
  });

  // Assemble
  let html = `

        <div class="${layoutClasses || ""} ${className || ""}" ${attrs || ""}>
        <div class="flex-1">
            ${tableContent || ""}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${paginationContent || ""}
        </div>
        </div>

    `;

  return html;
}

//flex-1

function recordsToTable(itemList, properties, headers, options) {
  // init c

  let result = {
    properties: undefined,
    headers: undefined,
    rows: [],
  };

  // Get properties if missing
  result.properties = properties || getPropertiesFromRecords(itemList);

  // Get headers if missing
  result.headers = headers || getHeadersFromProperties(result.properties);


  // Add position
  if (options.showPosition !== false) {
    result.headers.splice(0, 0, "#");
  }
  // Add media
  if (options.showPosition !== false) {
    result.headers.splice(1, 0, "Media");
  }

  // Get table data
  let listItems = h.getValues(itemList, "itemListElement");

  for (let listItem of listItems) {
    let item = h.getValue(listItem, "item");

    let row = [];
    result.rows.push(row);

    // Add position
    if (options.showPosition !== false) {
      row.push(
        hpv.getHtmlPropertyValue(listItem, "position", options.baseUrl) ?? "",
      );
    }
    // Add media
    if (options.showMedia !== false) {
      row.push({htmlValue: `<div class="min-w-[320px]">${ Media({ record: item})} </div>` });
    }

    for (let k of result.properties) {
      row.push(hpv.getHtmlPropertyValue(listItem, k, options.baseUrl) ?? "");
    }
  }

  //result.rows = listItems.map((listItem) => result.properties.map((k) => hpv.getHtmlPropertyValue(listItem, k, options.baseUrl)))

  return result;
}

function getPropertiesFromRecords(itemList) {
  let listItems = h.getValues(itemList, "itemListElement");
  let items = listItems.map((x) => h.getValue(x, "item"));

  let properties = [...new Set(items.flatMap(Object.keys))];
  properties = properties.filter((x) => x.startsWith("@") === false);
  properties = properties.map((x) => "item." + x);
  properties = ["item.@type", "item.@id"].concat(properties);

  return properties;
}

function getHeadersFromProperties(properties) {
  // Define titles from records if not provided
  let headers = properties.map((x) => x.split(".")?.[1] || x);

  headers = headers.map((x) => (x == "position" ? "No" : x));

  headers = headers.map((x) => (  {"htmlValue": x, "table": { "className": "capitalize" } }  ))

  return headers;
}
