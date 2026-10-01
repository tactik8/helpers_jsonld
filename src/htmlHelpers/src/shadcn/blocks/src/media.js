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
export function Media({
  url,
  record,
  options,
  layoutClasses,
  className,
  attrs,
}) {
  if (h.record_type(record) == "VideoObject") {
    return `  
        
            <div class="">
                <video width="320" height="240" controls>
                    <source src="${h.getValue(record, "contentUrl")}" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>

            </div>
        `;
  }

  return `
        
        
            <div class="">
                ${components.ImageModal({ src: h.getImageUrl(record), alt: h.getImageName(record) })}
            </div>
        
        `;
}
