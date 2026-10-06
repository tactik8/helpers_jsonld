import * as hpv from "../../../formating/htmlPropertyValue.js";

export function Value({ value, propertyID }) {
  let record = {};
  record[proeprtyID] = value;

  let hpvRecord = hpv.getHtmlPropertyValue({
    record,
    propertyID,
  });


  return hpv.htmlValue


}
