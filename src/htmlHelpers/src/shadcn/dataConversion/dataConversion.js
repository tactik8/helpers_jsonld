import { jsonldBase as h } from "../../../../jsonldBase/jsonldBase.js";
import { things } from "../../../../things/things.js";

import * as htmlValue from "../../formating/htmlValue.js";
import { DropdownMenu } from "../components/src/dropdownMenu.js";

import { dataHelpers } from "../../../../dataHelpers/dataHelpers.js";

import { components } from "../components/components.js";
import { blocks} from '../blocks/blocks.js'

/**
 * Return a key: value table for a record
 * @param {*} param0
 */
export function recordToTable({ record, properties, headers, options }) {
  // Define properties from records if not provided
  if (!result.properties) {
    result.properties = [...new Set(items.flatMap(Object.keys))];
    result.properties = result.properties.filter(
      (x) => x.startsWith("@") === false,
    );
    result.properties = ["@type", "@id"].concat(result.properties);
  }

  // Define titles from records if not provided
  if (!result.headers) {
    result.headers = result.properties.map((x) => x.split(".")?.[1] || x);
  }

  // Add actions
  if (options?.showPotentialAction !== false) {
    result.headers.push(
      DropdownMenu({ items: h.getValues(itemList, "potentialAction") }),
    );
  }
}

/**
 * Formats jsonld records to format accepted by html generators for tables
 * @param {*} record
 * @param {*} properties
 * @param {*} titles
 */
export function recordsToTable(record, properties, headers, options) {
  //

  let result = {
    properties,
    headers,
  };

  // Define itemList
  let itemList = new things.ItemList(record);
  itemList = itemList.record;
  let listItems = h
    .getValues(itemList, "itemListElement")
    .map((x) => x?.record || x);
  let items = listItems.map((x) => h.getValue(x, "item"));

  // Define properties from records if not provided
  if (!result.properties) {
    result.properties = [...new Set(items.flatMap(Object.keys))];
    result.properties = result.properties.filter(
      (x) => x.startsWith("@") === false,
    );
    result.properties = ["@type", "@id"].concat(result.properties);
  }

  // Define titles from records if not provided
  if (!result.headers) {
    result.headers = result.properties.map((x) => x.split(".")?.[1] || x);
  }

  // Add options to title
  if (options?.showSelector !== false) {
    result.headers.splice(0, 0, "s");
  }
  if (options?.showPosition !== false) {
    result.headers.splice(1, 0, "#");
  }

  if (options?.showImage !== false) {
    result.headers.splice(2, 0, "Thumbnail");
  }

  // Add actions
  if (options?.showPotentialAction !== false) {
    result.headers.push(
      DropdownMenu({ items: h.getValues(itemList, "potentialAction") }),
    );
  }

  // Define output data
  result.rows = [];
  for (let li of listItems) {
    let rowData = [];
    result.rows.push(rowData);
    let item = h.getValue(li, "item");
    let row_record_type = h.record_type(item);

    // Add selector
    if (options?.showSelector !== false) {
      rowData.push("x");
    }

    // Add position
    if (options?.showPosition !== false) {
      let position = h.getValue(li, "position");
      rowData.push(
        htmlValue.get(h.record_type(li), "position", position, options),
      );
    }

    // Add caption
    if (options?.showImage !== false) {
      rowData.push(
        blocks.Media({
          record: item
        }),
      );
    }

    // Add properties
    for (let p of result.properties) {
      let v = h.getValues(item, p);
      v = v.length == 0 ? "" : v;
      v = v.length == 1 ? v[0] : v;

      rowData.push(htmlValue.get(row_record_type, p, v, options));
    }

    // Add actions
    if (options.showPotentialAction !== false) {
      rowData.push(DropdownMenu({ items: h.getValues(li, "potentialAction") }));
    }
  }

  //
  return result;
}

export function addPotentialActions({ record, options }) {
  if (h.isArray(record)) {
    return record.map((x) => addPotentialActions({ record: x, options }));
  }

  let record_type = h.record_type(record);

  if (!record_type) {
    return record;
  }

  let url = dataHelpers.url.getUrl(options.baseUrl, "/execute");
  let object = h.ref(record);

  for (let k of Object.keys(record?.record || record)) {
    record = h.setValues(
      record,
      k,
      addPotentialActions({ record: h.getValues(record, k), options }),
    );
  }

  if (record_type == "ItemList") {
    record = h.addValue(record, "potentialAction", {
      "@type": "DeleteAction",
      name: "Delete",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "InsertAction",
      name: "Insert",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "MoveupAction",
      name: "Move up",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "MovedownAction",
      name: "Move down",
      object,
      url,
    });
  }

  if (record_type == "ListItem") {
    record = h.addValue(record, "potentialAction", {
      "@type": "AddAction",
      name: "Add",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "DeleteAction",
      name: "Delete",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "InsertAction",
      name: "Insert",
      object,
      url,
    });
  }

  //

  if (record_type == "Thing") {
    record = h.addValue(record, "potentialAction", {
      "@type": "AddAction",
      name: "Add",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "DeleteAction",
      name: "Delete",
      object,
      url,
    });
    record = h.addValue(record, "potentialAction", {
      "@type": "InsertAction",
      name: "Insert",
      object,
      url,
    });
  }

  return record;
}
