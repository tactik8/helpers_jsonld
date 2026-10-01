import { jsonldBase as h } from "../../../../../jsonldBase/jsonldBase.js";

import * as dataConversion from "../../dataConversion/dataConversion.js";
import { components } from "../../components/components.js";
import { things } from "../../../../../things/things.js";

import * as htmlValue from "../../../formating/htmlValue.js";

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
  options = options || {}
  options.charLength = options?.charLength || 50
  options.decimalsLength = options?.decimalsLength || 0



  // Generate records
  let itemList = new things.ItemList(records);
  itemList = itemList.record;
  itemList.numberOfItems =
    itemList?.numberOfItems ?? itemList.itemListElement.length;

  // Add potential actions
  itemList = dataConversion.addPotentialActions({ record: itemList, options });

  // Filter elements within limit and offset
  itemList.itemListElement = itemList.itemListElement.filter(
    (x) =>
      h.getValue(x, "position") >= offset &&
      h.getValue(x, "position") < offset + limit,
  );

  // Convert data to table format
  let data = dataConversion.recordsToTable(
    itemList,
    properties,
    headers,
    options,
  );

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

        <div class="${layoutClasses || ''} ${className || ''}" ${attrs || ''}>
        <div class="flex-1">
            ${tableContent || ''}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${paginationContent || ''}
        </div>
        </div>

    `;

  return html;
}

//flex-1