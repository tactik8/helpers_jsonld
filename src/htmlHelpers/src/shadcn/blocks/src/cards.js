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
export function Cards({
  url,
  records,
  offset,
  limit,
  orderBy,
  orderDirection,
  nbOfColumns,
  includePagination,
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

  // Get cards html
  let tableContent = "";
  for (let i of h.getValues(itemList, "itemListElement")) {
    let item = h.getValue(i, "item");

    tableContent += getCard({ url, item });
  }

  tableContent = components.CardGrid({ content: tableContent, nbOfColumns });

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

        <div class="${layoutClasses} ${className}" ${attrs}>
        <div class="flex-1">
            ${tableContent}
        </div>
        <div class="pt-2 border-t border-border/40 sm:border-t-0">
            ${paginationContent}
        </div>
        </div>

    `;

  return html;
}

function getCard({ url, item, options }) {
  // Get image content
  let imageUrl = h.getImageUrl(item);
  let imageName = h.getImageName(item);
  let imageContent = imageUrl
    ? components.ImageModal({ src: imageUrl, alt: imageName })
    : "";

  // Set options
  let cardOptions = {
    title: h.getValue(item, "name"),
    url: h.getValue(item, "url"),
    description: h.getValue(item, "description"),
    footer: htmlValue.get(h.record_type(item), "url", url),
    image: h.getImageUrl(item),
    imageAlt: h.getImageName(item),
  };

  let content = components.Card(cardOptions);

  return content;
}
