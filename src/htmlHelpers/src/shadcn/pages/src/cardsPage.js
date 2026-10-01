import { jsonldBase as h } from "../../../../../jsonldBase/jsonldBase.js";

import * as dataConversion from "../../dataConversion/dataConversion.js";

import { components } from "../../components/components.js";
import { blocks } from "../../blocks/blocks.js";
import { things } from "../../../../../things/things.js";
import { blankPage } from "./blankPage.js";

import * as htmlValue from "../../../formating/htmlValue.js";

import { formatHelpers } from "../../../../../formatHelpers/formatHelpers.js";
/**
 *
 * @param {*} param0
 */
export function cardsPage({
  website,
  webpage,
  title,
  url,
  headContent,
  content,
  records,
  properties,
  headers,
  offset,
  limit,
  options,
}) {
  content = content ?? "";
  content += blocks.Cards({ url, records, offset, limit, options });

  let html = blankPage({
    website,
    webpage,
    title,
    headContent,
    content,
    options,
  });

  return html;
}
